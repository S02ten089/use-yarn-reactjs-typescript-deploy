import { Box } from "@chakra-ui/react";
import RouterSetUp from "./router-setup";
import AppDashboard from "./dashboard/App";
import { MantineProvider, MantineThemeProvider } from "@mantine/core";
// import UI from "./ui";
// import Ux from "./ux";

const App: React.FC = () => {
    return (
    <Box 
    // className="App"
    >
        {/* <UI/>
        <Ux/> */}
        <RouterSetUp/>
        {/* <React.StrictMode> */}
        <MantineProvider >
        <AppDashboard/>
        </MantineProvider >
        {/* </React.StrictMode> */}
    </Box>
  );
};

export default App;