interface Params {
  params: { volume: string; poemSlug: string };
}

export default function PoemPage({ params }: Params) {
  const { volume, poemSlug } = params;

  return (
    <div>
      <h1>Poem: {poemSlug.replace(/-/g, ' ')}</h1>
      <p>From Volume: {volume.toUpperCase()}</p>
      <p>[Poem content goes here]</p>
    </div>
  );
}