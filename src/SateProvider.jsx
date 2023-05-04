import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();//Prepating data layer.

export const StateProvider = ({ reducer, initialState, children }) => ( //({is higher order conponent})
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} 
  </StateContext.Provider>
  //This part is serving the data to all  the layers
);

//UseStateValue is a custum hook
export const useStateValue = () => useContext(StateContext);//Pulling information from data layer