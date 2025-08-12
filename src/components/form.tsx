import type {
	FormContentProps,
	FormDescriptionProps,
	FormFooterProps,
	FormHeaderProps,
	FormProps,
	FormTitleProps
} from '../types'
import { Container } from './container'
import { Heading } from './heading'
import { Text } from './text'

const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
	return <Heading level="2">{children}</Heading>
}

const FormDescription: React.FC<FormDescriptionProps> = ({ children }) => {
	return (
		<Text variant="secondary" size="sm">
			{children}
		</Text>
	)
}

const FormHeader: React.FC<FormHeaderProps> = ({ children }) => {
	return <Container arrangement="column">{children}</Container>
}

const FormContent: React.FC<FormContentProps> = ({ children }) => {
	return <Container gap="md">{children}</Container>
}

const FormFooter: React.FC<FormFooterProps> = ({ children }) => {
	return (
		<Container arrangement="row" justify="end" gap="sm">
			{children}
		</Container>
	)
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				onSubmit?.(e)
			}}
			className="w-full"
		>
			<Container gap="md" width="full">
				{children}
			</Container>
		</form>
	)
}

export { Form, FormContent, FormDescription, FormFooter, FormHeader, FormTitle }
