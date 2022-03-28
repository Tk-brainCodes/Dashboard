import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface SeriesTypes {
  name: string;
  data: number[];
}

const Linegraph = () => {
  const options: ApexOptions = {
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
      max: 8,
      position: 'bottom',
      labels: {
        show: true,
        style: {
          colors: [
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
          ],
          fontSize: "0.88rem",
          fontFamily: "Gelion",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        maxWidth: 160,
        style: {
          colors: [
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
            "#696D8C",
          ],
          fontSize: "0.88rem",
          fontFamily: "Gelion",
          fontWeight: 400,
        },
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["#F05D23"],
    },
    // markers: {
    //   colors: "#fff",
    //   strokeColors: "#F05D23",
    //   strokeWidth: 1,
    //   size: 6,
    //   shape: "circle",
    // },
  };
  const series: Array<SeriesTypes> = [
    {
      name: "Response Time",
      data: [10, 18, 48, 18, 25, 33, 42, 32],
    },
  ];
  return (
    <>
      <div className="line-chart">
        <div className="graph-heading">
          <div className="graph-heading-text">
            <div className="graph-text">Average Response Time</div>
            <div className="graph-percentage">+4.14%</div>
          </div>
          <div className="graph-header-content">
            <div className="graph-priority">
              <button className="rectangle" />
              High Priority
            </div>
            <div className="graph-date-picker">This Month</div>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          height={220}
          width={799}
        />{" "}
      </div>
      <div className="Graph-aside">
        <div className="card-1">
          <div className="card-title">Average Response Time</div>
          <div className="time">30 Mins</div>
        </div>
        <div className="card-2">
          <div className="card-title"> Response Time</div>
          <div className="time">1 Hour 30 Mins</div>
        </div>
      </div>
    </>
  );
};

export default Linegraph;
