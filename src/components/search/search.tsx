import type { ChangeEvent, FC } from 'react'
import styles from './search.module.css'

export type SearchProps = {
	role: 'nav' | 'page' | 'filter'
	value: string
	onChange: (value: string) => void
	placeholder?: string
}

const Search: FC<SearchProps> = ({ role, value, onChange, placeholder = 'Search...' }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	return (
		<div className={styles.search} data-role={role}>
			<input
				type="search"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className={styles.search__input}
			/>
			<svg viewBox="0 0 24 24" className={styles.search__icon} aria-hidden="true">
				<path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
			</svg>
		</div>
	)
}

export default Search
