import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import NavigationButtonGroup from './components/NavigationButtonGroup'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavigationButtonGroup />
        <MainRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
