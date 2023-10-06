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
        icon:<HiDocumentSearch style={stylecard.iconStyle}/> ,
        description: (
            <>
                Shardeum is an EVM based L1 that uses dynamic state sharding to achieve linearly scalability while attaining atomic composability across shards.
                This means Shardeum can increase its TPS capacity with each validator added to the network to retain low fees forever.

            </>
        ),
        alink:"/introduction/what-is-shardeum",
    },
    { title: 'How to Run a Validator Node',
        icon: <BsFillFileEarmarkPlayFill style={stylecard.iconStyle} />,
        description: (
            <>
                Shardeum validators perform consensus on transactions. Shardeum validators with honest transaction consensus earn testnet SHM.
                Shardeum validators with dishonest transaction consensus will have their testnet SHM slashed.
            </>
        ),
        alink: "/node/run/validator",

    }
]

const FeatureList = [

    {
        title: 'Network Setup',
        icon:<PiShareNetworkBold style={stylecard.iconStyle}/> ,
        description: (
            <>



                Learn how to connect to Network
            </>
        ),
        alink:'/network/explorer'
    },
    {
        title: ' Faucet Claim',
        icon: <LuBaggageClaim style={stylecard.iconStyle}/>,
        description: (
            <>
                Join the Shardeum Discord to Claim SphinX SHM, accept the invitation of Shardeum Discord.



            </>




        ),
        alink:"/faucet/claim",
    },
    {
        title:'Deploy Smart Contracts',
        icon: <FaFileContract style={stylecard.iconStyle}/> ,
        description: (
            <>
                Having contracts deployed at the same address cross chain makes it very easy to find contracts.

            </>
        ),
        alink:'/smart-contracts/deploy/same-address',
    },
];
function BigFeature({ title,icon, description,alink}) {
    return (
        <div className={clsx('col col--6')}>
            <div  className="card bigcard" onClick={()=>{location.href=alink}}>


                <div className='card-body'>
                    <p className='big-icon'>{icon}</p><p className='big-text'>{title}</p>
                </div>

            </div>
        </div>
    );
}
function Feature({ title, icon, description,alink}) {
    return (
        <div className={clsx('col col--4')}>
            <div className='card smallcard' onClick={()=>{location.href=alink}}>


                <div className='card-body'>
                    <p className='small-icon'>{icon}</p><p className='small-text'>{title}</p>
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