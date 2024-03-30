"use client";

import { useQuery } from "@tanstack/react-query";
import getInfluencerMockData from "@/app/https";
import CardChart from "@/components/CardChart";
import Status from "@/components/Status";
import Header from "@/components/Header";
import Influencer from "@/components/Influencer";

type dataTypes = {
  forEach(arg0: (el: any) => void): unknown;
  reach_rate: number;
  influencer: string;
  type: string;
  year: number;
};

export default function Card() {
  const { data, isPending, error } = useQuery({
    queryKey: ["getMockData"],
    queryFn: () => getInfluencerMockData(),
    // initialData: props.mockData, // Bu kısmı kaldırıp loading state'i görebilirsin!!
  });

  if (isPending)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="border-gray-300 h-40 w-40 animate-spin mt-10 rounded-full border-8 border-t-blue-600" />
        <h1 className="text-black mt-5">
          Data is loading please wait for a while...
        </h1>
      </div>
    );

  if (error)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-black mt-5">
          "An error has occurred: " + {error.message}
        </h1>
      </div>
    );

  const yearsData: any = [
    {
      // 2020
      oldYearData: [],
      oldYearTotalReachRate: 0,
      oldYearTotalTransicition: 0,
      storyData: {
        oldYearTotalStoryReachRate: 0,
        oldYearTotalStoryReachRatePercentage: 0,
        oldYearTotalStory: 0,
        oldYearTotalStoryPercentage: 0,
      },
      staticData: {
        oldYearTotalStaticReachRate: 0,
        oldYearTotalStaticReachRatePercentage: 0,
        oldYearTotalStatic: 0,
        oldYearTotalStaticPercentage: 0,
      },
      reelsData: {
        oldYearTotalReelsReachRate: 0,
        oldYearTotalReelsReachRatePercentage: 0,
        oldYearTotalReels: 0,
        oldYearTotalReelsPercentage: 0,
      },
    },
    {
      // 2021
      newYearData: [],
      newYearTotalReachRate: 0,
      newYearTotalTransicition: 0,

      storyData: {
        newYearTotalStoryReachRate: 0,
        newYearTotalStoryReachRatePercentage: 0,
        newYearTotalStory: 0,
        newYearTotalStoryPercentage: 0,
        newYearTotalStoryReachRateMinesOldYear: 0,
      },
      staticData: {
        newYearTotalStaticReachRate: 0,
        newYearTotalStaticReachRatePercentage: 0,
        newYearTotalStatic: 0,
        newYearTotalStaticPercentage: 0,
        newYearTotalStaticReachRateMinesOldYear: 0,
      },
      reelsData: {
        newYearTotalReelsReachRate: 0,
        newYearTotalReelsReachRatePercentage: 0,
        newYearTotalReels: 0,
        newYearTotalReelsPercentage: 0,
        newYearTotalReelsReachRateMinesOldYear: 0,
      },
    },
  ];

  data.forEach((el: dataTypes) => {
    const yearIndex = String(el.year).includes("2020") ? 0 : 1;
    const yearData = yearsData[yearIndex];
    const dataKey = String(el.year).includes("2020") ? "oldYear" : "newYear";

    yearData[dataKey + "Data"].push(el);
    yearData[dataKey + "TotalReachRate"] += Number(el.reach_rate);
    yearData[dataKey + "TotalTransicition"] += 1;

    switch (el.type) {
      case "story":
        yearData.storyData[dataKey + "TotalStoryReachRate"] += Number(
          el.reach_rate
        );
        yearData.storyData[dataKey + "TotalStory"] += 1;
        break;
      case "reels":
        yearData.reelsData[dataKey + "TotalReelsReachRate"] += Number(
          el.reach_rate
        );
        yearData.reelsData[dataKey + "TotalReels"] += 1;
        break;
      case "static":
        yearData.staticData[dataKey + "TotalStaticReachRate"] += Number(
          el.reach_rate
        );
        yearData.staticData[dataKey + "TotalStatic"] += 1;
        break;
      default:
        break;
    }
  });

  // Percentage Calculations start

  // Story Calculations

  yearsData[0].storyData.oldYearTotalStoryPercentage = Number(
    (
      (yearsData[0].storyData.oldYearTotalStory * 100) /
      yearsData[0].oldYearTotalTransicition
    ).toFixed(1)
  );

  yearsData[0].storyData.oldYearTotalStoryReachRatePercentage = Number(
    (
      (yearsData[0].storyData.oldYearTotalStoryReachRate * 100) /
      yearsData[0].oldYearTotalReachRate
    ).toFixed(1)
  );

  yearsData[1].storyData.newYearTotalStoryPercentage = Number(
    (
      (yearsData[1].storyData.newYearTotalStory * 100) /
      yearsData[1].newYearTotalTransicition
    ).toFixed(1)
  );

  yearsData[1].storyData.newYearTotalStoryReachRatePercentage = Number(
    (
      (yearsData[1].storyData.newYearTotalStoryReachRate * 100) /
      yearsData[1].newYearTotalReachRate
    ).toFixed(1)
  );

  yearsData[1].storyData.newYearTotalStoryReachRateMinesOldYear =
    yearsData[1].storyData.newYearTotalStoryReachRatePercentage -
    yearsData[0].storyData.oldYearTotalStoryReachRatePercentage;

  // Reels Calculations

  yearsData[0].reelsData.oldYearTotalReelsPercentage = Number(
    (
      (yearsData[0].reelsData.oldYearTotalReels * 100) /
      yearsData[0].oldYearTotalTransicition
    ).toFixed(1)
  );

  yearsData[0].reelsData.oldYearTotalReelsReachRatePercentage = Number(
    (
      (yearsData[0].reelsData.oldYearTotalReelsReachRate * 100) /
      yearsData[0].oldYearTotalReachRate
    ).toFixed(1)
  );

  yearsData[1].reelsData.newYearTotalReelsPercentage = Number(
    (
      (yearsData[1].reelsData.newYearTotalReels * 100) /
      yearsData[1].newYearTotalTransicition
    ).toFixed(1)
  );

  yearsData[1].reelsData.newYearTotalReelsReachRatePercentage = Number(
    (
      (yearsData[1].reelsData.newYearTotalReelsReachRate * 100) /
      yearsData[1].newYearTotalReachRate
    ).toFixed(1)
  );

  yearsData[1].reelsData.newYearTotalReelsReachRateMinesOldYear =
    yearsData[1].reelsData.newYearTotalReelsReachRatePercentage -
    yearsData[0].reelsData.oldYearTotalReelsReachRatePercentage;

  // Static Calculations

  yearsData[0].staticData.oldYearTotalStaticPercentage = Number(
    (
      (yearsData[0].staticData.oldYearTotalStatic * 100) /
      yearsData[0].oldYearTotalTransicition
    ).toFixed(1)
  );

  yearsData[0].staticData.oldYearTotalStaticReachRatePercentage = Number(
    (
      (yearsData[0].staticData.oldYearTotalStaticReachRate * 100) /
      yearsData[0].oldYearTotalReachRate
    ).toFixed(1)
  );

  yearsData[1].staticData.newYearTotalStaticPercentage = Number(
    (
      (yearsData[1].staticData.newYearTotalStatic * 100) /
      yearsData[1].newYearTotalTransicition
    ).toFixed(1)
  );

  yearsData[1].staticData.newYearTotalStaticReachRatePercentage = Number(
    (
      (yearsData[1].staticData.newYearTotalStaticReachRate * 100) /
      yearsData[1].newYearTotalReachRate
    ).toFixed(1)
  );

  yearsData[1].staticData.newYearTotalStaticReachRateMinesOldYear =
    yearsData[1].staticData.newYearTotalStaticReachRatePercentage -
    yearsData[0].staticData.oldYearTotalStaticReachRatePercentage;

  // Percentage Calculations end

  return (
    <div className="bg-gray-100 w-full rounded-3xl py-10">
      {/* Header section start */}
      <Header mockData={yearsData} />
      {/* Header section end */}

      {/* Progress section start */}
      <CardChart mockData={yearsData} />
      {/* Progress section end */}

      {/* INFLUENCERS section start */}
      <Influencer mockData={yearsData} />
      {/* INFLUENCERS section end */}
      {/* STATUS section start */}
      <Status mockData={yearsData} />
      {/* STATUS section start */}
    </div>
  );
}
