import { Box } from "@chakra-ui/react";
import RouterSetUp from "./router-setup";
// import Stats from "../showimg/animation/test";
// import UI from "./ui";
// import Ux from "./ux";
// import { useAdPopup } from "../showimg/useAdPopup/useAdPopup";
// import AdPopup from "../showimg/useAdPopup/AdPopup";

const App: React.FC = () => {
    // const { isOpen,openAd, closeAd } = useAdPopup();

    return (
    <Box 
    // className="App"
    ><>
      {/* <button onClick={openAd}>Mở quảng cáo</button>
      <AdPopup isOpen={isOpen} onClose={closeAd} /> */}
    </>
      
        {/* <UI/>
        <Ux/> */}
        <RouterSetUp/>
    </Box>
  );
};

export default App;