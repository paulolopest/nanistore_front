import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterConfig } from './Router/RouterConfig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterConfig />
    </React.StrictMode>,
)
