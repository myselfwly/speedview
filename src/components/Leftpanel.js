import './Leftpanel.css';
import Panellb from './Panel/LeftPanel/Panellb';
import Panell from './Panel/LeftPanel/Panell';
import Panelbb from './Panel/LeftPanel/Panelbb';

function Leftpanel() {

  return (
    <div className='lpanel'>
      <Panellb className={"p-l-u"}/>
      <Panell className={"p-l-m"}/>
      <Panelbb className={"p-l-b"}/>
    </div>
  )
}

export default Leftpanel;