/* eslint-disable react/react-in-jsx-scope */
import ToggleThemeButton from "./mode";
// import ThemedBox from "./colorMode";
import { Box } from "@chakra-ui/react";

const ModeDarkLight = () =>{
return (
    <Box>
        <ToggleThemeButton/>
        {/* <ThemedBox/> */}
    </Box>
);
};
export default ModeDarkLight;