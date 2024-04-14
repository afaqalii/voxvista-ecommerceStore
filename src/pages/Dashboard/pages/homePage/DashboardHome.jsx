import BarChart from "../../../../components/Charts/BarChart";
import LineChart from "../../../../components/Charts/LineChart";
import PageTitle from "../../Components/PageTitle";
import StoreStats from "./StoreStats";

export default function DashboardHome() {
  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      {/* stats div */}
      <StoreStats />
      <div className="flex flex-wrap gap-5">
        <div className="flex-1">
          <LineChart />
        </div>
        <div className="flex-1">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
