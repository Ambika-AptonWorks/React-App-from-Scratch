import React from 'react';
import "./Header.css"
import { Typography, AppBar } from '@material-ui/core';
import { Toolbar } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ToggleButton from '@mui/material/ToggleButton';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';


const Header = () => {
    return (
        <div className='header'>
            <AppBar color="transparent" >
                <Toolbar>
                    <img src="https://www.aptonworks.com/wp-content/uploads/2021/12/Apton-works-white-copy-1-300x141.png"
                        style={{ 'margin-left': "60px", "background-color": "rgb(247, 240, 240)", "border-radius": "20px" }} width="120px" height="50px" alt="no image" />
                    <ToggleButton style={{ 'margin-left': "80px" }} size="small" value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <Typography variant="h5" style={{ "margin-left": "10px" }}>AptonWorks</Typography>
                    <div className='search-input'>
                        <input type="text" placeholder='search here' />
                        <div className='searchIcon'><SearchSharpIcon /></div>
                    </div>
                    <div className='tools'>
                        <FormControl className='form' sx={{ minWidth: 150, m: 1.5 }}>
                            <InputLabel className='select' ><img src="https://th.bing.com/th?q=American+Flag+Flat+Black&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                                width='20px' height="20px" />&nbsp;English</InputLabel>
                            <Select >
                                <MenuItem value={10} className='menu'>
                                    <img src="https://th.bing.com/th?q=American+Flag+Flat+Black&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                                        width='20px' height="20px" />&nbsp;English</MenuItem>
                                <MenuItem value={20} className='menu'>
                                    <img src="https://th.bing.com/th/id/OIP.YZN6v5ScTMwFW97nonIY9AHaFj?w=273&h=205&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                                        width='20px' height="20px" />&nbsp;French</MenuItem>
                                <MenuItem value={30} className='menu'>
                                    <img src="https://th.bing.com/th?q=Spanish+Flag+without+Symbol&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247 "
                                        width='20px' height="20px" />&nbsp;Spanish</MenuItem>
                                <MenuItem value={30} className='menu'>
                                    <img src="https://th.bing.com/th?q=Germany+German+Flag&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                                        width='20px' height="20px" />&nbsp;Germany</MenuItem>
                            </Select>
                        </FormControl>
                        <div className='notification'>
                            <Stack spacing={3} direction="row" style={{ "margin-top": "30px" }}>
                                <Badge color="success" badgeContent="3 ">
                                    <NotificationsOutlinedIcon />
                                </Badge>
                            </Stack>
                        </div>
                        <div className='chats'>
                            <Stack spacing={3} direction="row" style={{ "margin-top": "30px", "margin-left": "20px" }}>
                                <Badge color="primary" badgeContent="3 ">
                                    <ChatBubbleOutlineRoundedIcon />
                                </Badge>
                            </Stack>
                        </div>
                        <div className='Admin'>
                            <FormControl className='form' sx={{ minWidth: 170, m: 1.5 }}>
                                <InputLabel className='select' style={{ "display": "flex" }} >
                                    <Badge color="success" variant="dot" anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}>
                                        <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/OIP.yV3JKvyb4qERiIfaGPvUBAHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
                                    </Badge> &nbsp;Admin </InputLabel>
                                <Select >
                                    <MenuItem value={10} className='menu'>
                                        &nbsp;My profile</MenuItem>
                                    <MenuItem value={20} className='menu'>
                                        &nbsp;Settings</MenuItem>
                                    <MenuItem value={30} className='menu'>
                                        &nbsp;Logout</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header