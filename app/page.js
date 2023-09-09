"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ethers } from "ethers";
import contractabi from "./abi/abi.json"


export default function Home() {
  const [address,setAddress] = useState(null);
  const [balance, setBalance] = useState(0);
  const [contract, setContract] = useState(null);
  useEffect(()=>{
    async function initialize(){
      if(typeof window.ethereum!=="undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance();
        setAddress(address)
        setBalance(ethers.utils.parseEther(balance))
        mycontractaddress=" 0x8b2F23fD3B15d2c04aFb6F4491B2BAE3d40557c7"
        const contract = new ethers.Contract(mycontractaddress, contractabi)

      }
    }
  })
  return (
    <>
    <dIV>
      <Header/>
    <div className ="text-center">
    <p className="text-md text-blue-400 lg:text-3xl"> Hi, {address?.slice(0,10)}...{address?.slice(-10)}</p>
    </div>

    </dIV>
    </>
  )
}