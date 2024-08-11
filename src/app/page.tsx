"use client";

import { BakeryMenu } from "./BakeryMenu";
import ContactForm from "./ContactForm";
import { dosis } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 md:px-10 mx-auto">
      <div className="w-full max-w-md">
        <div className="my-10">
          <h1 className={`text-3xl text-center tracking-wide ${dosis.className}`}>TOFU'S BAKERY</h1>
          <p className={`text-xs text-center tracking-wide ${dosis.className}`}>Grand Cayman</p>
        </div>
        <BakeryMenu />
        <ContactForm />
      </div>
    </main>
  );
}
