import '../Panel.css';
import * as echarts from 'echarts'
import {useEffect} from 'react'
import { color } from 'echarts';


function Panellb(props) {

  useEffect(tpChart)
  function tpChart() {
    const myChart = echarts.init(document.getElementsByClassName(props.className)[0].parentNode)
    myChart.setOption({
      title: {
          text: '时间-人数 柱状图',
          textStyle: {
            color: 'white',
            fontSize: 15
          },
          textAlign: 'auto'
      },
      legend: {
        type: 'plain'
      },
      tooltip: {
        
      },
      xAxis: {
          data: ['9-10', '11-12', '13-14', '15-16', '16-17']
      },
      yAxis: {},
      series: [
        {
          name: 'A区',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: 'B区',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: 'C区',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
    ]
    })

    setTimeout(function (){
	    window.onresize = function () {
	    	myChart.resize();
	    }
	},200)
  }

  return (
      <div className={"panel"}>
        <div className={`plbottom ${props.className}`}></div>
        <div className='prbottom'></div>
      </div>
  )
}

export default Panellb;