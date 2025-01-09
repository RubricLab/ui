import CreateButton from './components/button'
import type { DesignSystem } from './types/DesignSystem'

export function createUI(ds: DesignSystem) {
	return {
		Button: CreateButton(ds)
	}
}

export { default as RubricDesignSystem } from './themes/rubric'
