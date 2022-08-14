/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import useBaseUrl from '@docusaurus/useBaseUrl';
// import styles from './styles.module.css';

import Avatar from "@site/static/img/myphoto.jpg"





export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <h1>hello</h1>
      </header> */}
      <main>
        <div className=" grid grid-cols-1 lg:grid-cols-2 place-content-evenly  my-10 ">
          <div className='flex justify-center  md:justify-end  '>
            <img src={Avatar} className="rounded-full" alt='avinash' />
          </div>
          <div className='flex flex-col mx-10  '>
            <div>
              <h1 className='text-center md:text-left'>
                Who am I ?
              </h1>
            </div>

            <div className='flex justify-center md:justify-start'>

              <ul>
                <li>Avinash Reddy</li>
                <li>Did lot of assignments during <br /> Mtech in Control and Computing, EE Dept, IIT Bombay</li>
                <li>Enjoying life as  Machine Learning Engineer</li>
                <li>Interested in teaching</li>
              </ul>

            </div>



          </div>

        </div>
        <div className='flex flex-col justify-center' >
          <div>
            <h1 className='text-center text-xl'>My WebPark</h1>

            <div className='flex justify-center'>
              <ul  >
                <li>I faced lot of diffuculties to search for best tutorials online.</li>
                <li>Finally, Learned lot of stuff for free.</li>
                <li>Now I want to teach those in much easier and intutive fashion.</li>
                <li>Time is precious. I don't want to waste your time and my time
                  in dealing these notes in video format.</li>
                <li>You get these notes in markdown style.</li>
                <li>If i feel something should be taught in Video format, I'll embed a
                  YouTube video.</li>

              </ul>
            </div>

            <div className='flex justify-center '>
              <Link to="/docs">
                <span className='bg-gray-300 hover:bg-gray-500  text-black rounded-md p-3 m-4'>Refer to  My Notes</span>
              </Link>

            </div>


            <p className="text-center my-4">
              Stay Hungry. Stay Foolish
            </p>
          </div>

        </div>
      </main>

    </Layout >


  );
}
