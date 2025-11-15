import CookieNotice from "../components/CookieNotice.tsx";
import Login from "../components/Login.tsx";
import Register from "../components/Register.tsx";

export default function GuestLayout() {
    return (
        <>
            <CookieNotice />
            <Login />
            {/* <Register /> */}
        </>
    )
}