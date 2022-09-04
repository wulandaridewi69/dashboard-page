import React from 'react'
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

const Location = () => {

  return (
    <div className='border'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>Lokasi</div>
          <div className='col-6'>Lihat Semua</div>
        </div>
      </div>
      <div className='container pb-4 pt-4'>
        <div className='row'>
          <div className='col-4 flex bg-emerald-600'>
            <MapsHomeWorkOutlinedIcon />
            <div>
              <h6>20</h6>
              <p>Induk</p>
            </div>
          </div>
          <div className='col-4 flex bg-emerald-500'>
            <BuildOutlinedIcon />
            <div>
              <h6>3</h6>
              <p>Sub Lokal Level 1</p>
            </div>
          </div>
          <div className='flex bg-emerald-400 col-4'>
            <CottageOutlinedIcon />
            <div>
              <h6>1</h6>
              <p>Sub Lokal level 2</p>
            </div>
          </div>
        </div>
      </div>
    
    </div >
  )

}

export default Location;
