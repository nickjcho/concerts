import { createContext, useContext } from "react";

export const BlabContext = createContext({shouldBlab: false, triggerBlab: () => {}});

export const useBlabContext = () => useContext(BlabContext);