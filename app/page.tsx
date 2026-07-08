"use client";
import { useEffect, useState } from "react";
import Loader from "./component/loader/loader";
import Hero from "./component/hero/hero";
import Work from "./component/work/work";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
      <Work />
    </main>
  );
}
