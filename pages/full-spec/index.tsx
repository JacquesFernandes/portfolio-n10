import NavBar from "../../components/nav-bar";
import { H2, H3 } from '../../components/full_spec_partials/headers';
import Link from "next/link";

export default function FullSpec() {
  return(
    <div className="min-h-screen w-screen bg-gradient-to-br from-black to-gray-600" >
      <NavBar />
      
      <main
        className="w-4/5 max-w-7xl mx-auto text-white"
      >
        
        <section id="the-elevator-pitch" className='space-y-2' >
          <H2 >The Elevator Pitch</H2>
          <p>Looking for a full stack developer with hands-on, production experince spanning most contemporary web frameworks?</p>
          <p>Looking to build physical installations, like a <a href="https://en.wikipedia.org/wiki/Skee-Ball" className="underline" >skeeball machine</a>?</p>
          <p>Or are you just looking for an all-rounder, jack-of-all-trades developer to chill and chat with over a drink?</p>
          <p>If your interest is piqued by any of the above, stick around and find out more!</p>
        </section>

        <H2 className='mb-2' >A Rough Tour</H2>

        <section className='space-y-4' >
          <Section>
            <H3>Projects</H3>
            <p>Excepteur velit et consequat id in adipisicing ad dolor deserunt laborum ea.</p>
            <Link href="#" ><a>See More...</a></Link>
          </Section>

          <Section>
            <H3>Technologies</H3>
            <p>Ea labore sint est consequat enim enim esse.</p>
            <Link href="#" ><a>See More...</a></Link>
          </Section>

          <Section>
            <H3>About Me</H3>
            <p>Nisi et labore Lorem consequat cupidatat commodo do quis laborum.</p>
            <Link href="#" ><a>See More...</a></Link>
          </Section>
        </section>

      </main>
    </div>
  );
}

const Section: React.FunctionComponent = ({ children }) => 
  <div className='border-white border-l-2 pl-2' >
    { children }
  </div>;