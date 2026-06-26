import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/navigation/Navbar.jsx'
import { ResultsDashboard } from '../features/results/ResultsDashboard.jsx'

export function ResultsPage() {
  const location = useLocation()

  const data = location.state?.data

  return (
    <>
      <Navbar />
      <ResultsDashboard data={data} />
    </>
  )
}