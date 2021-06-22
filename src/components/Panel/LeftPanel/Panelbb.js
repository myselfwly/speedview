import '../Panel.css';
import * as echarts from 'echarts'
import {useEffect} from 'react'


function Panelbb(props) {
  
  return (
      <div className={"panel"}>
        <div className={`plbottom ${props.className}`}></div>
        <div className='prbottom'></div>
      </div>
  )
}

export default Panelbb;