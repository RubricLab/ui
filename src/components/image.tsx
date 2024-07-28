"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "../utils/cn";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  autoResize?: boolean;
}

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = "cover",
  priority = false,
  onLoad,
  onError,
  autoResize = false,
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      handleImageLoad();
    }
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (autoResize && imgRef.current && containerRef.current) {
        const aspectRatio =
          imgRef.current.naturalWidth / imgRef.current.naturalHeight;
        const containerWidth = containerRef.current.clientWidth;
        const newHeight = containerWidth / aspectRatio;
        containerRef.current.style.height = `${newHeight}px`;
      }
    };

    if (loaded) updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [loaded, autoResize]);

  const handleImageLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", className)}
      style={{
        height: height ? `${height}px` : "auto",
        maxWidth: width ? `${width}px` : "fit-content",
        maxHeight: height ? `${height}px` : "fit-content",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          objectFit && `!object-${objectFit}`
        )}
        style={{
          height: height ? `${height}px` : "auto",
          width: width ? `${width}px` : "auto",
        }}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleImageLoad}
        onError={handleError}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-rubricui-contrast/10 animate-pulse" />
      )}
    </div>
  );
};

export { Image };
