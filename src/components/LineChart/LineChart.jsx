import PropTypes from "prop-types";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = (props) => {
  const mathMarksData = [
    { ID: 1, Name: "Alice", MathMarks: 85 },
    { ID: 2, Name: "Bob", MathMarks: 78 },
    { ID: 3, Name: "Charlie", MathMarks: 92 },
    { ID: 4, Name: "David", MathMarks: 70 },
    { ID: 5, Name: "Emily", MathMarks: 88 },
    { ID: 6, Name: "Frank", MathMarks: 65 },
    { ID: 7, Name: "Grace", MathMarks: 93 },
    { ID: 8, Name: "Henry", MathMarks: 75 },
    { ID: 9, Name: "Irene", MathMarks: 80 },
    { ID: 10, Name: "Jack", MathMarks: 87 },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={mathMarksData}>
        <XAxis dataKey="Name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="MathMarks" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

LineChart.propTypes = {};

export default LineChart;
