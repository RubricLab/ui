import {ButtonHTMLAttributes} from 'react'

export function Button(
	props: {lol: boolean} & ButtonHTMLAttributes<HTMLButtonElement>
) {
	return (
		<button
			{...props}
			className={props.lol ? 'text-9xl' : ''}
		/>
	)
}
