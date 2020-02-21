import React from "react";
import {render} from '@testing-library/react'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../redux/store";
import AppProvider from "../../AppProvider";

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </AppProvider>
    </Provider>
  )
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

