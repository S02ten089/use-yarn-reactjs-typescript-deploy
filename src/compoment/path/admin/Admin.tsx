import { Box,Text } from "@chakra-ui/react";
import trung from '../../ui/styless/stylesAll.module.scss';

const Admin: React.FC = () => {
    return (
        <Box>
            <Text 
             className={trung.cssText} 
            
            color='red'>abc</Text>
        </Box>
    )
}
export default Admin;