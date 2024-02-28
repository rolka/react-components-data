import { SendDataComponent } from "./SendDataComponent.jsx";
import { ReceiveDataComponent } from "./ReceiveDataComponent.jsx";
// import { Test } from "./Test.jsx";
import { useState } from "react";

export const ParentComponent = () =>
{
    // const data = {
    //     message: 'hello'
    // }

    const [ passingData, setPassingData ] =
        useState({})

    const functionForData = (dataReceived) =>
    {
        console.log('Passing data');
        setPassingData(dataReceived);
    }

    return (
        <>
            <h1>Parent Component</h1>
            <SendDataComponent theFunction={functionForData}/>
            <ReceiveDataComponent dataToReceive={passingData}/>

            {/* error! */}
            {/*{<Test data={data}/>}*/}
        </>
    )
}