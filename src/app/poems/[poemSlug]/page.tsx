import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { JSX } from 'react';

type PoemData = {
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
};

interface PageProps {
  params: {
    poemSlug: string;
  };
}

// You can keep it async, but use `Promise<JSX.Element>` as return type
export default async function PoemPage({ params }: PageProps): Promise<JSX.Element> {
  const { poemSlug } = params;
  const poem = await getPoem(poemSlug);

  if (!poem) return notFound();

  return (
    <main className="px-6 pt-24 pb-8 w-full mx-auto bg-parchment-light bg-[url('/noise.png')]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-pirata mb-4">{poem.title}</h1>
        <h5>by {poem.author}</h5>
        <article className="whitespace-pre-wrap leading-relaxed text-lg">
          {poem.content}
        </article>
      </div>
    </main>
  );
}

async function getPoem(slug: string): Promise<PoemData | null> {
  try {
    const filePath = path.join(process.cwd(), 'poems', `${slug}.md`);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      title: data.title || slug.replace(/-/g, ' '),
      image: data.image || '',
      author: data.author || 'anonymous',
      date: data.date || '',
      content,
    };
  } catch (err) {
    console.error('Failed to load poem:', err);
    return null;
  }
}
