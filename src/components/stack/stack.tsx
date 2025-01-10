import type { ReactNode } from 'react'
import styles from './stack.module.css'

export default function Stack({
	children,
	justify = 'start'
}: {
	children: ReactNode
	justify?: 'between' | 'start' | 'end' | 'center'
}) {
	return <div className={`${styles.stack} ${styles[`stack--${justify}`]}`}>{children}</div>
}
