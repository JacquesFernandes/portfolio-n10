import React from 'react';

import { H2, H3, H4 } from '../../components/resume_partials/headers';
import { UL, LI } from '../../components/resume_partials/lists';
import { ListContainer, Experience, Project } from '../../components/resume_partials/containers';

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
            <LI><strong>Passionate</strong> about tech and software development</LI>
            <LI><strong>Language-agnostic</strong> developer - don't have a preference, just the right tool(s) for the job</LI>
            <LI><strong>Quick learner</strong> - able to pick up technologies/frameworks fairly easily</LI>
          </UL>
        </div>

        <HR />

        {/* Skills */}
        <H2>Skills / Technologies</H2>
        <div className="flex flex-row flex-wrap" >

          <ListContainer>
            <H3>Languages</H3>
            <UL>
              <LI>Javascript (JS)</LI>
              <LI>Typescript (TS)</LI>
              <LI>PHP (7.x +)</LI>
              <LI>Dart</LI>
              <LI>Python (3.x)</LI>
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
              <LI>Laravel</LI>
              <LI>Futter (Dart)</LI>
              <LI>Tailwind CSS</LI>
              <LI>Craft CMS</LI>
              <LI>MERN Stack</LI>
              <LI>Vanilla LAMP Stack</LI>
              <LI>Flask (Python)</LI>
            </UL>
          </ListContainer>

          <ListContainer>
            <H3>Operating Systems</H3>
            <UL>
              <LI>Fedora (my daily driver runs this)</LI>
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
              <LI>Git</LI>
              <LI>SSH</LI>
            </UL>
          </ListContainer>
        </div>

        <div className="xl:flex flex-row flex-wrap" >

          {/* Experience */}
          <div className="flex-1 xl:mr-6" >
            <H2>Experience</H2>
            <div>
              <Experience 
                company="BrightSignals"
                position="Full Stack Developer"
                startDate="early 2019"
              >
                <p>Worked on a myriad of web applications and the occasional mobile app while polishing my understanding of CSS and styling.</p>
                <p>Some of the more notable clients include; The (Edinburgh) Fringe, See Me In Work, Edinburgh Gin, Linn and STV News</p>
              </Experience>

              <Experience 
                company="Castiko"
                position="CTO"
                startDate="late 2017"
                endDate="late 2018"
              >
                <p>Continued coding despite being appointed as the CTO, to ensure that I remained close to the implementation (as well as the fact that I enjoy coding.)</p>
                <p>Improved developer work flows and introduced new technologies such as Flutter for mobile apps</p>
              </Experience>

              <Experience 
                company="Castiko"
                position="Team Lead"
                startDate="2017"
                endDate="2018"
              >
                <p>Migrated an existing LAMP stack to a brand-new MERN stack while adding new features.</p>
                <p>Addressed securty vulnerabilities in existing system.</p>
                <p>Also standardised UI across the platform and introduced websockets for RTC.</p>
              </Experience>

              <Experience 
                company="Freelancing"
                position="Software Developer"
                startDate="2013"
                endDate="2017"
              >
                <p>Worked on many professional applications for different people while doing my undergrad.</p>
              </Experience>
            </div>
          </div>

          <div className="flex-1" >
            {/*Notable Projects*/}
            <H2>Notable Projects</H2>

            <Project
              name="STV News Flutter MVP app"
              projectSource="BrightSignals / STV News"
            >
              <p>After receiving the task to speed up the existing STV News mobile apps (built with Cordova/PhoneGap), pitched the usage of Flutter for building the apps.</p>
              <p>Ended up being tasked with building an "MVP" / demo app in Flutter to see how it would compare.</p>
              <p>Built an app which would fetch and render articles from a Wordpress API as well as serve advertisements from Google AdMob.</p>
              <p>Early stages of the Flutter app showed drastically reduced launch and load times for articles.</p>
              <ListContainer>
                <H4>Software</H4>
                <UL>
                  <LI>Flutter - Performant mobile app framework from Google</LI>
                  <LI>Wordpress (ReST JSON API) - sent requests to fetch data and what not</LI>
                </UL>
              </ListContainer>
            </Project>

            <Project
              name="OpenPlans"
              projectSource="BrightSignals / Scottish Govt."
            >
              <p>Built a 3D viewing room for virtual consultations.</p>
              <p>Initially used by companies such as SSE for hosting virtual town halls for their development plans.</p>
              <ListContainer>
                <H4>Software</H4>
                <UL>
                  <LI>React JS - For the UI and state management.</LI>
                  <LI>Marzipano - Plugged in <a href="https://www.marzipano.net/" rel="noreferrer" className="underline italic" >this</a> "vanilla JS" tool into React for the 3D room effect</LI>
                </UL>
              </ListContainer>
            </Project>

            <Project
              name="Skeeball Machine"
              projectSource="BrightSignals/Meantime"
            >
              <p>Built a full-blown skeeball machine using the following...</p>
              <ListContainer>
                <H4>Hardware</H4>
                <UL>
                  <LI>Raspberry Pi</LI>
                  <LI>Handful of distance sensors</LI>
                  <LI>Montior & Speakers</LI>
                  <LI>Quite a bit of wiring</LI>
                </UL>
              </ListContainer>
              <ListContainer>
                <H4>Software</H4>
                <UL>
                  <LI>React - to display the UI</LI>
                  <LI>Flask - Python webserver</LI>
                  <LI>Python - to interface with hardware from withing the Flask webserver</LI>
                </UL>
              </ListContainer>
            </Project>
          </div>
        </div>
      </div>
    </div>
  );
}