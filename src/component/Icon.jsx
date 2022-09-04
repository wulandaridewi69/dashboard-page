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
        <div className='border text-center'>
            <div className='mb-8 h-auto w-6/12 '>
                <img className='text-center' src={Segitiga} />
            </div>
            <div>
                <HomeOutlinedIcon />
            </div>
            <div className='mt-4'>
                <ConfirmationNumberOutlinedIcon />
            </div>
            <div className='mt-4'>
                <EventAvailableOutlinedIcon />
            </div>
            <div className='mt-4'>
                <Inventory2OutlinedIcon />
            </div>
            <div className='mt-4'>
                <VillaIcon />
            </div>
            <div className='mt-4'>
                <PeopleAltOutlinedIcon />
            </div>
            <div className='mt-4'>
                <LayersOutlinedIcon />
            </div>
            <div className='mt-4'>
                <ViewInArOutlinedIcon />
            </div>
            <div className='mt-4'>
                <KeyboardCommandKeyOutlinedIcon />
            </div>
            <div className='mt-4'>
                <MonetizationOnOutlinedIcon />
            </div>
            <div className='mt-4'>
                <PostAddOutlinedIcon />
            </div>
        </div>
    )

}

export default Icon;
