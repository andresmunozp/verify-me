export const About = () => {
	return (
		<section className="my-20 px-4 md:my-36">
			<h2 className="mb-12 text-center text-2xl font-bold md:text-4xl">Sobre nosotros</h2>
			<div className="mx-auto grid max-w-[1250px] gap-9 md:grid-cols-2">
				<img src="/assets/about-left.png" alt="" width={450} height={255} />
				<p className="md:text-lg">
					En verify.me entendemos lo importante que es mantener tus datos seguros. Por eso, hemos
					creado una plataforma donde puedes confiar plenamente en la protección de tu información
					personal. Con tecnología de vanguardia y protocolos de seguridad robustos, estamos
					comprometidos a garantizar que tus datos estén siempre seguros y a tu alcance.
				</p>
				<img
					className="md:col-start-2"
					src="/assets/about-right.png"
					alt=""
					width={450}
					height={301}
				/>
				<p className="md:row-start-2 md:text-lg">
					Nuestra misión es proporcionar la máxima seguridad en procesos de firma de contratos y
					registro de identidad. Sabemos lo importante que es asegurarse de que quien firma un
					documento es realmente la persona correcta. Por eso, hemos desarrollado un sistema
					avanzado que verifica tu identidad de forma rápida y segura.
				</p>
			</div>
		</section>
	)
}
