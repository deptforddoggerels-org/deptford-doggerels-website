import Image from "next/image";

export default function HeroSection({ src, children }: { src: string; children?: React.ReactNode }) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Fixed hero image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={src}
          alt="Hero Background - A crowd at Deptford Doggerels poetry night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">{children}</div>
    </section>
  );
}
