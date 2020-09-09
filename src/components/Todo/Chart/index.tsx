import React, { useState, useEffect } from "react"
import ReactApexChart from "react-apexcharts"
import useWindowWidth from "../../../hook/size"

const Chart = () => {
  const width = useWindowWidth()

  const calcTime = (): number => {
    const time = new Date()
    const hour = time.getHours()
    const minutes = time.getMinutes()

    if (minutes > 30) {
      return hour + 1
    }
    return hour
  }

  const [state, setState] = useState({
    series: [
      {
        name: "Todo Task",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: Array(9)
          .fill(10)
          .map((x, y) => String(x + y)),
      },
    },
  })

  useEffect(() => {
    const newState = state
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    newState.series[0].data = arr
    setState(newState)
  }, [state])

  return (
    <div id="chart" onClick={() => console.log(calcTime())}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        width={width / 2}
        height={300}
      />
    </div>
  )
}

export default Chart
