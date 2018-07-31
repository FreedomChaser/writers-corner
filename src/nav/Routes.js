import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Character from '../components/character/Character'
import Home from '../components/home/Home'
import Login from '../components/login/Login'

export default function Nav(){
    return(
        <div>
            <Switch>
                {/* this route is the login page */}
                <Route exact path='/' component={Login}/>
                <Route path='/character' component={Character}/>
                <Route path='/home' component={Home}/>
            </Switch>
            
        </div>
    )
}