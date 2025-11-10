import { useState, ComponentProps } from "react"
import ReactTooltip from "react-tooltip"
import { PieChart } from "react-minimal-pie-chart"

// 1. Get the original data entry type
type OriginalDataEntry = ComponentProps<typeof PieChart>["data"][0]

// 2. Define a custom type that *replaces* the title property with
// an optional tooltip property that can be a string or a number
type PieChartDataEntry = Omit<OriginalDataEntry, "title"> & {
  tooltip?: string | number; // Allow number type for tooltip
  title?: string | number; // Allow number type for title
}

// 3. Update the Props type to use the new custom type.
type Props = {
  data: PieChartDataEntry[];
}

// 4. Update the function argument type and ensure it handles string or number
function makeTooltipContent (entry: PieChartDataEntry) {
  // Ensure we convert number types to strings for concatenation
  const tooltipText = typeof entry.tooltip === "number" ? String(entry.tooltip) : entry.tooltip
  const valueText = String(entry.value) // Value is a number, convert to string

  return `${tooltipText} - ${valueText}%`
}

export const ToolTipPieChart = (props: Props) => {
  const [hovered, setHovered] = useState<number | null>(null)

  // The data transformation is fine as the types now align.
  const data = props.data.map(({ title, ...entry }) => {
    return {
      ...entry,
      tooltip: title // This is now valid as 'tooltip' accepts number|string
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
