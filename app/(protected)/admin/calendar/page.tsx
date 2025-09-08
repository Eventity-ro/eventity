import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";
import CalendarPage from "@/app/(protected)/admin/calendar/CalendarPage";
import {getAdminServices} from "@/app/api/admin-services/route";

export default async function AdminCalendar() {

    const session = await getServerSession(authOptions);

    if (session) {
        const adminServices = await getAdminServices(session.user.id);

        return (
            <CalendarPage adminId={session.user.id} adminServices={adminServices}/>
        );
    }
}