import './Headpanel.css';
import { useEffect, useState } from 'react';

function Headpanel() {

  const [ntime, setNtime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setNtime(new Date().toLocaleString())
    },1000)
  },[ntime])
  return (
    <div className='h-panel'>
      <h1>Net可视化</h1>
      <h4>当前时间：{ntime}</h4>
    </div>
  )
}

export default Headpanel;