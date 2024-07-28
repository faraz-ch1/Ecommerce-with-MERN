import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 10px;
`


function Profile({account, setAccount}){

    const [open, setOpen] = useState(false)

    function handleClick(event){
        setOpen(event.currentTarget);
    }

    function handleClose(){
        setOpen(false);
    }

    function logoutUser(){
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{cursor: 'pointer'}}>{account}</Typography></Box>
            
            <Menu
                
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                
            >
                <MenuItem onClick={() => {handleClose(); logoutUser();}}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Logout>Logout</Logout>
                </MenuItem>
                
            </Menu>
        </>
    )
}

export default Profile;