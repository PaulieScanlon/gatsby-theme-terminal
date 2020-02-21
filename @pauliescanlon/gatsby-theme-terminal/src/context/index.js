import React from 'react'
//https://medium.com/@seantheurgel/react-hooks-as-state-management-usecontext-useeffect-usereducer-a75472a862fe

const initialState = { isNavOpen: false }

const reducer = (state, actions) => {
  switch (actions.type) {
    case 'openNav':
      return { ...state, isNavOpen: true }

    case 'closeNav':
      return { ...state, isNavOpen: false }

    default:
      return
  }
}

export const Context = React.createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
