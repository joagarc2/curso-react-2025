import { useEffect, useState } from "react";

const colors = {
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLigth = (initialColor: TrafficLightColor) => {
    const [ligth, setLigth] = useState<TrafficLightColor>(initialColor);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [countdown]);

    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);
        if (ligth === "red") {
            setLigth("green");
            return;
        }
        if (ligth === "green") {
            setLigth("yellow");
            return;
        }
        if (ligth === "yellow") {
            setLigth("red");
            return;
        }
    }, [countdown, ligth]);

    return {

        //Props
        countdown,

        //Computed
        percentage: (countdown / 5) * 100,
        greenLigth: ligth === 'green' ? colors.green : 'bg-gray-500',
        redLigth: ligth === 'red' ? colors.red : 'bg-gray-500',
        yellowLigth: ligth === 'yellow' ? colors.yellow : 'bg-gray-500',
        //Methods
    }
};
