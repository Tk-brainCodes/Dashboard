import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface SeriesTypes {
  name: string;
  data: number[];
}

const Linegraph = () => {
  const options: ApexOptions = {
    annotations: {
      points: [
        {
          x: new Date("01 Dec 2017").getTime(),
          y: 8607.55,
          marker: {
            size: 8,
          },
          label: {
            borderColor: "#FF4560",
            text: "Point Annotation",
          },
        },
      ],
    },
    chart: {
      id: "apexchart-example",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  };
  const series: Array<SeriesTypes> = [
    {
      name: "Efficiency",
      data: [10, 19, 50, 20, 40, 32],
    },
  ];
  return (
    <>
      <div className="line-chart">
        <div className="graph-heading">
          <div className="graph-heading-text">
            <div className="graph-text">Average Response Time</div>
          </div>
          <div className="graph-header-content">
            <div className="graph-priority">High Priority</div>
            <div className="graph-date-picker"></div>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          height={204}
          width={799}
        />{" "}
      </div>
    </>
  );
};

export default Linegraph;
