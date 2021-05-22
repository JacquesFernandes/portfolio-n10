import React from "react";

export const H2 : React.FunctionComponent = ({ children }) => <h2 className="text-3xl font-bold mt-3" >
  { children }
</h2>;

export const H3 : React.FunctionComponent = ({ children }) => <h3 className="text-xl font-bold" >
  { children }
</h3>;

export const H4 : React.FunctionComponent = ({ children }) => <h4 className="text-lg font-bold" >
  { children }
</h4>