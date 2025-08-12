import { Container } from './container'
import { Label } from './label'

export interface FieldProps {
	children: React.ReactNode
	label: string
}

export const Field: React.FC<FieldProps> = ({ children, label }) => {
	return (
		<Container gap="sm">
			<Label>{label}</Label>
			<Container>{children}</Container>
		</Container>
	)
}
