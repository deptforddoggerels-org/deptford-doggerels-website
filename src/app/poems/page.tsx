import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

type PoemMetadata = {
  title: string;
  slug: string;
  image: string;
  author: string;
  date: string
};



export default function PoemsPage() {
    const poems = getPoems(); // call sync helper
    return (
        <main className="px-12 pt-20 pb-4 bg-parchment-light bg-[url('/noise.png')] text-black">
            <section className="pt-20 px-4 max-w-5xl mx-auto">
                <h1 className="text-4xl font-pirata mb-8">Poems</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {poems.map((poem) => (
                        <Link key={poem.slug} href={`/poems/${poem.slug}`} className="group">
                            <div className="overflow-hidden rounded shadow">
                                <Image
                                    src={poem.image}
                                    alt={poem.title}
                                    width={800}
                                    height={400}
                                    className="group-hover:scale-105 transition-transform duration-300 object-cover"
                                />
                            </div>
                            <h2 className="mt-2 text-2xl font-semibold font-pirata">{poem.title}</h2>
                            <h3 className='mt-2 text-md text-zinc-700'>by {poem.author}</h3>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}


function getPoems(): PoemMetadata[] {
  const poemsDir = path.join(process.cwd(), 'poems');
  const files = fs.readdirSync(poemsDir);

  return files.map((filename) => {
    const filePath = path.join(poemsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      title: data.title,
      slug: data.slug,
      image: data.image,
      author: data.author,
      date: data.date,
    };
  });
}