"use client"

import Link from "next/link"

const Contact = () => {
  return (
    <section className="grid w-full gap-10 bg-slate-950 px-6 py-16 text-white md:grid-cols-2 md:px-12 lg:px-24">
      <div className="flex flex-col justify-center gap-6">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold">Let&apos;s work together</h2>
          <p className="mt-4 max-w-md text-slate-300">
            Have a project in mind? Find me on social media or send a message.
          </p>
        </div>

        <div className="flex gap-5">
          {/* <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 transition-colors duration-200 hover:text-blue-500"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.76-2-5.51-4.67-5.51-2.15 0-3.11 1.18-3.65 2v-1.84H9.2V21h3.48v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3V21H21v-7.15Z" />
            </svg>
          </Link> */}
          <Link
            href="https://github.com/Abdullahshk11"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-300 transition-colors duration-200 hover:text-blue-500"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </Link>
        </div>
      </div>

      <form className="flex flex-col gap-5" action="mailto:you@example.com" method="post" encType="text/plain">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Subject</span>
          <input
            type="text"
            name="subject"
            required
            placeholder="Project inquiry"
            className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="resize-y rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
          />
        </label>
        <button
          type="submit"
          className="w-fit rounded-lg bg-blue-600 px-6 py-3 font-semibold transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send message
        </button>
      </form>
    </section>
  )
}

export default Contact
