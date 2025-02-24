'use client'

import Image from "next/image";
import Hello from "./components/hello";
export default function Home() {
  console.log("It is a home page");

  return (
    <div>
      <h1>Home page</h1>
      <Hello/>
    </div>
  );
}
