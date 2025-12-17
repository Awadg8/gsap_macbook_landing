"use client";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages, performanceImgPositions } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(
    () => {
      // Text fade-in animation
      gsap.fromTo(
        ".content p",
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile || !sectionRef.current) return;

      // Image animations (desktop only)
      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate all images at time 0, excluding p5
      performanceImgPositions.forEach((pos) => {
        if (pos.id === "p5") return;

        const toVars: Record<string, string | number> = {};

        if ("left" in pos && pos.left !== undefined)
          toVars.left = `${pos.left}%`;
        if ("right" in pos && pos.right !== undefined)
          toVars.right = `${pos.right}%`;
        if ("bottom" in pos && pos.bottom !== undefined)
          toVars.bottom = `${pos.bottom}%`;
        if ("transform" in pos && pos.transform !== undefined)
          toVars.transform = String(pos.transform);

        tl.to(`.${pos.id}`, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section ref={sectionRef} className="performance">
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} alt={id} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
