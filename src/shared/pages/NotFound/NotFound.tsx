import React from "react";
import {hot} from "react-hot-loader/root";

function NotFoundComponent() {
    return (
        <div>
            <h1>
                error 404
            </h1>
            <span>
                page not found
            </span>
        </div>
    )
}

export const NotFound = hot(NotFoundComponent);