import Image from "next/image";
import Navigation from "../components/navigation";
import { createClient } from "../utils/supabase/client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      <p>home</p>
    </div>
  );
}
