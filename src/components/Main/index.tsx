import React from 'react'
import * as S from './styles'

import { Container, Logo, Twitter } from '..'

export const Main = () => {
	return (
		<S.Main>
			<Container>
				<S.Aside>
					<Logo/>
				</S.Aside>
				<S.Content>
					<S.Title>
						meet new entrepreneurs
					</S.Title>
					<S.Text>
						Meeet is a new social media platform for entrepreneurs to socialize.
					</S.Text>
					<S.Button>
						Get notified at launch
					</S.Button>
				</S.Content>
				<S.Aside>
					<Twitter/>
					<S.Text>
						Follow us on Twitter
					</S.Text>
				</S.Aside>
			</Container>
		</S.Main>
	)
}
