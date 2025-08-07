// components/ParallaxSection.tsx
import Image from "next/image";

export default function ParallaxSection({
  src,
  alt,
  children,
  height = "min-h-screen",
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  height?: string;
}) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex items-center justify-center text-white">
        {children}
      </div>
    </section>
  );
}
