import DiversifiedSkeleton from "./skeletons/diversified-skeleton";

const skeletonTypes = {
  diversified: DiversifiedSkeleton,
};

function Loading({ loading, error, children, type }) {
  const Component = skeletonTypes[type];
  if (loading) {
    return <Component />;
  }
  // if (loading === "failed") {
  //   return <LottieHandler type="error" message={error} />;
  // }
  return children;
}

export default Loading;
