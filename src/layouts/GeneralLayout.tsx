import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";

const GeneralLayout = () => {
  const { user } = useAuthStore();

  if (user !== null) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      GeneralLayout
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
