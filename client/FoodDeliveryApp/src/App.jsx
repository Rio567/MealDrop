import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Connection from "./backend_connection/Connection";
import ContextProvider from "./store/ContextProvider";
function App(){
    return (
        <ContextProvider>
        <>
        <Outlet/>
        <Connection/>
        </>
        </ContextProvider>
    )
}
export default App;