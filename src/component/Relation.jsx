import React from 'react'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Relation = () => {

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-6'><h5>Relasi</h5></div>
                <div className='col-6'><p>Lihat semua</p></div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <ShareOutlinedIcon />
                </div>
                <div className='col-2'>
                    <h5>20</h5>
                    <p>Memiliki</p>
                </div>
            </div>
        </div>
        <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <ShareOutlinedIcon />
            </div>
            <div className='col-2'>
                <h5>108</h5>
                <p>Menggunakan</p>
            </div>
        </div>
    </div>
    <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <ShareOutlinedIcon />
                </div>
                <div className='col-2'>
                    <h5>67</h5>
                    <p>Meminjam</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Relation;
