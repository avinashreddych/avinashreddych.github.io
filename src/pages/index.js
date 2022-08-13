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
      <script src="https://cdn.tailwindcss.com"> </script>

      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <h1>hello</h1>
      </header> */}
      <main>
        <div className="  mx-96 my-6">
          a
        </div>
        <img src={Avatar} className="rounded-full" />
      </main>

    </Layout>



  );
}
