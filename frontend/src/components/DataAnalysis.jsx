import React from 'react'
import GradientLineGraph from './GradientLineGraph'

const DataAnalysis = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="md:space-x-10 space-y-4 mt-8">
          <div className="stats shadow stats-vertical lg:stats-horizontal w-64 h-40">
            <div className="stat place-items-center w-100 h-100">
              <div className="stat-title">Inventory Count</div>
              <div className="stat-value text-[#61AAC5]">150</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
          <div className="stats shadow stats-vertical lg:stats-horizontal w-64 h-40">
            <div className="stat place-items-center">
              <div className="stat-title">Total Consultations</div>
              <div className="stat-value text-[#61AAC5]">56</div>
              <div className="stat-desc">Total number of students visted in a month</div>
            </div>
          </div>
        </div>
        <div className="flex self-center mt-16">
          <GradientLineGraph />
        </div>
      </div>
    </div>
  )
}

export default DataAnalysis