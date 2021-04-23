import { Button, makeStyles, TextField } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '40vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        marginTop: theme.spacing(2)
    }
}))

const Login = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const [usr, setUsr] = useState({})

    const handleInput = (e) => {
        let input = {}
        input[e.target.name] = e.target.value
        setUsr({...usr, ...input})
    }

    const login = () => {
        document.cookie = 'loggedIn=true;max-age60*1000'
        props.addUser(usr)
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <TextField
                    onChange={handleInput}
                    label='Username'
                    name='username'
                />
                <TextField
                    type='password'
                    label='Password'
                />
                <Button
                    className={classes.button}
                    onClick={login}
                    variant='contained'
                    color='primary'
                >Login</Button>
            </div>
        </div>
    )
}

export default Login