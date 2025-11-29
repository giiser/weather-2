import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ForecastProvider} from "./context/ForecastContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ForecastProvider>
        <App />
    </ForecastProvider>
  </StrictMode>,
)
