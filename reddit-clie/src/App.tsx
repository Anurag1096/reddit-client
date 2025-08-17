import { useState, createContext, ReactNode } from "react";
// import "./App.css";

// define the shape of the context
interface SubNameContextType {
  subRedName: string;
  setSubName: React.Dispatch<React.SetStateAction<string>>;
}

// create context outside the component
export const SubNameContext = createContext<SubNameContextType | undefined>(undefined);

function App({ children }: { children: ReactNode }) {
  const [subRedName, setSubName] = useState("");

  return (
    <SubNameContext.Provider value={{ subRedName, setSubName }}>
      {children}
    </SubNameContext.Provider>
  );
}

export default App;
