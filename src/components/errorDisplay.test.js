import { render, screen } from '@testing-library/react'
import ErrorDisplay from './errorDisplay'
import '@testing-library/jest-dom/extend-expect'

const error = { status: 404 }

test('Affichage du pop up erreur', () => {
  render(<ErrorDisplay error={error} />)

  expect(screen.getByText(/Erreur/i)).toBeInTheDocument()
})

test('Affichage du bon code erreur', () => {
  render(<ErrorDisplay error={error} />)
  expect(screen.getByText(/Détails :/i)).toHaveTextContent(error.status)
})
