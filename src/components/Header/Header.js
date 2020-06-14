import React from 'react';
import Box from '@material-ui/core/Box';
import logo from './assets/RE12LOGOLIGHTBG.png';

const Header = () => (
    <Box m={4}>
         <img className='r12-logo' src={logo} alt="Reimagine 12 Logo" />
    </Box>
)

export default Header;
