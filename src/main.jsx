import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { DataLayer } from './ReactContextApi/Datalayer.jsx'
import App from './App.jsx'
import './index.css'
import reducer,{ initialState } from './ReactContextApi/reducers.jsx'
// import * as serviceWerker from './serviceWorker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<DataLayer initialState={initialState} reducer={reducer}>
  <App /> 
</DataLayer>    
  </StrictMode>,
)

