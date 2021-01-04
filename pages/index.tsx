import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import pageWrapperStyle from '../styles/page_wrapper.module.scss';
import sectionStyles from '../styles/sections.module.scss';
import giphyStyles from '../styles/giphy.module.scss';
import layoutStyles from '../styles/layouts.module.scss';
import sj from '../utils/style-joiner';

const Home : React.FunctionComponent = () => {

  return(
    <>
      {/* Nav Bar here */}
      <div className={pageWrapperStyle.homePage} >

        {/* Landing Section */}
        <section className={sectionStyles.landing} >
          <h2>Bring me thine ideas and passion, and I shall turn them into code.</h2>
          <p>- Jacques Fernandes</p>
        </section>

        {/* About */}
        <section className={sj(sectionStyles.about)} >
          <h2>About</h2>
          <div className={layoutStyles.flexRow} >
            <div className={sj(giphyStyles.embedWrapper, layoutStyles.column)} >
              <div className={giphyStyles.gifContainer}>
                <iframe src="https://giphy.com/embed/Nx0rz3jtxtEre" frameBorder="0" className="giphy-embed" allowFullScreen />
              </div>
              {/* <a href="https://giphy.com/gifs/mrw-top-escalator-Nx0rz3jtxtEre">via GIPHY</a> */}
            </div>
            <hr />
            <div className={layoutStyles.column} >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et porta elit. Vestibulum et eleifend tellus, vitae aliquet felis. Fusce bibendum porttitor dui non sagittis. Cras vitae ex vestibulum, volutpat arcu sodales, maximus leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla placerat ac leo euismod iaculis. Aenean maximus a arcu ut ultrices. In hac habitasse platea dictumst.</p>
              <p>Quisque nibh diam, euismod nec vehicula sed, luctus vitae lacus. Cras et purus justo. Donec pretium risus sapien, ut consectetur sem facilisis ac. Quisque lacinia lorem mi, id aliquet leo tincidunt sed. Vivamus luctus nibh risus, nec mollis nibh placerat finibus. Cras finibus dolor vel eros malesuada, vehicula pellentesque arcu lobortis. Proin lacus diam, consectetur a porta id, gravida sit amet metus.</p>
              <a>Read more...</a>
            </div>
          </div>
        </section>

        {/* Tech used */}
        <section className={sectionStyles.tech} >
          <h2>Tech</h2>
          <div className={layoutStyles.flexRow} >

            <div className={layoutStyles.column} >
              <h3>Frameworks</h3>
            </div>

            <div className={layoutStyles.column} >
              <h3>Languages</h3>
              
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className={sectionStyles.projects} >
          <h2>Projects</h2>
          <div className={layoutStyles.flexRow} >

            <div className={layoutStyles.column} >
              <Image 
                src='/assets/projects.jpg' 
                alt="Projects representation"
                width="100%"
                height="100%"
              />
              <span>Photo by <a href="https://unsplash.com/@alvarordesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alvaro Reyes</a> on <a href="https://unsplash.com/s/photos/project?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            </div>
            
            <div className={layoutStyles.column} >

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;