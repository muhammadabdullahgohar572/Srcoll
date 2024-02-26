import waa from "./react-native.png";

export const Rea = () => {
  const sroll = window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="fixed">
        <img src={waa} alt="" onClick={sroll} />
      </div>
    </>
  );
};
