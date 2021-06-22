import './Bodypanel.css'
import Leftpanel from './Leftpanel.js'
import Middlepanel from './Middlepanel.js'
import Rightpanel from './Rightpanel.js'

function Bodypanel() {
  
  return (
    <div className='bodypanel'>
      <Leftpanel />
      <Middlepanel />
      <Rightpanel />
    </div>
  )
}

export default Bodypanel;