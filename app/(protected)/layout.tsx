import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {authOptions} from "@/lib/authOptions";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth");
    }

    return <>{children}</>;
}
