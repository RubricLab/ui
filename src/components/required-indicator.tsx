import { AsteriskIcon } from 'lucide-react'
import { cn } from '../utils'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

export const RequiredIndicator = ({ className }: { className?: string }) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div
					className={cn(
						'-left-1 -top-1 absolute flex cursor-pointer items-center justify-center rounded-full bg-border',
						className
					)}
				>
					<AsteriskIcon className="size-3.5 text-foreground" />
				</div>
			</TooltipTrigger>
			<TooltipContent>Required</TooltipContent>
		</Tooltip>
	)
}
