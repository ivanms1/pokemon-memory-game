import produce, { Draft } from "immer";
import React, { useReducer, createContext, useContext } from "react";

type Action =
  | { type: "START" }
  | { type: "END" }
  | { type: "PAUSE" }
  | { type: "ADD_GUESSED_ITEM"; payload: string };

type Dispatch = (action: Action) => void;

interface AppProviderProps {
  children: React.ReactNode;
}

interface State {
  guessedItems: string[];
  time: number;
  status: "not-started" | "started" | "paused" | "finished";
}

const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const appReducer = produce((draft: State, action: Action) => {
  switch (action.type) {
    case "START":
      draft.status = "started";
      break;
    case "PAUSE":
      draft.status = "paused";
      break;
    case "END":
      draft.time = 600;
      draft.status = "finished";
      break;
    case "ADD_GUESSED_ITEM":
      draft.guessedItems = [...draft.guessedItems, action.payload];
      break;
    default: {
      throw new Error(`Unhandled action`);
    }
  }
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, {
    guessedItems: [],
    status: "not-started",
    time: 600,
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }

  return context;
}

export default AppProvider;
