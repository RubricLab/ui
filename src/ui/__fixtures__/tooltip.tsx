import React from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../tooltip'
import { Button } from '../button'

const tooltipFixtures = {
	default: (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button>Hello</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default tooltipFixtures
