"use client";

import ContactForm from "./ContactForm";

export default function Home() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3a0dd95a-ec68-4909-baea-1109a7156dac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center px-4 md:px-10 mx-auto">
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </main>
  );
}
