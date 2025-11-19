export default function AvisoLegalPage() {
	return (
		<main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto font-light">
				<h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-[family-name:var(--font-prata)]">
					Aviso Legal y Privacidad
				</h1>

				<div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
					<p className="text-foreground/70">
						El acceso a este sitio web implica la aceptación de este Aviso Legal y Política de Privacidad.
					</p>

					<section>
						<h2 className="text-2xl font-normal text-foreground mb-4 font-[family-name:var(--font-prata)]">
							Identificación del Titular
						</h2>
						<p>
							En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico:
						</p>
						<ul className="list-none space-y-1 pl-0 mt-4">
							<li><strong>Titular:</strong> Cristina Rofa Michinina</li>
							<li><strong>NIF:</strong> 49059130S</li>
							<li><strong>Domicilio:</strong> Pque. DR. Quintero Guerre Nº1 5ºA, Huelva, España</li>
							<li><strong>Teléfono:</strong> +34 644 54 17 05</li>
							<li><strong>Email:</strong> <a href="mailto:info@centrodesintoxicacionagora.es" className="text-primary hover:underline">info@centrodesintoxicacionagora.es</a></li>
							<li><strong>Web:</strong> <a href="https://centrodesintoxicacionagora.es" className="text-primary hover:underline">centrodesintoxicacionagora.es</a></li>
						</ul>
						<p className="mt-4">
							<strong>Finalidad del sitio web:</strong> Centro de Desintoxicación y Rehabilitación.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-normal text-foreground mb-4 font-[family-name:var(--font-prata)]">
							Privacidad y Cookies
						</h2>
						<p>
							Este sitio web respeta tu privacidad:
						</p>
						<ul className="list-disc pl-6 space-y-2 mt-4">
							<li><strong>No utilizamos cookies</strong> de terceros ni propias.</li>
							<li><strong>No recopilamos datos personales</strong> a través de este sitio.</li>
							<li><strong>No utilizamos tecnologías de seguimiento</strong> ni analíticas.</li>
						</ul>
						<p className="mt-4">
							Los enlaces de contacto (WhatsApp, teléfono, email) te redirigen a servicios externos que tienen sus propias políticas de privacidad.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-normal text-foreground mb-4 font-[family-name:var(--font-prata)]">
							Contacto
						</h2>
						<p>
							Para cualquier consulta sobre este aviso legal, puede contactarnos en{' '}
							<a href="mailto:info@centrodesintoxicacionagora.es" className="text-primary hover:underline">
								info@centrodesintoxicacionagora.es
							</a>
						</p>
					</section>
				</div>
			</div>
		</main>
	)
}
