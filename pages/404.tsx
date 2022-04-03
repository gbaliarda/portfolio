import { useEffect } from "react";
import Router from "next/router"

const NotFound = () => {

    useEffect(() => {
        const { pathname } = Router
        if (pathname != "/") {
            Router.push('/');
        }
    })

    return <div></div>
}

export default NotFound;