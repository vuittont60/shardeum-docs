import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {HiDocumentSearch} from 'react-icons/hi'
import {BsFillFileEarmarkPlayFill} from 'react-icons/bs'
import {PiShareNetworkBold} from 'react-icons/pi'
import {LuBaggageClaim} from 'react-icons/lu'
import {FaFileContract} from'react-icons/fa'

const stylecard={

    iconStyle:{color:"#00FF00"},
}
const BigFeatureList=[
    {title: "Shardeum Overview",
        icon:<HiDocumentSearch  style={stylecard.iconStyle}/> ,
        description: (
            <>
                Grasp the innovative features of Shardeum to build app that scale.
            </>
        ),
        alink:"/introduction/what-is-shardeum",
    },
    { title: 'Run a Validator Node',
        icon: <BsFillFileEarmarkPlayFill  style={stylecard.iconStyle} />,
        description: (
            <>
                Contribute to network security and earn rewards in few easy steps.
            </>
        ),
        alink: "/node/run/rpc",

    }
]

const FeatureList = [

    {
        title: 'Network Setup',
        icon:<PiShareNetworkBold  style={stylecard.iconStyle}/> ,
        description: (
            <>



                Access the Shardeum network in a few clicks.
            </>
        ),
        alink:'/network/explorer'
    },
    {
        title: ' Faucet Claim',
        icon: <LuBaggageClaim  style={stylecard.iconStyle}/>,
        description: (
            <>
                Get test SHM for the Shardeum testnet


            </>




        ),
        alink:"/faucet/claim",
    },
    {
        title:'Deploy Smart Contracts',
        icon: <FaFileContract  style={stylecard.iconStyle}/> ,
        description: (
            <>
                Build scalable protocols on Shardeum with smart protocols
            </>
        ),
        alink:'/smart-contracts/deploy/same-address',
    },
];
function BigFeature({ title,icon, description,alink}) {
    return (
        <div className={clsx('col col--6')}>
            <div  className="card bigcard" onClick={()=>{location.href=alink}}>

                <div className='card__header'>
                    <h3>{icon} {title}</h3>
                </div>
                <div className='card__body'>
                    <p >{description}</p>
                </div>

            </div>
        </div>
    );
}
function Feature({ title, icon, description,alink}) {
    return (
        <div className={clsx('col col--4')}>
            <div className='card smallcard' onClick={()=>{location.href=alink}}>
                <div className='card__header'>
                    <h4>{icon} {title}</h4>
                </div>

                <div className='card__body'>
                    <p >{description}</p>
                </div>

            </div>
        </div>
    );
}

function BigFeaturesMap() {
    return (
        <div className="container">
            <div className="row">
                {BigFeatureList.map((props, idx) => (
                    <BigFeature key={idx} {...props} />
                ))}
            </div>
        </div>
    );
}
function SmallFeaturesMap() {
    return (
        <div className="container">
            <div className="row">
                {FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </div>

    );
}
export default function HomepageFeatures() {
    return (
        <section className={styles.features}>

            <BigFeaturesMap />
            <SmallFeaturesMap  />


        </section>
    );
}