import AdminLayout from "./AdminLayout";
import StatsCard from "./StatsCard";
import Chart from "./Chart";
import Table from "./Table";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Users" value="120" />
        <StatsCard title="Orders" value="86" />
        <StatsCard title="Revenue" value="₹45,000" />
      </div>

      <Chart />
      <Table />
    </AdminLayout>
  );
};

export default Dashboard;
