import { Alert, AlertTitle } from '@mui/material'

function ErrorDisplay({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="m-20">
      <Alert severity="error">
        <AlertTitle>Erreur</AlertTitle>
        Il y a eu un problème {error.message}— <strong>check it out!</strong>
      </Alert>
    </div>
  )
}

export default ErrorDisplay
