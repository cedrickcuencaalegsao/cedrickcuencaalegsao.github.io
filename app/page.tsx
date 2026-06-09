"use client";
import { useState } from "react";
import Loader from "./component/loader/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1>My Portfolio</h1>
    </div>
  );
}
