import { headers } from "next/headers";

const AdminAccess = () => {
  const headersList = headers();
  const role = headersList.get("role");
  console.log(role);
  return <div className="mt-52">AdminAccess for {role} </div>;
};

export default AdminAccess;
