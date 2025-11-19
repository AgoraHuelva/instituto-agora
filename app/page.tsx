"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, CheckCircle, Star, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark Background */}
      <section
        id="hero"
        className="relative bg-primary py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn animation="fade-in-down" delay={0} triggerOnScroll={false}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-title mb-4 font-[family-name:var(--font-prata)]">
              Instituto Ágora
            </h1>
          </AnimateIn>

          <AnimateIn animation="fade-in" delay={0.2} triggerOnScroll={false}>
            <p className="text-3xl sm:text-4xl text-title/90 font-light mb-8 font-[family-name:var(--font-prata)]">
              Un lugar seguro para recuperar tu vida
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-in-up" delay={0.3} triggerOnScroll={false}>
            <p className="text-xl sm:text-2xl text-primary-foreground/65 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              En Ágora acompañamos a personas que están atravesando problemas
              relacionados con consumos que interfieren en su bienestar y su día
              a día.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-in-up" delay={0.4} triggerOnScroll={false}>
            <p className="text-base sm:text-lg text-primary-foreground/65 mb-8 max-w-4xl mx-auto font-light">
              Sabemos que pedir ayuda da miedo. Por eso, te ofrecemos un entorno
              cercano, profesional y sin juicios para reconstruir tu vida desde
              dentro.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-in-up" delay={0.5} triggerOnScroll={false}>
            <p className="text-base sm:text-lg text-primary-foreground/65 mb-10 max-w-3xl mx-auto font-light">
              Si sientes que has perdido el rumbo o que tu situación está
              afectando a tu familia, tu trabajo o tu salud emocional, estamos
              aquí para ayudarte.
            </p>
          </AnimateIn>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimateIn
              animation="fade-in-from-left"
              delay={0.6}
              triggerOnScroll={false}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a
                  href="https://wa.me/34644541705"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp - Respuesta rápida
                </a>
              </Button>
            </AnimateIn>
            <AnimateIn
              animation="fade-in-from-right"
              delay={0.6}
              triggerOnScroll={false}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="tel:+34644541705">
                  <Phone className="mr-2 h-5 w-5" />
                  644 54 17 05
                </a>
              </Button>
            </AnimateIn>
          </div>

          <AnimateIn animation="fade-in" delay={0.7} triggerOnScroll={false}>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Respuesta confidencial y sin compromiso
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Cómo te ayudamos - Beige Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-normal text-center mb-12 text-foreground font-[family-name:var(--font-prata)]">
            💬 Cómo te ayudamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              "Valoración inicial personalizada",
              "Programas de acompañamiento adaptados a tu historia",
              "Apoyo emocional y educativo para ti y tu familia",
              "Entorno seguro y supervisado",
              "Trabajo terapéutico para entender el origen del problema",
              "Reaprendizaje de rutinas, hábitos y relaciones sanas",
              "Seguimiento tras finalizar el proceso",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-6 text-foreground">
              Puedes dar el primer paso sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimateIn animation="fade-in-from-left">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a
                    href="https://wa.me/34644541705"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Habla con nosotros ahora
                  </a>
                </Button>
              </AnimateIn>
              <AnimateIn animation="fade-in-from-right">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a href="tel:+34644541705">
                    <Phone className="mr-2 h-5 w-5" />
                    644 54 17 05
                  </a>
                </Button>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Ágora - Dark Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-normal text-center mb-12 text-title font-[family-name:var(--font-prata)]">
            🧭 ¿Por qué Ágora?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              "Más de 10 años de experiencia",
              "Equipo profesional especializado",
              "Grupos reducidos y acompañamiento constante",
              "Procesos confidenciales",
              "Trato humano, cálido y respetuoso",
              "Metodología eficaz enfocada en la recuperación real",
            ].map((item, index) => (
              <Card key={index} className="bg-muted border-2 border-[#c4d6c0]">
                <CardContent className="flex items-center justify-center h-full">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-card-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg mt-12 font-medium text-primary-foreground">
            No estás solo. Muchos de nosotros también creímos que no había
            salida… y la encontramos.
          </p>
          <div className="text-center mt-6">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/34644541705"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero hablar con el equipo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Beige Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-normal text-center mb-12 text-foreground font-[family-name:var(--font-prata)]">
            Historias reales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimateIn animation="fade-in-up" delay={0}>
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-semibold mb-3 text-foreground">
                    Francisco Correa Hidalgo
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    &ldquo;Llevo casi 14 meses en Instituto Ágora… Llegué perdido, sin
                    fuerzas, con mucho miedo y dolor… pero aquí encontré
                    comprensión, apoyo y una nueva oportunidad para vivir. No
                    solo me ayudaron a dejar atrás mi adicción, sino a
                    conocerme, sanar y recuperar la ilusión. Cada profesional y
                    cada compañero han sido parte de un camino que me ha
                    transformado por completo. Todavía me queda mucho por
                    recorrer, pero siempre iré de su mano. En este centro se
                    respira empatía, humanidad y esperanza real. Es un hogar
                    donde te ayudan a volver a ser tú mismo.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={0.2}>
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-semibold mb-3 text-foreground">Josep</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    &ldquo;Hoy me cuesta reconocer a la persona que llegó aquí hace
                    más de un año. Mi vida era miedo, caos y desesperanza… pero
                    gracias a su entrega, paciencia y fe en mí, renací. Un año
                    de tratamiento fue mucho más que desintoxicación: fue un
                    viaje hacia mí mismo, con aprendizaje, lágrimas, risas,
                    abrazos y pequeñas victorias. Aquí aprendí que no estoy
                    solo, y que puedo construir una vida libre y con propósito.
                    La clínica fue mi hogar en mi momento más oscuro. Su equipo
                    fue mi familia cuando más lo necesitaba.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={0.4}>
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-semibold mb-3 text-foreground">Gema</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    &ldquo;Soy familiar de una persona que se está recuperando en
                    Ágora. Aquí apoyan no solo al paciente sino también a las
                    familias, dándonos herramientas para manejar la situación.
                    El proceso es largo, pero ellos lo hacen más llevadero, con
                    dedicación y profesionalidad. Lo más importante es ver cómo
                    tu ser querido empieza a mostrar cambios positivos. La
                    terapia grupal ha sido muy beneficiosa. Estoy muy agradecida
                    por todo lo que hacen y las vidas que ayudan a salvar.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/34644541705"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero empezar ahora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Confidencialidad - White Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-normal mb-6 text-foreground font-[family-name:var(--font-prata)]">
            Confidencialidad y acompañamiento real
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-4">
            Sabemos lo difícil que es dar este paso. Aquí nadie te juzga.
          </p>
          <p className="text-lg sm:text-xl text-foreground/70 mb-8">
            Caminaremos contigo con respeto, claridad y cariño.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <a
              href="https://wa.me/34644541705"
              target="_blank"
              rel="noopener noreferrer"
            >
              Da el primer paso — Escríbenos
            </a>
          </Button>
        </div>
      </section>

      {/* Location - Dark Background */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-normal mb-8 text-title font-[family-name:var(--font-prata)]">
            ¿Dónde estamos?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-secondary-foreground" />
            <p className="text-lg sm:text-xl text-secondary-foreground">
              C/ Alonso Sánchez 15, Huelva
            </p>
          </div>
          <p className="text-lg mb-8 text-secondary-foreground/80">
            Si deseas información o empezar cuanto antes:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/34644541705"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="tel:+34644541705">
                <Phone className="mr-2 h-5 w-5" />
                644 54 17 05
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Dark Green Background */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        {/* SVG Pattern Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <circle
            cx="10%"
            cy="30%"
            r="80"
            fill="currentColor"
            className="text-primary-foreground/5"
          />
          <circle
            cx="90%"
            cy="70%"
            r="100"
            fill="currentColor"
            className="text-primary-foreground/5"
          />
          <circle
            cx="85%"
            cy="20%"
            r="60"
            fill="currentColor"
            className="text-primary-foreground/3"
          />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-title font-[family-name:var(--font-prata)]">
              Recuperarte es posible.
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={0.2}>
            <p className="text-2xl sm:text-3xl text-title mb-10 font-[family-name:var(--font-prata)]">
              No tienes que hacerlo solo.
            </p>
          </AnimateIn>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimateIn animation="fade-in-from-left" delay={0.3}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a
                  href="https://wa.me/34644541705"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar ahora
                </a>
              </Button>
            </AnimateIn>
            <AnimateIn animation="fade-in-from-right" delay={0.3}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="tel:+34644541705">
                  <Phone className="mr-2 h-5 w-5" />
                  644 54 17 05
                </a>
              </Button>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}
