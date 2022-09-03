// import logo from '';
import '../styles/App.css';
import Layout from '../component/Layout';
import Icon from '../component/Icon'
import Institusi from '../component/Institusi'
import Location from '../component/Location';
import Akun from '../component/Akun';
import Relation from '../component/Relation';
import Activity from '../component/Activity';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Profile from '../assets/profile.jpg';


const App = () => {

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-8'></div>
          <div className='col-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-1'><SearchOutlinedIcon/></div>
                <div className='col-1'><NotificationsOutlinedIcon/></div>
                <div className='col-1'><img className='rounded-full' src={Profile}/></div>
                <div className='col-1'>John Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-1'><Icon /></div>
          <div className='col-3'><Institusi /></div>
          <div className='col-8'>
            <Location />
            <div className='container'>
              <div className='row'>
                <div className='col-5'>
                  <div>
                    <Akun/>
                  </div>
                  <div>
                    <Relation/>
                  </div>
                </div>
                <div className='col-7'><Activity/></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default App;
