import type { DesignSystem } from '../../types/DesignSystem'
import styles from './icon.module.css'

export default function createIcon<DS extends DesignSystem>(ds: DS) {
	return function Icon({
		icon,
		ROLE
	}: {
		icon: keyof DS['icons']
		ROLE: 'brand' | 'information' | 'success' | 'destructive' | 'warning'
	}) {
		return (
			<span className={`${styles.icon} ${ROLE ? styles[`icon--${ROLE}`] : ''}`}>
				<span className={styles.iconLight}>{ds.icons[icon]?.light()}</span>
				<span className={styles.iconDark}>{ds.icons[icon]?.dark()}</span>
			</span>
		)
	}
}
