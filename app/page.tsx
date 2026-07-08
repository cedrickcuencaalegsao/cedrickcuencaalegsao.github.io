"use client";
import { useState } from "react";
import Loader from "./component/loader/loader";
import Hero from "./component/hero/hero";

export default function Home() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <Hero />
    </main>
  );
}
