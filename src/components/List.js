import { IconButton, TableCell, TableRow } from "@material-ui/core"
import { DeleteForever } from "@material-ui/icons"
import { Link } from "react-router-dom"

const List = ({listings, removeListing, user}) => {
    return (
        listings.map((listing, index) => {
           return (
            <TableRow key={index}>
                <TableCell>
                    <Link to={`/details/${index}`}>
                        {listing.name}
                    </Link>
                </TableCell>
                <TableCell >{listing.description}</TableCell>
                <TableCell>{listing.hours}</TableCell>
                <TableCell>{listing.location.address}</TableCell>
                {user.username ?
                    <TableCell>
                        <IconButton onClick={() => removeListing(index)}>
                            <DeleteForever color='error' />
                        </IconButton>
                    </TableCell> :
                    null
                }
            </TableRow>
           )
        })
    )
}

export default List