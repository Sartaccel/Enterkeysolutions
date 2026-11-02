
"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const navLinks = [
  { label: "Agentic AI", href: "/agentic-ai" },
  { label: "Capabilities", href: "#services" },
  { label: "Use cases", href: "#work" },
  { label: "Our approach", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

const services = [
  { number: "01", title: "Goal-driven planning", description: "Break a business goal into manageable steps, choose appropriate tools, and adapt the plan as new information becomes available.", icon: BrainCircuit, tags: ["Task planning", "Reasoning", "Context"] },
  { number: "02", title: "Knowledge-connected agents", description: "Retrieve relevant information from approved documents and knowledge bases to support answers with sources and business context.", icon: Layers3, tags: ["Retrieval", "Knowledge bases", "Sources"] },
  { number: "03", title: "Tool and API integration", description: "Connect agents to business systems so they can retrieve records, prepare updates, and perform authorized actions within defined permissions.", icon: Code2, tags: ["APIs", "CRM", "Business systems"] },
  { number: "04", title: "Workflow orchestration", description: "Coordinate tasks across tools and, where useful, specialist agents. Track progress, validate intermediate results, and handle exceptions.", icon: Workflow, tags: ["Task routing", "State", "Recovery"] },
  { number: "05", title: "Human oversight", description: "Set approval checkpoints for sensitive actions, restrict tool access, and give teams a clear way to review, intervene, or stop execution.", icon: ShieldCheck, tags: ["Approvals", "Permissions", "Audit trails"] },
  { number: "06", title: "Evaluation and monitoring", description: "Test agents against realistic tasks and track success, failures, response time, and cost. Use feedback to improve reliability over time.", icon: Bot, tags: ["Evaluation", "Monitoring", "Feedback"] },
];

const stats = [
  { value: "01", label: "Understand the goal and constraints" },
  { value: "02", label: "Plan steps and retrieve context" },
  { value: "03", label: "Act through approved tools" },
  { value: "04", label: "Check results and escalate when needed" },
];

const projects = [
  { number: "01", name: "Customer support", category: "Illustrative use case", description: "Retrieve policy details, summarize customer history, draft a response, and route complex issues to a support specialist. Require approval for refunds or account changes.", tags: ["Knowledge retrieval", "Ticket routing"] },
  { number: "02", name: "Sales operations", category: "Illustrative use case", description: "Research incoming enquiries, organize lead information, and prepare follow-up drafts. Keep customer outreach and changes to important CRM records under team control.", tags: ["Lead research", "CRM assistance"] },
  { number: "03", name: "Document workflows", category: "Illustrative use case", description: "Extract information from documents, compare it with business rules, and flag missing details for review before updating connected systems.", tags: ["Document processing", "Validation"] },
  { number: "04", name: "Recruitment coordination", category: "Illustrative use case", description: "Organize applications, prepare job-related summaries, and coordinate interview steps. Keep hiring decisions with people and review outputs for accuracy and bias.", tags: ["Scheduling", "Recruiter assistance"] },
  { number: "05", name: "Internal knowledge", category: "Illustrative use case", description: "Help employees find policies, summarize approved reference material, and prepare task-specific answers while respecting document access permissions.", tags: ["Enterprise search", "Employee support"] },
  { number: "06", name: "Operations support", category: "Illustrative use case", description: "Collect status information across systems, identify exceptions, and prepare recommended next steps for the operations team to review.", tags: ["Status tracking", "Exception handling"] },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
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
        width={220}
        height={70}
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
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center">
      <div className="absolute inset-[8%] rounded-full border border-blue-300/15" />
      <div className="absolute inset-[20%] rounded-full border border-violet-300/20" />
      <div className="absolute inset-[31%] rounded-full border border-blue-300/15" />
      <div className="absolute inset-[20%] rounded-full bg-blue-500/10 blur-3xl" />

      {!reduceMotion && (
        <motion.div
          className="absolute inset-[8%] rounded-full border border-dashed border-blue-300/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      )}

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-[42%] w-[42%] items-center justify-center rounded-[30%] border border-blue-200/20 bg-gradient-to-br from-blue-300/20 via-blue-600/15 to-violet-500/25 shadow-[0_0_90px_rgba(59,130,246,0.16)]"
      >
        <BrainCircuit size={66} strokeWidth={1.2} className="text-blue-100" />
      </motion.div>

      <div className="glass absolute left-0 top-[22%] rounded-2xl p-4">
        <Code2 size={22} className="text-blue-300" />
        <p className="mt-2 text-[10px] text-slate-300">PLANNING</p>
      </div>

      <div className="glass absolute right-0 top-[34%] rounded-2xl p-4">
        <Sparkles size={22} className="text-violet-300" />
        <p className="mt-2 text-[10px] text-slate-300">TOOL USE</p>
      </div>

      <div className="glass absolute bottom-[13%] left-[5%] rounded-2xl p-4">
        <Layers3 size={22} className="text-cyan-300" />
        <p className="mt-2 text-[10px] text-slate-300">CONTEXT</p>
      </div>

      <div className="glass absolute bottom-[12%] right-0 rounded-full px-3 py-2 text-[10px] text-slate-300">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        HUMAN OVERSIGHT
      </div>
    </div>
  );
}

function AgenticWorkflowVisual() {
  const reduceMotion = useReducedMotion();
  const workflowNodes = [
    {
      value: stats[0].value,
      label: "Understand the goal",
      icon: MessageCircle,
      position: "left-1/2 top-[1%] -translate-x-1/2",
      color: "text-cyan-300",
      glow: "bg-cyan-400/10",
    },
    {
      value: stats[1].value,
      label: "Plan with context",
      icon: BrainCircuit,
      position: "right-[1%] top-1/2 -translate-y-1/2",
      color: "text-blue-300",
      glow: "bg-blue-400/10",
    },
    {
      value: stats[2].value,
      label: "Act through tools",
      icon: Code2,
      position: "bottom-[1%] left-1/2 -translate-x-1/2",
      color: "text-violet-300",
      glow: "bg-violet-400/10",
    },
    {
      value: stats[3].value,
      label: "Check and escalate",
      icon: ShieldCheck,
      position: "left-[1%] top-1/2 -translate-y-1/2",
      color: "text-emerald-300",
      glow: "bg-emerald-400/10",
    },
  ];

  return (
    <div className="relative mx-auto mt-12 aspect-square w-full max-w-[620px]">
      <div className="absolute inset-[15%] rounded-full bg-blue-500/10 blur-[70px]" />
      <div className="absolute inset-[22%] rounded-full border border-blue-300/10" />
      <div className="absolute inset-[31%] rounded-full border border-violet-300/15" />

      <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-300/25 to-transparent" />
      <div className="absolute left-[15%] top-1/2 h-px w-[70%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />

      <motion.div
        className="absolute inset-[15%] rounded-full border border-dashed border-blue-300/25"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.9)]" />
        <div className="absolute bottom-[8%] right-[11%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(196,181,253,0.9)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[24%] rounded-full border border-dashed border-violet-300/20"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 z-20 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center rounded-[30%] border border-blue-200/25 bg-gradient-to-br from-blue-400/25 via-[#121d39] to-violet-500/25 shadow-[0_0_70px_rgba(59,130,246,0.28)] backdrop-blur-xl"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -7, 0], scale: [1, 1.04, 1] }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Workflow className="h-8 w-8 text-blue-100 sm:h-11 sm:w-11" strokeWidth={1.4} />
          </motion.div>
          <span className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-blue-200 sm:text-[10px]">
            AI agent
          </span>
        </motion.div>
      </div>

      {workflowNodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <div
            key={node.value}
            className={`absolute z-30 ${node.position}`}
          >
            <motion.div
              className="flex w-28 flex-col items-center rounded-2xl border border-white/10 bg-[#10182b]/90 p-3 text-center shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:w-36 sm:p-4"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              whileHover={reduceMotion ? undefined : { scale: 1.07, y: -8 }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.12 },
                scale: { duration: 0.25 },
                y: {
                  duration: 3.6,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                },
              }}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 ${node.glow}`}>
                <Icon className={`h-5 w-5 ${node.color}`} strokeWidth={1.7} />
              </div>
              <span className="mt-2 text-[9px] font-semibold tracking-[0.18em] text-blue-300">
                {node.value}
              </span>
              <span className="mt-1 text-[9px] leading-3 text-slate-300 sm:text-[11px] sm:leading-4">
                {node.label}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

function StatsSection() {
  return (
    <section
      id="overview"
      className="site-grid relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-[#0b1020] py-20 sm:py-24"
    >
      <div className="absolute left-1/2 top-0 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-violet-500/[0.08] blur-[90px]" />

      <div className="section-wrap relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              How agentic AI works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
              From a business goal to a checked result.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              An agent combines an AI model, relevant context, and approved tools
              to work through a task. It can repeat these steps as needed,
              with limits and human checkpoints defined for the workflow.
            </p>
          </div>
        </Reveal>

        <AgenticWorkflowVisual />
        <p className="mt-5 text-center text-xs text-slate-500">
          Each workflow needs clear permissions, stopping conditions, and a path to human review.
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="section-wrap scroll-mt-24 py-24 sm:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Agentic AI capabilities"
          title={
            <>
              Agents with purpose.
              <br />
              <span className="text-gradient">Workflows with control.</span>
            </>
          }
          description="Design AI agents around specific tasks, reliable information, and the tools your team uses to get work done."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.number} delay={(index % 3) * 0.07}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="service-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.06] blur-3xl transition group-hover:bg-violet-400/[0.12]" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.08]">
                    <Icon size={22} className="text-blue-300" />
                  </div>
                  <span className="text-xs tracking-widest text-slate-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-lg font-medium text-white">
                  {service.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-400">
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
                  className="relative mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-white"
                >
                  Discuss this capability
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-y border-white/[0.06] bg-[#0b1020] py-24 sm:py-32"
    >
      <div className="section-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Potential applications"
            title={
              <>
                Practical agents.
                <br />
                <span className="text-gradient">Everyday business tasks.</span>
              </>
            }
            description="Explore examples of where agentic AI can support teams. These are potential workflows, not claims of completed client deployments."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08}>
              <article className="project-card group h-full overflow-hidden rounded-2xl border border-white/[0.08]">
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#121d39] via-[#101528] to-violet-950/40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.15),transparent_60%)]" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110">
                    {index === 0 ? (
                      <Globe2 size={35} className="text-blue-300" />
                    ) : index === 1 ? (
                      <Sparkles size={35} className="text-violet-300" />
                    ) : (
                      <Layers3 size={35} className="text-cyan-300" />
                    )}
                  </div>
                  <span className="absolute left-5 top-5 text-xs tracking-widest text-slate-500">
                    USE CASE / {project.number}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs text-blue-300">{project.category}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { question: "What is agentic AI?", answer: "Agentic AI describes systems that use AI models to pursue goals across multiple steps. They can use tools, maintain task context, assess results, and decide what to do next within the limits set by their designers." },
    { question: "How is it different from a chatbot or traditional automation?", answer: "A basic chatbot mainly responds to messages, while a fixed automation follows predefined rules. An agent can choose steps and tools based on the situation. These categories overlap: a chatbot can include agent capabilities, and agents often run inside structured workflows." },
    { question: "Does an AI agent work without human supervision?", answer: "The level of autonomy depends on the task. Read-only research may need less supervision, while payments, external messages, record changes, and other sensitive actions should have explicit controls and appropriate approval checkpoints." },
    { question: "Can agents connect to existing business applications?", answer: "Integration depends on available APIs, permissions, and data quality. A project starts by checking which systems can be connected and which actions the agent should be allowed to perform." },
    { question: "Can agents make mistakes?", answer: "Yes. Agents can misunderstand instructions, retrieve incomplete information, or choose an incorrect action. Testing, output validation, access controls, monitoring, and human escalation help manage these risks but do not eliminate them." },
    { question: "How do we protect business data?", answer: "Design for least-privilege access, secure credential handling, appropriate retention, and auditability. Treat retrieved documents and tool responses as untrusted input, and enforce action permissions outside the model." },
    { question: "How do we measure value?", answer: "Establish a baseline, then measure task completion, output quality, human review effort, time per task, and operating cost. A useful pilot demonstrates improvement on a clearly defined workflow before broader rollout." },
    { question: "Where should we start?", answer: "Choose one bounded workflow with accessible data, clear success criteria, and manageable consequences if an error occurs. Prototype it, test realistic failure cases, and expand only after reviewing the results." },
  ];
  return (
    <section id="faq" className="section-wrap scroll-mt-24 py-24 sm:py-32">
      <SectionHeading eyebrow="Agentic AI explained" title={<>Your questions. <span className="text-gradient">Clear answers.</span></>} description="Understand what agents can do, where they need support, and how to start with a practical scope." />
      <div className="mt-10 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <summary className="cursor-pointer text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300">{faq.question}</summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const principles = [
    {
      icon: Code2,
      title: "Scope and success criteria",
      description:
        "Map the workflow, identify the data and tools it needs, and agree on measurable outcomes before building.",
    },
    {
      icon: Zap,
      title: "Prototype and evaluate",
      description:
        "Build a focused pilot and test normal tasks, edge cases, tool failures, and misleading inputs before release.",
    },
    {
      icon: MessageCircle,
      title: "Deploy with oversight",
      description:
        "Roll out gradually with approval gates, logs, budget limits, and human handoff. Review results and refine the workflow.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="section-wrap grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Our delivery approach"
            title={
              <>
                Useful AI starts with{" "}
                <span className="text-gradient">a clear goal.</span>
              </>
            }
            description="Start with a business process that can be measured. Our approach brings workflow design, integration, evaluation, and human oversight into one delivery plan."
          />
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/30 hover:bg-white/[0.04]"
          >
            Discuss your AI workflow <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="grid gap-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.07]">
                    <Icon size={22} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="section-wrap">
        <Reveal>
          <div className="hero-glow relative overflow-hidden rounded-[28px] border border-blue-300/15 bg-[#0d1425] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="site-grid absolute inset-0 opacity-60" />
            <div className="absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[80px]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10">
                <Zap size={22} className="text-blue-300" />
              </div>

              <p className="eyebrow mt-6 justify-center">Let&apos;s connect</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
                Have a workflow in mind?
                <br />
                <span className="text-gradient">Let&apos;s explore agentic AI.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Tell us which task slows your team down, which systems it involves,
                and what a successful outcome would look like.
              </p>

              <a
                href="mailto:info@enterkeysolutions.com"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.16] bg-white/[0.04] px-7 py-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main id="home" className="overflow-hidden bg-[#080b14] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#080b14]/85 backdrop-blur-2xl">
        <div className="section-wrap flex h-[76px] items-center justify-between gap-5">
          <Brand onClick={() => setMenuOpen(false)} />

          <nav className="hidden items-center gap-8 md:flex">
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
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/[0.06] bg-[#080b14] px-6 py-3 md:hidden">
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
                Agentic AI for business
              </span>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="max-w-[760px] text-[clamp(3rem,6.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.07em]"
            >
              Intelligent agents,
              <br />
              <span className="text-gradient">purposeful action.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              Move from answering questions to completing multi-step tasks.
              Design AI agents that plan, use approved tools, and support
              business workflows with people in control.
            </motion.p>

            <div className="mt-9 flex flex-wrap gap-3">
             
<a
  href="#services"
  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold !text-[#080b14] transition hover:bg-blue-100"
>
  <span className="text-[#080b14]">Explore AI capabilities</span>
  <ArrowUpRight
    size={17}
    className="text-[#080b14] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</a>


              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-blue-300/40 hover:bg-blue-400/[0.06]"
              >
                Discover Agentic AI <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-500">
              {["Goal-driven planning", "Connected tools", "Human oversight"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
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
            <HeroVisual />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
      </section>

      {/* STATS */}
      <StatsSection />

      {/* SERVICES */}
      <ServicesSection />

      {/* USE CASES */}
      <WorkSection />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* ABOUT */}
      <AboutSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] bg-[#060810]">
        <div className="section-wrap flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <Brand />
          <p className="text-xs text-slate-500">
            © 2026 EnterKey Solutions. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
          >
            Back to top <ArrowDownRight size={14} className="-rotate-135" />
          </a>
        </div>
      </footer>
    </main>
  );
}

