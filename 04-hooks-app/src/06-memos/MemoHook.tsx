import React, { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubtitle } from "./ui/MySubtitle";

// const handleMyAPICall = (myValue: string) => {
//     console.log("Llamando");
// }

export const MemoHook = () => {
    const [title, setTitle] = useState("Hola Mundo");
    const [subtitle, setSubtitle] = useState("Hola Mundo subtitulo");

    const handleMyAPICall = useCallback(() => {
        console.log("Llamando", subtitle);
    }, [subtitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle("Hello")}
            >
                Cambiar titulo
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubtitle("World")}
            >
                Cambiar subtitulo
            </button>
        </div>
    );
};
