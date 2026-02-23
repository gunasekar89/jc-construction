"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const FRAMES_PER_PHASE = 192;
const TOTAL_FRAMES = FRAMES_PER_PHASE * 3;
const BACKGROUND = "#FFFFFF";
const SOURCE_TOP_EDGE_CROP = 12;
const SOURCE_BOTTOM_EDGE_CROP = 12;

function getFramePath(index: number): string {
  if (index <= 191) {
    return `/sequence/phase1/${String(index + 1).padStart(5, "0")}.webp`;
  }

  if (index <= 383) {
    return `/sequence/phase2/${String(index - 191).padStart(5, "0")}.webp`;
  }

  return `/sequence/phase3/${String(index - 383).padStart(5, "0")}.webp`;
}

type Align = "left" | "right" | "center";

type StoryBeat = {
  heading: string;
  body: string;
  align: Align;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
};

function StoryText({ progress }: { progress: MotionValue<number> }) {
  const beat1Opacity = useTransform(progress, [0, 0.08, 0.18], [1, 1, 0]);
  const beat1Y = useTransform(progress, [0, 0.08, 0.18], [12, 0, -12]);
  const beat2Opacity = useTransform(progress, [0.12, 0.25, 0.38], [0, 1, 0]);
  const beat2Y = useTransform(progress, [0.12, 0.25, 0.38], [18, 0, -18]);
  const beat3Opacity = useTransform(progress, [0.37, 0.5, 0.63], [0, 1, 0]);
  const beat3Y = useTransform(progress, [0.37, 0.5, 0.63], [18, 0, -18]);
  const beat4Opacity = useTransform(progress, [0.62, 0.75, 0.88], [0, 1, 0]);
  const beat4Y = useTransform(progress, [0.62, 0.75, 0.88], [18, 0, -18]);
  const beat5Opacity = useTransform(progress, [0.84, 0.94, 1], [0, 1, 1]);
  const beat5Y = useTransform(progress, [0.84, 0.94, 1], [18, 0, 0]);

  const beats: StoryBeat[] = [
    {
      heading: "The Vision",
      body: "3D Elevation Design - Your dream home begins here.",
      align: "center",
      opacity: beat1Opacity,
      y: beat1Y,
    },
    {
      heading: "Structural Core",
      body: "Precision-engineered frameworks.",
      align: "left",
      opacity: beat2Opacity,
      y: beat2Y,
    },
    {
      heading: "Integrated Systems",
      body: "Electrical & Plumbing - Hidden intelligence.",
      align: "right",
      opacity: beat3Opacity,
      y: beat3Y,
    },
    {
      heading: "Floor by Floor",
      body: "2D & 3D Floor Plans - Every detail mapped.",
      align: "left",
      opacity: beat4Opacity,
      y: beat4Y,
    },
    {
      heading: "Complete Understanding",
      body: "Your entire house, revealed.",
      align: "center",
      opacity: beat5Opacity,
      y: beat5Y,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {beats.map((beat) => {
        const alignmentClass =
          beat.align === "left"
            ? "left-5 right-auto text-left md:left-16"
            : beat.align === "right"
              ? "right-5 left-auto text-right md:right-16"
              : "left-1/2 -translate-x-1/2 text-center";

        const widthClass =
          beat.align === "center"
            ? "w-[90vw] max-w-xl"
            : "w-[74vw] max-w-sm sm:w-[55vw]";

        return (
          <motion.div
            key={beat.heading}
            style={{ opacity: beat.opacity, y: beat.y }}
            className={`absolute top-[14%] sm:top-[18%] md:top-1/2 md:-translate-y-1/2 ${alignmentClass} ${widthClass}`}
          >
            <h2 className="text-2xl font-medium tracking-tight text-black/90 sm:text-3xl md:text-4xl">
              {beat.heading}
            </h2>
            <p className="mt-3 text-sm tracking-tight text-black/60 sm:text-base md:text-lg">
              {beat.body}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function BuildingScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[frameIndex];

    if (!canvas || !image) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const pixelRatio = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (
      canvas.width !== Math.floor(width * pixelRatio) ||
      canvas.height !== Math.floor(height * pixelRatio)
    ) {
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
    }

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.fillStyle = BACKGROUND;
    context.fillRect(0, 0, width, height);

    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;

    // Trim edge artifacts from source frames (top artifact appears as a dark divider under header).
    const sourceX = 0;
    const sourceY = SOURCE_TOP_EDGE_CROP;
    const sourceWidth = image.naturalWidth;
    const sourceHeight = Math.max(
      1,
      image.naturalHeight - SOURCE_TOP_EDGE_CROP - SOURCE_BOTTOM_EDGE_CROP,
    );
    context.drawImage(
      image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      x,
      y,
      drawWidth,
      drawHeight,
    );
  };

  const requestDraw = (frameIndex: number) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      drawFrame(frameIndex);
      rafRef.current = null;
    });
  };

  useEffect(() => {
    let mounted = true;
    let completed = 0;
    const images: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, () => new Image());

    const markLoaded = () => {
      completed += 1;
      if (!mounted) {
        return;
      }

      setLoadedCount(completed);
      if (completed === TOTAL_FRAMES) {
        imagesRef.current = images;
        setIsLoaded(true);
      }
    };

    images.forEach((image, index) => {
      image.decoding = "async";
      image.loading = "eager";
      image.src = getFramePath(index);

      if (image.complete) {
        markLoaded();
        return;
      }

      image.onload = markLoaded;
      image.onerror = markLoaded;
    });

    return () => {
      mounted = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    requestDraw(currentFrameRef.current);

    const onResize = () => {
      requestDraw(currentFrameRef.current);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isLoaded]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!isLoaded) {
      return;
    }

    const nextFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(value * (TOTAL_FRAMES - 1))),
    );

    if (nextFrame === currentFrameRef.current) {
      return;
    }

    currentFrameRef.current = nextFrame;
    requestDraw(nextFrame);
  });

  const percent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section ref={containerRef} className="relative h-[560vh] w-full bg-white pt-24 sm:pt-16">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-label="Building layer sequence"
        />

        <StoryText progress={scrollYProgress} />

        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-black/20 border-t-black/70" />
            <p className="mt-6 text-sm tracking-tight text-black/60">
              Loading building layers... {percent}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
