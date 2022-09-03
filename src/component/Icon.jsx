import React from 'react'
import Segitiga from '../assets/logo-segitiga.png'
import VillaIcon from '@mui/icons-material/Villa';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

const Icon = () => {

    return (
        <>
            <div>
                <img src={Segitiga} />
            </div>
            <div>
                <HomeOutlinedIcon />
            </div>
            <div>
                <ConfirmationNumberOutlinedIcon />
            </div>
            <div>
                <EventAvailableOutlinedIcon />
            </div>
            <div>
                <Inventory2OutlinedIcon />
            </div>
            <div>
                <VillaIcon />
            </div>
            <div>
                <PeopleAltOutlinedIcon />
            </div>
            <div>
                <LayersOutlinedIcon />
            </div>
            <div>
                <ViewInArOutlinedIcon />
            </div>
            <div>
                <KeyboardCommandKeyOutlinedIcon />
            </div>
            <div>
                <MonetizationOnOutlinedIcon />
            </div>
            <div>
                <PostAddOutlinedIcon />
            </div>
        </>
    )

}

export default Icon;
