import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Akun = () => {

    return (
        <div className='border mt-4 rounded'>
            <div className='container'>
                <div className='row pb-4'>
                    <div className='col-6 font-bold font-xl'>Akun Bank</div>
                    <div className='col-6 bg-green-600 rounded text-white'>+ Tambah Akun Bank</div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-5 bg-gradient-to-r from-yellow-400 to-lime-600 rounded'>VISA</div>
                    <div className='col-5 '>
                        <p className='font-bold'>Bank KB Bukopin</p>
                        <div>
                            <p className='text-gray-400'>****0876 - Yusron Taufik</p>
                            <p className='text-gray-400'>IDR</p>
                        </div>
                    </div>
                    <div className='col-2 flex'>
                        <EditIcon className='text-green-600' />
                        <DeleteOutlineOutlinedIcon className='text-red-600' />
                    </div>
                </div>
            </div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-5 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded'>VISA</div>
                    <div className='col-5'>
                        <p className='font-bold'>Citibank, NA</p>
                        <div>
                            <p className='text-gray-400'>****5525 - Si Tampan</p>
                            <p className='text-gray-400'>USD</p>
                        </div>
                    </div>
                    <div className='col-2 flex'>
                        <EditIcon className='text-green-600' />
                        <DeleteOutlineOutlinedIcon className='text-red-600' />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Akun;
