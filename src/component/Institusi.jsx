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
        <div className='w-48 h-32' >
            <img src={Gedung}/>
            <div className='w-1/6 h-auto'>
            <img src={Logo}/>
            </div>
        </div>
        <div>
            <h5>Mitramas Infosys Global</h5>
            <p>Layanan IT</p>
            <p><EditIcon />Sunting profil</p>
        </div>
        <div>
            <h6>Status Perusahaan</h6>
            <p>Aktif</p>
            <h6>Singkatan</h6>
            <p>MIG</p>
            <h6>Alamat Perusahaan</h6>
            <p>Jl. Tebet Raya No. 42, Jakarta Selatan</p>
            <h6>Penanggung Jawab (PIC)</h6>
            <p>John Doe</p>
            <h6>Tanggal PKP</h6>
            <p>03 Maret 2021</p>
            <h6>E-mail</h6>
            <p><img src={EmailOutlinedIcon}/>mig@mitrasolusi.group</p>
            <h6><img src={CallIcon }/>No. Telp</h6>
            <p>021-5678-1234</p>
            <h6><img src={LanguageIcon}/>Situs Web</h6>
            <p>mitramas.com</p>
        </div>

        </Layout>
    )

}

export default Institusi;
