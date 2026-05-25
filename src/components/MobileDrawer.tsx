"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiX } from "react-icons/hi";

interface IMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function MobileDrawer({
  isOpen,
  onClose,
  header,
  children,
  footer,
}: IMobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[70]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-y-0 left-0 w-[85%] max-w-sm bg-slate-950 border-r border-white/10 z-[80] shadow-2xl flex flex-col p-4 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              {header}
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg text-slate-400 transition-colors"
                aria-label="Close Menu"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            <section className="flex-1 overflow-y-auto custom-scrollbar">
              {children}
            </section>

            {footer && (
              <div className="mt-auto p-4 border-t border-white/5 text-center">
                {footer}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
