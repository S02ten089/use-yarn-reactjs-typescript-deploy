import { Box } from "@chakra-ui/react";
import RouterSetUp from "./router-setup";
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
    </Box>
  );
};

export default App;