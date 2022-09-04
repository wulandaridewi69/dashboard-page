import React from 'react'
import Gedung from '../assets/gedung.jpeg'
import Layout from './Layout'
import Logo from '../assets/logo.png'
import EditIcon from '@mui/icons-material/Edit';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';

const Institusi = () => {

    return (
        <Layout>
            <div className='border'>
                <div className='w-full h-auto -mb-20 bg-white' >
                    <img src={Gedung} />
                </div>
                    <div className='text-center ml-18'>
                        <img className=' w-32 h-auto pb-14 pt-14 border rounded-full ml-24 mr-24 mb-4' src={Logo} />
                    </div>
                <div>
                    <h3 className='text-center font-bold '>Mitramas Infosys Global</h3>
                    <p className='text-center text-gray-400'>Layanan IT</p>
                    <p className='text-green-600 font-bold ml-24 pt-4'><EditIcon />Sunting profil</p>
                </div>
                <div>
                    <h6 className='text-gray-400'>Status Perusahaan</h6>
                    <p>Aktif</p>
                    <h6 className='text-gray-400 pt-4'>Singkatan</h6>
                    <p>MIG</p>
                    <h6 className='text-gray-400 pt-4'>Alamat Perusahaan</h6>
                    <p>Jl. Tebet Raya No. 42, Jakarta Selatan</p>
                    <h6 className='text-gray-400 pt-4'>Penanggung Jawab (PIC)</h6>
                    <p>John Doe</p>
                    <h6 className='text-gray-400 pt-4'>Tanggal PKP</h6>
                    <p>03 Maret 2021</p>
                    <h6 className='text-gray-400 pt-4'>E-mail</h6>
                    <p className='text-green-600'><EmailOutlinedIcon/>mig@mitrasolusi.group</p>
                    <h6 className='text-gray-400 pt-4'>No. Telp</h6>
                    <p className='text-green-600'><CallIcon/>021-5678-1234</p>
                    <h6 className='text-gray-400 pt-4'>Situs Web</h6>
                    <p className='text-green-600'><LanguageIcon/>mitramas.com</p>
                </div>
            </div>

        </Layout>
    )

}

export default Institusi;
