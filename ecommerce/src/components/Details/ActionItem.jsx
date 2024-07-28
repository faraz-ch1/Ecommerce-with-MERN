import { Box, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../constants/redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px',
    }
}))
    

const Image = styled('img')`
    border: 1px solid #f0f0f0;
    width: 95%;
`

const StyledButton = styled(Button)(({theme}) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%',
    }
}))
    

function ActionItem({ product }){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return(
        <LeftContainer>
        <Box style={{padding: '15px 20px'}}>
            <Image src={product.detailUrl}/>
        </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}>Add To Cart</StyledButton>
            <StyledButton variant="contained" style={{ background:'#fb541b' }}>Buy Now</StyledButton>
        </LeftContainer>
    )
}


export default ActionItem;