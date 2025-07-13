import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";
import CalendarPage from "@/app/(protected)/admin/calendar/CalendarPage";

export default async function AdminCalendar() {

    const session = await getServerSession(authOptions);

    if (session) {
        return (
            <CalendarPage adminId={session.user.id} />
        );
    }
}