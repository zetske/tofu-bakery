"use client";

interface Props {
  //   onSubmit: (event: any) => void;
}

export default function ContactForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY as string;

    formData.append("access_key", key);

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
      event.target.reset();
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          backdropFilter: "blur(4px)",
        }}
        className="text-black bg-[rgba(255,255,255,0.25)] rounded-lg p-8 shadow-sm grid w-full gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          className="p-4 rounded-md shadow-sm text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="p-4 rounded-md shadow-sm text-black"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          className="p-4 rounded-md shadow-sm text-black"
        />
        <div className="px-2 space-y-2">
          <p>If ordering cookies, would you like them frozen or baked</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="flex gap-4">
              <input type="radio" name="cookies" value="baked" />
              <label htmlFor="baked">Baked</label>
            </div>
            <div className="flex gap-4">
              <input type="radio" name="cookies" value="frozen" />
              <label htmlFor="frozen">Frozen</label>
            </div>
            <div className="flex gap-4">
              <input type="radio" name="cookies" value="n/a" />
              <label className="opacity-50" htmlFor="frozen">n/a</label>
            </div>
          </div>
        </div>
        <textarea
          name="comments"
          placeholder="additional comments"
          className="p-4 rounded-md shadow-sm text-black"
        />
        <button
          className="bg-[#E57C14] text-white w-full p-2 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
