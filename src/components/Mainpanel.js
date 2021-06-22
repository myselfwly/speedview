import './Mainpanel.css';
import Bodypanel from './Bodypanel.js';
import Headpanel from './Headpanel.js';

function Mainpanel() {
  return (
    <div className='m-panel'>
      <Headpanel />
      <Bodypanel />
    </div>
  )
}

export default Mainpanel;