export interface StoryData {
  newYearTotalStoryReachRate: number;
  newYearTotalStoryReachRatePercentage: number;
  newYearTotalStory: number;
  newYearTotalStoryPercentage: number;
  newYearTotalStoryReachRateMinesOldYear: number;
  oldYearTotalStoryReachRate: number;
  oldYearTotalStoryReachRatePercentage: number;
  oldYearTotalStory: number;
  oldYearTotalStoryPercentage: number;
}

export interface StaticData {
  newYearTotalStaticReachRate: number;
  newYearTotalStaticReachRatePercentage: number;
  newYearTotalStatic: number;
  newYearTotalStaticPercentage: number;
  newYearTotalStaticReachRateMinesOldYear: number;
  oldYearTotalStaticReachRate: number;
  oldYearTotalStaticReachRatePercentage: number;
  oldYearTotalStatic: number;
  oldYearTotalStaticPercentage: number;
}

export interface ReelsData {
  newYearTotalReelsReachRate: number;
  newYearTotalReelsReachRatePercentage: number;
  newYearTotalReels: number;
  newYearTotalReelsPercentage: number;
  newYearTotalReelsReachRateMinesOldYear: number;
  oldYearTotalReelsReachRate: number;
  oldYearTotalReelsReachRatePercentage: number;
  oldYearTotalReels: number;
  oldYearTotalReelsPercentage: number;
}

export default interface YearData {
  newYearData?: any[];
  newYearTotalReachRate: any[];
  newYearTotalTransicition: any[];
  storyData: any[];
  staticData: any[];
  reelsData: any[];
}
