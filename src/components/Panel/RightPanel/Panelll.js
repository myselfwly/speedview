import '../Panel.css';

function Panelll(props) {

  return (
      <div className={"panel"}>
        <div className={`plbottom ${props.className}`}></div>
        <div className='prbottom'></div>
      </div>
  )
}

export default Panelll;