import PageWrapper from "../components/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper title="Contacto">
      <p>Podés escribirme a:</p>
      <a
        href="mailto:guillepazerrobidart@gmail.com"
        className="text-yellow-400 underline block"
      >
        guillepazerrobidart@gmail.com
      </a>
    </PageWrapper>
  )
}
