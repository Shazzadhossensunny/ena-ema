"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, PenTool, Rocket } from "lucide-react";

// Process Step Card Component
const ProcessCard = ({ step, index }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { delay: index * 0.2 + 0.3, duration: 0.4, type: "spring" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.2 + 0.1, duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="relative bg-card rounded-lg p-9 text-center"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Day Badge */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-2 px-2 py-1 rounded-full border border-primary bg-background"
        variants={badgeVariants}
        initial="initial"
        animate="animate"
      >
        <span className="text-general-sans-12 text-primary">{step.day}</span>
      </motion.div>

      {/* Icon */}
      <motion.div
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-foreground mb-9"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <step.icon className="w-9 h-9 text-primary" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
      >
        <h3 className="text-xl font-medium text-light mb-2 font-general-sans">
          {step.title}
        </h3>
        <p className="text-general-sans-14 text-secondary-light">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Main Idea Section Component
const IdeaSection = () => {
  const processSteps = [
    {
      day: "Day 1",
      icon: User,
      title: "Book Your Project",
      description: "Fill out a short form and we'll get started immediately.",
    },
    {
      day: "Day 2-4",
      icon: PenTool,
      title: "Design & Development",
      description:
        "We create your custom landing page with proven conversion frameworks.",
    },
    {
      day: "Day 5",
      icon: Rocket,
      title: "Launch & Deliver",
      description:
        "Your landing page goes live and starts converting visitors into customers.",
    },
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <section className="py-30 bg-background relative overflow-hidden">
      {/* Blur Effect */}
      <div
        className="absolute left-0 bottom-44 w-52 h-52 rounded-full opacity-20 bg-primary blur-[300px] z-50"
        style={{
          background: "var(--color-primary)",
          filter: "blur(300px)",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-manrope-medium-48 text-light mb-2 tracking-tight"
              variants={headerVariants}
              initial="initial"
              animate="animate"
            >
              From Idea to Live Landing Page in{" "}
              <span className="text-primary">Just 5 Days</span>
            </motion.h2>

            <motion.p
              className="text-general-sans-16 text-light max-w-2xl mx-auto"
              variants={titleVariants}
              initial="initial"
              animate="animate"
            >
              Our streamlined process ensures fast delivery without compromising
              quality.
            </motion.p>
          </div>

          {/* Process Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {processSteps.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
