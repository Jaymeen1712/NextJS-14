import DashboardContainer from "@/components/dashboard-container";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="bg-neutral-900 flex-1">
        <div className="flex justify-center items-center">
          <DashboardContainer />
          {/* <div className="bg-sky-900 w-[900px] h-[350px] rounded-3xl my-12"></div> */}
        </div>
      </div>
    </div>
  );
}
