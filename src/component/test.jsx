import { useEffect } from "react";

const A = ()=>{
    useEffect(()=>{
        console.log("A");
    },[])
    return <></>
}

const B = ()=>{
    useEffect(()=>{
        console.log("B");
    },[])
    return <C/>
}

const C = ()=>{
    useEffect(()=>{
        console.log("C");
    },[])
    return <></>
}



export default function Test() {
  return (
    <>
        <A/>
        <B/>
    </>
  );
}