import { useEffect, useRef } from "react";

export default function TrustedBySection({ data } = {}) {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);

  const logos = [
    "/images/trust_1.png",
    "/images/trust_2.png",
    "/images/trust_3.png",
    "/images/trust_4.png",
    "/images/trust_5.png",
    "/images/trust_6.png",
  ];

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const animate = () => {
      if (!sliderRef.current || pausedRef.current) return;

      positionRef.current -= 1;
      const sliderWidth = sliderRef.current.scrollWidth / 2;

      if (Math.abs(positionRef.current) >= sliderWidth) {
        positionRef.current = 0;
      }

      sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    animationRef.current = requestAnimationFrame(function animate() {
      if (!pausedRef.current) {
        positionRef.current -= 1;
        const sliderWidth = sliderRef.current.scrollWidth / 2;

        if (Math.abs(positionRef.current) >= sliderWidth) {
          positionRef.current = 0;
        }

        sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      }
    });
  };

  return (
    <div className="mb-[90px] md:mb-[120px] lg:mb-[536px]">
      <div className="w-[90%] max-w-[1500px] mx-auto">
        <div className="lg:pb-[160px] md:pb-[200px] sm:pb-[65px] md:pb-[180px] pb-[50px] lg:pt-[98px] xl:pt-[201px] md:pt-[80px] sm:pt-[60px] pt-[40px]">
          <h2 className="font-inter-bold xl:text-[86px] lg:text-[70px] md:text-[60px] text-[30px] font-inter-bold text-center text-black dark:text-white md:pb-[30px] pb-[15px] sm:pb-[35px] relative z-[1]">
            {data?.Title || "Trusted by"}
          </h2>
          <p className="font-inter-regular md:text-[24px] sm:text-[18px] text-[12px] tracking-[-0.03em] text-center text-grey-1">
            Professionals and Businesses Across the UAE
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex dark:bg-black bg-grey-2 backdrop-blur-[58.2px]  py-[10px] sm:py-[24px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={sliderRef} className="flex gap-[74px] min-w-max">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`trust-img-${index}`}
                className="flex-shrink-0 h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        <div className="dark:hidden absolute left-0 top-0 bottom-0 w-[150px] bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="dark:hidden absolute right-0 top-0 bottom-0 w-[150px] bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  );
}
