import React from 'react'
import Home from "./page/HomePage/Home" 
import NotFoundPage from './page/NotFoundPage/NotFoundPage'
const routes = [
    {
        path:'/',
        exact: true,
        main: () =><Home/>
    },
    {
        path:'',
        exact: false,
        main: () =><NotFoundPage/>
    }

]

export default routes
