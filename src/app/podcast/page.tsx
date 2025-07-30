import PageWrapper from "../components/PageWrapper";

export default function PodcastPage() {
  return (
    <PageWrapper title="Disculpa..!">
      <p>
        Disculpa..! es un podcast donde cuento anécdotas sobre el bello y
        caótico mundo de trabajar en gastronomía y atención al público.
      </p>
      <a
        href="https://open.spotify.com/show/7trDlq2XloeuWxC36juftl?si=9ca8bc646f2b4b3b"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 underline block"
      >
        Ir a mi podcast 🎧
      </a>
    </PageWrapper>
  );
}
