"use client";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative w-full bg-background overflow-hidden">
      {/* Background glow effect behind logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-[816px] h-[816px] rounded-full opacity-20 bg-primary blur-[175.7px]"
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
                  <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
                    <span className="font-normal">ena·ema</span>
                  </h1>
                  <p className="text-xs md:text-sm text-secondary-light mt-1 tracking-[0.2em] uppercase">
                    TECHNOLOGIES
                  </p>
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
