import React from "react";

interface Props {
    subtitle: string;
    callMyAPI: (myValue: string) => void;
}

export const MySubtitle = React.memo(({ subtitle, callMyAPI }: Props) => {
    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>
            <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">Llamar a funcion</button>
        </>
    );
});
