import * as React from 'react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import type { ChartProps } from '../types'
import { Container } from './container'
import { Empty } from './empty'
import { Heading } from './heading'

const chartStrokeColors = ['#F6C750', '#E63525', '#050D4C', '#D4EBEE', '#74B06F']

// Tooltip style objects use CSS variables so they automatically match light/dark mode
const tooltipContentStyle = {
	background: 'var(--background)',
	border: '1px solid var(--border)',
	borderRadius: 4,
	color: 'var(--foreground)',
	fontSize: 12
} as const

const tooltipItemStyle = {
	color: 'var(--foreground)'
} as const

const tooltipLabelStyle = {
	color: 'var(--foreground)',
	fontWeight: 600
} as const

export const Chart = ({
	data,
	title,
	variant = 'line',
	height = 200,
	width = 400
}: ChartProps): React.ReactElement => {
	// Transform data for Recharts
	const transformedData = React.useMemo(
		() =>
			data.map(point => ({
				x: point.x,
				...Object.fromEntries(point.y.map(metric => [metric.series, metric.value]))
			})),
		[data]
	)

	const seriesNames = React.useMemo(
		() => Array.from(new Set(data.flatMap(point => point.y.map(metric => metric.series)))),
		[data]
	)

	const renderChart = (): React.ReactNode => {
		if (!transformedData.length) {
			return <Empty body="No data" />
		}

		switch (variant) {
			case 'line': {
				return (
					<div style={{ height, width }}>
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={transformedData} margin={{ bottom: 5, left: 20, right: 30, top: 5 }}>
								{seriesNames.map((series, index) => {
									const color = chartStrokeColors[index % chartStrokeColors.length]
									return (
										<Line
											key={series}
											type="monotone"
											dataKey={series}
											stroke={color}
											fill={color}
											strokeOpacity={0.8}
											strokeWidth={2}
										/>
									)
								})}
								<Tooltip
									cursor={{ stroke: 'var(--border)', strokeWidth: 1 }}
									contentStyle={tooltipContentStyle}
									itemStyle={tooltipItemStyle}
									labelStyle={tooltipLabelStyle}
								/>
								<XAxis dataKey="x" fontSize={12} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				)
			}
			case 'bar': {
				return (
					<div style={{ height, width }}>
						<ResponsiveContainer width="100%" height="100%">
							<BarChart data={transformedData} margin={{ bottom: 5, left: 20, right: 30, top: 5 }}>
								{seriesNames.map((series, index) => {
									const color = chartStrokeColors[index % chartStrokeColors.length]
									return <Bar key={series} dataKey={series} fill={color} fillOpacity={0.8} />
								})}
								<Tooltip
									cursor={{ fill: 'var(--hover)', fillOpacity: 0.2 }}
									contentStyle={tooltipContentStyle}
									itemStyle={tooltipItemStyle}
									labelStyle={tooltipLabelStyle}
								/>
								<XAxis dataKey="x" fontSize={12} />
							</BarChart>
						</ResponsiveContainer>
					</div>
				)
			}
			default:
				return <Empty body="No data" />
		}
	}

	return (
		<Container gap="sm">
			{title && <Heading level="3">{title}</Heading>}
			{renderChart()}
		</Container>
	)
}

Chart.displayName = 'Chart'
