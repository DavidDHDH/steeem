import { Alert, AlertTitle } from '@mui/material'

function ErrorDisplay({ error }) {
  return (
    <div role="alert" className="m-20">
      <Alert severity="error">
        <AlertTitle>Erreur</AlertTitle>
        Il y a eu un problème. Détails : {error.status} —{' '}
        <strong>Veuillez réesayer</strong>
      </Alert>
    </div>
  )
}

export default ErrorDisplay
