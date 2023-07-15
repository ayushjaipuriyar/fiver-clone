import { BsCheckCircle } from "react-icons/bs";

export const FiverBusiness = () => {
  const listItem = (text: string) => {
    return (
      <li className="flex gap-2 items-center">
        <BsCheckCircle className="text-[#62626a] text-2xl" />
        <span>{text}</span>
      </li>
    );
  };
  return (
    <div className="bg-[#0d084d] px-20 py-16 flex gap-10">
      <div className="text-white flex flex-col gap-6 justify-center items-center">
        <div className="felx gap-2">
          {/**fiverlogo */}
          <span className="text-white text-3xl font-bold"></span>
        </div>
        <h2 className="text-3xl font-bold">A solution built for business</h2>
        <h4 className="text-xl">
          Upgrade to a curated experience to access vetted talent and exclusive
          tools
        </h4>
        <ul className="flex flex-col gap-4">
          {listItem("Talent matching")}
          {listItem("Dedicated account management")}
          {listItem("Team collaboration tools")}
          {listItem("Business payment solutions")}
        </ul>
        <button
          className="boirder text-base font0medium px-5 py-2 border-[#1dbf73] bg-[#1cbf73] text-white"
          type="button"
        >
          Exploire Fiverr Business
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">{/**BUNIESS PNG */}</div>
    </div>
  );
};
