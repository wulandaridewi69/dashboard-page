import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Akun = () => {

    return (
        <>
      <div className='container'>
          <div className='row'>
              <div className='col-6'>Akun Bank</div>
              <div className='col-6'>+ Tambah Akun Bank</div>
          </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-5'>VISA</div>
              <div className='col-5'>
                  <p>Bank KB Bukopin</p>
                  <div>
                  <p>****0876 - Yusron Taufik</p>
                  <p>IDR</p>
                  </div>
              </div>
              <div className='col-2 flex'>
                  <EditIcon/>
                  <DeleteOutlineOutlinedIcon/>
              </div>
          </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-5'>VISA</div>
              <div className='col-5'>
                  <p>Citibank, NA</p>
                  <div>
                  <p>****5525 - Si Tampan</p>
                  <p>USD</p>
                  </div>
              </div>
              <div className='col-2 flex'>
                  <EditIcon/>
                  <DeleteOutlineOutlinedIcon/>
              </div>
          </div>
      </div>
      </>
    )

}

export default Akun;
