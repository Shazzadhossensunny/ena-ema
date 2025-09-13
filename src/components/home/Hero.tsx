"use client";
import { motion } from "framer-motion";
import { User, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import { FormContainer } from "../ui/core/FormContainer";
import { TrustIndicators } from "../ui/core/TrustIndicators";
import { CustomInput } from "../ui/core/CSINPUT/CustomInput";
import { CustomButton } from "../ui/core/CSBUTTON/CustomButton";

const HeroSection = () => {
  return (
    <section className="relative w-full py-[60px]">
      {/* Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Trust Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border-t border-primary">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-general-sans-12 text-secondary-light whitespace-nowrap text-xs sm:text-sm">
                Trusted by 30+ startups & entrepreneurs worldwide
              </span>
            </div>
          </motion.div>

          {/* Main Heading - Responsive */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-light leading-none px-4 sm:px-8 md:px-16 lg:px-[72px]">
              <span
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "clamp(24px, 4vw, 72px)",
                  fontWeight: "700",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-2px, -0.1vw, -4px)",
                }}
              >
                Strategic Landing Pages That
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "clamp(24px, 4vw, 72px)",
                  fontWeight: "700",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-2px, -0.1vw, -4px)",
                }}
              >
                Convert From Just <span className="text-primary">$200</span>
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
              className="text-light max-w-[990px] mx-auto px-4"
              style={{
                fontFamily: "var(--font-general-sans)",
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: "400",
                lineHeight: "clamp(22px, 3vw, 26px)",
                letterSpacing: "0",
              }}
            >
              Stop wasting traffic on generic pages. We deliver premium,
              conversion-focused landing pages designed, developed, and launched
              in just 5 days.
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
};

export default HeroSection;
