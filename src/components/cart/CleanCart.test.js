import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import CleanCart from './CleanCart'

test('Vider mon panier appelle bien la fonction setCart', () => {
  const handleClickMock = jest.fn()
  render(<CleanCart setCart={handleClickMock} />)
  const cleanButton = screen.getByRole('button')
  userEvent.click(cleanButton)
  expect(handleClickMock).toHaveBeenCalledTimes(1)
})
