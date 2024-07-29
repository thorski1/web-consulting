// import * as React from "react";

interface EmailTemplateProps {
	name: string;
}

import {
	Html,
	Body,
	Container,
	Row,
	Column,
	Text,
	Link,
	Button,
	Img,
	Heading,
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind"

const EmailTemplate: React.FC<
	Readonly<EmailTemplateProps>
> = ({ name }) => (
	<Html>
		<Tailwind
			config={{
				theme: {
					extend: {
						colors: {
							brand: "#007291",
						},
					},
				},
			}}
		>
			<Body className="bg-foreground-100 font-sans">
				<Container className="max-w-xl mx-auto p-6">
					<Row>
						<Column className="text-center">
							{/* <Img
								src="https://www.yourcompany.com/logo.png"
								alt="Your Company Logo"
								className="w-24 mx-auto"
							/> */}
						</Column>
					</Row>
					<Row>
						<Column>
							<Heading className="text-2xl font-bold text-muted-foreground mt-6 mb-4">
								Thank You for Your Interest in a
								Consultation!
							</Heading>
							<Text className="text-lg  text-muted-foreground mb-4">
								Hi {name},
							</Text>
							<Text className="text-lg  text-muted-foreground mb-4">
								Thank you for expressing interest in
								scheduling a consultation with our team! We
								look forward to discussing your web
								development needs and exploring how we can
								help your business grow.
							</Text>
							<Text className="text-lg  text-muted-foreground mb-4">
								Please let us know your availability for a
								free 10-minute consultation. We are flexible
								and can accommodate your schedule.
							</Text>
							<Text className="text-lg text-muted-foreground mb-4">
								Simply reply to this email with your
								preferred time slots, or feel free to
								contact us at{" "}
								<Link
									href="mailto:support@yourcompany.com"
									className="text-blue-500"
								>
									support@yourcompany.com
								</Link>{" "}
								if you have any questions or need more
								information.
							</Text>
							<Text className="text-lg text-muted-foreground mb-4">
								We look forward to connecting with you soon!
							</Text>
							<Text className="text-lg text-muted-foreground mb-6">
								Best regards,
								<br />
								The ReCode Pros Team
							</Text>
							<Button
								href="https://www.yourcompany.com"
								className="bg-green-500 text-white py-2 px-4 rounded-md"
							>
								Visit Our Website
							</Button>
						</Column>
					</Row>
					<Row>
						<Column>
							<Text className="text-sm text-muted-foreground text-center mt-8">
								© [Year] Your Company. All rights reserved.
							</Text>
							<Text className="text-sm text-muted-foreground text-center">
								123 Your Company Street, Your City, Your
								Country
							</Text>
						</Column>
					</Row>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

export default EmailTemplate;
