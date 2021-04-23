import { makeStyles } from '@material-ui/core'
import { BorderStyle } from '@material-ui/icons'
import Map from '../containers/Map'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '10px',
        // backgroundColor: 'grey'
    },
    cardHold:{
        backgroundColor: 'white',
        padding: '10px',
        marginTop: '15px',
        borderWidth: '2px',
        borderColor: 'lightgrey',
        borderStyle: 'groove',
        borderRadius: '10px',
        

    }
}))

const Details = (props) => {
    const classes = useStyles()
    const business = props.listings[props.match.params.id]

    return (
        <div className={classes.root}>
            <div className={classes.cardHold}>
                <h1>{business.name}</h1>
                <div >
                    <h2>{business.location.address}</h2>
                    <h2>{business.hours}</h2>
                    <p>{business.description}</p>
                </div>
                <Map lat={business.location.lat} lng={business.location.lng}/>
            </div>

        </div>
    )
}

export default Details