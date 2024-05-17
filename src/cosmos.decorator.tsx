import * as React from 'react'
import {DarkMode} from 'react-cosmos-dark-mode/DarkMode'

export default function GlobalDecorator(props: {children: React.ReactNode}) {
	const positions: {[key: string]: string} = {
		top: 'top-0',
		center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
	}

	const [currentPosition, setCurrentPosition] = React.useState<string>(
		positions.center
	)

	const handleClick = (position: string) => {
		setCurrentPosition(positions[position])
	}

	return (
		<>
			<div className={`absolute ${currentPosition}`}>
				<DarkMode>{props.children}</DarkMode>
			</div>
			<div className='absolute bottom-0 left-1/2 mb-2 flex -translate-x-1/2 transform justify-between divide-x-[1px] divide-dashed divide-zinc-500 rounded-md bg-black py-1 text-xs leading-[100%] text-white ring-1 ring-zinc-500'>
				{Object.keys(positions).map(position => (
					<button
						className='flex px-2 py-0.5 text-xs'
						key={position}
						onClick={() => handleClick(position)}>
						{position === 'top' ? (
							<svg
								data-testid='geist-icon'
								height='14'
								stroke-linejoin='round'
								viewBox='0 0 16 16'
								width='14'
								style={{color: 'currentcolor'}}>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1.99939 10.25V11H3.49939V10.25V4.56008L12.7191 13.7798L13.2495 14.3101L14.3101 13.2494L13.7798 12.7191L4.56121 3.50058H10.25H11V2.00058H10.25H2.99939C2.4471 2.00058 1.99939 2.4483 1.99939 3.00058V10.25Z'
									fill='currentColor'></path>
							</svg>
						) : (
							<svg
								data-testid='geist-icon'
								height='14'
								stroke-linejoin='round'
								viewBox='0 0 16 16'
								width='14'
								style={{color: 'currentcolor'}}>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM3.5 7.25H4.25H11.75H12.5V8.75H11.75H4.25H3.5V7.25ZM2.5 12.5H3.25H12.75H13.5V14H12.75H3.25H2.5V12.5Z'
									fill='currentColor'></path>
							</svg>
						)}
					</button>
				))}
			</div>
			<div className='absolute bottom-0 right-0'>
				<svg
					width='60'
					height='60'
					viewBox='0 0 800 800'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M300 600V300H400V400H500V300H600V400H500V500H400V600H300Z'
						fill='black'
					/>
				</svg>
			</div>
		</>
	)
}
