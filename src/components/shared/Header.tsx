"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative w-full">
      {/* Background glow effect behind logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-[816px] h-[252px] rounded-[816px] opacity-20 bg-primary blur-[175.7px]"
          style={{
            background: "var(--color-primary)",
            filter: "blur(175.7px)",
          }}
        />
      </div>

      {/* Header content */}
      <div className="relative z-10">
        {/* Container with max-width */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">
            {/* Logo section */}
            <motion.div
              className="flex justify-center py-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                {/* Main Logo */}
                <div className="text-light">
                  <motion.div
                    className="mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Ena Ema Technologies Logo"
                      width={120}
                      height={27}
                      className="mx-auto h-[24px] w-auto object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
