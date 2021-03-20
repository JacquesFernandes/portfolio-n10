import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons'

const H2 : React.FunctionComponent = ({ children }) => <h2 className="text-3xl font-bold" >
  { children }
</h2>;

const H3 : React.FunctionComponent = ({ children }) => <h3 className="text-xl font-bold" >
  { children }
</h3>;

const ListContainer: React.FunctionComponent = ({ children }) => <div className="w-max mx-2 my-1" >
  { children }
</div>

const UL : React.FunctionComponent = ({ children }) => <ul className="list-disc pl-3">
  { children }
</ul>

const LI: React.FunctionComponent = ({ children }) => <li className="ml-3" >
  { children }
</li>

const HR: React.FunctionComponent = () => <hr className="my-3" />;

export default function Resume() {
  return(
    <div className="bg-gray-700 w-full min-h-screen p-1 md:py-3" >
      <div className="bg-white min-h-screen md:w-10/12 max-w-7xl mx-auto p-3" >
        <h1 className="text-5xl font-bold" >Jacques Fernandes</h1>

        <HR />
        
        {/* Brief */}
        <div>
          <H2>Brief</H2>
          <UL>
            <LI>Passionate about tech and software development</LI>
            <LI>Language-agnostic developer - don't have a preference, just the right tool(s) for the job</LI>
            <LI>Quick learner - able to pick up technologies/frameworkds fairly easily</LI>
          </UL>
        </div>

        <HR />

        {/* Skills */}
        <H2>Skills / Technologies</H2>
        <div className="flex flex-row flex-wrap" >

          <ListContainer>
            <H3>Languages</H3>
            <UL>
              <LI>Javascript</LI>
              <LI>Typescript</LI>
              <LI>Dart</LI>
              <LI>PHP</LI>
              <LI>MySQL</LI>
              <LI>NoSQL (MongoDB)</LI>
              <LI>Java</LI>
            </UL>
          </ListContainer>

          <ListContainer>
            <H3>Frameworks</H3>
            <UL>
              <LI>React (JS / TS)</LI>
              <LI>Next (JS / TS)</LI>
              <LI>Tailwind CSS</LI>
              <LI>Futter (Dart)</LI>
              <LI>Vanilla LAMP Stack</LI>
              <LI>Laravel</LI>
              <LI>Craft CMS</LI>
            </UL>
          </ListContainer>

          <ListContainer>
            <H3>Operating Systems</H3>
            <UL>
              <LI>Fedora (my daily driver is runs this)</LI>
              <LI>Ubuntu / Debian</LI>
              <LI>MacOS</LI>
            </UL>
          </ListContainer>

          <ListContainer>
            <H3>DevOps-related</H3>
            <UL>
              <LI>Fairly familiar with AWS</LI>
              <LI>Apache</LI>
              <LI>Nginx</LI>
            </UL>
          </ListContainer>
        </div>

        {/* Experience */}
        <div>
          <H2>Experience</H2>
        </div>

      </div>
    </div>
  );
}