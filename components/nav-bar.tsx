import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import HighlightLink from "./highlight-link";

const pages : { name: string, href: string }[] = [
  {
    name: "Landing",
    href: "/"
  },
  {
    name: "Home",
    href: "/full-spec"
  },
  {
    name: "Resume",
    href: "/resume"
  }
];

export default function NavBar() {

  const [ mobileNavOpen, setMobileNavOpen ] = useState(false);

  return(
    <div className="w-screen" >
      <nav className="sticky top-0 w-full max-w-7xl p-4 text-white flex flex-row flex-nowrap justify-between items-center mx-auto" >

        {/* "branding" */}
        <div className="font-bold text-2xl" >
          <p>Jacques Fernandes</p>
        </div>

        <button className="md:hidden text-2xl p-2" onClick={() => setMobileNavOpen((current) => !current)} >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* desktop nav */}
        <ul className="hidden md:flex flex-row flex-nowrap" >
          {
            pages.map(({ name, href }, index) => <>
              <li key={`nav_link_${index}`} >
                <HighlightLink href={href} >{ name }</HighlightLink>
              </li>
            </>)
          }
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div
        className={"w-full absolute bg-gray-200 md:hidden transition-opacity duration-100 " + `${mobileNavOpen? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul>
          {
            pages.map(({ name, href }, index) => <>
              <Link href={href} >
                <li key={`mob_nav_index_${index}`} className="p-4 cursor-pointer" >
                  <a>{ name }</a>
                </li>
              </Link>
            </>)
          }
        </ul>
      </div>
    </div>
  );
}