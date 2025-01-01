import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import {Doughnut, Bar,Line} from 'react-chartjs-2';

import './App.css';

function App() {


  return (
    <div className="App">
       <div className="chart1">
        <Bar 
        data={{
           labels:["A","B","C","D"],
          datasets:[ 
           {
            label:"Profit",
            data:[100,200,500,300],
            backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(156, 99, 255, 0.6)", "rgba(54, 162, 235, 0.6)"],
           },
           {
            label:"Loss",
            data:[500,100,50,-200],
            backgroundColor: [ "rgba(255, 99, 132, 0.6)"],
           },
          ]
        }}
        />
      </div>
      <div className="chart2">
        <Doughnut      data={{
           labels:["A","B","C"],
          datasets:[ 
           {
            label:"Profit",
            data:[100,250,500],
            backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(156, 99, 255, 0.6)", "rgba(54, 162, 235, 0.6)"],
           },
           {
            label:"Loss",
            data:[500,100,50],
            backgroundColor: [ "rgba(255, 99, 132, 0.6)"],
           },

          ]
        }}/>
      </div>
      <div className="chart3">
        <Line 
           data={{
           labels:["A","B","C"],
          datasets:[ 
           {
            label:"Profit",
            data:[100,200,500],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
           },
           {
            label:"Loss",
            data:[500,100,50],
            fill: true,
            borderColor: 'rgba(255, 99, 132, 0.6)',
            tension: 0.1
           },
          ]
        }}
        />
      </div>
    </div>
  )
}

export default App
