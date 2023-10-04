import { Router, Route } from 'electron-router-dom'

import { Login , Home } from './screens'

export function AppRoutes() {
  return (
    <div id='app'>

<Router
      main={
        <>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        
        </>
      }
      
    />
    </div>
  )
}