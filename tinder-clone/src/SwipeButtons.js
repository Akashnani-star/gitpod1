import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GradeIcon from '@mui/icons-material/Grade';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';
import React from 'react';
import "./swipeButtons.css";

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
            <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__star'>
            <GradeIcon fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOnIcon fontSize="large" />
        </IconButton>
    </div>
  )
}

export default SwipeButtons