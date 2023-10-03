
import { useEffect } from 'react';
import './App.css';
import { AppRoutes } from './routes';

function App() {

  useEffect(()=>{

    const messages = localStorage.getItem("messages");
    if (!messages) {
      localStorage.setItem("messages" , JSON.stringify([]))
      
    }
  } , [])
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
