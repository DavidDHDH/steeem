import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Authentification from './Authentification'
import userEvent from '@testing-library/user-event'

afterAll(() => {
  cleanup()
})

test('Je me connecte lorsque username & password sont correctes', () => {
  const username = 'David'
  const password = '1234'

  render(<Authentification />)

  const usernameElement = screen.getByLabelText(/Identifiant/i)
  const passwordElement = screen.getByLabelText(/Password/i)
  const submitElement = screen.getByRole('button', { name: /Entrer/i })

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitElement)
  expect(screen.getByText(/steeem/i)).toBeInTheDocument()
})

test("J'ai un message lorsque username est incorrecte", () => {
  const username = 'Martin'
  const password = '1234'

  render(<Authentification />)

  const usernameElement = screen.getByLabelText(/Identifiant/i)
  const passwordElement = screen.getByLabelText(/Password/i)
  const submitElement = screen.getByRole('button', { name: /Entrer/i })

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitElement)
  expect(screen.getByText(/Identification impossible/i)).toBeInTheDocument()
})

test("J'ai un message lorsque password est incorrecte", () => {
  const username = 'David'
  const password = '12'

  render(<Authentification />)

  const usernameElement = screen.getByLabelText(/Identifiant/i)
  const passwordElement = screen.getByLabelText(/Password/i)
  const submitElement = screen.getByRole('button', { name: /Entrer/i })

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitElement)
  expect(screen.getByText(/Identification impossible/i)).toBeInTheDocument()
})
