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

            <header >

                <div className={styles.heroBanner}>Get Started Building on Shardeum</div>
                <div className={styles.subheroBanner}>Shardeum is a dynamic state sharded EVM-based L1 with low transaction fees forever</div>
            </header>
            <HomepageFeatures  />
        </Layout>
    );
}
export default Page;