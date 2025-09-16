import { use, useEffect, type Usable } from "react";
import { getUserAction, type User } from "./api/get-user.action";

const userPromise = getUserAction(1);

interface Props {
    getUser: Usable<User>
}

export const ClientInformation = ({getUser}: Props) => {

    const user = use(getUser);

    // useEffect(() => {
    //     getUserAction(id)
    //         .then(console.log)
    // }, [id])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            ClientInformation
            <h2 className="text-4xl font-thin text-white">Joaquín - #123</h2>
            <p className="text-white text-xl">Elda, Alicante</p>
            <p className="text-white text-xl">Ingeniero Informático</p>
        </div>
    );
};
