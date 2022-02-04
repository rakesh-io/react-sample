import { useContext, useState } from "react";
import { AuthContext } from "../context";
import NotFound from "./NotFound";

export default function(props) {
    // const [isSignedIn, setIsSignedIn] = useState(false);
    const authContext = useContext(AuthContext);
    console.log(authContext)
    return ( authContext.isSignedIn ? props.children : <NotFound />)
}