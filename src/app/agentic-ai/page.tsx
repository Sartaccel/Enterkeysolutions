"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  MessageCircle,
  Menu,
  X,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const navLinks = [
  { label: "Agentic AI", href: "/agentic-ai" },
  { label: "Capabilities", href: "#services" },
  { label: "Use cases", href: "#work" },
  { label: "Our approach", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="/"
      onClick={onClick}
      aria-label="EnterKey Solutions home"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/images/enterkey logo.png"
        alt="EnterKey Solutions"
        width={220}
        height={70}
        priority
        className="h-10 w-auto object-contain sm:h-12"
      />
    </a>
  );
}


const capabilities = [
  {
    number: "01",
    title: "AI Agents",
    description:
      "Build goal-oriented agents that interpret tasks, use approved tools, and coordinate multi-step activities with appropriate guardrails.",
    icon: Bot,
    tags: ["Planning", "Tool use", "Task execution"],
  },
  {
    number: "02",
    title: "AI Chatbots",
    description:
      "Support customer and employee conversations with assistants that provide useful answers and guide people towards the next step.",
    icon: MessageCircle,
    tags: ["Customer support", "Knowledge", "Assistance"],
  },
  {
    number: "03",
    title: "Workflow Automation",
    description:
      "Reduce repetitive work by connecting processes, applications, and business rules into more efficient workflows.",
    icon: Workflow,
    tags: ["Orchestration", "Processes", "Productivity"],
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "Connect AI capabilities with existing applications, APIs, data, and business platforms.",
    icon: Network,
    tags: ["APIs", "Business systems", "Data"],
  },
];

const steps = [
  {
    number: "01",
    title: "Define the opportunity",
    description:
      "Identify business goals, pain points, users, and tasks where AI could make a meaningful difference.",
  },
  {
    number: "02",
    title: "Plan the workflow",
    description:
      "Map the agent's role, tools, data sources, integrations, permissions, and human approval points.",
  },
  {
    number: "03",
    title: "Integrate and test",
    description:
      "Develop the solution, test real scenarios, and refine its behaviour before wider deployment.",
  },
  {
    number: "04",
    title: "Deploy and improve",
    description:
      "Monitor performance, gather feedback, and improve the workflow as business needs evolve.",
  },
];

const partners = [
  {
    name: "Softmerce",
    initial: "S.",
    subtitle: "AI-powered business operations",
    description:
      "Explore AI-enabled business software across areas such as chatbots, CRM, billing, accounting, e-commerce, HRMS, and e-learning.",
    href: "https://softmerce.com/",
    theme: "from-blue-950 via-[#171b3a] to-violet-950/60",
    accent: "text-violet-300",
  },
  {
    name: "Vettero",
    initial: "V.",
    subtitle: "AI tools and agents",
    description:
      "Explore AI tools and agent-based experiences that can help connect intelligent capabilities with practical business needs.",
    href: "https://vettero.com/",
    theme: "from-[#101c39] via-[#111b35] to-blue-950",
    accent: "text-blue-300",
  },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function AgenticVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center"
      aria-label="Illustration of connected AI agents and workflows"
      role="img"
    >
      <div className="absolute inset-[7%] rounded-full border border-blue-300/15" />
      <div className="absolute inset-[18%] rounded-full border border-violet-300/20" />
      <div className="absolute inset-[29%] rounded-full border border-blue-300/15" />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute inset-[7%] rounded-full border border-dashed border-blue-300/25"
            animate={{ rotate: 360 }}
            transition={{
              duration: 48,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-[19%] rounded-full border border-dashed border-violet-300/25"
            animate={{ rotate: -360 }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      <div className="absolute inset-[20%] rounded-full bg-blue-500/15 blur-3xl" />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-[43%] w-[43%] items-center justify-center rounded-[30%] border border-blue-200/25 bg-gradient-to-br from-blue-300/20 via-blue-600/15 to-violet-500/25 shadow-[0_0_100px_rgba(59,130,246,0.18)] backdrop-blur-xl"
      >
        <div className="absolute inset-2 rounded-[27%] border border-white/10" />
        <BrainCircuit size={66} strokeWidth={1.25} className="text-blue-100" />
      </motion.div>

      {[
        {
          icon: Bot,
          label: "AI AGENTS",
          position: "left-[0%] top-[22%]",
          color: "text-blue-300",
        },
        {
          icon: Workflow,
          label: "WORKFLOWS",
          position: "right-[-1%] top-[34%]",
          color: "text-violet-300",
        },
        {
          icon: ShieldCheck,
          label: "GUARDRAILS",
          position: "bottom-[14%] left-[4%]",
          color: "text-cyan-300",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={
              reduceMotion
                ? undefined
                : { y: index % 2 === 0 ? [0, -7, 0] : [0, 7, 0] }
            }
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`glass absolute ${item.position} rounded-2xl p-3 sm:p-4`}
          >
            <Icon size={23} className={item.color} />
            <p className="mt-2 text-[9px] tracking-wider text-slate-300">
              {item.label}
            </p>
          </motion.div>
        );
      })}

      <div className="glass absolute bottom-[13%] right-[0%] rounded-full px-3 py-2 text-[10px] text-slate-300">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        HUMAN OVERSIGHT
      </div>
    </div>
  );
}

export default function AgenticAIPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#080b14] text-white">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#080b14]/85 backdrop-blur-2xl">
        <div className="section-wrap flex h-[76px] items-center justify-between gap-5">
          <Brand onClick={() => setMenuOpen(false)} />

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] transition-colors hover:text-white ${
                  link.label === "Agentic AI"
                    ? "text-blue-300"
                    : "text-slate-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-3 rounded-full border border-white/[0.16] bg-white/[0.04] px-7 py-4 text-[15px] font-medium text-white transition hover:border-white/30 hover:bg-white/[0.08] md:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/[0.06] bg-[#080b14] px-6 py-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block border-b border-white/[0.06] py-4 text-sm ${
                  link.label === "Agentic AI"
                    ? "text-blue-300"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white"
            >
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="hero-glow site-grid relative flex min-h-[760px] items-center pt-28 sm:min-h-[820px]">
        <div className="section-wrap relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="py-10 lg:py-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/[0.07] px-3.5 py-2"
            >
              <Sparkles size={14} className="text-blue-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-200 sm:text-xs">
                The next evolution of AI
              </span>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="max-w-[760px] text-[clamp(3rem,6.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.07em]"
            >
              Turn AI intelligence into{" "}
              <span className="text-gradient">business action.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              {/* Agentic AI plans, acts, and automates complex workflows. Empower
              your business with AI while keeping people in control. */}
              AI agents understand goals, plan actions, and execute tasks across connected systems—simplifying complex workflows and enabling more efficient operations, innovation, and scalable growth.
            </motion.p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                style={{ color: "#080b14", WebkitTextFillColor: "#080b14" }}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold !text-[#080b14] transition hover:bg-blue-100"
              >
                Explore AI solutions
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium !text-white transition hover:border-blue-300/40 hover:bg-blue-400/[0.06]"
              >
                Discover capabilities <ArrowDownRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-500">
              {["Practical AI", "Connected workflows", "Human oversight"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check size={14} className="text-blue-300" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <AgenticVisual />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/[0.06] bg-white/[0.02]">
        <div className="section-wrap flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-7 text-xs text-slate-400 sm:justify-between">
          <span className="font-medium text-white">
            Designed for real business workflows
          </span>
          <span className="inline-flex items-center gap-2">
            <Check size={14} className="text-blue-300" />
            Intelligent automation
          </span>
          <span className="inline-flex items-center gap-2">
            <Check size={14} className="text-blue-300" />
            Connected systems
          </span>
          <span className="inline-flex items-center gap-2">
            <Check size={14} className="text-blue-300" />
            Scalable implementation
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 text-center sm:py-32">
        <div className="section-wrap">
          <Reveal>
            <p className="eyebrow justify-center">
              Intelligence that takes action
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl">
              AI that doesn&apos;t just respond.
              <br />
              <span className="text-gradient">It helps get work done.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Agentic AI brings reasoning, tools, and workflows together to help
              complete tasks—not just generate answers. EnterKey Solutions can
              help your team identify where AI may create value, connect it with
              existing systems, and move from promising ideas to useful business
              solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="border-y border-white/[0.06] bg-[#0b1020] py-24 sm:py-32"
      >
        <div className="section-wrap">
          <Reveal>
            <SectionTitle
              eyebrow="Our capabilities"
              title="A smarter way to run everyday work."
              description="Bring AI into the workflows that matter—with solutions shaped around your operations, customers, and existing technology."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.07}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="service-card group relative h-full overflow-hidden rounded-2xl p-6"
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.07] blur-3xl transition group-hover:bg-violet-400/[0.15]" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.08]">
                        <Icon
                          size={22}
                          className="text-blue-300 transition-transform group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs tracking-widest text-slate-600">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="relative mt-7 text-lg font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section id="approach" className="py-24 sm:py-32">
        <div className="section-wrap">
          <Reveal>
            <SectionTitle
              eyebrow="From idea to implementation"
              title="A clear path from possibility to practice."
              description="Start with a business need, shape the right solution, validate how it works, and prepare it for real-world use."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <article className="h-full border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold tracking-widest text-blue-300">
                    {step.number} /{" "}
                    {["DISCOVER", "DESIGN", "BUILD", "IMPROVE"][index]}
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN OVERSIGHT */}
      <section className="border-y border-white/[0.06] bg-[#0b1020] py-20 sm:py-24">
        <div className="section-wrap grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/[0.08]">
              <ShieldCheck size={30} className="text-violet-300" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="eyebrow">Built with responsibility in mind</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Intelligent automation. Meaningful oversight.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                Define permissions, approval steps, access boundaries, and
                monitoring around each workflow. Keep people involved in
                decisions that need human judgement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 sm:py-32">
        <div className="section-wrap">
          <Reveal>
            <SectionTitle
              eyebrow="Our ecosystem"
              title="AI implementation partners."
              description="Explore technology partners and their offerings as you evaluate practical AI solutions for your business."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.1}>
                <article
                  className={`group h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${partner.theme} p-7 transition hover:border-blue-300/25 sm:p-9`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-200">
                      AI solutions
                    </span>
                    <span
                      className={`text-3xl font-semibold ${partner.accent}`}
                    >
                      {partner.initial}
                    </span>
                  </div>

                  <h3
                    className={`mt-8 text-3xl font-semibold ${partner.accent}`}
                  >
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300">
                    {partner.subtitle}
                  </p>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                    {partner.description}
                  </p>

                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-200"
                  >
                    Explore {partner.name}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="pb-20 sm:pb-28">
        <div className="section-wrap">
          <Reveal>
            <div className="hero-glow relative overflow-hidden rounded-[28px] border border-blue-300/15 bg-[#0d1425] px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="site-grid absolute inset-0 opacity-60" />
              <div className="absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[80px]" />

              <div className="relative mx-auto max-w-3xl">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10">
                  <Zap size={22} className="text-blue-300" />
                </div>

                <p className="eyebrow mt-6 justify-center">
                  Your next chapter starts here
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
                  Ready to put AI to work?
                  <br />
                  <span className="text-gradient">Let&apos;s build it.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Tell us about your business challenge. Let&apos;s explore
                  where agentic AI could help your team work smarter.
                </p>

                <a
                  href="mailto:abiisugesh@gmail.com"
                  style={{ color: "#080b14", WebkitTextFillColor: "#080b14" }}
                  className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#dbeafe] px-7 py-4 text-sm font-semibold !text-[#080b14] transition hover:bg-blue-200"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="mt-6">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
                  >
                    <ArrowLeft size={14} /> Back to EnterKey Solutions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] bg-[#060810]">
        <div className="section-wrap flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <a href="/" className="text-sm font-semibold text-white">
            EnterKey Solutions
          </a>

          <p className="text-xs text-slate-500">
            Intelligent technology. Thoughtful engineering.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
          >
            Contact us <ArrowRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
