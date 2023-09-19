'use client';
export default function Send({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex justify-between self-end py-3 px-4 bg-accent-main text-white font-bold rounded-full"
      onClick={() => console.log(`123`)}
    >
      <span>{children}</span>
    </button>
  );
}
