import { ApexOptions } from "apexcharts";

export const LINE_GRAPH_DATA = [
  {
    id: 1,
    title: "Average response time",
    cardTitle: "Average Response Time",
    color: "#F05D23",
    options: {
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
    },
    series: [
      {
        name: "Response Time",
        data: [10, 18, 48, 18, 25, 33, 42, 32],
      },
    ],
  },

  {
    id: 2,
    title: "Replies per resolution",
    cardTitle: "Average Replies",
    color: "#3E68FF",
    options: {
      annotations: {
        points: [
          {
            x: "Feb",
            y: 18,
            marker: {
              size: 6,
              fillColor: "#fff",
              strokeColor: "#3E68FF",
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
              strokeColor: "#3E68FF",
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
              strokeColor: "#3E68FF",
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
              strokeColor: "#3E68FF",
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
              strokeColor: "#3E68FF",
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
        colors: ["#3E68FF"],
      },
    },
    series: [
      {
        name: "Replies per resolution",
        data: [10, 18, 48, 18, 25, 33, 42, 32],
      },
    ],
  },
  {
    id: 3,
    title: "Average resolution time",
    cardTitle: "Average Resolution Rate",
    color: "#FB6491",
    options: {
      annotations: {
        points: [
          {
            x: "Feb",
            y: 18,
            marker: {
              size: 6,
              fillColor: "#fff",
              strokeColor: "#FB6491",
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
              strokeColor: "#FB6491",
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
              strokeColor: "#FB6491",
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
              strokeColor: "#FB6491",
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
              strokeColor: "#FB6491",
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
        colors: ["#FB6491"],
      },
    },
    series: [
      {
        name: "Resolution time",
        data: [10, 18, 48, 18, 25, 33, 42, 32],
      },
    ],
  },
  {
    id: 4,
    title: "First contact resolution rate",
    cardTitle: "Average Contact Rate",
    color: "#07C9E2",
    options: {
      annotations: {
        points: [
          {
            x: "Feb",
            y: 18,
            marker: {
              size: 6,
              fillColor: "#fff",
              strokeColor: "#07C9E2",
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
              strokeColor: "#07C9E2",
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
              strokeColor: "#07C9E2",
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
              strokeColor: "#07C9E2",
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
              strokeColor: "#07C9E2",
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
        colors: ["#07C9E2"],
      },
    },
    series: [
      {
        name: "Contact rate",
        data: [10, 18, 48, 18, 25, 33, 42, 32],
      },
    ],
  },
];
