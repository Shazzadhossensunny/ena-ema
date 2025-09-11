import React from "react";
import { Shield, RotateCcw, CheckCircle } from "lucide-react";

export const TrustIndicators: React.FC = () => {
  const indicators = [
    { icon: Shield, text: "SSL secure" },
    { icon: RotateCcw, text: "Money-back guaranteed" },
    { icon: CheckCircle, text: "Satisfaction guaranteed" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-4 pt-4">
      {indicators.map(({ icon: Icon, text }, index) => (
        <div key={index} className="flex items-center gap-2 flex-shrink-0">
          <Icon className="w-4 h-4 text-secondary-light flex-shrink-0" />
          <span className="text-general-sans-12 text-secondary-light whitespace-nowrap text-xs sm:text-sm">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
};
