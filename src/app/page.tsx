
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Layers3,
  Menu,
  X,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  Boxes,
  Globe2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
const COPYRIGHT_YEAR = 2026;

const services = [
  {
    number: "01",
    title: "Web Engineering",
    description:
      "High-performance web applications engineered around your business goals.",
    icon: Code2,
    tags: ["Web Apps", "Platforms", "APIs"],
  },
  {
    number: "02",
    title: "Mobile Experiences",
    description:
      "Intuitive mobile products that connect people to your business.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Turn data and intelligent automation into meaningful business value.",
    icon: BrainCircuit,
    tags: ["AI Solutions", "Automation", "Data"],
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Build resilient digital experiences with security in mind.",
    icon: ShieldCheck,
    tags: ["Security", "Risk", "Protection"],
  },
  {
    number: "05",
    title: "Blockchain Solutions",
    description:
      "Explore secure, transparent digital systems built for your use case.",
    icon: Boxes,
    tags: ["Smart Contracts", "Web3", "Integration"],
  },
  {
    number: "06",
    title: "Dedicated Engineering",
    description:
      "Extend your team with engineering talent aligned to your roadmap.",
    icon: Layers3,
    tags: ["Team Extension", "Delivery", "Scale"],
  },
];

const stats = [
  { value: "25+", label: "Successful Projects" },
  { value: "12+", label: "Years of Business" },
  { value: "50+", label: "Team Members" },
  { value: "20+", label: "Happy Clients" },
  { value: "4.5", label: "Star Ratings by Clients" },
];

const projects = [
  {
    category: "DIGITAL PLATFORMS",
    title: "Ideas into experiences.",
    description:
      "Scalable digital experiences designed to solve real-world problems.",
    icon: Globe2,
    number: "01",
  },
  {
    category: "INTELLIGENT SYSTEMS",
    title: "Smarter by design.",
    description:
      "Connected systems that bring automation and intelligence together.",
    icon: BrainCircuit,
    number: "02",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, users, challenges, and opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We define the right solution, architecture, scope, and roadmap.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We design, develop, test, and refine with a focus on quality.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "We support continuous improvement as your business grows.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our approach", href: "#approach" },
  { label: "Our work", href: "#work" },
  { label: "About", href: "#about" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}


function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label="EnterKey Solutions home"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/images/enterkey logo.png"
        alt="EnterKey Solutions"
        width={190}
        height={55}
        priority
        className="h-10 w-auto object-contain sm:h-12"
      />
    </a>
  );
}


function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>

      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full border border-blue-400/10" />
      <div className="absolute inset-[18%] rounded-full border border-violet-400/15" />
      <div className="absolute inset-[28%] rounded-full border border-blue-300/15" />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute inset-[8%] rounded-full border border-dashed border-blue-300/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute inset-[19%] rounded-full border border-violet-300/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      <motion.div
        className="glow-orb absolute inset-[17%] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [0.94, 1.04, 0.94],
                opacity: [0.75, 1, 0.75],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative flex h-[44%] w-[44%] items-center justify-center rounded-[32%] border border-blue-200/25 bg-gradient-to-br from-blue-300/20 via-blue-600/10 to-violet-500/20 shadow-[0_0_100px_rgba(59,130,246,0.15)] backdrop-blur-xl">
        <div className="absolute inset-2 rounded-[30%] border border-white/10" />
        <Zap
          size={68}
          strokeWidth={1.2}
          className="text-blue-100 drop-shadow-[0_0_20px_rgba(147,197,253,0.8)]"
        />
      </div>

      <motion.div
        className="glass absolute left-[2%] top-[22%] rounded-2xl p-3.5 sm:p-4"
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 size={22} className="text-blue-300" />
      </motion.div>

      <motion.div
        className="glass absolute right-[1%] top-[36%] rounded-2xl p-3.5 sm:p-4"
        animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BrainCircuit size={23} className="text-violet-300" />
      </motion.div>

      <motion.div
        className="glass absolute bottom-[14%] left-[14%] rounded-2xl p-3.5 sm:p-4"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Layers3 size={22} className="text-cyan-300" />
      </motion.div>

      <div className="glass absolute bottom-[14%] right-[7%] rounded-full px-3 py-2 text-[10px] font-medium tracking-wide text-slate-300 sm:text-xs">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        ENGINEERED FOR WHAT&apos;S NEXT
      </div>
    </div>
  );
}

function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-white py-20 text-[#38505d] sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-10">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              EnterKey at a glance
            </h2>

            <p className="mt-5 text-base text-[#526977] sm:text-xl">
              Unveiling the technological advancements and insights
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:mt-20 md:grid-cols-5">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div
                className={`relative flex min-h-[125px] flex-col items-center justify-center px-3 py-5 text-center ${
                  index > 0 ? "md:border-l md:border-[#d2d2d2]" : ""
                } ${
                  index === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <motion.p
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 14 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="text-5xl font-light tracking-tight sm:text-6xl"
                >
                  {stat.value}
                </motion.p>

                <p className="mt-4 text-sm font-light sm:text-lg">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="overflow-hidden bg-[#080b14]">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#080b14]/80 backdrop-blur-2xl">
        <div className="section-wrap flex h-[72px] items-center justify-between">
          <Brand onClick={() => setMenuOpen(false)} />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:border-blue-300/50 hover:bg-blue-400/10 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-white/10 bg-[#0b1020] px-6 py-5 md:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/[0.06] py-4 text-sm text-slate-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="hero-glow site-grid relative flex min-h-[760px] items-center pt-28 sm:min-h-[820px]">
        <div className="section-wrap relative z-10 grid items-center gap-5 lg:grid-cols-[1.05fr_.95fr] lg:gap-0">
          <div className="relative z-10 py-12 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/[0.07] px-3.5 py-2"
            >
              <Sparkles size={14} className="text-blue-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-200 sm:text-xs">
                Digital engineering &amp; innovation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[760px] text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[0.99] tracking-[-0.07em] text-white"
            >
              Engineering
              <br />
              <span className="text-gradient">what&apos;s next.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              We turn ambitious ideas into thoughtful digital experiences,
              intelligent software, and scalable technology solutions
              built for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#080b14] transition hover:bg-blue-100"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Explore capabilities
                <ArrowDownRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500"
            >
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-blue-300" />
                Purpose-built solutions
              </span>

              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-blue-300" />
                Engineering-led approach
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-white/[0.06] bg-white/[0.015]">
        <div className="section-wrap flex flex-col justify-between gap-4 py-7 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-slate-400">
            Technology should do more than work.
            <span className="text-white">
              {" "}It should move your business forward.
            </span>
          </p>

          <a
            href="#about"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"
          >
            Get to know us <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* ENTERKEY AT A GLANCE */}
      <StatsSection />

      {/* SERVICES */}
      <section id="services" className="relative py-24 sm:py-32">
        <div className="section-wrap">
          <Reveal>
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Our capabilities"
                title="Complex challenges. Thoughtful solutions."
                description="From the first idea to a production-ready product, we bring strategy, engineering, and technology together."
              />

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 text-sm text-white transition hover:text-blue-300"
              >
                Discuss your project <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.07}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="service-card group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7"
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.07] blur-3xl transition group-hover:bg-blue-400/[0.16]" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.08]">
                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          className="text-blue-300 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <span className="text-xs tracking-widest text-slate-600">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="relative mt-7 text-xl font-medium tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      aria-label={`Discuss ${service.title}`}
                      className="relative mt-7 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-blue-300/40 group-hover:bg-blue-400/10 group-hover:text-blue-200"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="relative border-y border-white/[0.06] bg-[#0b1020] py-24 sm:py-32"
      >
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Built with intent. Designed to make a difference."
              description="Explore the kinds of digital experiences and engineering solutions we can build together."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <Reveal key={project.number} delay={index * 0.12}>
                  <article className="project-card group overflow-hidden rounded-3xl">
                    <div
                      className={`relative flex min-h-[280px] items-center justify-center overflow-hidden p-8 sm:min-h-[350px] ${
                        index === 0
                          ? "bg-gradient-to-br from-blue-950 via-[#111b35] to-[#10101f]"
                          : "bg-gradient-to-br from-violet-950/60 via-[#16152b] to-[#0d1321]"
                      }`}
                    >
                      <div className="site-grid absolute inset-0 opacity-70" />
                      <div className="absolute h-52 w-52 rounded-full bg-blue-500/15 blur-[80px]" />

                      {index === 0 ? (
                        <motion.div
                          whileHover={{ rotate: -3, y: -5 }}
                          className="relative w-full max-w-[330px] rounded-2xl border border-blue-200/20 bg-[#0b1120]/90 p-4 shadow-2xl sm:p-5"
                        >
                          <div className="flex items-center gap-1.5 border-b border-white/10 pb-4">
                            <span className="h-2 w-2 rounded-full bg-red-400/80" />
                            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                            <span className="ml-auto text-[9px] text-slate-500">
                              DIGITAL PLATFORM
                            </span>
                          </div>

                          <div className="mt-5 grid grid-cols-[1fr_.8fr] gap-3">
                            <div className="space-y-3">
                              <div className="h-2 w-3/4 rounded-full bg-blue-300/60" />
                              <div className="h-2 w-full rounded-full bg-white/10" />
                              <div className="h-2 w-4/5 rounded-full bg-white/10" />
                              <div className="mt-5 h-20 rounded-xl border border-blue-300/10 bg-gradient-to-br from-blue-500/20 to-violet-500/10" />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                              <Icon className="text-blue-300" size={23} />
                              <div className="mt-5 h-2 w-full rounded-full bg-white/10" />
                              <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                              <div className="mt-5 h-8 rounded-lg bg-blue-400/15" />
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ rotate: 3, y: -5 }}
                          className="relative grid w-full max-w-[330px] grid-cols-2 gap-3"
                        >
                          {[0, 1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex aspect-square items-center justify-center rounded-2xl border border-violet-200/15 bg-[#141529]/90"
                            >
                              {item === 0 ? (
                                <BrainCircuit size={34} className="text-violet-300" />
                              ) : item === 1 ? (
                                <Zap size={28} className="text-blue-300" />
                              ) : item === 2 ? (
                                <Layers3 size={28} className="text-cyan-300" />
                              ) : (
                                <Sparkles size={28} className="text-purple-300" />
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}

                      <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] tracking-widest text-slate-300">
                        CONCEPT PREVIEW
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-4 p-6 sm:p-8">
                      <div>
                        <p className="eyebrow !text-[10px]">
                          {project.category}
                        </p>

                        <h3 className="mt-3 text-xl font-medium text-white sm:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                          {project.description}
                        </p>
                      </div>

                      <a
                        href="#contact"
                        aria-label={`Discuss a project like ${project.title}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-blue-300/40 hover:bg-blue-400/10"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-600">
            The visuals above are illustrative concepts, not verified client projects or published case studies.
          </p>
        </div>
      </section>

      {/* ABOUT & PROCESS */}
      <section id="about" className="py-24 sm:py-32">
        <div className="section-wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Our philosophy</p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-5xl">
                Great technology starts with{" "}
                <span className="text-gradient">better thinking.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                We believe the strongest digital products come from
                understanding the problem first, choosing the right
                technology, and engineering with purpose.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
              >
                Let&apos;s build something meaningful
                <MoveUpRight size={16} />
              </a>
            </div>
          </Reveal>

          <div id="approach" className="space-y-4">
            {process.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <div className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-blue-300/20 hover:bg-blue-400/[0.035] sm:gap-7 sm:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.07] text-xs font-semibold text-blue-300">
                    {item.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-slate-600 transition group-hover:text-blue-300"
                  />
                </div>
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
                  <Sparkles size={22} className="text-blue-300" />
                </div>

                <p className="eyebrow mt-6">
                  Your next chapter starts here
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
                  Have an idea?
                  <br />
                  <span className="text-gradient">
                    Let&apos;s engineer it.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Tell us what you&apos;re working on. Let&apos;s explore
                  the right solution and turn your vision into something real.
                </p>

                <a
                  href="mailto:info@enterkeysolutions.com?subject=Project%20Inquiry"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#080b14] transition hover:bg-blue-100"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <p className="mt-5 text-xs text-slate-500">
                  Prefer email?{" "}
                  <a
                    href="mailto:info@enterkeysolutions.com"
                    className="text-slate-300 underline underline-offset-4 hover:text-white"
                  >
                    Contact our team
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] bg-[#060810]">
        <div className="section-wrap py-10">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <Brand />

              <p className="mt-3 max-w-xs text-xs leading-6 text-slate-500">
                Thoughtful engineering for a digital-first world.
              </p>
            </div>

            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400"
              aria-label="Footer navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {COPYRIGHT_YEAR} EnterKey Solutions. All rights reserved.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Back to top <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
