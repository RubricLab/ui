import Button from './components/button/button'
import Card from './components/card/card'
import Chart from './components/chart/chart'
import ChartBarItem from './components/chart-bar-item/chart-bar-item'
import ChartLine from './components/chart-line/chart-line'
import ChartLineItem from './components/chart-line-item/chart-line-item'
import CodeBlock from './components/code-block/code-block'
import Dropdown from './components/dropdown/dropdown'
import DropdownItem from './components/dropdown-item/dropdown-item'
import Footer from './components/footer/footer'
import FooterSection from './components/footer-section/footer-section'
import Heading from './components/heading/heading'
import createIcon from './components/icon/icon'
import Image from './components/image/image'
import Input from './components/input/input'
import { createLayout } from './components/layout/layout'
import Link from './components/link/link'
import List from './components/list/list'
import ListItem from './components/list-item/list-item'
import Loader from './components/loader/loader'
import Modal from './components/modal/modal'
import Nav from './components/nav/nav'
import NavItem from './components/nav-item/nav-item'
import Page from './components/page/page'
import Pill from './components/pill/pill'
import Search from './components/search/search'
import Section from './components/section/section'
import Select from './components/select/select'
import SelectOption from './components/select-option/select-option'
import Stack from './components/stack/stack'
import Table from './components/table/table'
import TableCell from './components/table-cell/table-cell'
import TableRow from './components/table-row/table-row'
import Tag from './components/tag/tag'
import Text from './components/text/text'
import TextArea from './components/text-area/text-area'
import Timeline from './components/timeline/timeline'
import TimelineItem from './components/timeline-item/timeline-item'
import type { DesignSystem } from './types/DesignSystem'

export function createUI<DS extends DesignSystem>(ds: DS) {
	return {
		Button,
		Card,
		Chart,
		ChartBarItem,
		ChartLine,
		ChartLineItem,
		CodeBlock,
		Dropdown,
		DropdownItem,
		Footer,
		FooterSection,
		Heading,
		Icon: createIcon(ds),
		Image,
		Input,
		Layout: createLayout(ds),
		Link,
		List,
		ListItem,
		Loader,
		Modal,
		Nav,
		NavItem,
		Page,
		Pill,
		Search,
		Section,
		Select,
		SelectOption,
		Stack,
		Table,
		TableCell,
		TableRow,
		Tag,
		Text,
		TextArea,
		Timeline,
		TimelineItem
	}
}

export { default as RubricDesignSystem } from './themes/rubric'
export { default as StripeDesignSystem } from './themes/stripe'
export * from './types/DesignSystem'
