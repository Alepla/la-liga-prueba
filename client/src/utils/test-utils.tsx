import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
/* import { TranslationProvider } from 'my-i18n-lib';
import defaultStrings from 'i18n/en-x-default'; */

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ChakraProvider>{/* <TranslationProvider messages={defaultStrings}>{children}</TranslationProvider> */}</ChakraProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
