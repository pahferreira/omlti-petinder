import React from "react"
import AuthHelper from "./AuthHelper"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = AuthHelper.isUserLogged()

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute