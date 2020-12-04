import React from 'react';
import Link from 'next/link';

import styles from '../../styles/navbar.module.scss';

interface NavBarProps {
  dark?: boolean;
}

const NavBar : React.FunctionComponent<NavBarProps> = ({
  dark
}) => {
  return(
    <div className={[ styles.bar, dark? styles.dark:'' ].join(' ').trim()} >
      <Link href="/" >
        <a>Home</a>
      </Link>
    </div>
  );
}

export default NavBar;