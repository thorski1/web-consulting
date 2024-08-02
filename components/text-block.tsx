interface Props {
    text: string[]
}

const TextBlock = ({ text }: Props) => {
  return (
		<section className="space-y-3 text-muted-foreground md:py-6 py-12 text-center">
			{text.map((t, i) => (
				<p
					key={i}
					className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed text-center pt-3"
				>
					{t}
				</p>
			))}
		</section>
	);
}

export default TextBlock