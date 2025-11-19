"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PreferenciasCookiesPage() {
  const [tecnicas] = useState(true); // Always enabled
  const [analiticas, setAnaliticas] = useState(false);
  const [sociales, setSociales] = useState(false);

  const handleSavePreferences = () => {
    // Here you would save the preferences to cookies/localStorage
    alert("Preferencias guardadas correctamente");
  };

  const handleAcceptAll = () => {
    setAnaliticas(true);
    setSociales(true);
    alert("Todas las cookies aceptadas");
  };

  const handleRejectAll = () => {
    setAnaliticas(false);
    setSociales(false);
    alert("Cookies opcionales rechazadas");
  };

  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-[family-name:var(--font-prata)]">
          Preferencias de Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <p>
              El sitio Web <a href="https://centrodesintoxicacionagora.es">https://centrodesintoxicacionagora.es</a> utiliza cookies propias y de terceros para su correcto funcionamiento y para fines analíticos y para mostrarte publicidad relacionada con sus preferencias en base a un perfil elaborado a partir de tus hábitos de navegación. Al hacer clic en el botón Aceptar, acepta el uso de estas tecnologías y el procesamiento de sus datos para estos propósitos.
            </p>
            <p>
              Puedes cambiar tus preferencias de cookies en cualquier momento si vuelves a la página de <a href="/preferencias-de-cookies">Personalizar cookies</a>, a la que puedes acceder a través del Aviso de cookies. Para obtener más información sobre las cookies y cómo las usamos, consulta la página de <a href="/politica-cookies">Política de Cookies</a>.
            </p>
          </section>

          <div className="space-y-6 mt-8">
            {/* Cookies Técnicas */}
            <div className="border border-border rounded-lg p-6 bg-muted/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-prata)]">
                    Cookies Técnicas
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Son aquellas que permiten a los usuarios registrados navegar a través del sitio Web, del área restringida y a utilizar sus diferentes funciones, como por ejemplo, el sistema de comentarios o el buscador y no pueden ser desactivadas.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={tecnicas}
                      disabled
                      className="w-5 h-5 accent-primary"
                    />
                    <span className="text-sm text-foreground/50">Siempre activas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies de Análisis */}
            <div className="border border-border rounded-lg p-6 bg-muted/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-prata)]">
                    Cookies de Análisis o Medición
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Son aquellas que, bien tratadas por el sitio Web o por terceros, permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del sitio Web. Para ello se analiza la navegación que realizas en este sitio Web con el fin de mejorarlo.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={analiticas}
                      onChange={(e) => setAnaliticas(e.target.checked)}
                      className="w-5 h-5 accent-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies Sociales */}
            <div className="border border-border rounded-lg p-6 bg-muted/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-prata)]">
                    Cookies Sociales
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Son establecidas por las plataformas de redes sociales para permitir a los usuarios
                    compartir contenido con sus amigos y redes.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={sociales}
                      onChange={(e) => setSociales(e.target.checked)}
                      className="w-5 h-5 accent-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
            <Button
              size="lg"
              variant="outline"
              onClick={handleRejectAll}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Rechazar Opcionales
            </Button>
            <Button
              size="lg"
              onClick={handleSavePreferences}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Guardar Preferencias
            </Button>
            <Button
              size="lg"
              onClick={handleAcceptAll}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Aceptar Todas
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
