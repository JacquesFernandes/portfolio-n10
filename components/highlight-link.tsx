import React from 'react';
import Link from 'next/link';

type HighlightLinkProps = {
  href: string,
  style?: React.CSSProperties,
  className?: string
};

const HighlightLink: React.FC<HighlightLinkProps> = ({ children, style, className, href }) => {

  return(
    <div className="relative group p-2" >
      <div style={{zIndex: -1}} className="absolute bg-white w-0 transition-all group-hover:w-full min-h-full top-0 left-0" />

      <Link href={href} >
        <a 
          style={style} 
          className={`${className} w-max text-center text-xl transition-all group-hover:text-black`} 
        >
          { children }
        </a>
      </Link>
    </div>
  );
}

export default HighlightLink;