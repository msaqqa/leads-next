import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DiversifiedSkeleton = () => {
  const renderSelections = Array(4)
    .fill(0)
    .map((_, idx) => {
      return (
        <div key={idx}>
          <div className="w-full h-[390px] leading-none rounded-2xl overflow-hidden mb-5">
            <Skeleton height="100%" />
          </div>
          <div>
            <Skeleton className=" mb-3" width={180} height={20} />
            <div className=" mb-5">
              <Skeleton count="3" height={20} />
            </div>
            <div className=" mb-5">
              <Skeleton width={150} height={20} />
              <Skeleton width={150} height={20} />
            </div>
            <Skeleton width={200} height={50} />
          </div>
        </div>
      );
    });

  return <>{renderSelections}</>;
};

export default DiversifiedSkeleton;
