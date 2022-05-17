import React, {Fragment} from 'react'
import {Link, withRouter} from "react-router-dom"   //link Provides declarative, accessible navigation around your application.
import { signout, isAuthenticated } from '../auth/helper';


const currentTab = (history, path) => {  //history and path is coming from Link
    if(history.location.pathname === path) {
        return {color: "#0be881"};
    }
    else {
        return {color: "#FFFFFF"};
    }
}

const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">Cart</Link>
            </li>
           {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">DashBoard</Link>
            </li>
           )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">A. DashBoard</Link>
            </li>
            )}
            {!isAuthenticated() && (
                <Fragment>
            <li className="nav-item">
                <Link style = {currentTab(history, "/signup")} className="nav-link" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">SignIn</Link>
            </li>
            </Fragment>
            )} 
            {isAuthenticated() && (
            <li className="nav-item">
                <span
                className="nav-link text-warning"
                onClick={() => {
                    signout(() => {
                        history.push("/")
                    })
                }}
                >
                    Signout
                </span>
            </li>
            )}
        </ul>
    </div>
)
export default withRouter(Menu)