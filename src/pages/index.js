import React, { useState,useEffect, useLayoutEffect} from 'react';
import HomepageFeatures from '../components/HomepageFeatures';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Page(){

    return(
        <Layout>
            <header  >
                <div className={styles.heroBanner}>Welcome to Shardeum Docs</div>
                <div className={styles.subheroBanner}>Shardeum is an EVM based L1 that uses dynamic state sharding to achieve linearly scalability</div>
            </header>
            <HomepageFeatures  />
        </Layout>
    );
}
export default Page;