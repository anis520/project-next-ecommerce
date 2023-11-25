import Account from "@/components/Account";
import { headers } from "next/headers";
import Link from "next/link";

const Page = () => {
  const headersList = headers();
  const role = headersList.get("role");
  const email = headersList.get("email");
  return (
    <div>
      <div className="fixed top-0 left-[70%]  md:left-[30%]  z-30">
        {role == "admin" && (
          <Link href={"/admin"}>
            <button className="bg-indigo-400 mt-2 md:mt-4 text-white font-semibold rounded-md mb-5 p-2">
              Admin panel
            </button>
          </Link>
        )}
      </div>

      <Account email={email} />
    </div>
  );
};

export default Page;
