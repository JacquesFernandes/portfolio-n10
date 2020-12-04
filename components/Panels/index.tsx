import React from 'react';

import styles from '../../styles/panels.module.scss';

interface FullScreenPanelProps {
  dark?: boolean;
  styles?: React.CSSProperties
}

export const FullScreenPanel : React.FunctionComponent<FullScreenPanelProps> = ({
  children,
  dark,
  styles: styleProp,
}) => <>
  <div className={[styles.fullScreenPanel, dark? styles.dark:''].join(' ').trim()} style={styleProp} >
    { children }
  </div>
</>;