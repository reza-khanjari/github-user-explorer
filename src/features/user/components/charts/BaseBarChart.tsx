import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import useIsMobile from "@hooks/useIsMobile";

interface BaseBarChart {
  data: Array<{ label: string; value: number }>;
  color: string;
  name: string;
}

function BaseBarChart({ data, color, name }: BaseBarChart) {
  const isMobile = useIsMobile();

  return (
    <BarChart
      barCategoryGap={8}
      layout={isMobile ? "vertical" : "horizontal"}
      style={{
        background: "rgba(255,255,255,0.05)",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
        border: "1px rgba(255,255,255,0.7) solid",
        padding: "16px",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "700px",
        minHeight: "450px",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      {isMobile ? (
        <>
          <XAxis
            type="number"
            width="auto"
            tick={{ fill: "rgba(255,255,255,0.8)", fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="label"
            tick={{ fill: "rgba(255,255,255,0.8)", fontSize: 10 }}
            tickFormatter={(value) => value.slice(0, 10)}
          />
        </>
      ) : (
        <>
          <XAxis
            type="category"
            dataKey="label"
            tick={{ fill: "rgba(255,255,255,0.8)", fontSize: 12 }}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis
            type="number"
            width="auto"
            tick={{ fill: "rgba(255,255,255,0.8)", fontSize: 12 }}
          />
        </>
      )}

      <Tooltip
        cursor={{
          fill: "rgba(0,0,0,0.4)",
          stroke: "none",
        }}
        contentStyle={{
          backgroundColor: "#2A0F5C",
          border: "none",
          borderRadius: 8,
          color: "#fff",
          fontSize: 13,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
        labelStyle={{
          fontWeight: 600,
          marginBottom: 4,
        }}
        itemStyle={{
          color: color,
        }}
      />
      <Legend
        iconType="circle"
        wrapperStyle={{
          width: "100%",
          marginInline: "auto",
          fontSize: 16,
          marginBottom: 10,
        }}
      />

      <Bar
        barSize={50}
        dataKey="value"
        name={name}
        fill={color}
        activeBar={{ fill: "#3776ff" }}
        radius={isMobile ? [0, 5, 5, 0] : [7, 7, 0, 0]}
      />
    </BarChart>
  );
}

export default BaseBarChart;
