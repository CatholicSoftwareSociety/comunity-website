import Image from "next/image";
import Jesus from "../public/Jesus.jpg";
import { Contact, Hero, Projects } from "../components/index";

export default function Home() {
  return (
    <main className="mt-[48px]">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
