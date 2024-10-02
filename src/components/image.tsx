"use client";

import { type ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
	autoResize?: boolean;
}

const Image = ({
	src,
	alt,
	width,
	height,
	className,
	objectFit = "cover",
	autoResize = false,
	...props
}: ImageProps) => {
	const [loaded, setLoaded] = useState(false);
	const [dimensions, setDimensions] = useState({ width, height });
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const img = imgRef.current;
		if (img?.complete) {
			handleImageLoad();
		}
	}, []);

	const handleImageLoad = () => {
		if (!loaded) {
			setLoaded(true);
			if (autoResize && imgRef.current) {
				const { naturalWidth, naturalHeight } = imgRef.current;
				const aspectRatio = naturalWidth / naturalHeight;

				let newWidth = width || imgRef.current.clientWidth;
				let newHeight = height || (newWidth as number) / aspectRatio;

				if (height) {
					newHeight = height;
					newWidth = (newHeight as number) * aspectRatio;
				}

				setDimensions({ width: newWidth, height: newHeight });
			}
		}
	};

	return (
		<img
			ref={imgRef}
			src={src}
			className={cn(
				"h-full w-full align-bottom transition-opacity duration-rubricui-duration",
				className,
			)}
			style={{
				objectFit,
				width: width ? `${width}px` : "auto",
				height: height ? `${height}px` : "auto",
				maxWidth: dimensions.width ? `${dimensions.width}px` : "100%",
				maxHeight: dimensions.height ? `${dimensions.height}px` : "auto",
				...props?.style,
			}}
			{...props}
			alt={alt || "image"}
		/>
	);
};

export { Image };
