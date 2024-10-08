import { cn } from '../utils/cn'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	isExternal?: boolean
	showArrow?: boolean
	underline?: boolean
	active?: boolean
}

const Link = ({
	href,
	children,
	showArrow = false,
	isExternal = false,
	underline = false,
	active = false,
	className = '',
	...props
}: LinkProps) => {
	const isExternalLink = isExternal || href?.startsWith('http')

	return (
		<a
			href={href}
			className={cn(
				'inline-flex items-center text-rubricui-contrast/50 transition-colors duration-rubricui-duration hover:text-rubricui-contrast',
				underline && 'underline',
				active && 'text-rubricui-contrast',
				className
			)}
			target={isExternalLink ? '_blank' : undefined}
			rel={isExternalLink ? 'noopener noreferrer' : undefined}
			{...props}
		>
			{children}
			{showArrow && (
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					className="fill-rubricui-contrast"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Arrow Icon</title>
					<path
						d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/>
				</svg>
			)}
		</a>
	)
}

export { Link }
