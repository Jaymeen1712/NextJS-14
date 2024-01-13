import { createContext } from "react";

interface DefaultContextType {
  colors: {
    primary: {
      text: string;
      background: string;
    };
  };
}

export const DefaultContext = createContext<DefaultContextType | null>(null);

export const DefaultContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const colors = {
    primary: {
      text: "text-cyan-300",
      background: "bg-cyan-300",
    },
  };

  return (
    <DefaultContext.Provider value={{ colors }}>
      {children}
    </DefaultContext.Provider>
  );
};
