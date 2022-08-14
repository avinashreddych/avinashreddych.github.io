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
import Card from './_components/card';




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
            <main className='container'>
                <h1 className='text-center my-4'>Avinash Reddy Notes</h1>
                <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center'>

                    <Card props={{ name: "Python", description: "Hhello", hyperlink: "/docs/Python/intro" }}></Card>


                    <Card props={{ name: "Bash", description: "Hhello", hyperlink: "/docs/Bash/intro" }}></Card>


                    <Card props={{ name: "DeepLearning", description: "Hhello", hyperlink: "/docs/Bash/intro" }}></Card>


                    <Card props={{ name: "English Grammar", description: "Hhello", hyperlink: "/docs/Bash/intro" }}></Card>

                </div>
            </main>

        </Layout >


    );
}
