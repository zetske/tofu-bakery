"use client";

import { BakeryMenu } from "./BakeryMenu";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 md:px-10 mx-auto">
      <div className="w-full max-w-md">
        <BakeryMenu />
        <ContactForm />
      </div>
    </main>
  );
}
