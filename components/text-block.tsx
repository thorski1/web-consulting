interface Props {
    text: string[]
}

const TextBlock = ({ text }: Props) => {
  return (
		<section className="text-muted-foreground py-6 lg:py-12 text-center">
			{text.map((t, i) => (
				<p
					key={i}
					className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed text-center"
				>
					{t}
				</p>
			))}
		</section>
	);
}

export default TextBlock