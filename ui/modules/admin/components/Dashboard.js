import useRoleGuard from "hooks/useRoleGuard";

function Dashboard() {
  useRoleGuard(["admin"]);

  return <div>Admin Dashboard</div>;
}

export default Dashboard;
