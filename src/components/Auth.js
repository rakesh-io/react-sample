import { useState } from "react";
import NotFound from "./NotFound";

export default function(props) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return ( isSignedIn ? props.children : <NotFound />)
}   