"use client";

import { BakeryMenu } from "./BakeryMenu";
import ContactForm from "./ContactForm";
import { dosis } from "./fonts";

export default function Home() {
  return (
    <main className="flex items-center justify-center mx-auto py-10">
      <section className="min-h-screen px-4 md:px-10 mx-auto py-10">
        <div className="my-10">
          <h1
            className={`text-3xl text-center tracking-wide ${dosis.className}`}
          >
            TOFU'S BAKERY
          </h1>
          <p className={`text-xs text-center tracking-wide ${dosis.className}`}>
            Grand Cayman
          </p>
        </div>

        <BakeryMenu />
        <ContactForm />
      </section>
    </main>
  );
}
