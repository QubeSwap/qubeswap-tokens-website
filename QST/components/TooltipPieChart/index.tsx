import { useState, ComponentProps } from "react"
import ReactTooltip from "react-tooltip"
import { PieChart } from "react-minimal-pie-chart"

// 1. Define a custom type that extends the default data type to include 'tooltip'.
// We use 'string | undefined' to handle cases where 'title' might be missing.
type PieChartDataEntry = ComponentProps<typeof PieChart>["data"][0] & {
  tooltip?: string;
}

// 2. Update the Props type to use the new custom type.
type Props = {
  data: PieChartDataEntry[];
}

// 3. Update the function argument type to use the custom type.
function makeTooltipContent (entry: PieChartDataEntry) {
  // Use a fallback for 'entry.tooltip' just in case it's undefined
  return `${entry.tooltip || entry.title} - ${entry.value}%`
}

export const ToolTipPieChart = (props: Props) => {
  const [hovered, setHovered] = useState<number | null>(null)

  // 4. The data transformation is fine, but the 'data' variable now has the correct type inferred.
  const data = props.data.map(({ title, ...entry }) => {
    return {
      ...entry,
      tooltip: title // 'tooltip' property is correctly added here
    }
  })

  return (
    <div data-tip="" data-for="chart">
      <PieChart
        className="w-[20rem] xs:w-[15rem] mx-auto"
        data={data}
        lineWidth={30}
        paddingAngle={10}
        onMouseOver={(_, index) => {
          setHovered(index)
        }}
        onMouseOut={() => {
          setHovered(null)
        }}
      />
      <ReactTooltip
        id="chart"
        type="light"
        getContent={() =>
          typeof hovered === "number" ? makeTooltipContent(data[hovered]) : null
        }
      />
    </div>
  )
}
