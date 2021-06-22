import '../Panel.css';

function Panelb(props) {

  return (
      <div className={"panel"}>
        <div className={`plbottom ${props.className}`}></div>
        <div className='prbottom'></div>
      </div>
  )
}

export default Panelb;