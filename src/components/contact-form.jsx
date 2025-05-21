import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = ({ texts }) => {
	useEffect(() => emailjs.init('TZzDC8DoTBIIVuf9C'), [])
	const firstNameRef = useRef()
	const lastNameRef = useRef()
	const emailRef = useRef()
	const phoneRef = useRef()
	const subjectRef = useRef()
	const messageRef = useRef()
	const [loading, setLoading] = useState(false)
	const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const serviceId = 'service_a0l6eyt'
		const templateId = 'template_3i6ht5o'

		try {
			setLoading(true)
			await emailjs.send(serviceId, templateId, {
				from_name: firstNameRef.current?.value + ' ' + lastNameRef.current?.value,
				from_email: emailRef.current?.value,
				phone: phoneRef.current?.value,
				queryType: subjectRef.current?.value,
				message: messageRef.current?.value
			})
			await fetch('/api/tickets', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					customerName: firstNameRef.current?.value + ' ' + lastNameRef.current?.value,
					customerEmail: emailRef.current?.value,
					customerPhone: phoneRef.current?.value,
					title: subjectRef.current?.value,
					content: messageRef.current?.value
				})
			})

			alert(API_TOKEN)
		} catch (error) {
			alert('Failed to send the message. Please try again.')
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className="flex h-full w-full items-center justify-center text-sm">
			<form
				onSubmit={handleSubmit}
				className="w-full space-y-6 rounded-lg py-4 md:w-full lg:w-full"
			>
				<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<label htmlFor="firstName" className="block font-medium">
							{texts.NAME}
						</label>
						<input
							ref={firstNameRef}
							type="text"
							name="firstName"
							className="mt-3 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
							required
						/>
					</div>
					<div>
						<label htmlFor="lastName" className="block font-medium">
							{texts.LASTNAME}
						</label>
						<input
							ref={lastNameRef}
							type="text"
							name="lastName"
							className="mt-3 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
							required
						/>
					</div>
				</div>

				<div className="w-full">
					<label htmlFor="email" className="block font-medium">
						{texts.EMAIL}
					</label>
					<input
						ref={emailRef}
						type="email"
						name="email"
						className="mt-3 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
						required
					/>
				</div>

				<div className="w-full">
					<label htmlFor="phone" className="block font-medium">
						{texts.PHONE}
					</label>
					<input
						ref={phoneRef}
						type="tel"
						name="phone"
						className="mt-3 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
						required
					/>
				</div>

				<div className="w-full">
					<label htmlFor="queryType" className="block font-medium">
						{texts.SUBJECT}
					</label>
					<input
						ref={subjectRef}
						type="text"
						name="subject"
						className="mt-3 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
						required
					/>
				</div>

				<div className="w-full">
					<label htmlFor="message" className="block font-medium">
						{texts.MESSAGE}
					</label>
					<textarea
						ref={messageRef}
						name="message"
						rows={4}
						className="mt-3 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
						required
					></textarea>
				</div>

				<div className="flex items-center justify-between">
					<div>
						<div className="flex gap-2">
							<input
								type="checkbox"
								checked={acceptPrivacyPolicy}
								onChange={() => setAcceptPrivacyPolicy(!acceptPrivacyPolicy)}
								id="privacyPolicy"
							/>
							<label htmlFor="privacyPolicy" className="text-sm">
								{texts.ACCEPT_PRIVACY_POLICY}
								<a
									href="/docs/privacy-policy.pdf"
									target="_blank"
									className="ml-2 text-teal-500 hover:underline"
								>
									{texts.PRIVACY_POLICY}
								</a>
							</label>
						</div>
						{!acceptPrivacyPolicy && (
							<p className="mt-2 text-sm text-red-500">{texts.ERROR_PRIVACY_POLICY}</p>
						)}
					</div>

					<button
						disabled={loading || !acceptPrivacyPolicy}
						className="rounded-md bg-teal-500 px-6 py-2 font-semibold text-white transition-colors enabled:hover:bg-teal-600"
					>
						{texts.SUBMIT}
					</button>
				</div>
			</form>
		</div>
	)
}
