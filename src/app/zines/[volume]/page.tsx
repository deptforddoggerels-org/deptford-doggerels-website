// app/zines/[volume]/page.tsx

interface Params {
  params: { volume: string };
}

// Dummy poem data by volume
const poemsByVolume: Record<string, { title: string; slug: string }[]> = {
  'vol-1': [
    { title: 'Poem One', slug: 'poem-one' },
    { title: 'Poem Two', slug: 'poem-two' },
  ],
  'vol-2': [
    { title: 'Another Poem', slug: 'another-poem' },
    { title: 'Second Poem', slug: 'second-poem' },
  ],
};

export default function VolumePage({ params }: Params) {
  const poems = poemsByVolume[params.volume] || [];

  return (
    <div>
      <h1>{params.volume.toUpperCase()}</h1>
      <ul>
        {poems.map((poem) => (
          <li key={poem.slug}>
            <a href={`/zines/${params.volume}/${poem.slug}`}>{poem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}