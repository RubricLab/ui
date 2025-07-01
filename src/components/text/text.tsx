import styles from './text.module.css'

const Text = ({ content }: { content: string }) => {
	return <div className={styles.text}>{content}</div>
}

export default Text
