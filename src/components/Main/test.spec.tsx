import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Main } from '.'

describe('<Main/>', () => {
    it('should render', () => {
        render(<Main/>)

		expect(screen.getByRole('heading', { name: /Meet New Entrepreneurs/i })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Get notified at launch/i })).toBeInTheDocument()
		expect(screen.getByText(/Meeet is a new social media platform for entrepreneurs to socialize./i)).toBeInTheDocument()
		expect(screen.getAllByRole('complementary')).toHaveLength(2)
		expect(screen.getByText(/Follow us on Twitter/i)).toBeInTheDocument()
    })
})
