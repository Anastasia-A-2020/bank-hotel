import "./Home.scss";

export default function Home() {
  return (
    <div className="p-[10px] bg-[#313F38] ">
      <h1 className="font-mono text-[#FCD043] text-[62px]">
        <span className="text-[#E5E5E5]">Bank</span>Hotel
      </h1>
      <p className="text-center	text-[#FCD043] text-sm">
        rooms // restaurant // congress hall // wine bar
      </p>
      <p className="description mt-[24px] max-w-[290px] font-mono text-[#E5E5E5] text-center text-xs">
        The luxurious hotel in the most beautiful European city with an
        exclusive restaurant, conference-hall, and art-bar.
      </p>
    </div>
  );
}
