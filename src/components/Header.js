import { Link, useHistory } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        // backgroundColor: 'pink'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        marginLeft: theme.spacing(1)
    },
    userInfo: {
        color: 'grey',
        marginLeft: '15px',
        
    },
    tools: {
        backgroundColor: 'pink'
    }
}))

const Header = (props) => {
    const classes = useStyles()
    const history = useHistory()

    const logout = () => {
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
        props.removeUser()
        history.replace('/')
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.tools}>
                    <Typography className={classes.title}>Austin Small Businesses</Typography>
                    <Link to='/' className={classes.link}>Listings</Link>
                    {props.user.username ?
                        <>
                            <Link to='/add' className={classes.link}>Add</Link>
                            <Button onClick={logout} className={classes.link}>Logout</Button></> :
                            <Link to='/login' className={classes.link}>Login</Link>
                    }
                </Toolbar>
            </AppBar>
            {props.user.username ?
                <div className={classes.userInfo}>{`Welcome, ${props.user.username}`}!</div> :
                null
            }
        </div>
    )
}

export default Header