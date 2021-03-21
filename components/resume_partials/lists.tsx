import React from "react";

export const UL : React.FunctionComponent = ({ children }) => <ul className="list-disc ml-3">
  { children }
</ul>;

export const LI: React.FunctionComponent = ({ children }) => <li className="ml-3" >
  { children }
</li>;
