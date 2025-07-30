"use client";

import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { Button } from "../components/Button";

export default function AboutPage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <PageWrapper title={lang === "es" ? "Sobre mí" : "About me"}>
      <div className="flex justify-end mb-4">
        <Button onClick={toggleLang} variant="outline">
          {lang === "es" ? "Cambiar a Inglés " : "Switch to Spanish"}
        </Button>
      </div>

      {lang === "es" ? (
        <>
          <p>
            ¡Hola! Soy Guille Paz Errobidart y vivo en la ciudad de La Plata.
            Estudié Locución, lo que me permitió desarrollar habilidades de
            comunicación que hoy aplico tanto en lo profesional como en mis
            proyectos personales. Me gusta enseñar y compartir todo lo que
            aprendo.
          </p>
          <p className="mt-4">
            Me formé como fullstack developer, con foco en React, TypeScript,
            Node y GraphQL. Además, soy Scrum Master con certificación en
            metodologías AGILE.
          </p>
          <p className="mt-4">
            Siempre estoy abierto a aprender nuevas tecnologías o lenguajes que
            el contexto requiera.
          </p>
        </>
      ) : (
        <>
          <p>
            Hi! I'm Guille Paz Errobidart and I live in the city of La Plata. I
            studied Broadcasting, which helped me develop communication skills
            that I now apply both professionally and in my personal projects. I
            enjoy teaching and sharing everything I learn.
          </p>
          <p className="mt-4">
            I trained as a fullstack developer, focusing on React, TypeScript,
            Node, and GraphQL. I'm also a Scrum Master with certification in
            AGILE methodologies.
          </p>
          <p className="mt-4">
            I'm always open to learning new technologies or languages as
            required by the context.
          </p>
        </>
      )}
    </PageWrapper>
  );
}
