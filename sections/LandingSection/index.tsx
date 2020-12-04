import React from 'react';
import NavBar from '../../components/NavBar';

import { FullScreenPanel } from '../../components/Panels';
import layoutStyles from '../../styles/layouts.module.scss';
import textStyles from '../../styles/text.module.scss';

const panelStyle : React.CSSProperties = {
  display: 'flex',
  flexFlow: 'column nowrap',
};

const LandingSection : React.FunctionComponent = () => {
  return(
    <FullScreenPanel dark styles={panelStyle} >
      <div className={layoutStyles.landingPanel} >
        <h1 className={textStyles.landingHeader} >
          Bring me thine ideas and passion, I shall turn them into code
        </h1>
        <p className={textStyles.robotoFont} >- Jacques Fernandes</p>
      </div>
    </FullScreenPanel>
  );
}

export default LandingSection;