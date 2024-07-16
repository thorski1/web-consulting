"use client";

import {
	Canvas,
	useFrame,
	useLoader,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { useRef, useReducer, useMemo } from "react";
import {
	useGLTF,
	MeshTransmissionMaterial,
	Environment,
	Lightformer,
} from "@react-three/drei";
import {
	CuboidCollider,
	BallCollider,
	Physics,
	RigidBody,
} from "@react-three/rapier";
import {
	EffectComposer,
	N8AO,
} from "@react-three/postprocessing";
import { easing } from "maath";

const accents = [
	"#4060ff",
	"#20ffa0",
	"#ff4060",
	"#ffcc00",
];
const shuffle = (accent = 0) => [
	{ color: "#444", roughness: 0.1 },
	{ color: "#444", roughness: 0.75 },
	{ color: "#444", roughness: 0.75 },
	{ color: "white", roughness: 0.1 },
	{ color: "white", roughness: 0.75 },
	{ color: "white", roughness: 0.1 },
	{ color: accents[accent], roughness: 0.1, accent: true },
	{ color: accents[accent], roughness: 0.75, accent: true },
	{ color: accents[accent], roughness: 0.1, accent: true },
];

export const ModelViewer: React.FC = () => (
	<div className="w-[100%]">
	<Scene
		style={{
			borderRadius: 20,
		}}
	/></div>
);

// @ts-ignore
function Scene(props) {
	const [accent, click] = useReducer(
		(state) => ++state % accents.length,
		0
	);
	const connectors = useMemo(
		() => shuffle(accent),
		[accent]
	);
	return (
		<Canvas
			onClick={click}
			shadows
			dpr={[1, 1.5]}
			gl={{ antialias: false }}
			camera={{
				position: [0, 0, 15],
				fov: 17.5,
				near: 1,
				far: 20,
			}}
			{...props}
		>
			<color attach="background" args={["#141622"]} />
			<ambientLight intensity={0.4} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
				intensity={1}
				castShadow
			/>
			<Physics /*debug*/ gravity={[0, 0, 0]}>
				<Pointer />
				{
					// @ts-ignore
					connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
				}
				{/* @ts-ignore */}
				<Connector position={[10, 10, 5]}>
					<Model>
						<MeshTransmissionMaterial
							clearcoat={1}
							thickness={0.1}
							anisotropicBlur={0.1}
							chromaticAberration={0.1}
							samples={8}
							resolution={512}
						/>
					</Model>
				</Connector>
			</Physics>
			<EffectComposer
				// @ts-ignore
				disableNormalPass
				multisampling={8}
			>
				<N8AO
					distanceFalloff={1}
					aoRadius={1}
					intensity={4}
				/>
			</EffectComposer>
			<Environment resolution={256}>
				<group rotation={[-Math.PI / 3, 0, 1]}>
					<Lightformer
						form="circle"
						intensity={4}
						rotation-x={Math.PI / 2}
						position={[0, 5, -9]}
						scale={2}
					/>
					<Lightformer
						form="circle"
						intensity={2}
						rotation-y={Math.PI / 2}
						position={[-5, 1, -1]}
						scale={2}
					/>
					<Lightformer
						form="circle"
						intensity={2}
						rotation-y={Math.PI / 2}
						position={[-5, -1, -1]}
						scale={2}
					/>
					<Lightformer
						form="circle"
						intensity={2}
						rotation-y={-Math.PI / 2}
						position={[10, 1, 0]}
						scale={8}
					/>
				</group>
			</Environment>
		</Canvas>
	);
}

function Connector({
	// @ts-ignore
	position,
	// @ts-ignore
	children,
	vec = new THREE.Vector3(),
	// @ts-ignore
	scale,
	r = THREE.MathUtils.randFloatSpread,
	// @ts-ignore
	accent,
	...props
}) {
	const api = useRef();
	const pos = useMemo(
		() => position || [r(10), r(10), r(10)],
		[]
	);
	useFrame((state, delta) => {
		delta = Math.min(0.1, delta);
		// @ts-ignore
		api.current?.applyImpulse(
			vec
				// @ts-ignore
				.copy(api.current.translation())
				.negate()
				.multiplyScalar(0.2)
		);
	});
	return (
		<RigidBody
			linearDamping={4}
			angularDamping={1}
			friction={0.1}
			position={pos}
			// @ts-ignore
			ref={api}
			colliders={false}
		>
			<CuboidCollider args={[0.38, 1.27, 0.38]} />
			<CuboidCollider args={[1.27, 0.38, 0.38]} />
			<CuboidCollider args={[0.38, 0.38, 1.27]} />
			{/* @ts-ignore */}
			{children ? children : <Model {...props} />}
			{accent && (
				<pointLight
					intensity={4}
					distance={2.5}
					color={props.color}
				/>
			)}
		</RigidBody>
	);
}

function Pointer({ vec = new THREE.Vector3() }) {
	const ref = useRef();
	useFrame(({ mouse, viewport }) => {
		// @ts-ignore
		ref.current?.setNextKinematicTranslation(
			vec.set(
				(mouse.x * viewport.width) / 2,
				(mouse.y * viewport.height) / 2,
				0
			)
		);
	});
	return (
		<RigidBody
			position={[0, 0, 0]}
			type="kinematicPosition"
			colliders={false}
			// @ts-ignore
			ref={ref}
		>
			<BallCollider args={[1]} />
		</RigidBody>
	);
}

function Model({
	// @ts-ignore
	children,
	color = "white",
	roughness = 0,
	...props
}) {
	const ref = useRef();
	const { nodes, materials } = useGLTF(
		"/c-transformed.glb"
	);
	useFrame((state, delta) => {
		easing.dampC(
			// @ts-ignore
			ref.current.material.color,
			color,
			0.2,
			delta
		);
	});
	return (
		<mesh
			// @ts-ignore
			ref={ref}
			castShadow
			receiveShadow
			scale={10}
			// @ts-ignore
			geometry={nodes.connector.geometry}
		>
			<meshStandardMaterial
				metalness={0.2}
				roughness={roughness}
				// @ts-ignore
				map={materials.base.map}
			/>
			{children}
		</mesh>
	);
}

// export const EthereumModel: React.FC = () => {
// 	const myModel = useLoader(
// 		GLTFLoader,
// 		"/trex.glb"
// 	);
// 	const modelRef = useRef<Mesh>(null);

// 	useFrame((_state, delta) => {
// 		if (modelRef.current) {
// 			modelRef.current.rotation.y += delta / 2;
// 		}
// 	});

// 	return (
// 		<>
// 			<pointLight
// 				position={[-10, -10, -10]}
// 				color="#48cc90"
// 				intensity={5000}

// 			/>
// 			<pointLight
// 				position={[10, 10, 10]}
// 				color="#36e2e2"
// 				intensity={5000}
// 			/>
// 			<primitive object={myModel.scene} ref={modelRef} />
// 		</>
// 	);
// };
