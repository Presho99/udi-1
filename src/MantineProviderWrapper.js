import React from 'react'
import { MantineProvider } from '@mantine/core'

function MantineProviderWrapper({children}) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
    </MantineProvider>
  )
}

export default MantineProviderWrapper