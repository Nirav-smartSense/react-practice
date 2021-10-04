import React, {lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes.constant';
import LoginComponent from '../pages/auth-flow/login/login-form/loginComponent';

const routes = [
    {
        path : ROUTES.SINGUP,
        component : lazy(() => import("../pages/auth-flow/signup-container/signup-form/index"))
    },
    {
        path : ROUTES.VERIFY,
        component : lazy(() => import("../pages/auth-flow/signup-container/verify-email/verify-email"))
    },
    {
        path : ROUTES.LOGIN,
        component : lazy(() => import("../pages/auth-flow/login/login-form/loginComponent"))
    }
];

const Routes = (props) =>{
    return(
        <div>
            {/* <LoginComponent /> */}
            {routes.map((route, index) =>
                (
                    <Route 
                        key={index} 
                        path={route.path}
                        exact={route.exact}
                        render={() => <route.component />}
                    />
                )
            )}
            
        </div>
    );
}

export default Routes;