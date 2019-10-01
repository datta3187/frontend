import { toast } from "react-toastify";

import Auth from "../components/Auth"

const auth = new Auth()

export const handle = error => {
    if (error.response) {
        console.log(error)
        const err = error.response.data.errors[0]
        toast.error(err);
        if (err === 'authz.invalid_session') {
            auth.logout()
            this.props.history.push("/");
        }
    }
    else {
        toast.error("" + error);
    }
}