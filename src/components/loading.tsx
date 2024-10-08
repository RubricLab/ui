import { cn } from '../utils/cn'

const Loading = ({
	className,
	size
}: { className?: string; size?: 'small' | 'medium' | 'large' }) => {
	return (
		<svg
			className={cn(
				'animate-rubricui-loading-rotate dark:invert',
				{
					'h-[10px] w-[10px]': size === 'small',
					'h-[12px] w-[12px]': size === 'medium',
					'h-[14px] w-[14px]': size === 'large'
				},
				className
			)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 11 11"
		>
			<title>Loading Button</title>
			<rect x="0" y="0" width="4" height="4" rx="0.5" className="fill-white" />
			<rect x="0" y="7" width="4" height="4" rx="0.5" className="fill-zinc-700" />
			<rect x="7" y="0" width="4" height="4" rx="0.5" className="fill-zinc-200" />
			<rect x="7" y="7" width="4" height="4" rx="0.5" className="fill-zinc-400" />
		</svg>
	)
}

export { Loading }
