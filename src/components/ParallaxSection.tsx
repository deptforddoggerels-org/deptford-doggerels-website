// components/ParallaxSection.tsx
export default function ParallaxSection({
  src,
  children,
  height = "min-h-screen", // default, can pass e.g. "h-[60vh]" or "min-h-[70vh]"
}: {
  src: string;
  children?: React.ReactNode;
  height?: string;
}) {
  return (
    <section
      className={`relative w-full ${height} overflow-hidden flex items-center justify-center`}
    >
      {/* Decorative background (uses CSS background so bg-fixed works for parallax) */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />

      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />

      {/* Content container — centered by the section's flexbox.
          Use flex-col to stack multiple children, and px for horizontal padding. */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        {children}
      </div>
    </section>
  );
}
