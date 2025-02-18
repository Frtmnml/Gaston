import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

interface PieSectorDataItem {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: { name: string; category: string };
  percent: number;
  value: number;
}

const data = [
  { name: "Group A", value: 700, fill: "#23A26D", category: "Dining" },
  { name: "Group B", value: 300, fill: "#DA9F53", category: "Groceries" },
  { name: "Group C", value: 300, fill: "#071A15", category: "Gifts" },
  { name: "Group D", value: 200, fill: "#FF3A3A", category: "Health" },
];

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0).toLocaleString();
  const centerLabel = activeIndex !== null ? data[activeIndex].category : `₡${totalValue}`;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          activeIndex={activeIndex ?? undefined}
          onMouseEnter={onPieEnter}
          onMouseLeave={() => setActiveIndex(null)}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={18} fontWeight="bold">
          {centerLabel}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
