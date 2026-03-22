import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";

// ✅ Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// ✅ safer interface
interface ParaElement extends HTMLElement {
  anim?: gsap.core.Tween;
  split?: any;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  // ❗ disable on mobile
  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll<ParaElement>(".para");
  const titles = document.querySelectorAll<ParaElement>(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // ✅ Paragraph animation
  paras.forEach((para) => {
    para.classList.add("visible");

    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // ✅ Title animation
  titles.forEach((title) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }

    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // ❌ REMOVE infinite loop (very important)
  // ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
