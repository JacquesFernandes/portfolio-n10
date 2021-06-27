import React from "react";

interface CommonProps {
  className?: string
}

export const H2 : React.FunctionComponent<CommonProps> = ({ children, className }) => <h2 className={`text-3xl font-bold mt-3 ${className}`} >
  { children }
</h2>;

export const H3 : React.FunctionComponent<CommonProps> = ({ children, className }) => <h3 className={`text-xl font-bold ${className}`} >
  { children }
</h3>;

export const H4 : React.FunctionComponent<CommonProps> = ({ children, className }) => <h4 className={`text-lg font-bold ${className}`} >
  { children }
</h4>