"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from "styled-components";
import media from "styled-media-query";
import { darken } from "polished";

import { Container } from "..";

export const Main = styled.main`
    ${({ theme }) => css`
		background: ${theme.colors.mainBg};
		width: 100vw;
		height: 100vh;
		padding: ${theme.spacings.small} 0;

		${Container} {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 80%;

			${media.lessThan('large')`
				height: 100%;
			`}
		}
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.small};
    `}
`

export const Aside = styled.aside`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.spacings.xxsmall};
    `}
`

export const Title = styled.h1`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.huge};
		color: ${theme.colors.primaryText};
		font-weight: ${theme.font.bold};
		text-transform: capitalize;
		font-family: ${theme.font.family};

		${media.lessThan('large')`
			font-size: ${theme.font.sizes.xxlarge};
		`}

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.xlarge};
		`}
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
		color: ${theme.colors.secondaryText};
		font-weight: ${theme.font.normal};
		font-family: ${theme.font.family};
	`}
`

export const Button = styled.button`
	${({ theme }) => css`
		border: none;
		background-color: ${theme.colors.primary};
		color: ${theme.colors.mainBg};
		font-size: ${theme.font.sizes.large};
		font-weight: ${theme.font.bold};
		padding: ${theme.spacings.xsmall};
		width: fit-content;
		border-radius: ${theme.border.radius.small};
		outline: none;
		font-family: ${theme.font.family};
		transition: .4s;

		&:hover {
			background-color: ${darken(0.1, theme.colors.primary)};
		}

		&:active {
			transform: scale(0.95);
		}

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.medium};
		`}
	`}
`
