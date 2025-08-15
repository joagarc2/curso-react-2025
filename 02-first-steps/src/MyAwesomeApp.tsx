import type { CSSProperties } from "react";

const firstName = "Joaquin";
const lastName = "Garcia";

const favoriteGmaes = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = true;

const address = {
    zipCode: "ABC-123",
    country: "Canada",
};

const myStyles: CSSProperties = {
    backgroundColor: 'red'
}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGmaes.join(", ")}</p>
            <h1>{isActive}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    );
};
