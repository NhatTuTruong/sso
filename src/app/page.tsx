import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex items-end gap-3.5">
        <Image
          className="relative"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-5xl font-medium translate-y-1.5">SSO Demo</h1>
      </div>
    </main>
  );
}
