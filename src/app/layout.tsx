import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
	title: 'Meeet',
	description: 'Meeet is a new social media platform for entrepreneurs to socialize.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
