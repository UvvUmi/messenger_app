import CookieNotice from "../components/CookieNotice.tsx";
import Login from "../components/Login.tsx";

export default function GuestLayout() {
    return (
        <>
            <CookieNotice />
            <Login />
        </>
    )
}