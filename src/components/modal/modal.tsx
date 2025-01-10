import type { ReactNode } from 'react'
import styles from './modal.module.css'

export type ModalProps = {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
	if (!isOpen) return null

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose()
		}
	}

	return (
		<dialog
			className={styles.modal}
			onClick={handleBackdropClick}
			onKeyDown={handleKeyDown}
			aria-modal="true"
			open
		>
			<div className={styles.content}>{children}</div>
		</dialog>
	)
}

export default Modal
