import { createFileRoute } from "@tanstack/react-router";
import {
  Mic, ScanText, FileText, Layers, ListChecks, Sparkles, Brain, AudioLines,
  Upload, FileSearch, NotebookPen, GraduationCap, Download, ArrowRight,
  Github, Linkedin, Mail, Zap, Cpu, Database, Cloud, Code2, Wind, Bot,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scribexa AI — Turn Notes into Knowledge" },
      { name: "description", content: "Scribexa AI converts lecture audio, handwritten notes, and PDFs into smart notes, flashcards, and MCQs using Gemini and Whisper." },
      { property: "og:title", content: "Scribexa AI — Turn Notes into Knowledge" },
      { property: "og:description", content: "AI study assistant: audio, OCR & PDF → notes, flashcards, MCQs." },
    ],
  }),
  component: Landing,
});

const APP_URL = "https://scribexa-ai-edunet-ibm.streamlit.app/";

const features = [
  { icon: Mic, title: "Lecture Audio to Notes", desc: "Transcribe full lectures into structured, searchable notes." },
  { icon: ScanText, title: "Handwritten Notes OCR", desc: "Digitize messy handwriting with high-accuracy OCR." },
  { icon: FileText, title: "PDF Study Material", desc: "Parse textbooks and slides into clean knowledge." },
  { icon: Layers, title: "Flashcard Generation", desc: "Auto-build spaced-repetition flashcards from any source." },
  { icon: ListChecks, title: "MCQ Generation", desc: "Practice with AI-generated multiple choice questions." },
  { icon: Sparkles, title: "AI Summarization", desc: "Distil long lectures into focused, exam-ready summaries." },
  { icon: Brain, title: "Gemini AI Powered", desc: "Reasoning by Google Gemini for deep understanding." },
  { icon: AudioLines, title: "Whisper Speech Recognition", desc: "State-of-the-art transcription, even in noisy rooms." },
];

const steps = [
  { icon: Upload, title: "Upload", desc: "Drop audio, images, or PDFs." },
  { icon: FileSearch, title: "Extract", desc: "AI pulls clean text from any source." },
  { icon: NotebookPen, title: "Generate Notes", desc: "Structured notes in seconds." },
  { icon: Layers, title: "Flashcards", desc: "Active recall, automated." },
  { icon: GraduationCap, title: "MCQs", desc: "Test yourself instantly." },
  { icon: Download, title: "Download", desc: "Export your study pack." },
];

const stack = {
  Frontend: [{ n: "React", i: Code2 }, { n: "TailwindCSS", i: Wind }],
  Backend: [{ n: "Python", i: Cpu }, { n: "Streamlit", i: Zap }],
  AI: [{ n: "Google Gemini", i: Brain }, { n: "OpenAI Whisper", i: AudioLines }],
  Database: [{ n: "SQLite", i: Database }],
  Deployment: [{ n: "Streamlit Cloud", i: Cloud }],
};

const stats = [
  { label: "AI Powered", value: "Gemini + Whisper", icon: Bot },
  { label: "Multi-format Input", value: "Audio · Image · PDF", icon: Upload },
  { label: "Automated Learning", value: "Notes → Cards → MCQs", icon: Sparkles },
  { label: "Study Assistant", value: "24/7 Available", icon: GraduationCap },
];

const arch = ["User", "Upload File", "Whisper / OCR / PDF Extraction", "Gemini AI", "Notes + Flashcards + MCQs", "Download Results"];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-secondary/30 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      <Nav />
      <Hero />
      <Section id="features" eyebrow="Features" title="Everything you need to study smarter">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:glow animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Section>

      <Section id="how" eyebrow="How it works" title="From raw material to mastery in six steps">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="glass relative rounded-2xl p-6 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-4">
                <div className="text-gradient text-4xl font-bold tabular-nums">0{i + 1}</div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-strong">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="stack" eyebrow="Tech Stack" title="Built on modern, proven tools">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stack).map(([cat, items], i) => (
            <div key={cat} className="glass rounded-2xl p-6 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="text-xs uppercase tracking-widest text-accent">{cat}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it.n} className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-foreground/5 px-3 py-1.5 text-sm">
                    <it.i className="h-4 w-4 text-accent" /> {it.n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="architecture" eyebrow="Architecture" title="How data flows through Scribexa AI">
        <div className="glass mx-auto max-w-3xl rounded-3xl p-8 sm:p-12">
          <ol className="flex flex-col items-stretch gap-4">
            {arch.map((node, i) => (
              <li key={node} className="flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-full rounded-xl border border-border/60 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 px-5 py-4 text-center font-medium">
                  {node}
                </div>
                {i < arch.length - 1 && <ArrowRight className="h-5 w-5 rotate-90 text-accent" />}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="stats" eyebrow="Project Stats" title="What Scribexa AI delivers">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="glass rounded-2xl p-6 animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <s.icon className="h-6 w-6 text-accent" />
              <div className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-lg font-semibold text-gradient">{s.value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="About the Developer" title="Built by a student, for students">
        <div className="glass mx-auto max-w-2xl rounded-3xl p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-2xl font-bold text-primary-foreground">
            SS
          </div>
          <h3 className="mt-5 text-2xl font-semibold">Shobhan Satpathy</h3>
          <p className="mt-2 text-muted-foreground">Computer Science Student · AI &amp; ML Enthusiast</p>
          <div className="mt-6 flex justify-center gap-3">
            <SocialBtn href="https://github.com/Shobhan-04" icon={Github} label="GitHub" />
            <SocialBtn href="https://www.linkedin.com/in/shobhanengineer/" icon={Linkedin} label="LinkedIn" />
            <SocialBtn href="mailto:shobhansatpathy04@gmail.com" icon={Mail} label="Email" />
          </div>
        </div>
      </Section>

      <CtaBanner />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display tracking-tight">Scribexa <span className="text-gradient">AI</span></span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
        </nav>
        <a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Launch App <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-4 pt-20 pb-28 sm:pt-28">
      <div className="mx-auto max-w-5xl text-center">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-muted-foreground">Powered by Gemini · Whisper · Built for learners</span>
        </div>
        <h1 className="animate-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: "80ms" }}>
          Scribexa <span className="text-gradient animate-gradient">AI</span>
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: "160ms" }}>
          Turn Notes into Knowledge. <span className="text-foreground">Learn Faster.</span> Remember Longer.
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "240ms" }}>
          <a href={APP_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-[position:right_center] glow">
            Launch App <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition hover:bg-foreground/5">
            Explore features
          </a>
        </div>

        {/* Floating preview card */}
        <div className="animate-fade-up mx-auto mt-16 max-w-3xl" style={{ animationDelay: "320ms" }}>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 animate-float">
            <div className="grid grid-cols-3 gap-3 text-left">
              {[
                { i: Mic, t: "lecture_07.mp3", s: "Transcribing…" },
                { i: ScanText, t: "notes.jpg", s: "OCR complete" },
                { i: FileText, t: "chapter4.pdf", s: "Summarized" },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-border/60 bg-foreground/5 p-3">
                  <x.i className="h-4 w-4 text-accent" />
                  <div className="mt-2 truncate text-xs font-medium">{x.t}</div>
                  <div className="text-[10px] text-muted-foreground">{x.s}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-4 text-left">
              <div className="text-xs uppercase tracking-wider text-accent">Generated</div>
              <div className="mt-1 text-sm">12 flashcards · 8 MCQs · 1 summary ready to download.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function SocialBtn({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass transition hover:bg-foreground/10 hover:-translate-y-0.5">
      <Icon className="h-5 w-5" />
    </a>
  );
}

function CtaBanner() {
  return (
    <section className="px-4 pb-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 p-10 text-center glass-strong">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20" />
        <h3 className="font-display text-3xl font-bold sm:text-4xl">Ready to study smarter?</h3>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Upload your first lecture or PDF and let Scribexa AI generate your complete study pack.
        </p>
        <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-primary-foreground glow transition hover:opacity-90">
          Launch App <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>© {new Date().getFullYear()} Scribexa AI · Built by Shobhan Satpathy</span>
        </div>
        <div className="flex gap-2">
          <SocialBtn href="https://github.com/Shobhan-04" icon={Github} label="GitHub" />
          <SocialBtn href="https://www.linkedin.com/in/shobhanengineer/" icon={Linkedin} label="LinkedIn" />
          <SocialBtn href="mailto:shobhansatpathy04@gmail.com" icon={Mail} label="Email" />
        </div>
      </div>
    </footer>
  );
}
