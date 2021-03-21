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
            <LI><strong>Quick learner</strong> - able to pick up technologies/frameworkds fairly easily</LI>
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
              <LI>Dart</LI>
              <LI>Python (3.x)</LI>
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
              <LI>MERN Stack</LI>
              <LI>Tailwind CSS</LI>
              <LI>Futter (Dart)</LI>
              <LI>Flask (Python)</LI>
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
                startDate="late 2018"
              >
                <p>Worked on a myriad of web applications and the occasional mobile app while polishing my understanding of CSS and styling.</p>
                <p>Some of the more notable clients include; The (Edinburgh) Fringe, See Me In Work, Edinburgh Gin, Linn and STV</p>
              </Experience>

              <Experience 
                company="Castiko"
                position="CTO"
                startDate="late 2017"
              >
                <p>Continued coding despite being appointed as the CTO, to ensure that I remained close to the implementation (as well as the fact that I enjoy coding.)</p>
                <p>Improved developer work flows and introduced new technologies such as Flutter for mobile apps</p>
              </Experience>

              <Experience 
                company="Castiko"
                position="Team Lead"
                startDate="2017"
              >
                <p>Migrated an existing LAMP stack to a brand-new MERN stack while adding new features.</p>
                <p>Addressed securty vulnerabilities in existing system.</p>
                <p>Also standardised UI across the platform and introduced websockets for RTC.</p>
              </Experience>

              <Experience 
                company="Freelancing"
                position="Software Developer"
                startDate="N/A"
              >
                <p>Worked on many professional applications for different people while doing my undergrad.</p>
              </Experience>
            </div>
          </div>

          <div className="flex-1" >
            {/*Notable Projects*/}
            <H2>Notable Projects</H2>

            <Project
              name="OpenPlans"
              projectSource="BrightSignals / Scottish Govt."
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

            <Project
              name="Skeeball Machine"
              projectSource="BrightSignals"
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