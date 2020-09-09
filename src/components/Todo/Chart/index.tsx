import React, { useState, useEffect } from "react"
import ReactApexChart from "react-apexcharts"
import useWindowWidth from "../../../hook/size"
import { calcTime } from "../../../util/time"
import useForceUpdate from "use-force-update"
import ApexCharts from "apexcharts"
import { time } from "console"

const Chart = ({ timeArr }: any) => {
  const forceUpdate = useForceUpdate()
  let height = 300
  let width = useWindowWidth()
  const [state, setState] = useState({
    series: [
      {
        name: "Todo Task",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        id: "reactchart",
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
    ApexCharts.exec("reactchart", "updateSeries", [
      {
        data: timeArr,
      },
    ])
    const nextState = state
    nextState.series[0].data = timeArr
    setState(nextState)
  }, [timeArr, state])

  return (
    <div id="chart">
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
