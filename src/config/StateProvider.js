// Setup data layer
// We need this to manage the basket

import React, { createContext , useContext , useReducer } from 'react';


// This is the data layer
export const StateContext = createContext()

// Build A Provider

export const StateProvider = ({ reducer, initialState, children }) => (
   <StateContext.Provider value={useReducer( reducer, initialState)}>
      {children}
   </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)