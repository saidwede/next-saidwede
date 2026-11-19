"use client";

import { useLanguage } from "@/context/language-context";

export default function Contacts() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 lg:pt-0 flex items-center justify-center px-5 lg:px-0">
      <form
        method="POST"
        className="w-[500px]"
        action="https://formspree.io/f/xovaqlrp"
      >
        <h1 className="text-center font-bold text-5xl py-3">
          {t.contacts.title}
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <label>
            <span className="text-xs">{t.contacts.firstName}</span>
            <input
              type="text"
              name="first_name"
              className=" border h-10 w-full outline-none px-2 py-1 text-sm"
              required
            />
          </label>
          <label>
            <span className="text-xs">{t.contacts.lastName}</span>
            <input
              type="text"
              name="last_name"
              className=" border h-10 w-full outline-none px-2 py-1 text-sm"
              required
            />
          </label>
        </div>

        <label>
          <span className="text-xs">{t.contacts.email}</span>
          <input
            type="email"
            name="email"
            className=" border h-10 w-full outline-none px-2 py-1 text-sm"
            required
          />
        </label>
        <label>
          <span className="text-xs">{t.contacts.subject}</span>
          <input
            type="text"
            name="object"
            className=" border h-10 w-full outline-none px-2 py-1 text-sm"
            required
          />
        </label>
        <label>
          <span className="text-xs">{t.contacts.message}</span>
          <textarea
            className="border h-40 w-full outline-none px-2 py-1 text-sm"
            name="message"
            required
          ></textarea>
        </label>
        <div className="flex justify-end">
          <button type="submit" className="h-10 bg-black text-white w-36">
            {t.contacts.send}
          </button>
        </div>
      </form>
    </div>
  );
}
