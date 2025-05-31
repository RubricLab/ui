import Button from './components/button/button'
import Card from './components/card/card'
import ChartBarItem from './components/chart-bar-item/chart-bar-item'
import ChartLineItem from './components/chart-line-item/chart-line-item'
import ChartLine from './components/chart-line/chart-line'
import Chart from './components/chart/chart'
import CodeBlock from './components/code-block/code-block'
import DropdownItem from './components/dropdown-item/dropdown-item'
import Dropdown from './components/dropdown/dropdown'
import FooterSection from './components/footer-section/footer-section'
import Footer from './components/footer/footer'
import Heading from './components/heading/heading'
import createIcon from './components/icon/icon'
import Image from './components/image/image'
import Input from './components/input/input'
import { createLayout } from './components/layout/layout'
import Link from './components/link/link'
import ListItem from './components/list-item/list-item'
import List from './components/list/list'
import Loader from './components/loader/loader'
import Modal from './components/modal/modal'
import NavItem from './components/nav-item/nav-item'
import Nav from './components/nav/nav'
import Page from './components/page/page'
import Pill from './components/pill/pill'
import Search from './components/search/search'
import Section from './components/section/section'
import SelectOption from './components/select-option/select-option'
import Select from './components/select/select'
import Stack from './components/stack/stack'
import TableCell from './components/table-cell/table-cell'
import TableRow from './components/table-row/table-row'
import Table from './components/table/table'
import Tag from './components/tag/tag'
import TextArea from './components/text-area/text-area'
import Text from './components/text/text'
import TimelineItem from './components/timeline-item/timeline-item'
import Timeline from './components/timeline/timeline'
import type { DesignSystem } from './types/DesignSystem'

export function createUI<DS extends DesignSystem>(ds: DS) {
	return {
		Button,
		Card,
		CodeBlock,
		Chart,
		ChartBarItem,
		ChartLine,
		ChartLineItem,
		Dropdown,
		DropdownItem,
		Footer,
		FooterSection,
		Heading,
		Image,
		Icon: createIcon(ds),
		Layout: createLayout(ds),
		Loader,
		Input,
		Link,
		Modal,
		Nav,
		NavItem,
		Page,
		Pill,
		List,
		ListItem,
		Search,
		Section,
		Select,
		SelectOption,
		Stack,
		Table,
		TableCell,
		TableRow,
		Tag,
		TextArea,
		Text,
		Timeline,
		TimelineItem
	}
}

export { default as RubricDesignSystem } from './themes/rubric'
export { default as StripeDesignSystem } from './themes/stripe'
export * from './types/DesignSystem'
