"use client";

export default function Header(props: { mockData: any }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="bg-white lg:p-5 p-3 lg:h-16 h-14 rounded-r-2xl flex items-center justify-center">
          <h3 className="text-black lg:text-2xl">REACH RATE</h3>
        </div>
        <div className="bg-white lg:p-5 p-3 lg:h-16 h-14 rounded-l-2xl flex items-center justify-around">
          <h3 className="text-black lg:text-2xl text-xl mr-4 font-medium">
            {Number(
              (
                (props.mockData[0].oldYearTotalReachRate * 100) /
                props.mockData[1].newYearTotalReachRate
              ).toFixed(1)
            )}
            %
          </h3>
          <div className="flex flex-col items-end">
            <div
              className={
                ((props.mockData[1].newYearTotalReachRate -
                  props.mockData[0].oldYearTotalReachRate) /
                  props.mockData[0].oldYearTotalReachRate) *
                  100 >
                1
                  ? "text-green-600 lg:text-sm text-xs font-bold leading-3"
                  : "text-red-600 lg:text-sm text-xs font-bold leading-3"
              }
            >
              {/* {props.mockData[1].staticData.newYearTotalStaticReachRateMinesOldYear + props.mockData[1].reelsData.newYearTotalReelsReachRateMinesOldYear + props.mockData[1].storyData.newYearTotalStoryReachRateMinesOldYear}% */}
              {((props.mockData[1].newYearTotalReachRate -
                props.mockData[0].oldYearTotalReachRate) /
                props.mockData[0].oldYearTotalReachRate) *
                100 >
                1 && "+"}
              {Number(
                ((props.mockData[1].newYearTotalReachRate -
                  props.mockData[0].oldYearTotalReachRate) /
                  props.mockData[0].oldYearTotalReachRate) *
                  100
              ).toFixed(1)}
              %
            </div>
            <div className="text-gray-400 text-xs">in 2021</div>
          </div>
        </div>
      </div>
    </>
  );
}
