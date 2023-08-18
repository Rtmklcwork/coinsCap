import * as d3 from "d3"; // we will need d3.js

type LineChartProps = {
    width: number;
    height: number;
    data: { x: number, y: number }[];
};

export const LineChart = ({ width, height, data }: LineChartProps) => {

    return (
        <div>
            <svg width={width} height={height}>

            </svg>
        </div>
    );
};