import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material";

import { LocalOffer } from "@mui/icons-material";


const SmallText = styled(Box)`
    vertical-align: baseline;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(LocalOffer)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
`

function ProductDetail({ product }) {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    
    if (!product || !product.title) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Get extra 20% off upto Rs50 on 1 Item.</Typography>
                <Typography><StyledBadge />Get extra 13% off (Price inclusive of discount)</Typography>
                <Typography><StyledBadge />Signup and get Rs100 free.</Typography>
                <Typography><StyledBadge />Buy 2 items save 5%.</Typography>
                <Typography><StyledBadge />5% off on Card Pay</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | Rs:50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>Warrenty</TableCell>
                        <TableCell>None</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#2874f0' }}>Super ComNet</Box>
                            <Typography>14 days return policy</Typography>
                            <Typography>View more sellers starting from Rs:{product.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}




export default ProductDetail;