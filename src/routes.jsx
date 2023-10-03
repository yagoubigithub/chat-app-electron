import { Router, Route } from 'electron-router-dom'

import { Login } from './screens'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Login />} />
        
        </>
      }
      
    />
  )
}