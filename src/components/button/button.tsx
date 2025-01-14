import styles from './button.module.css'

export type ButtonRole = 'brand' | 'information' | 'success' | 'destructive' | 'warning'

export interface ButtonProps {
	/** The semantic role of the button */
	ROLE: ButtonRole
	/** The children to render inside the button */
	children: React.ReactNode
	/** The onClick handler */
	onClick: () => void
	/** Whether the button is disabled */
	disabled?: boolean
}

export default function Button({ ROLE, children, onClick, disabled }: ButtonProps) {
	return (
		<button
			className={`${styles.button} ${styles[`button--${ROLE}`]}`}
			type="button"
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
