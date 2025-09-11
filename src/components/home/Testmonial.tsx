"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "Sarah Johnson",
    designation: "SaaS Founder",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    text: "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    name: "Mike Chen",
    designation: "Fitness Coach",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    text: "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    name: "Amanda Rodriguez",
    designation: "E-Commerce Owner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "David Lee",
    designation: "SaaS Founder",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="py-30 bg-background"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "var(--color-background, #151E1B)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-manrope-medium-48 mb-2"
              style={{
                color: "var(--color-text-light, #F5F5F5)",
                fontFamily: "var(--font-manrope, Manrope)",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "72px",
                letterSpacing: "-2px",
              }}
            >
              What Our Clients Are Saying{" "}
              <span
                style={{
                  color: "var(--color-primary, #1FFFA5)",
                }}
              >
                About Us
              </span>
            </h2>
            <div style={{ marginBottom: "8px" }}></div>
            <p
              className="text-general-sans-16"
              style={{
                color: "var(--color-text-light, #F5F5F5)",
                fontFamily: 'var(--font-general-sans, "General Sans")',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0px",
              }}
            >
              Real feedback from real businesses who've seen real results.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div style={{ marginTop: "48px" }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet testimonial-bullet",
                bulletActiveClass: "testimonial-bullet-active",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="h-full"
                    style={{
                      padding: "24px",
                      borderRadius: "12px",
                      backgroundColor: "var(--color-card, #192420)",
                    }}
                  >
                    {/* Stars */}
                    <div
                      className="flex items-center mb-6"
                      style={{ gap: "8px" }}
                    >
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          fill="var(--color-primary, #1FFFA5)"
                          color="var(--color-primary, #1FFFA5)"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p
                      className="mb-9"
                      style={{
                        color: "var(--color-text-light, #F5F5F5)",
                        fontFamily: 'var(--font-general-sans, "General Sans")',
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                        marginBottom: "36px",
                      }}
                    >
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center" style={{ gap: "12px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "36px",
                          backgroundImage: `url(${testimonial.avatar})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundColor: "lightgray",
                        }}
                      />
                      <div
                        style={{
                          gap: "2px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            color: "var(--color-text-light, #F5F5F5)",
                            fontFamily:
                              'var(--font-general-sans, "General Sans")',
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal",
                            letterSpacing: "0px",
                          }}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          style={{
                            color: "var(--color-text-light, #F5F5F5)",
                            fontFamily:
                              'var(--font-general-sans, "General Sans")',
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "18px",
                            letterSpacing: "0px",
                          }}
                        >
                          {testimonial.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 50px !important;
        }

        .testimonial-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .testimonial-bullet-active {
          background: var(--color-primary, #1fffa5) !important;
          width: 12px !important;
          height: 12px !important;
        }

        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
