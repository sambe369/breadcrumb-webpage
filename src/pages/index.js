import { Section1, Section2, Section3, Section4 } from "@/components/home section";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen">
        {/* Hero Section */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}