"use client";

import { type ChangeEvent, type DragEvent, forwardRef, useState } from "react";
import { cn } from "../utils/cn";

const sizes = {
	small: "h-[200px] w-[200px] px-[10px] rounded-[8px] text-xs",
	medium: "h-[250px] w-[250px] px-[12px] rounded-[10px] text-sm",
	large: "h-[300px] w-[300px] px-[14px] rounded-[12px] text-base",
};

export interface UploadProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"size" | "onChange"
	> {
	size?: keyof typeof sizes;
	formats?: string[];
	multiple?: boolean;
	onChange?: (files: File[]) => void;
}

const Upload = forwardRef<HTMLInputElement, UploadProps>(
	(
		{
			className,
			size = "small",
			multiple = false,
			formats = [
				"image/jpeg",
				"image/png",
				"image/jpg",
				"image/gif",
				"video/mp4",
			],
			onChange,
			...props
		},
		ref,
	) => {
		const [isDragging, setIsDragging] = useState(false);
		const [files, setFiles] = useState<File[]>([]);

		const handleFiles = (newFiles: FileList | null) => {
			if (newFiles) {
				const fileArray = Array.from(newFiles);
				setFiles(fileArray);
				onChange?.(fileArray);
			}
		};

		const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(true);
		};

		const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);
		};

		const handleDrop = (e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);
			handleFiles(e.dataTransfer.files);
		};

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			handleFiles(e.target.files);
		};

		return (
			<div
				className={cn(
					"relative flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-4 text-center transition-all duration-rubricui-duration hover:bg-rubricui-contrast/10 focus:bg-rubricui-contrast/10",
					isDragging
						? "border-rubricui-contrast"
						: "border-rubricui-contrast/10",
					sizes[size],
					className,
				)}
				onDragEnter={handleDragEnter}
				onDragOver={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				<input
					multiple={multiple}
					accept={formats.join(",")}
					type="file"
					className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
					onChange={handleChange}
					ref={ref}
					{...props}
				/>
				<div
					className={cn(
						"pointer-events-none flex max-h-[150px] flex-col items-center overflow-y-auto p-2",
						files.length > 0 ? "p-0" : "p-2",
					)}
				>
					{files.length > 0 ? (
						<div className="mt-2 flex flex-col font-medium text-rubricui-contrast text-xs">
							<p className="text-rubricui-contrast/50">Files:</p>
							{files.map((file, index) => (
								<li
									className="line-clamp-1 overflow-ellipsis py-0.5"
									key={index}
								>
									{file.name}
								</li>
							))}
						</div>
					) : (
						<>
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Upload Icon</title>
								<path
									d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
									className="fill-rubricui-contrast"
									fill-rule="evenodd"
									clip-rule="evenodd"
								/>
							</svg>
							<p className="mt-2 font-medium text-rubricui-contrast text-sm">
								{multiple
									? "Choose files or drag & drop them here"
									: "Choose a file or drag & drop it here"}
							</p>
							<p className="mt-1 text-rubricui-contrast/50 text-xs">
								{formats.map((format) => format.split("/")[1]).join(", ")}{" "}
								formats
							</p>
						</>
					)}
				</div>
			</div>
		);
	},
);
Upload.displayName = "Upload";

export { Upload };
