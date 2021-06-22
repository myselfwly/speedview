import './Rightpanel.css';
import Panelb from './Panel/RightPanel/Panelb';
import Panelll from './Panel/RightPanel/Panelll';
import Panell from './Panel/RightPanel/Panell'

function Rightpanel() {

  return (
    <div className='rpanel'>
      <Panelb className={"p-r-u"}/>
      <Panelll className={"p-r-m"}/>
      <Panell className={"p-r-b"}/>
    </div>
  )
}

export default Rightpanel;