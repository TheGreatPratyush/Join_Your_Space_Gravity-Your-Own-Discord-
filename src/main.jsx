import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './navigation.css'
import './Footer.css'
import './navigation.css'
import './Components/Login.css'
import './Components/Signup.css'
import LastPage from './Components/LastPage.jsx'
createRoot(document.getElementById('root')).render(
    <App/>
    // <LastPage/>
    
)
