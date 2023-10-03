import { Router, Route } from 'electron-router-dom'

import { Login , Home } from './screens'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        
        </>
      }
      
    />
  )
}