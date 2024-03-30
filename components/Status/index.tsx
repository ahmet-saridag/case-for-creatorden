"use client";

export default function Status(props: { mockData: any }) {
  return (
    <>
      <div
        className={
          props.mockData[1].storyData.newYearTotalStory -
            props.mockData[0].storyData.oldYearTotalStory >
          0
            ? "border-violet-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
            : "border-red-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
        }
      >
        <div
          className={
            props.mockData[1].storyData.newYearTotalStory -
              props.mockData[0].storyData.oldYearTotalStory >
            0
              ? "text-violet-500 col-span-2 font-bold flex justify-start pl-3 items-center"
              : "text-red-500 col-span-2 font-bold flex justify-start pl-3 items-center"
          }
        >
          <h6 className="lg:text-lg text-xs">STORIES</h6>
        </div>
        <div className="col-span-8 text-black font-semibold flex justify-start items-center">
          <h4 className="lg:text-lg text-xs lg:p-0 px-6">
            Count of stories
            {props.mockData[1].storyData.newYearTotalStory -
              props.mockData[0].storyData.oldYearTotalStory >
            0
              ? " increased "
              : " decreased "}
            by{" "}
            {((props.mockData[1].storyData.newYearTotalStory -
              props.mockData[0].storyData.oldYearTotalStory) /
              props.mockData[0].storyData.oldYearTotalStory) *
              100}
            %
          </h4>
        </div>
        <div className="col-span-2  flex justify-end items-center">
          <button
            className={
              props.mockData[1].storyData.newYearTotalStory -
                props.mockData[0].storyData.oldYearTotalStory >
              0
                ? "bg-violet-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
                : "bg-red-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
            }
          >
            {props.mockData[1].storyData.newYearTotalStory -
              props.mockData[0].storyData.oldYearTotalStory >
            0
              ? "GREAT"
              : "IMPROVE"}
          </button>
        </div>
      </div>
      <div
        className={
          props.mockData[1].newYearTotalReachRate -
            props.mockData[0].oldYearTotalReachRate >
          0
            ? "border-black grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
            : "border-red-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
        }
      >
        <div
          className={
            props.mockData[1].newYearTotalReachRate -
              props.mockData[0].oldYearTotalReachRate >
            0
              ? "text-black col-span-2 font-bold flex justify-start pl-3 items-center"
              : "text-red-500 col-span-2 font-bold flex justify-start pl-3 items-center"
          }
        >
          <h6 className="lg:text-lg text-xs">ALL</h6>
        </div>
        <div className="col-span-8 text-black font-semibold flex justify-start items-center">
          <h4 className="lg:text-lg text-xs lg:p-0 px-6">
            Reach Rate in total
            {props.mockData[1].newYearTotalReachRate -
              props.mockData[0].oldYearTotalReachRate >
            0
              ? " increased "
              : " decreased "}
            by{" "}
            {Number(
              ((props.mockData[1].newYearTotalReachRate -
                props.mockData[0].oldYearTotalReachRate) /
                props.mockData[0].oldYearTotalReachRate) *
                100
            ).toFixed(1)}
            %
          </h4>
        </div>
        <div className="col-span-2  flex justify-end items-center">
          <button
            className={
              props.mockData[1].newYearTotalReachRate -
                props.mockData[0].oldYearTotalReachRate >
              0
                ? "bg-black lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
                : "bg-red-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
            }
          >
            {props.mockData[1].newYearTotalReachRate -
              props.mockData[0].oldYearTotalReachRate >
            0
              ? "GREAT"
              : "IMPROVE"}
          </button>
        </div>
      </div>
      <div
        className={
          props.mockData[1].reelsData.newYearTotalReels -
            props.mockData[0].reelsData.oldYearTotalReels >
          0
            ? "border-blue-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
            : "border-red-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
        }
      >
        <div
          className={
            props.mockData[1].reelsData.newYearTotalReels -
              props.mockData[0].reelsData.oldYearTotalReels >
            0
              ? "text-blue-500 col-span-2 font-bold flex justify-start pl-3 items-center"
              : "text-red-500 col-span-2 font-bold flex justify-start pl-3 items-center"
          }
        >
          <h6 className="lg:text-lg text-xs">REELS</h6>
        </div>
        <div className="col-span-8 text-black font-semibold flex justify-start items-center">
          <h4 className="lg:text-lg text-xs lg:p-0 px-6">
            Count of reels
            {props.mockData[1].reelsData.newYearTotalReels -
              props.mockData[0].reelsData.oldYearTotalReels >
            0
              ? " increased "
              : " decreased "}
            by{" "}
            {((props.mockData[1].reelsData.newYearTotalReels -
              props.mockData[0].reelsData.oldYearTotalReels) /
              props.mockData[0].reelsData.oldYearTotalReels) *
              100}
            %
          </h4>
        </div>
        <div className="col-span-2 flex justify-end items-center">
          <button
            className={
              props.mockData[1].reelsData.newYearTotalReels -
                props.mockData[0].reelsData.oldYearTotalReels >
              0
                ? "bg-blue-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
                : "bg-red-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
            }
          >
            {props.mockData[1].reelsData.newYearTotalReels -
              props.mockData[0].reelsData.oldYearTotalReels >
            0
              ? "GREAT"
              : "IMPROVE"}
          </button>
        </div>
      </div>
      <div
        className={
          props.mockData[1].newYearTotalTransicition -
            props.mockData[0].oldYearTotalTransicition >
          0
            ? "border-black grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
            : "border-red-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
        }
      >
        <div
          className={
            props.mockData[1].newYearTotalTransicition -
              props.mockData[0].oldYearTotalTransicition >
            0
              ? "text-black col-span-2 font-bold flex justify-start pl-3 items-center"
              : "text-red-500 col-span-2 font-bold flex justify-start pl-3 items-center"
          }
        >
          <h6 className="lg:text-lg text-xs">ALL</h6>
        </div>
        <div className="col-span-8 text-black font-semibold flex justify-start items-center">
          <h4 className="lg:text-lg text-xs lg:p-0 px-6">
            Total number of content
            {props.mockData[1].newYearTotalTransicition -
              props.mockData[0].oldYearTotalTransicition >
            0
              ? " increased "
              : " decreased "}
            by{" "}
            {Number(
              ((props.mockData[1].newYearTotalTransicition -
                props.mockData[0].oldYearTotalTransicition) /
                props.mockData[0].oldYearTotalTransicition) *
                100
            ).toFixed(1)}
            %
          </h4>
        </div>
        <div className="col-span-2  flex justify-end items-center">
          <button
            className={
              props.mockData[1].newYearTotalTransicition -
                props.mockData[0].oldYearTotalTransicition >
              0
                ? "bg-black lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
                : "bg-red-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
            }
          >
            {props.mockData[1].newYearTotalTransicition -
              props.mockData[0].oldYearTotalTransicition >
            0
              ? "GREAT"
              : "IMPROVE"}
          </button>
        </div>
      </div>
      <div
        className={
          props.mockData[1].staticData.newYearTotalStatic -
            props.mockData[0].staticData.oldYearTotalStatic >
          0
            ? "border-orange-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
            : "border-red-500 grid grid-cols-12 mt-6 h-16 lg:px-2 bg-white lg:mx-5 mx-1 rounded-2xl border-2"
        }
      >
        <div
          className={
            props.mockData[1].staticData.newYearTotalStatic -
              props.mockData[0].staticData.oldYearTotalStatic >
            0
              ? "text-orange-500 col-span-2 font-bold flex justify-start pl-3 items-center"
              : "text-red-500 col-span-2 font-bold flex justify-start pl-3 items-center"
          }
        >
          <h6 className="lg:text-lg text-xs">POSTS</h6>
        </div>
        <div className="col-span-8 text-black font-semibold flex justify-start items-center">
          <h4 className="lg:text-lg text-xs lg:p-0 px-6">
            Count of static posts
            {props.mockData[1].staticData.newYearTotalStatic -
              props.mockData[0].staticData.oldYearTotalStatic >
            0
              ? " increased "
              : " decreased "}
            by{" "}
            {((props.mockData[1].staticData.newYearTotalStatic -
              props.mockData[0].staticData.oldYearTotalStatic) /
              props.mockData[0].staticData.oldYearTotalStatic) *
              100}
            %
          </h4>
        </div>
        <div className="col-span-2  flex justify-end items-center">
          <button
            className={
              props.mockData[1].staticData.newYearTotalStatic -
                props.mockData[0].staticData.oldYearTotalStatic >
              0
                ? "bg-orange-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
                : "bg-red-500 lg:text-lg text-x lg:w-36 min-w-20 lg:px-0 px-2 mr-1 rounded-2xl py-3 text-white font-bold"
            }
          >
            {props.mockData[1].staticData.newYearTotalStatic -
              props.mockData[0].staticData.oldYearTotalStatic >
            0
              ? "GREAT"
              : "IMPROVE"}
          </button>
        </div>
      </div>
    </>
  );
}
