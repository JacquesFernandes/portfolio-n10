import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HighlightLink from '../components/highlight-link';

function useDelayedState<T>(initialValue: T, delayMs: number) {
  const [ stateValue, setStateValue ] = useState(null);

  const delayedSetStateFunction: React.Dispatch<any> = (newValue: T) => {
    setTimeout(() => {
      setStateValue(newValue);
    }, delayMs);
  }

  return [ stateValue, delayedSetStateFunction ];
}

const FadeInH2: React.FunctionComponent<{ loaded:boolean }> = ({ children, loaded }) => {

  const [ show, setDelayedShow ] = useDelayedState(false, 500);

  if (loaded) {
    setDelayedShow(true);
  }

  return(
    <h2 className={`font-bold text-4xl text-gray-200 text-center transition-all duration-500 transform ${show? 'translate-y-0 opacity-1' : 'translate-y-1/2 opacity-0'}`} >{ children }</h2>
  );
}

const FadeInLinks: React.FunctionComponent<{ loaded:boolean }> = ({ loaded }) => {

  const [ show, setDelayedShow ] = useDelayedState(false, 750);

  if (loaded) {
    setDelayedShow(true);
  }

  return(
    <div className={`absolute z-10 bottom-10 w-full flex flex-row flex-wrap justify-center transition-all duration-500 transform ${show? 'translate-y-0 opacity-1' : 'translate-y-1/2 opacity-0'}`} >
      <HighlightLink href="/full-spec" >
        The Full Spec
      </HighlightLink>

      <HighlightLink href="/resume" >
        Resume
      </HighlightLink>
    </div>
  );
}

export default function Home() {

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return(
    <div className="h-screen w-screen overflow-hidden from-black to-gray-600 bg-gradient-to-br text-white relative" >
      
      <div className="h-full w-full flex justify-center items-center p-3 absolute z-0" > 
        <FadeInH2 loaded={isLoaded} >Bring me thine ideas and passion, and I shall turn them into code</FadeInH2>
      </div>

      <FadeInLinks loaded={isLoaded} />

    </div>
  );
}