import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/index.css';

//? UI imports
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/index.css';

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreApp/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
)
