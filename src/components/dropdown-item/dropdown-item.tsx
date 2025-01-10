import type { ReactNode } from 'react'
import styles from './dropdown-item.module.css'

const DropdownItem = ({
	label,
	href,
	onClick
}: {
	label: ReactNode
	href?: string
	onClick?: () => void
}) => {
	const Element = href ? 'a' : 'button'

	return (
		<div className={styles.dropdown__item}>
			<Element
				className={styles.dropdown__item__content}
				onClick={onClick}
				href={href}
				type={href ? undefined : 'button'}
			>
				<span className={styles.dropdown__item__label}>{label}</span>
			</Element>
		</div>
	)
}

export default DropdownItem
