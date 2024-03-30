"use client";


export default function CardChart(props: { mockData: any }) {


  return (
    <>
      {/* Progress section start */}
      <div className="grid grid-cols-12 mt-7 lg:px-4 px-2">
        <div className="lg:col-span-4 col-span-2 lg:text-lg text-xs text-black font-semibold">
          2020
        </div>
        <div className="lg:col-span-4 col-span-8">
          <div className="grid grid-cols-12 text-black">
            <div className="col-span-2 text-gray-700 lg:text-lg text-xs">%</div>
            <div className="col-span-2 flex justify-center lg:text-lg text-xs">
              #
            </div>
            <div className="col-span-4 flex justify-center font-semibold lg:text-lg text-xs">
              TYPE
            </div>
            <div className="col-span-2 flex justify-center lg:text-lg text-xs">
              #
            </div>
            <div className="col-span-2 flex justify-end text-gray-700 lg:text-lg text-xs">
              %
            </div>
          </div>
        </div>
        <div className="flex justify-end lg:col-span-4 lg:text-lg text-xs col-span-2 text-black font-semibold">
          2021
        </div>
      </div>
      <div className="grid grid-cols-12 mt-2 h-16">
        <div className="lg:col-span-4 col-span-2 bg-violet-200">
          <div
            className="bg-violet-500 lg:text-lg text-xs w-1/4 rounded-r-3xl lg:pl-2 pl-1 h-full flex items-center"
            style={{
              width:
                props.mockData[0].storyData.oldYearTotalStoryReachRatePercentage +
                "%",
            }}
          >
            {props.mockData[0].storyData.oldYearTotalStoryReachRatePercentage}%
          </div>
        </div>
        <div className="lg:col-span-4 col-span-8 bg-violet-200 h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-2 lg:text-lg text-xs flex items-center text-gray-700">
              {props.mockData[0].storyData.oldYearTotalStoryPercentage}%
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-center text-black font-semibold">
              {props.mockData[0].storyData.oldYearTotalStory}
            </div>
            <div className="col-span-4 lg:text-lg text-xs flex items-center justify-center text-gray-700">
              STORIES
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-center text-black font-semibold">
              {props.mockData[1].storyData.newYearTotalStory}
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-end text-gray-700">
              {props.mockData[1].storyData.newYearTotalStoryPercentage}%
            </div>
          </div>
        </div>
        <div className="flex relative items-center justify-end lg:col-span-4 col-span-2 bg-violet-200">
          <div
            className={
              props.mockData[1].storyData.newYearTotalStoryReachRateMinesOldYear > 1
                ? "text-green-500 lg:mx-3 lg:relative bottom-1 right-0 absolute font-bold lg:text-lg text-xs"
                : "text-red-500 lg:mx-3 lg:relative bottom-1 right-0 absolute font-bold lg:text-lg text-xs"
            }
          >
            {props.mockData[1].storyData.newYearTotalStoryReachRateMinesOldYear > 1
              ? "+"
              : ""}
            {props.mockData[1].storyData.newYearTotalStoryReachRateMinesOldYear}%
          </div>
          <div
            className="bg-violet-800 rounded-l-3xl pl-5 h-full flex items-center justify-end lg:pr-2 pr-1 lg:text-lg text-xs"
            style={{
              width:
                props.mockData[1].storyData.newYearTotalStoryReachRatePercentage +
                "%",
              minWidth: "15%",
            }}
          >
            {props.mockData[1].storyData.newYearTotalStoryReachRatePercentage}%
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-2 h-16">
        <div className="lg:col-span-4 col-span-2 bg-orange-200">
          <div
            className="bg-orange-500 lg:text-lg text-xs w-1/4 rounded-r-3xl lg:pl-2 pl-1 h-full flex items-center"
            style={{
              width:
                props.mockData[0].staticData.oldYearTotalStaticReachRatePercentage +
                "%",
            }}
          >
            {props.mockData[0].staticData.oldYearTotalStaticReachRatePercentage}%
          </div>
        </div>
        <div className="lg:col-span-4 col-span-8 bg-orange-200 h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-2 lg:text-lg text-xs flex items-center text-gray-700">
              {props.mockData[0].staticData.oldYearTotalStaticPercentage}%
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-center text-black font-semibold">
              {props.mockData[0].staticData.oldYearTotalStatic}
            </div>
            <div className="col-span-4 lg:text-lg text-xs flex items-center justify-center text-gray-700">
              STATIC POSTS
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-center text-black font-semibold">
              {props.mockData[1].staticData.newYearTotalStatic}
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-end text-gray-700">
              {props.mockData[1].staticData.newYearTotalStaticPercentage}%
            </div>
          </div>
        </div>
        <div className="flex relative items-center justify-end lg:col-span-4 col-span-2 bg-orange-200">
          <div
            className={
              props.mockData[1].staticData.newYearTotalStaticReachRateMinesOldYear >
              1
                ? "text-green-500 lg:mx-3 lg:relative bottom-1 right-0 absolute font-bold lg:text-lg text-xs"
                : "text-red-500 lg:mx-3 lg:relative bottom-1 right-0 absolute font-bold lg:text-lg text-xs"
            }
          >
            {props.mockData[1].staticData.newYearTotalStaticReachRateMinesOldYear > 1
              ? "+"
              : ""}
            {props.mockData[1].staticData.newYearTotalStaticReachRateMinesOldYear}%
          </div>
          <div
            className="bg-orange-800 rounded-l-3xl pl-5 h-full flex items-center justify-end lg:pr-2 pr-1 lg:text-lg text-xs"
            style={{
              width:
                props.mockData[1].staticData.newYearTotalStaticReachRatePercentage +
                "%",
              minWidth: "15%",
            }}
          >
            {props.mockData[1].staticData.newYearTotalStaticReachRatePercentage}%
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-2 h-16">
        <div className="lg:col-span-4 col-span-2 bg-blue-200">
          <div
            className="bg-blue-500 lg:text-lg text-xs w-1/4 rounded-r-3xl lg:pl-2 pl-1 h-full flex items-center"
            style={{
              width:
                props.mockData[0].reelsData.oldYearTotalReelsReachRatePercentage +
                "%",
            }}
          >
            {props.mockData[0].reelsData.oldYearTotalReelsReachRatePercentage}%
          </div>
        </div>
        <div className="lg:col-span-4 col-span-8 bg-blue-200 h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-2 lg:text-lg text-xs flex items-center text-gray-700">
              {props.mockData[0].reelsData.oldYearTotalReelsPercentage}%
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-center text-black font-semibold">
              {props.mockData[0].reelsData.oldYearTotalReels}
            </div>
            <div className="col-span-4 lg:text-lg text-xs flex items-center justify-center text-gray-700">
              REELS
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-center text-black font-semibold">
              {props.mockData[1].reelsData.newYearTotalReels}
            </div>
            <div className="col-span-2 lg:text-lg text-xs flex items-center justify-end text-gray-700">
              {props.mockData[1].reelsData.newYearTotalReelsPercentage}%
            </div>
          </div>
        </div>
        <div className="flex relative items-center justify-end lg:col-span-4 col-span-2 bg-blue-200">
          <div
            className={
              props.mockData[1].reelsData.newYearTotalReelsReachRateMinesOldYear > 1
                ? "text-green-500 lg:mx-3 lg:relative bottom-1 right-0 absolute font-bold lg:text-lg text-xs"
                : "text-red-500 lg:mx-3 lg:relative bottom-1 right-0 absolute font-bold lg:text-lg text-xs"
            }
          >
            {props.mockData[1].reelsData.newYearTotalReelsReachRateMinesOldYear > 1
              ? "+"
              : ""}
            {props.mockData[1].reelsData.newYearTotalReelsReachRateMinesOldYear}%
          </div>
          <div
            className="bg-blue-800 rounded-l-3xl pl-5 h-full flex items-center justify-end lg:pr-2 pr-1 lg:text-lg text-xs"
            style={{
              width:
                props.mockData[1].reelsData.newYearTotalReelsReachRatePercentage +
                "%",
              minWidth: "15%",
            }}
          >
            {props.mockData[1].reelsData.newYearTotalReelsReachRatePercentage}%
          </div>
        </div>
      </div>
      {/* Progress section end */}
    </>
  );
}
