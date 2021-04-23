import { Switch, Route, Redirect} from 'react-router'
import cookie from 'cookie'
import Login from './containers/Login'
import Portal from './containers/Portal'
import Details from './containers/Details'
import Add from './containers/Add'

const isAuthenticated = () => {
    return cookie.parse(document.cookie).loggedIn
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={ props => isAuthenticated() ?
            <Component {...props} /> :
            <Redirect to='/' />
        } />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Portal} />
            <Route path='/login' component={Login} />
            <Route path='/details/:id' component={Details} />
            <ProtectedRoute path='/add' component={Add} />
        </Switch>
    )
}

export default Router