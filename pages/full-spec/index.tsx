import NavBar from "../../components/nav-bar";
import { H2 } from '../../components/full_spec_partials/headers';

export default function FullSpec() {
  return(
    <div className="h-screen w-screen bg-gradient-to-br from-black to-gray-600" >
      <NavBar />
      
      <main
        className="w-4/5 max-w-7xl mx-auto text-white"
      >
        
        <section id="the-elevator-pitch" >
          <H2>The Elevator Pitch</H2>
          <p>Looking for a full stack developer with hands-on, production experince spanning most contemporary web frameworks?</p>
          <p>How about someone who can also build physical installations, like a <a href="https://en.wikipedia.org/wiki/Skee-Ball" >skeeball machine</a>?</p>
          <p>Or are you just looking for an all-rounder, jack-of-all-trades developer to chill and chat with over a drink?</p>
          <p>If your interest is piqued by any of the above, stick around and find out more!</p>
        </section>

      </main>
    </div>
  );
}