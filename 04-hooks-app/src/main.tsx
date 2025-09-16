import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./HooksApp";

import { Toaster } from "sonner";

import "./index.css";
import { TrafficLight } from "./01-useState/TrafficLight";
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
import { PokemonPage } from "./03-examples/PokemonPage";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { TasksApp } from "./05-useReducer/TaskApp";
import { ScrambleWords } from "./05-useReducer/ScrambleWords";
import { MemoHook } from "./06-memos/MemoHook";
import { MemoCounter } from "./06-memos/MemoCounter";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import { ClientInformation } from "./08-use-suspense/ClientInformation";
import { getUserAction } from "./08-use-suspense/api/get-user.action";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Toaster />
        {/* <HooksApp/> */}
        {/* <TrafficLight/> */}
        {/* <TrafficLightWithEffect/> */}
        {/* <TrafficLightWithHook/> */}
        {/* <PokemonPage/> */}
        {/* <FocusScreen/> */}
        {/* <TasksApp/> */}
        {/* <ScrambleWords/> */}
        {/* <MemoHook/> */}
        {/* <MemoCounter/> */}
        {/* <InstagromApp/> */}
        <Suspense fallback={<div>Cargando</div>}>
            <ClientInformation getUser={getUserAction(1000)} />
        </Suspense>
    </StrictMode>
);
