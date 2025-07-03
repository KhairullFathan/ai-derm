'use client'
import { useState } from 'react'
import Chart from 'react-apexcharts'

export default function ClassificationChart(props) {
  const { prediction } = props
  let series = prediction?.result.map((e) => e.prob)
  let labels = prediction?.result.map((e) => e.class)
  const data = {
    series: series,
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  }
  const [state, setState] = useState({})

  return (
    <>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width={400}
        height={400}
        className="-mb-20 lg:mb-0"
      />
      <div className="flex gap-2 text-red-600">
        *
        <p className="text-start">
          This results are not an accurate diagnosis. For an accurate diagnosis
          and treatement recommendation - consult your doctor.
        </p>
      </div>
    </>
  )
}
