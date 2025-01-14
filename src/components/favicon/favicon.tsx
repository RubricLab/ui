import { ImageResponse } from 'next/og'
import type { DesignSystem } from '../../types/DesignSystem'

const runtime = 'edge'
const contentType = 'image/png'
const size = { width: 32, height: 32 }

export default async function createFavicon<DS extends DesignSystem>(ds: DS) {
	function Favicon({ darkMode = false }: { darkMode?: boolean }) {
		const LogoComponent = darkMode ? ds.logos.icon.dark : ds.logos.icon.light

		return new ImageResponse(
			<div
				style={{
					background: 'transparent',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<LogoComponent />
			</div>,
			size
		)
	}
	Favicon.runtime = runtime
	Favicon.contentType = contentType
	Favicon.size = size

	return Favicon
}
