import { Button, makeStyles, TextField, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: theme.spacing(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50vw',
        padding: theme.spacing(4)
    },
    button: {
        marginTop: theme.spacing(2),
        width: '30%'
    }
}))

const Add = (props) => {
    const classes = useStyles()
    const history = useHistory()

    const [latLong, setLatLong] = useState({})

    const [newListing, setNewListing] = useState({
        name: '',
        hours: '',
        description: '',
        location: {
            address: '',
            lat: 0,
            lng: 0,
        }
    })

    const handleInput = (e) => {
        let newValue = newListing

        if (e.target.name === 'address') {
            newValue.location[e.target.name] = e.target.value
            if (e.target.value !== '') {
                coords(e.target.value)
            }
        } else {
            newValue[e.target.name] = e.target.value
        }
        

        setNewListing({...newListing, ...newValue})
    }

    const coords = () => {
        props.getCoords(newListing.location.address)
    }

    const add = () => {
        newListing.location.lat = latLong.lat
        newListing.location.lng = latLong.lng
        newListing.id = props.listings.length
        props.addListing(newListing)
        history.push('/')
    }

    useEffect(() => {
        let newCoords = {
            lat: props.map.lat,
            lng: props.map.lng
        }
        setLatLong(newCoords)
    }, [props.map])

    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <Typography variant='h5'>Add A Business</Typography>
                <TextField onChange={handleInput} value={newListing.name} name='name' label='Name' />
                <TextField onChange={handleInput} value={newListing.location.address} name='address' label='Address' />
                <TextField onChange={handleInput} value={newListing.hours} name='hours' label='Hours (ex: 8AM - 9PM)' />
                <TextField onChange={handleInput} value={newListing.description} name='description' label='Description' />
                <Button onClick={add} className={classes.button} variant='contained' color='primary'>SAVE</Button>
            </div>
        </div>
    )
}

export default Add