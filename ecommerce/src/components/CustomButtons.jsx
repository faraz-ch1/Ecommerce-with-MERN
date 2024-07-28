import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import LoginDialog from "./Login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";


const Wrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: 'auto',
    '& > Button, & > p, & > div' : {
        marginRight: 40,
        fontSize: 15,
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))
    


const Container = styled(Link)(({theme}) => ({
    display:'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`



function CustomButton(){
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    function openDialog(){
        setOpen(true);
    }
    return(
        <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} /> : <LoginButton variant="contained" onClick={() => openDialog()}> Login </LoginButton>
        }
            
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
            <Container to='/cart'>
            <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon />
            </Badge>
            
            <Typography>Cart</Typography>
            <LoginDialog open={open} setOpen={setOpen}/>
            </Container>
           
        </Wrapper>

    )
}

export default CustomButton;