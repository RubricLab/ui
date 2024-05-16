import React from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../tooltip'

const tooltipFixtures = {
	default: (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>hello</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default tooltipFixtures
