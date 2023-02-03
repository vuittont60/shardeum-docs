---
title: Validator
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to run a validator node

## Benefits of operating a validator

Running your own validator:

    -enhances Shardeum network security
    -earns testnet SHM from user transaction fees

## Validating Transactions

Shardeum validators perform consensus on transactions.

Shardeum validators with honest transaction consensus earn testnet SHM.

Shardeum validators with dishonest transaction consensus will have their testnet SHM slashed.

## Minimum Hardware Requirements

```
-60 GB ssd storage
-Quad core CPU less than 10 years old if self hosting
-Dual core CPU works if hosted with newer Xeons / EPYC
-16 GB of ram,  4+ GB of virtual memory recommended
-Hosting: 8 GB RAM + 8 GB Virtual Memory
```

## How do I run a validator on Shardeum?

## Step 1: Install prerequisites

### Open a Shell terminal

Access the terminal interface for Shell CLI commands:

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>

```
(Press at the same time)
Ctrl + Alt + T
```

  </TabItem>
    <TabItem value="mac" label="Mac" default>

```
(Press at the same time)
Command + Space bar 
(Type)
Terminal 
```

  </TabItem>
</Tabs>


### Install package managers

We will use curl in this tutorial to download files:

:::info
Mac comes with curl, so we will install homebrew with curl (which will handle handle packages like apt in Linux).
:::

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>

```shell
sudo apt-get install curl
```

  </TabItem>
  <TabItem value="mac" label="Mac" default>

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

  </TabItem>

</Tabs>

### Update package managers

Make sure your packages are up to date first:

:::info
When you add sudo to a command, the output will ask for your system password for admin verification.
:::

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>

```shell
sudo apt update
```

  </TabItem>
  <TabItem value="mac" label="Mac" default>

```shell
brew update
```

  </TabItem>

</Tabs>

### Install docker

Install docker with docker.io:

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>

```shell
sudo apt install docker.io
```

  </TabItem>
  <TabItem value="mac" label="Mac" default>

```shell
brew install docker
```

  </TabItem>

</Tabs>

Check that docker is working with (should return version 20.10.12 or higher):

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
docker --version
```

  </TabItem>

</Tabs>

### Install docker-compose

Curl request docker-compose:

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

  </TabItem>
  <TabItem value="mac" label="Mac" default>

```shell
brew install docker-compose
```

   </TabItem>
</Tabs>

Setup permissions for docker-compose:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

  </TabItem>
</Tabs>

Check that docker-compose is working with (should return version 1.29.2 or higher):

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
docker-compose --version
```

  </TabItem>
</Tabs>

:::tip
Shardeum Validator support on Windows will be coming in the future.
:::

## Step 2: Download and install validator

Run:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
curl -O https://gitlab.com/shardeum/validator/dashboard/-/raw/main/installer.sh && chmod +x installer.sh && ./installer.sh
```

  </TabItem>
</Tabs>

The terminal will ask questions about your setup settings. 

Enter y to setup the web based dashboard:

```shell
Do you want to run the web based Dashboard? (y/n): y 
```

Set a password for dashboard access:

```shell
Set the password to access the Dashboard: 
```

Add a custom session port for the web based dashboard or hit enter for port 8080:

```shell
Enter the port (1025-65536) to access the web based Dashboard (default 8080): 
```

Add a custom path or install to root:

```shell
What base directory should the node use (defaults to ~/.shardeum): 
```

Wait for the installation process to complete.

## Step 3: Open validator CLI

Make sure you are in the root directory by running:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
cd
```

  </TabItem>
</Tabs>

Go to the hidden Shardeum directory:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
cd .shardeum
```

  </TabItem>
</Tabs>

Start the CLI by running the following shell script:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
./shell.sh
```

  </TabItem>
</Tabs>

## Step 4: Open validator GUI

While inside the shell script, run:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
operator-cli gui start
```

  </TabItem>
</Tabs>

Go to your web browser and go to:

```shell
localhost:8080
```

You will be asked for your password set during setup.

:::danger
The login will fail even if you put no password during the setup process.
To set a new password inside the validator CLI:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
operator-cli gui set password <type_new_password__here>
```

  </TabItem>
</Tabs>

:::

You should see the “Overview” page for the Shardeum Validator Dashboard in your web browser:

![overview.png](/img/node/run/validator/overview.png)

## Step 5: Start validator 

Go to the “Maintenance” page, then click the “Start Node” button in the top left white box:

![start.png](/img/node/run/validator/start.png)

(Same as running)

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
operator-cli start
```

  </TabItem>
</Tabs>

Wait and refresh the page. 

The node is running correctly if the “Start Node” button now says “Stop Node”. If you want to stop tne node with the CLI:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
operator-cli stop
```

  </TabItem>
</Tabs>

![started.png](/img/node/run/validator/started.png)

## Step 6: Monitor validator 

Go to “Performance” to see your node’s hardware performance here:

![performance.png](/img/node/run/validator/performance.png)

For more details about your node status run the following inside the CLI:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
operator-cli status
```

  </TabItem>
</Tabs>

:::danger
If your node becomes inactive, try checking its status.
:::

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
pm2 list
```

  </TabItem>
</Tabs>

Reset the validator from the list by running:

<Tabs>
  <TabItem value="shell" label="Shell" default>

```shell
pm2 delete [id]
```

  </TabItem>
</Tabs>

## Step 7: Connect Wallet to Betanet

[Connect to Sphinx 1.X with your wallet by clicking the button linked here](/Network/Endpoints#connect-wallet)

## Step 8: Get SHM from Betanet Faucet

[Shardeum Twitter SHM Faucet Guide for Sphinx 1.X](/Faucet/Claim#shardeum-faucet-website)

## Step 9: Stake SHM to validator

After you start the validator, go to the “Settings” page. You will be asked to connect your wallet:

![connectWallet.png](/img/node/run/validator/connectWallet.png)

After you connect your wallet, you should see the following:

```
-Stake Wallet Address [wallet connected]
-Nominee Public Key [filled in automatically while validator is running]
-Stake amount (SHM) [empty and is in units ether not wei]
```

This example has filled in 10 SHM tokens to stake. 

Once all fields are filled, click the “Stake” button. 

Your wallet will ask you to sign the transaction stake your SHM.

![stakeSHM.png](/img/node/run/validator/stakeSHM.png)

Once the transaction is signed and complete, you have staked your SHM tokens successfully. 
