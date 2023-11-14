import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height="60"
      width="60"
      color="#fff"
      ariaLabel="oval-loading"
      secondaryColor="#6b6e6b"
      strokeWidth={2}
      strokeWidthSecondary={2}
      visible={true}
      wrapperStyle={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: "1200",
      }}
    />
  );
};

export default Loader;
