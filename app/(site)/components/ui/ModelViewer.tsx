"use client";

import {
	Canvas,
	useFrame,
	useLoader,
} from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const ModelViewer: React.FC = () => {
	return (
		<Canvas style={{ height: "500px", width: "100%" }}>
			<EthereumModel />
		</Canvas>
	);
};

export const EthereumModel: React.FC = () => {
	const myModel = useLoader(
		GLTFLoader,
		"/trex.glb"
	);
	const modelRef = useRef<Mesh>(null);

	useFrame((_state, delta) => {
		if (modelRef.current) {
			modelRef.current.rotation.y += delta / 2;
		}
	});

	return (
		<>
			<pointLight
				position={[-10, -10, -10]}
				color="#48cc90"
				intensity={5000}
			/>
			<pointLight
				position={[10, 10, 10]}
				color="#36e2e2"
				intensity={5000}
			/>
			<primitive object={myModel.scene} ref={modelRef} />
		</>
	);
};
