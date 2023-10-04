# install 
npm install

# Run
npm start

# build
npm run build

# architecture

this project is Using Electron.js with React.js and electron-builder for making the installer

first of all we create  a React project using create-react-app and after that we go to package.json to make some changes: 

- we specific entry file like this  "main": "./public/electron.js",
- we specific how gonna build our app using the build element for examle like this : "build": {
  "appId": "com.example.app"
....
}   there is alot of params inside build we can not talk all of it but in generale we are building .exe you can find the config in  "nsis": { ...
and the dmg in "mac": { ...
and  for linux in   "linux": {...
https://www.electron.build/configuration/configuration

-installing dev dependcies :
```
npm install concurrently cross-env wait-on electron electron-builder --save-dev
```
- concurrently to run  multiple commands concurrently we need it in the start command
- cross-env we need to run react without opening in the browser
- electron because is it electron app
- electron builder for building the app


now in the public folder we create our entry file is electron.js

- create folder call windows this is where we intial our windows if we have multiple windows 
- inside windows folder I created mainWindows.js file this is we config the windows for example size ...etc
- inside folder we create preload.js please read about preload file ; https://www.electronjs.org/docs/latest/tutorial/tutorial-preload
- now we config the window (mainWindow.js)
- first we install those library for routing 
```
npm install react-router-dom@6 electron-router-dom
```
for react-router-dom we need version 6 to not having problem in production

in the devlopment React will run in Port 3000 but in production we will run react using file index.html so we need a way to tell electron where to load files 

```

//devlopment 
 // Don't forget to check if the port is the same as your dev server
 const devServerURL = createURLRoute('http://localhost:3000', 'main')


 //for production we tell electron to load index.html
 const fileRoute = createFileRoute(
   path.join(__dirname, '../index.html'),
   'main'
 )

if (app.isPackaged) {
 //production
 mainWindow.loadFile(...fileRoute)
} else {
  //devlopment 
  mainWindow.loadURL(devServerURL)
  // Automatically open Chrome's DevTools in development mode.
  mainWindow.webContents.openDevTools();
}
```


now we go to our entry poiny electron.js and there we call our mainWindow.js
the problem is we can create window before the app is ready 

so we call the app ready event like this
```
const { app } = require("electron");



app.on("ready", async () => {
  
 

//we call mainWindow here
  let mainWindow = require("./windows/mainWindow");
  
  //....
  
  ```
 

Fin Architecture



# design

now we go to src folder where there is only Reactjs code

 Im using react-router-dom version 6 for Routs

- create routes.jsx in src folder
- we crate foder call screens and also other foder call components
- in screens folder we create folder call login and home 
- inside both home and login folder we create index.jsx
 ```
/login/index.jsx

import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
```

```
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```

now we go to routes.jsx

and we init our routes like this :

```
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
```


now after we run ```npm start``` in terminal we should see a window created (empty).

### login logic : 

I just folow this blog that talk about multi step forms so I just post the link https://medium.com/how-to-react/create-multi-step-form-in-react-with-validation-4ac09129a3a8  the logic is the same we StepOne StepTwo ..etc you can see every steps in login folder for the UI you can check login.css folder I used pure css and I download the SF Pro Display font 

- now we go to components folder we create two folders (messages - sidebar)
- 



