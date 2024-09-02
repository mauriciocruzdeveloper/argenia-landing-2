import Navbar from "@/src/components/Navbar/Navbar";
import { use } from "react";
import { signOutAction } from "@/src/actions/actions";
import { auth } from "@/src/auth/auth";

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const session = use(auth());

    return (
        <>
            <Navbar
                session={session}
                signOut={signOutAction}
            />
            {children}
        </>
    );
}