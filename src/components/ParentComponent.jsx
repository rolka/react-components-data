import { SendDataComponent } from "./SendDataComponent.jsx";
import { ReceiveDataComponent } from "./ReceiveDataComponent.jsx";

export const ParentComponent = () =>
{
    return (
        <>
            <h1>Parent Component</h1>
            <SendDataComponent/>
            <ReceiveDataComponent/>
        </>
    )
}