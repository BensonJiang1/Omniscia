import TopNav from "../ui/topnav";
import SetBody from "../ui/setbody";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Page() {
  const session = await getServerSession();
  if(!session || !session.user){
    redirect('/api/auth/signin');
  }


    return(
        <>
        <TopNav/>
        <div className="h-screen w-screen bg-[rgb(246,247,251)]">
          {/* Hero Body */}
          <SetBody/>
        </div>
        </>
    );
}