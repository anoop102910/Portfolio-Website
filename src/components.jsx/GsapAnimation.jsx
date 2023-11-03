import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GsapAnimation({ children }) {
  const gsapAnimationContainer = useRef();
  useEffect(() => {
    let ctx;
    function move() {
      ctx = gsap.context(() => {
        gsap.from(".animate", { y: 100, opacity: 0, duration: 2, scale: 0 });
        gsap.from(".animate-bottom", { x: -400, opacity: 0, duration: 2, stagger: 0.1 });
        gsap.from(".animate-opacity", { opacity: 0, duration: 2 });
      
        gsap.from(".about #about-heading", {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about",
            start: "top 50% ",
            end: "top 20% ",
            // scrub: 1,
            // markers:true,
          },
        });

        gsap.from(".about #about-image", {
          x: -300,
          opacity: 0,
          duration: 1,
          ease:true,
          scrollTrigger: {
            trigger: ".about",
            scoller: "body",
            start: "top 30%",
            end: "top -60%",
            // scrub: 1,
            // markers: true,
          },
        });

        gsap.from(".about #about-para", {
          x: 300,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about",
            start: "top 30%",
            end: "top -60% ",
            // scrub: 1,
            // markers: true,
          },
        });
      }, gsapAnimationContainer);
      // ctx = gsap.context(() => {
      //   gsap.from(".animate", { y: 100, opacity: 0, duration: 2, scale: 0 });
      //   gsap.from(".animate-bottom", { x: -200, opacity: 0, duration: 2, stagger: 0.1 });
      //   gsap.from(".animate-opacity", { opacity: 0, duration: 2 });

      //   gsap.from("#about-heading", {
      //     y: 100,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".scroll-trigger-top",
      //       start: "top 60% ",
      //       end: "top 40% ",
      //       // scrub: 1,
      //     },
      //   });

      //   gsap.from("#about-image", {
      //     x: -300,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".scroll-trigger-left",
      //       scoller: "body",
      //       start: "top 80%",
      //       end: "top 40%",
      //       // scrub: 1,
      //       // markers: true,
      //     },
      //   });

      //   gsap.from("#about-para", {
      //     x: 300,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".scroll-trigger-right",
      //       start: "top 80%",
      //       end: "top 40% ",
      //       // scrub: 1,
      //       // markers: true,
      //     },
      //   });

      //   const tl = gsap.timeline();

      //   tl.from(".edu-card-1", {
      //     x: 300,
      //     opacity: 0,
      //     duration: 2,
      //     scrollTrigger: {
      //       trigger: ".edu-card-1",
      //       start: "top 70%",
      //       end: "top 40% ",
      //       // scrub: 1,
      //     },
      //   });
      //   tl.from(".edu-card-2", {
      //     x: -300,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".edu-card-1",
      //       start: "top 40%",
      //       end: "top 10% ",
      //       // scrub: 1,
      //     },
      //   });
      //   tl.from(".edu-card-3", {
      //     x: 300,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".edu-card-1",
      //       start: "top 10%",
      //       end: "top -20% ",
      //       // scrub: 1,
      //     },
      //   });

      //   // tl.from("#skills ", {
      //   //   x: 300,
      //   //   opacity: 0,
      //   //   duration: 1,
      //   //   scrollTrigger: {
      //   //     trigger: ".edu-card-1",
      //   //     start: "top 10%",
      //   //     end: "top -20% ",
      //   //     scrub: 1,
      //   //     markers: true,
      //   //   },
      //   // });

      //   gsap.from("#skills h1", {
      //     y: 200,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: "#skills",
      //       start: "top 50% ",
      //       end: "top 20% ",
      //       // scrub: 1,
      //       // markers: true,
      //     },
      //   });

      //   const projectTl = gsap.timeline();

      //   projectTl.from("#projects h1", {
      //     y: 200,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: "#projects",
      //       start: "top 40% ",
      //       end: "top 20% ",
      //       // scrub: 1,
      //       // markers: true,
      //     },
      //   });
      //   projectTl.from("#projects .card-image", {
      //     x: -300,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: "#projects",
      //       start: "top 40% ",
      //       end: "top 10% ",
      //       // scrub: 1,
      //     },
      //   });
      //   projectTl.from("#projects .card-content", {
      //     x: 300,
      //     opacity: 0,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: "#projects",
      //       start: "top 40% ",
      //       end: "top 10% ",
      //       // scrub: 1,
      //       // markers: true,
      //     },
      //   });

      // }, gsapAnimationContainer);
    }
    move();
    return () => ctx.revert();
  }, []);

  return (
    <div id="main" ref={gsapAnimationContainer} className="w-full">
      {children}
    </div>
  );
}

export default GsapAnimation;
