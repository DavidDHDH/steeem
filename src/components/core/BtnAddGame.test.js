import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import BtnAddGame from './BtnAddGame'

test('Add Game button appelle bien la fonction "setIsHidden"', () => {
  const handleClickMock = jest.fn()
  render(<BtnAddGame setIsHidden={handleClickMock} />)
  const button = screen.getByRole('button')
  userEvent.click(button)
  expect(handleClickMock).toHaveBeenCalledTimes(1)
})
