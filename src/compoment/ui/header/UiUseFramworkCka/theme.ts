import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primary: '#4caf50',
    secondary: '#333',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontWeight: 'bold',
      },
    },
  },
});

export default customTheme;
