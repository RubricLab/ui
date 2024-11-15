import type { ReactElement } from 'react'
import type { DesignSystem } from '../types'
import { createComponent } from '../utils'

type PageProps = { content: ReactElement }

export default createComponent<DesignSystem, PageProps>({
	render: ({ content }, _ui) => {
		return <div style={{ padding: '0.5rem' }}>{content}</div>
	}
})
