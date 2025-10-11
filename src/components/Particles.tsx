import { useEffect } from "preact/hooks";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function Particles() {
  useEffect(() => {
    const containerId = "tsparticles-container";

    const createOptions = (): ISourceOptions => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const baseCount = 260;
      const particleCount = Math.round(
        ((width * height) / (1920 * 1080)) * baseCount,
      );
      const repulseDistance = width > 1920 ? 120 : 100;

      return {
        background: { color: { value: "#f1f5f9" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: { enable: true },
          },
          modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 4 },
            repulse: { distance: repulseDistance, duration: 0.4 },
          },
        },
        particles: {
          number: {
            value: particleCount,
            density: { enable: false },
          },
          color: { value: "#141437" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.3, max: 1 },
            animation: { enable: true, speed: 0.5 },
          },
          size: {
            value: { min: 1.5, max: 3 },
            animation: { enable: false },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "out" },
            random: true,
            straight: false,
          },
          collisions: { enable: false },
        },
        detectRetina: true,
      };
    };

    let cleanupFn: (() => void) | undefined;

    loadSlim(tsParticles).then(() => {
      tsParticles.load({ id: containerId, options: createOptions() });

      const handleResize = () => {
        tsParticles.dom().forEach((container) => container.destroy());
        tsParticles.load({ id: containerId, options: createOptions() });
      };

      window.addEventListener("resize", handleResize);
      cleanupFn = () => window.removeEventListener("resize", handleResize);
    });

    return () => {
      if (cleanupFn) cleanupFn();
      tsParticles.dom().forEach((container) => container.destroy());
    };
  }, []);

  return <div id="tsparticles-container" className="fixed inset-0 -z-10" />;
}
