import '../Panel.css';

function Panell(props) {

  return (
      <div className={"panel"}>
        <div className={`plbottom ${props.className}`}></div>
        <div className='prbottom'></div>
      </div>
  )
}

export default Panell;