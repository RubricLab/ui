import CreateButton from './components/button'
import CreateCard from './components/card'
import CreateChartBar from './components/chart-bar'
import CreateChartLine from './components/chart-line'
import CreateChartLineItem from './components/chart-line-item'
import CreateDropdown from './components/dropdown'
import CreateFooter from './components/footer'
import CreateFooterSection from './components/footer-section'
import CreateHeading from './components/heading'
import CreateImage from './components/image'
import CreateInput from './components/input'
import CreateLink from './components/link'
import CreateNav from './components/nav'
import CreateNavItem from './components/nav-item'
import CreatePage from './components/page'
import CreatePill from './components/pill'
import CreateSearch from './components/search'
import CreateSection from './components/section'
import CreateSelect from './components/select'
import CreateSelectOption from './components/select-option'
import CreateTable from './components/table'
import CreateTableCell from './components/table-cell'
import CreateTableRow from './components/table-row'
import CreateTag from './components/tag'
import CreateTextArea from './components/text-area'
import CreateTimeline from './components/timeline'
import CreateTimelineItem from './components/timeline-item'
import type { DesignSystem } from './types/DesignSystem'

export function createUI(ds: DesignSystem) {
	return {
		Button: CreateButton(ds),
		Card: CreateCard(ds),
		ChartBar: CreateChartBar(ds),
		ChartLine: CreateChartLine(ds),
		ChartLineItem: CreateChartLineItem(ds),
		Dropdown: CreateDropdown(ds),
		Footer: CreateFooter(ds),
		FooterSection: CreateFooterSection(ds),
		Heading: CreateHeading(ds),
		Image: CreateImage(ds),
		Input: CreateInput(ds),
		Link: CreateLink(ds),
		Nav: CreateNav(ds),
		NavItem: CreateNavItem(ds),
		Page: CreatePage(ds),
		Pill: CreatePill(ds),
		Search: CreateSearch(ds),
		Section: CreateSection(ds),
		Select: CreateSelect(ds),
		SelectOption: CreateSelectOption(ds),
		Table: CreateTable(ds),
		TableCell: CreateTableCell(ds),
		TableRow: CreateTableRow(ds),
		Tag: CreateTag(ds),
		TextArea: CreateTextArea(ds),
		Timeline: CreateTimeline(ds),
		TimelineItem: CreateTimelineItem(ds)
	} as const
}

export { default as RubricDesignSystem } from './themes/rubric'
