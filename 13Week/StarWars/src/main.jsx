import { useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ActivePageProvider from './Context/StarContext.jsx'




createRoot(document.getElementById('root')).render(
    <ActivePageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ActivePageProvider>

)
