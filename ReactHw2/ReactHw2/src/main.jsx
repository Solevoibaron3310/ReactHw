import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavoriteProvider } from './FavContext/FavContext.jsx';
import './index.module.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
    <App />
    </FavoriteProvider>
  </StrictMode>,
)
