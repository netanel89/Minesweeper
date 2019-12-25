import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "../components";

const AppWrapper = props => {
  const { externalState, externalTheme, children } = props;
  const store = configureStore(externalState);
  // override basic theme values with externalTheme values
  // const theme = { ...basicTheme, ...externalTheme };
  const theme = { ...externalTheme };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default AppWrapper;
