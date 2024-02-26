import waa from "./react-native.png";

const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      <button className=" fixed " onClick={scrollToTop}>
        <img src={waa} alt=""  />
      </button>
    </div>
  );
};

export default Scroll;
