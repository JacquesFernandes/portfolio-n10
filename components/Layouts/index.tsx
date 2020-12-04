import React from 'react';

import layoutStyles from '../../styles/layouts.module.scss';

interface LayoutProps {
  column?: boolean;
  row?: boolean;
}

export const SinglePanelLayout : React.FunctionComponent<LayoutProps> = ({
  children,
  column,
  row
}) => <>
  <div className={[ layoutStyles.singlePanelLayout, column? '-column' : '', row? '-row' : '' ].join(' ').trim()} >
    { children }
  </div>
</>;

export const DoublePanelLayout : React.FunctionComponent<LayoutProps> = ({
  children,
  column,
  row
}) => <>
  <div className={layoutStyles.doublePanelLayout} >
    { children }
  </div>
</>;