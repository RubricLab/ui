import * as data from './primitives/data'
import * as feedback from './primitives/feedback'
import * as form from './primitives/form'
import * as interactive from './primitives/interactive'
import * as layout from './primitives/layout'
import * as media from './primitives/media'
import * as navigation from './primitives/navigation'
import * as typography from './primitives/typography'
import * as utility from './primitives/utility'

export const Styled = {
	...layout,
	...typography,
	...form,
	...interactive,
	...feedback,
	...navigation,
	...data,
	...media,
	...utility
}
