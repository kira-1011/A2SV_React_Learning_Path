'use client';

import { store } from "..";
import React, { ReactNode } from "react"
import { Provider } from "react-redux"

type ReduxProviderType = {
  children: ReactNode
}

const Providers = ({ children }: ReduxProviderType) => {
  return <Provider store={store}>{children}</Provider>
}

export default Providers