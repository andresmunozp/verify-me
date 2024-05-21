interface Props {
	label: string
}

export const FormLegend: React.FC<Props> = ({ label }) => {
	return (
		<div className="relative my-[.5lh] h-[1px] w-full bg-stroke">
			<legend className="absolute inset-x-0 top-[-0.5lh] mx-auto w-max bg-surface px-3 text-sm">
				{label}
			</legend>
		</div>
	)
}
