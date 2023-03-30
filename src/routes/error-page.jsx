import { Button } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <Navbar />
            <div className="grid place-items-center">
                <h1>Oops!</h1>
                <p>Ha occurrido un error</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={"/"}>
                    <Button colorScheme={"secondary"}>Volver al home</Button>
                </Link>
            </div>
        </>
    );
}

export default ErrorPage;
