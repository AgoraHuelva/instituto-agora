import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
	return (
		<main className="min-h-screen bg-muted flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="text-center">
				<h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4 font-[family-name:var(--font-prata)]">
					404
				</h1>
				<h2 className="text-2xl sm:text-3xl font-light text-foreground mb-4 font-[family-name:var(--font-prata)]">
					Página no encontrada
				</h2>
				<p className="text-foreground/70 mb-8 max-w-md mx-auto">
					Lo sentimos, la página que buscas no existe o ha sido movida.
				</p>
				<Button
					size="lg"
					variant="outline"
					className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
					asChild
				>
					<Link href="/">
						<Home className="mr-2 h-5 w-5" />
						Volver al inicio
					</Link>
				</Button>
			</div>
		</main>
	)
}
