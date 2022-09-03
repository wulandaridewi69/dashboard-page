import React from 'react'
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

const Location = () => {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>Lokasi</div>
          <div className='col-6'>Lihat Semua</div>
        </div>
      </div>
      <div className='flex'>
        <div>
          <img src={MapsHomeWorkOutlinedIcon} />
          <div>
            <h6>20</h6>
            <p>Induk</p>
          </div>
        </div>
        <div>
          <img src={BuildOutlinedIcon} />
          <div>
            <h6>3</h6>
            <p>Sub Lokal Level 1</p>
          </div>
        </div>
        <div>
          <img src={CottageOutlinedIcon} />
          <div>
            <h6>1</h6>
            <p>Sub Lokal level 2</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Location;
