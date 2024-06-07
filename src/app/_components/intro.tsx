import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        how not to be an idiot in 2024
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A weekly guide on how to be a better person.
      </h4>
    </section>
  );
}
