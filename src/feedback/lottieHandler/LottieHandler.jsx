import Lottie from "lottie-react";
import notFound from "@/assets/lottie-files/notFound.json";
import loading from "@/assets/lottie-files/loading.json";
import empty from "@/assets/lottie-files/empty.json";
import error from "@/assets/lottie-files/error.json";
import success from "@/assets/lottie-files/success.json";

const lottieTypes = {
  notFound,
  loading,
  empty,
  error,
  success,
};

function LottieHandler({ type, message }) {
  return (
    <div className="mt-[60px] lg:mt-[90px] py-16 inset-shadow-sm">
      <div className="container text-center">
        <Lottie
          className="mx-auto"
          animationData={lottieTypes[type]}
          style={{ width: "250px" }}
        />
        {message && <h3>{message}</h3>}
      </div>
    </div>
  );
}

export default LottieHandler;
