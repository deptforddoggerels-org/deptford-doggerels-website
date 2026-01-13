import Image from "next/image";

export default function ParallaxSection({
  src,
  children,
  height = "min-h-screen",
  priority = false,
}: {
  src: string;
  children?: React.ReactNode;
  height?: string;
  priority?: boolean;
}) {
  return (
    <section
      className={`relative w-full ${height} overflow-hidden flex items-center justify-center`}
    >
      {/* Optimised background image */}
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover will-change-transform scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        {children}
      </div>
    </section>
  );
}
