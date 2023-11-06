import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Svg } from '.'

describe('<Svg/>', () => {
    it('should render', () => {
        render(<Svg/>)

        expect(screen.getByRole('heading', { name: /Svg/i })).toBeInTheDocument()
    })
})
