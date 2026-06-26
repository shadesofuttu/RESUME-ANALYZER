import { createBrowserRouter } from 'react-router-dom'
import { AnalyzeResumePage } from '../pages/AnalyzeResumePage.jsx'
import { LandingPage } from '../pages/LandingPage.jsx'
import { ResultsPage } from '../pages/ResultsPage.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/analyze',
    element: <AnalyzeResumePage />,
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
])
