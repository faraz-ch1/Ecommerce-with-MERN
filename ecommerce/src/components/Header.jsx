import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, Typography, styled } from '@mui/material';
import Search from "./Search";
import CustomButton from './CustomButtons';
import { Link } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55p;
`

const Component = styled(Link)`
    margin-left : 3%;
    line-height : 0;
    text-decoration : none;
    color: inherit;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const CustomButtonWrapper = styled(Box)(({theme}) =>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))

const MenuButton = styled(IconButton)(({theme}) =>({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))

    

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

function Header(){

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
 
    return(
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>
        <MenuButton color='inherit' onClick={handleOpen}>
            <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
        <Box style={{ width: '200px' }}>
            <List>
                <ListItem Button>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
        </Drawer>

            <Component to='/'>
                <img src={logoURL} alt="flipcart-logo" style={{ width:75 }}/>
                <Box>
                    <SubHeading>
                        Explore&nbsp;
                        <Box component="span" style={{ color: "#ffe500" }}>Plus</Box>
                    </SubHeading>
                </Box>
            </Component>
            <Search />
            <CustomButtonWrapper>
                <CustomButton />
            </CustomButtonWrapper>
            
        </Toolbar>
  </StyledHeader>
)}

export default Header;