import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";
import AdminDashboard from "@/app/(protected)/admin/dashboard/DashboardPage";
import {getAdminServices} from "@/app/api/admin-services/route";

export default async function DashboardPage() {

    const session = await getServerSession(authOptions);

    if (session) {
        const adminServices = await getAdminServices(session.user.id);

        return (
            <AdminDashboard adminId={session.user.id} adminServices={adminServices} />
        );
    }
}