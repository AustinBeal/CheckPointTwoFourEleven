import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import List from '../containers/List'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
    cell: {
        flexGrow: 1
    }
}))

const Portal = (props) => {
    const classes = useStyles()


    console.log(props.listings)

    return (
        <div className={classes.root}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Address</TableCell>
                            {props.user.username ?
                                <TableCell>Delete</TableCell> :
                                null
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <List />
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Portal