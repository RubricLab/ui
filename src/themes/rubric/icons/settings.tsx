import type { Asset, DSColor } from '../../../types/DesignSystem'

const SettingsLight = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Settings">
		<title>Settings</title>
		<path
			fill="#635BFF"
			d="M13.5 6l-.4 2.3c-.3.1-.6.3-.9.4l-2-1.3-2.1 2.1 1.3 2c-.2.3-.3.6-.4.9L6.7 13v3l2.3.4c.1.3.3.6.4.9l-1.3 2 2.1 2.1 2-1.3c.3.2.6.3.9.4l.4 2.3h3l.4-2.3c.3-.1.6-.3.9-.4l2 1.3 2.1-2.1-1.3-2c.2-.3.3-.6.4-.9l2.3-.4v-3l-2.3-.4c-.1-.3-.3-.6-.4-.9l1.3-2-2.1-2.1-2 1.3c-.3-.2-.6-.3-.9-.4L16.5 6h-3zm1.5 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
		/>
	</svg>
)

const SettingsDark = () => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Settings">
		<title>Settings</title>
		<path
			fill="#7A73FF"
			d="M13.5 6l-.4 2.3c-.3.1-.6.3-.9.4l-2-1.3-2.1 2.1 1.3 2c-.2.3-.3.6-.4.9L6.7 13v3l2.3.4c.1.3.3.6.4.9l-1.3 2 2.1 2.1 2-1.3c.3.2.6.3.9.4l.4 2.3h3l.4-2.3c.3-.1.6-.3.9-.4l2 1.3 2.1-2.1-1.3-2c.2-.3.3-.6.4-.9l2.3-.4v-3l-2.3-.4c-.1-.3-.3-.6-.4-.9l1.3-2-2.1-2.1-2 1.3c-.3-.2-.6-.3-.9-.4L16.5 6h-3zm1.5 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
		/>
	</svg>
)

const SettingsMono = (fill: DSColor) => (
	<svg width={32} height={32} viewBox="0 0 32 32" aria-label="Settings">
		<title>Settings</title>
		<path
			fill={fill}
			d="M13.5 6l-.4 2.3c-.3.1-.6.3-.9.4l-2-1.3-2.1 2.1 1.3 2c-.2.3-.3.6-.4.9L6.7 13v3l2.3.4c.1.3.3.6.4.9l-1.3 2 2.1 2.1 2-1.3c.3.2.6.3.9.4l.4 2.3h3l.4-2.3c.3-.1.6-.3.9-.4l2 1.3 2.1-2.1-1.3-2c.2-.3.3-.6.4-.9l2.3-.4v-3l-2.3-.4c-.1-.3-.3-.6-.4-.9l1.3-2-2.1-2.1-2 1.3c-.3-.2-.6-.3-.9-.4L16.5 6h-3zm1.5 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
		/>
	</svg>
)

export const settings: Asset = {
	light: SettingsLight,
	dark: SettingsDark,
	mono: SettingsMono
}
