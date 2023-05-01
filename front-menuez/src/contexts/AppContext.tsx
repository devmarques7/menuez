import { ReactNode, createContext } from "react";

interface IAppContext {}

interface ContextsProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: ContextsProps) => {
  // const [cart, setCart] = useState([]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
