import { redirect } from "react-router-dom";

const Logout = () => {
    localStorage.removeItem("user");
    redirect("/");

    }

export default Logout