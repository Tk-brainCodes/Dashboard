import React from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Dateicon from "../../../assests/sharedicons/dateicon.svg";
import LineDivider from "../../../assests/sharedicons/Linedivider.svg";

interface SeriesTypes {
  name: string;
  data: number[];
}

const Linegraph = () => {
  const options: ApexOptions = {
    annotations: {
      points: [
        {
          x: "Feb",
          y: 18,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#F05D23",
            strokeWidth: 1,
            radius: 2,
            shape: "circle",
          },
        },
        {
          x: "Mar",
          y: 48,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#F05D23",
            strokeWidth: 1,
            radius: 2,
            shape: "circle",
          },
        },
        {
          x: "Apr",
          y: 18,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#F05D23",
            strokeWidth: 1,
            radius: 2,
            shape: "circle",
          },
        },
        {
          x: "Jul",
          y: 42,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#F05D23",
            strokeWidth: 1,
            radius: 2,
            shape: "circle",
          },
        },
        {
          x: "Aug",
          y: 32,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#F05D23",
            strokeWidth: 1,
            radius: 2,
            shape: "circle",
          },
        },
      ],
    },
    chart: {
      id: "apexchart-example",
      width: "100%",
      height: 350,
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
      // min: 8,
      position: "bottom",
      offsetY: 10,
      offsetX: -1,
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
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
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
          cssClass: "apexcharts-yaxis-label",
        },
        offsetX: -10,
        offsetY: 3,
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["#F05D23"],
    },
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
            <li className="graph-priority">
              <button className="rectangle" />
              High Priority
            </li>
            <img src={LineDivider} alt="line divider" />
            <div className="graph-date-picker">
              <li style={{ fontWeight: 400 }}>This Month</li>
              <img src={Dateicon} alt="dateicon" />
            </div>
          </div>
        </div>
        <div className="react-apex-chart">
          <ReactApexChart
            options={options}
            series={series}
            height={225}
            width={790}
          />{" "}
        </div>
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
