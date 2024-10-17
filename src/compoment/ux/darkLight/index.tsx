/* eslint-disable react/react-in-jsx-scope */
import ToggleThemeButton from "./mode";
import ThemedBox from "./colorMode";
import { Box } from "@chakra-ui/react";

const ModeDarkLight = () =>{
return (
    <Box>
        <h1>đổi chế độ</h1>
        <ToggleThemeButton/>
        <ThemedBox/>
    </Box>
);
};
export default ModeDarkLight;