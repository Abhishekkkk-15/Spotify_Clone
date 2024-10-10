import React, { createContext, useReducer, useContext } from "react";

// Create context
export const DataLayerContext = createContext();

// DataLayer component
export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

// Custom hook to access the context
export const useDataLayerValue = () => useContext(DataLayerContext);
