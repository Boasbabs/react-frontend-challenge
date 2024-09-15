import { extendTheme } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/styled-system'

const colors = {
    brand: {
        50: '#e6f8f9',
        100: '#ccf1f3',
        200: '#99e3e8',
        300: '#66d4dc',
        400: '#33c6d1',
        500: '#00b8c5',
        600: '#00a6b1',
        700: '#00818a',
        800: '#005c63',
        900: '#00373b'
    }
}

const buttonTheme = defineStyleConfig({
    defaultProps: {
        colorScheme: 'brand'
    }
})

export const theme = extendTheme({
    colors,
    components: { Button: buttonTheme }
})
