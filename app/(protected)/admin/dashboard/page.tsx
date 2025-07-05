import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";
import AdminDashboard from "@/app/(protected)/admin/dashboard/DashboardPage";

export default async function DashboardPage() {

    const session = await getServerSession(authOptions);

    if (session) {
        return (
            <AdminDashboard adminId={session.user.id}/>
        );
    }
}