"use client";
import { motion } from "framer-motion";
import { FormContainer } from "../ui/core/FormContainer";
import { CustomInput } from "../ui/core/CSINPUT/CustomInput";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { CustomButton } from "../ui/core/CSBUTTON/CustomButton";
import { TrustIndicators } from "../ui/core/TrustIndicators";

export default function CallToAction() {
  return (
    <section className="relative py-30 bg-background-dark overflow-hidden">
      {/* Left Blur Effect */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          width: "204px",
          height: "204px",
          flexShrink: 0,
          backgroundColor: "var(--color-primary, #1FFFA5)",
          filter: "blur(300px)",
          borderRadius: "50%",
        }}
      />

      {/* Right Blur Effect */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{
          width: "204px",
          height: "204px",
          flexShrink: 0,
          backgroundColor: "var(--color-primary, #1FFFA5)",
          filter: "blur(300px)",
          borderRadius: "50%",
        }}
      />

      {/* Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Heading - Responsive */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-manrope-bold-72 text-light leading-none px-4 sm:px-8 md:px-16 lg:px-[72px]">
              <span
                className="block mb-2"
                style={{
                  fontSize: "clamp(24px, 4vw, 72px)",
                }}
              >
                Ready to Turn Visitors Into
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(24px, 4vw, 72px)",
                }}
              >
                <span className="text-primary">Real Customers?</span>
              </span>
            </h1>
          </motion.div>

          {/* Description - Responsive */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p
              className="text-light text-general-sans-18 max-w-xl mx-auto"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
              }}
            >
              Don't settle for an average page. Get a premium,
              conversion-focused landing page that pays for itself.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FormContainer>
              <div className="space-y-3">
                {/* Input Fields - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <CustomInput
                    type="text"
                    placeholder="Your name"
                    icon={User}
                  />

                  <CustomInput
                    type="email"
                    placeholder="Email Address"
                    icon={Mail}
                    className="sm:col-span-2 lg:col-span-1"
                  />

                  <CustomInput
                    type="tel"
                    placeholder="Phone Number"
                    icon={Phone}
                    className="lg:col-span-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <CustomButton
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full text-sm sm:text-base"
                    onClick={() => {
                      console.log("Form submitted");
                    }}
                  >
                    <span className="hidden sm:inline">
                      Get my high-converting landing page
                    </span>
                    <span className="sm:hidden">Get my landing page</span>
                  </CustomButton>
                </div>
              </div>
            </FormContainer>
          </motion.div>

          {/* Trust Indicators */}
          <TrustIndicators />
        </div>
      </div>
    </section>
  );
}
