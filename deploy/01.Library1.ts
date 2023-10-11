import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async ({
    ethers,
    deployments,
  }:HardhatRuntimeEnvironment) => {
    const {deploy} = deployments;
    const accounts = await ethers.getSigners();

    const deployer = accounts[0];
    // console.log ('deployer=', deployer.address);


    // //deploy Library
    const library = await deploy('Library', {
    //   contract: 'Library', 
      from: deployer.address,
    //   args: [],
    //   gasLimit: 1000000,
    });
    console.log("library deployed at", library.address);
  };

  func.tags = ["Library1"];

export default func;