"use client";

type dataTypes = {
  reach_rate: number;
  influencer: string;
  type: string;
  year: number;
};

export default function Influencer(props: { mockData: any }) {
  // 2020
  let oldYearInfluencerReach: any = {};
  props.mockData[0].oldYearData.forEach(function (item: any) {
    let influencer = item.influencer;
    let reachRate = item.reach_rate;
    if (oldYearInfluencerReach[influencer]) {
      oldYearInfluencerReach[influencer] += reachRate;
    } else {
      oldYearInfluencerReach[influencer] = reachRate;
    }
  });

  let oldYearOrderInfluencer = Object.keys(oldYearInfluencerReach).sort(
    function (a, b) {
      return oldYearInfluencerReach[b] - oldYearInfluencerReach[a];
    }
  );
  const oldYearTop3Influencer = oldYearOrderInfluencer.slice(0, 3);

  // 2021
  let newYearInfluencerReach: any = {};
  props.mockData[1].newYearData.forEach(function (item: any) {
    let influencer = item.influencer;
    let reachRate = item.reach_rate;
    if (newYearInfluencerReach[influencer]) {
      newYearInfluencerReach[influencer] += reachRate;
    } else {
      newYearInfluencerReach[influencer] = reachRate;
    }
  });

  let newYearOrderInfluencer = Object.keys(newYearInfluencerReach).sort(
    function (a, b) {
      return newYearInfluencerReach[b] - newYearInfluencerReach[a];
    }
  );
  const newYearTop3Influencer = newYearOrderInfluencer.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-12 mt-6 lg:h-16 lg:py-0 py-1 bg-white px-4">
        <div className="col-span-4 flex items-center gap-1">
          {oldYearTop3Influencer.map((influencer, index) => {
            return (
              <div
                key={index}
                className="rounded-full lg:text-lg text-xs lg:h-10 h-6 text-black border-black border-2  bg-gray-300 lg:w-10 w-6 flex items-center justify-center"
              >
                {influencer}
              </div>
            );
          })}
        </div>
        <div className="col-span-4 h-full flex items-center justify-center">
          <h4 className="text-black lg:text-lg text-xs">
            <span className="font-bold">TOP 3 INFLUENCER</span> BY REACH RATE
          </h4>
        </div>
        <div className="col-span-4 flex items-center justify-end gap-1">
          {newYearTop3Influencer.map((influencer, index) => {
            return (
              <div
                key={index}
                className="rounded-full lg:text-lg text-xs lg:h-10 h-6 text-black border-black border-2  bg-gray-300 lg:w-10 w-6 flex items-center justify-center"
              >
                {influencer}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
