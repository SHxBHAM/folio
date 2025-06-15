import { Meteors } from "@/components/magicui/meteors";
import { ThemeProvider } from "@/components/themeprovider";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <Meteors number={30} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          {"Yo wssup! it's me shubham."}
        </span>
        <span className="mt-4 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-lg font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          The portfolio is under construction, but you can still check out my shit on{" "}
          <a className="underline" href="https://github.com/SHxBHAM">github</a>{" "}
          <a className="underline" href="https://www.linkedin.com/in/shubhxm/">Linkedin</a>
        </span>
        <div><ModeToggle /></div>
      </div>
    </ThemeProvider>
  );
}
