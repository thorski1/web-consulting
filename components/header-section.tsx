interface Props {
    header: string;
    subheader?: string;
}
export const HeaderSection = ({ header, subheader }: Props) => {
    return (
			<div className="mb-2 md:mb-4 lg:mb-8">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
					{header}
				</h2>
				{subheader && subheader !== "" && (
					<p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed text-center pt-3">
						{subheader}
					</p>
				)}
			</div>
		);
}