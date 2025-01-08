import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Portfolio />
    </div>
  );
}
