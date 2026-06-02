"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { SiNodedotjs } from "react-icons/si";
import { GoGoal } from "react-icons/go";

const categories = [
  {
    title: "JavaScript",
    icon: <BsJavascript className="text-4xl text-yellow-400" />,
    description:
      "Master closures, prototypes, event loop, and modern ES6+ features.",
    link: "/javascript",
    color: "from-yellow-400/20 to-yellow-600/5",
  },
  {
    title: "TypeScript",
    icon: <BsTypescript className="text-4xl text-blue-400" />,
    description:
      "Deep dive into types, interfaces, generics, and advanced type patterns.",
    link: "/typescript",
    color: "from-blue-400/20 to-blue-600/5",
  },
  {
    title: "React",
    icon: <IoLogoReact className="text-4xl text-cyan-400" />,
    description:
      "Hooks, reconciliation, server components, and performance optimization.",
    link: "/react",
    color: "from-cyan-400/20 to-cyan-600/5",
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs className="text-4xl text-green-400" />,
    description:
      "Streams, buffers, event emitter, and scalable backend architecture.",
    link: "/node",
    color: "from-green-400/20 to-green-600/5",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-100 w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="group flex cursor-pointer items-center gap-x-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xs transition-all group-hover:bg-blue-500/40" />
                <span className="relative flex items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800 p-1.5">
                  <GoGoal className="text-xl text-blue-400" />
                </span>
              </div>
              <span className="font-sans font-bold tracking-tight text-white">
                Interview Prep
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/javascript"
                className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                href="/javascript"
                className="btn-theme px-4! py-1.5! text-sm"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center"
          >
            <div className="flex justify-center">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-blue-500/20 blur-md transition-all duration-500 group-hover:bg-blue-500/40" />
                <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900 p-4 shadow-2xl">
                  <GoGoal className="text-5xl text-blue-400" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
              <span className="bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent">
                Master Your
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Technical Interview
              </span>
            </h1>

            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-slate-400 lg:text-xl">
              Comprehensive preparation guides for modern web technologies.
              Built for developers who want to dive deep into the core concepts.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/javascript"
                className="btn-theme-primary px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <button className="btn-theme px-8 py-4 text-lg">
                View GitHub
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={category.link}
                className="group card-theme relative block h-full overflow-hidden transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative space-y-4">
                  <div className="inline-flex rounded-xl border border-white/5 bg-slate-800/50 p-3 transition-transform duration-500 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white italic">
                    {category.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-slate-400">
                    {category.description}
                  </p>
                  <div className="flex items-center pt-4 text-sm font-semibold text-blue-400 transition-all group-hover:gap-2">
                    Explore Now <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            © 2026 Interview Preparation • Focus on Mastery
          </p>
        </div>
      </footer>
    </div>
  );
}
