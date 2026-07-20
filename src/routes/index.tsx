import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Monitor,
  Wrench,
  ShieldCheck,
  Download,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
  Instagram,
  Mail,
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import aboutPhoto from "@/assets/about.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#000080";
const BLUE = "#08AECC";
const RED = "#FF0000";
const NAVY_DARK = "#000080";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-9 h-9 rounded-full flex items-center justify-center" style={{ background: NAVY_DARK }}>
        <svg viewBox="0 0 40 40" className="w-6 h-6">
          <circle cx="20" cy="20" r="14" fill="none" stroke={BLUE} strokeWidth="1.5" />
          <ellipse cx="20" cy="20" rx="6" ry="14" fill="none" stroke={BLUE} strokeWidth="1.2" />
          <line x1="6" y1="20" x2="34" y2="20" stroke={BLUE} strokeWidth="1.2" />
          <path d="M22 20l6 18 2.5-7L37 28 22 20z" fill="#fff" transform="scale(0.45) translate(24 2)" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display font-semibold text-[15px]" style={{ color: RED }}>
          Tech Support
        </div>
        <div className="text-[11px] tracking-wide" style={{ color: BLUE }}>
          for Everyone
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase"
      style={{ borderColor: `${BLUE}55`, color: NAVY, background: "#fff" }}
    >
      <MapPin className="w-3 h-3" style={{ color: BLUE }} />
      {children}
    </span>
  );
}

function PrimaryBtn({ children, ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...p}
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(255,0,0,0.55)] transition-transform hover:scale-105"
      style={{ background: RED }}
    >
      {children}
    </button>
  );
}

function SecondaryBtn({ children, ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...p}
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white"
      style={{ border: `1.5px solid ${NAVY}`, color: NAVY }}
    >
      {children}
    </button>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="text-base font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1]" style={{ color: NAVY }}>
        {title}
      </h2>
      {sub && <p className="mt-3 text-[15px] text-[color:var(--muted-foreground)]">{sub}</p>}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[#eef6ff]/80 border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: NAVY }}>
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#pricing" className="hover:opacity-70">Pricing</a>
          <a href="#how" className="hover:opacity-70">How it works</a>
        </nav>
        <a
          href="#request"
          className="rounded-full px-4 py-2 text-sm font-semibold text-white"
          style={{ background: RED }}
        >
          Book support
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 md:pt-16 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Pill>Serving Silver Spring, MD & Remote Nationwide</Pill>
          <h1
            className="mt-5 text-[40px] md:text-[56px] leading-[1.03] font-semibold"
            style={{ color: NAVY }}
          >
            Tech help that feels like{" "}
            <span className="relative inline-block">
              <span style={{ color: BLUE }}>calling a friend</span>
            </span>
            , not a call center.
          </h1>
          <p className="mt-5 text-[16px] md:text-[17px] max-w-xl text-[color:var(--muted-foreground)] leading-relaxed">
            Patient, affordable, no-jargon remote and in-person tech support for
            students, families, and small businesses. Real help from a real
            person — usually the same day.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#request"><PrimaryBtn>Book Support <ArrowRight className="w-4 h-4" /></PrimaryBtn></a>
            <a href="#ask"><SecondaryBtn>Ask a question first</SecondaryBtn></a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-[13px]" style={{ color: NAVY }}>
            <div className="flex -space-x-1">
              {[0,1,2,3,4].map((i)=>(
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: BLUE }} />
              ))}
            </div>
            <span className="opacity-80">Neighborly service · Same-day availability</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,31,58,0.35)] border border-[color:var(--border)]">
            <video
              src={heroVideo.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Monitor, title: "Device Setup", body: "New laptop, phone, printer, or smart TV? I'll get it running the way you want." },
  { icon: Wrench, title: "Troubleshooting", body: "Slow computer, weird errors, Wi-Fi drops — I'll figure out what's actually wrong." },
  { icon: ShieldCheck, title: "Malware Removal", body: "Pop-ups, sketchy tabs, or a suspicious email? Full clean-up and prevention." },
  { icon: Download, title: "Software Installation", body: "Office, Zoom, printers, browsers, updates — installed properly and explained." },
];

function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="What I help with"
          title="Everyday tech, sorted out for good."
          sub="Pick a service or just tell me the problem in plain English — I'll take it from there."
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-5 border border-[color:var(--border)] hover:border-[color:var(--accent)]/60 transition"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${BLUE}18`, color: BLUE }}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: NAVY }}>{s.title}</h3>
              <p className="mt-1.5 text-[14px] text-[color:var(--muted-foreground)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white/60">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src={aboutPhoto.url}
            alt="Friendly, patient tech help — a student helping a neighbor with a laptop"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_20px_50px_-20px_rgba(11,31,58,0.35)]"
          />
          <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-lg" style={{ background: NAVY }}>
            Based in Silver Spring, MD
          </div>
        </div>
        <div>
          <SectionTitle
            eyebrow="About"
            title="The tech person my family, friends, and neighbors have relied on for years."
          />
          <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
            I started Tech Support for Everyone because good tech help
            shouldn't cost $150/hr or come with a hold-music soundtrack. I work
            remotely across the country and in-person around Silver Spring,
            explaining things clearly, respecting your time, and never talking
            down to anyone.
          </p>
          <ul className="mt-5 space-y-2 text-[14px]" style={{ color: NAVY }}>
            {[
              "Clear communication — no jargon, no upsells",
              "Remote nationwide + in-person around Silver Spring",
              "Suggested-contribution pricing that's actually fair",
              "No charge if I can't fix the issue",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: BLUE }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Pricing"
          title="Pricing & Availability"
        />
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-6 border border-[color:var(--border)]">
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE }}>Remote</div>
            <div className="mt-1 text-3xl font-semibold" style={{ color: NAVY }}>$10 to $30<span className="text-base font-normal opacity-70">/hr</span></div>
            <p className="mt-2 text-[14px] text-[color:var(--muted-foreground)]">Screen-share from anywhere in the US. Perfect for setup, installs, and quick fixes.</p>
            <div className="mt-5"><PrimaryBtn>Book remote session <ArrowRight className="w-4 h-4" /></PrimaryBtn></div>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-[color:var(--border)]">
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE }}>In-person</div>
            <div className="mt-1 text-3xl font-semibold" style={{ color: NAVY }}>$25 to $50<span className="text-base font-normal opacity-70">/hr</span></div>
            <p className="mt-2 text-[14px] text-[color:var(--muted-foreground)]">Around Silver Spring, MD. I come to you with everything I need.</p>
            <div className="mt-5"><PrimaryBtn>Book in-person visit <ArrowRight className="w-4 h-4" /></PrimaryBtn></div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-white p-6">
          <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: BLUE }}>Availability</div>
          <div className="grid md:grid-cols-3 gap-4 text-[14px]" style={{ color: NAVY }}>
            <div><div className="font-semibold">Weekdays · In-person</div><div className="opacity-75">After 5:00 PM</div></div>
            <div><div className="font-semibold">Weekdays · Remote</div><div className="opacity-75">After 4:00 PM</div></div>
            <div><div className="font-semibold">Weekends · Both</div><div className="opacity-75">9:00 AM to 7:00 PM</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: MessageCircle, title: "Tell me your issue", body: "A quick message with what's going on — that's it." },
  { icon: Calendar, title: "Choose your date", body: "Pick a time that works for you, remote or in-person." },
  { icon: CheckCircle2, title: "Confirm online", body: "You'll get a simple confirmation with everything you need." },
  { icon: Sparkles, title: "Get it fixed", body: "We work through it together — no jargon, no rush." },
];

function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-20 bg-white/60">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="How it works" title="Four steps. That's the whole process." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-white p-5 border border-[color:var(--border)]">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: NAVY }}>
                {i + 1}
              </div>
              <s.icon className="w-5 h-5 mb-3" style={{ color: BLUE }} />
              <div className="font-semibold" style={{ color: NAVY }}>{s.title}</div>
              <p className="text-[13.5px] mt-1 text-[color:var(--muted-foreground)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TwoPath() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-4">
        <div id="request" className="rounded-2xl p-8 text-white" style={{ background: "#0000A8" }}>
          <div className="text-xs tracking-widest uppercase mb-3" style={{ color: BLUE }}>Ready to go</div>
          <h3 className="text-2xl font-semibold">I know what I need.</h3>
          <p className="mt-2 text-[14.5px] opacity-80 max-w-sm">Skip the back-and-forth. Book a session and let's get it fixed.</p>
          <div className="mt-5"><PrimaryBtn>Book support <ArrowRight className="w-4 h-4" /></PrimaryBtn></div>
        </div>
        <div id="ask" className="rounded-2xl p-8 bg-white border border-[color:var(--border)]">
          <div className="text-xs tracking-widest uppercase mb-3" style={{ color: BLUE }}>Not sure yet</div>
          <h3 className="text-2xl font-semibold" style={{ color: NAVY }}>I have a question first.</h3>
          <p className="mt-2 text-[14.5px] max-w-sm text-[color:var(--muted-foreground)]">
            Tell me what's happening and I'll let you know if I can help — no pressure, no bill.
          </p>
          <div className="mt-5"><SecondaryBtn>Ask a question <MessageCircle className="w-4 h-4" /></SecondaryBtn></div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(5);
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-white/60">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <SectionTitle
            eyebrow="Testimonials"
            title="Real feedback from real customers."
            sub="Be the first to share your experience using the form."
          />
        </div>

        <div className="rounded-2xl bg-white p-6 border border-[color:var(--border)]">
          <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: BLUE }}>Leave a review</div>
          <h3 className="text-xl font-semibold" style={{ color: NAVY }}>Share your experience</h3>
          {sent ? (
            <div className="mt-6 rounded-xl p-4 text-sm" style={{ background: `${BLUE}15`, color: NAVY }}>
              Thanks, {name || "friend"}! Your feedback means a lot.
            </div>
          ) : (
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className="text-xs font-medium" style={{ color: NAVY }}>Your name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[color:var(--border)] bg-white px-3 py-2 text-sm outline-none focus:border-[color:var(--accent)]"
                  placeholder="Alex from Silver Spring"
                />
              </div>
              <div>
                <label className="text-xs font-medium" style={{ color: NAVY }}>Rating</label>
                <div className="mt-1 flex gap-1">
                  {[1,2,3,4,5].map((n)=>(
                    <button type="button" key={n} onClick={()=>setStars(n)} className="p-1">
                      <Star className={`w-5 h-5 ${n<=stars?"fill-current":""}`} style={{ color: n<=stars? BLUE : `${NAVY}40` }} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium" style={{ color: NAVY }}>Your feedback</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-[color:var(--border)] bg-white px-3 py-2 text-sm outline-none focus:border-[color:var(--accent)] resize-none"
                  placeholder="What did I help with? How did it go?"
                />
              </div>
              <PrimaryBtn type="submit">Submit review</PrimaryBtn>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden" style={{ background: NAVY }}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 20% 20%, ${BLUE}55, transparent 40%), radial-gradient(circle at 80% 80%, ${BLUE}33, transparent 40%)`,
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight max-w-2xl mx-auto">
              Let's fix your problems with ease.
            </h2>
            <p className="mt-3 text-white/75 max-w-md mx-auto text-[15px]">
              Send a message today — usually a response within a few hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <PrimaryBtn>Book support <ArrowRight className="w-4 h-4" /></PrimaryBtn>
              <a href="#ask">
                <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/10">
                  Ask a question <MessageCircle className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10 bg-white/50">
      <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <Logo />
          <p className="mt-3 text-[13px] max-w-xs text-[color:var(--muted-foreground)]">
            Friendly, affordable tech help based in Silver Spring, MD. Remote nationwide.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-[13.5px]" style={{ color: NAVY }}>
          <a href="mailto:Techsupportforeveryone@gmail.com" className="inline-flex items-center gap-2 hover:opacity-70">
            <Mail className="w-4 h-4" style={{ color: BLUE }} /> Techsupportforeveryone@gmail.com
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-70">
            <Instagram className="w-4 h-4" style={{ color: BLUE }} /> @techsupportforeveryone
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-8 text-[12px] text-[color:var(--muted-foreground)]">
        © {new Date().getFullYear()} Tech Support for Everyone · Silver Spring, MD
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <HowItWorks />
      <TwoPath />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
