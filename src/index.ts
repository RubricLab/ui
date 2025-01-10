import Button from './components/button/button'
import Card from './components/card/card'
import ChartBar from './components/chart-bar/chart-bar'
import ChartLineItem from './components/chart-line-item/chart-line-item'
import ChartLine from './components/chart-line/chart-line'
import Dropdown from './components/dropdown/dropdown'
import FooterSection from './components/footer-section/footer-section'
import Footer from './components/footer/footer'
import Heading from './components/heading/heading'
import Image from './components/image/image'
import Input from './components/input/input'
import Link from './components/link/link'
import NavItem from './components/nav-item/nav-item'
import Nav from './components/nav/nav'
import Page from './components/page/page'
import Pill from './components/pill/pill'
import Search from './components/search/search'
import Section from './components/section/section'
import SelectOption from './components/select-option/select-option'
import Select from './components/select/select'
import TableCell from './components/table-cell/table-cell'
import TableRow from './components/table-row/table-row'
import Table from './components/table/table'
import Tag from './components/tag/tag'
import TextArea from './components/text-area/text-area'
import TimelineItem from './components/timeline-item/timeline-item'
import Timeline from './components/timeline/timeline'
import type { DesignSystem } from './types/DesignSystem'
import createComponent from './utils/createComponent'

export function createUI(ds: DesignSystem) {
	return {
		Button: createComponent(Button)(ds),
		Card: createComponent(Card)(ds),
		ChartBar: createComponent(ChartBar)(ds),
		ChartLine: createComponent(ChartLine)(ds),
		ChartLineItem: createComponent(ChartLineItem)(ds),
		Dropdown: createComponent(Dropdown)(ds),
		Footer: createComponent(Footer)(ds),
		FooterSection: createComponent(FooterSection)(ds),
		Heading: createComponent(Heading)(ds),
		Image: createComponent(Image)(ds),
		Input: createComponent(Input)(ds),
		Link: createComponent(Link)(ds),
		Nav: createComponent(Nav)(ds),
		NavItem: createComponent(NavItem)(ds),
		Page: createComponent(Page)(ds),
		Pill: createComponent(Pill)(ds),
		Search: createComponent(Search)(ds),
		Section: createComponent(Section)(ds),
		Select: createComponent(Select)(ds),
		SelectOption: createComponent(SelectOption)(ds),
		Table: createComponent(Table)(ds),
		TableCell: createComponent(TableCell)(ds),
		TableRow: createComponent(TableRow)(ds),
		Tag: createComponent(Tag)(ds),
		TextArea: createComponent(TextArea)(ds),
		Timeline: createComponent(Timeline)(ds),
		TimelineItem: createComponent(TimelineItem)(ds)
	} as const
}

export { default as RubricDesignSystem } from './themes/rubric'
export { default as StripeDesignSystem } from './themes/stripe'
export * from './types/DesignSystem'
