import { ToolTipPieChart } from "components/TooltipPieChart"

export const TokenomicsSection = () => {
  return (
    <div className=" bg-primaryPurple-900">
      <h2 className="pt-8 pb-4 text-3xl font-bold text-center text-white">Tokenomics</h2>
      <div className="flex justify-center gap-12 px-4 py-8 xs:flex-col">
        <ToolTipPieChart data={[
          { title: "Qubetars NFT Rewards Reserve (25M)", value: 25, color: "#C13C37" },
          { title: "QubePlay Rewards Reserve (5M)", value: 5, color: "#471614" },
		  { title: "Trading Liquidity Reserve (10M)", value: 10, color: "#d26560" },
		  { title: "QST Presale Reserve (10M)", value: 10, color: "#563a18" },
		  { title: "QubeApp Staking Reserve (10M)", value: 10, color: "#dbb17e" },
		  { title: "XQST Initial Supply Reserve (40M)", value: 40, color: "#E38627" }
        ]} />
        <div className="grid grid-cols-1 p-2 xs:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-300">Token Symbol</span>
			<span className="text-lg text-white">$QST</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-300">Max Supply</span>
			<span className="text-lg text-white">100M</span>
          </div>
        </div>
      </div>
    </div>
  )
}
