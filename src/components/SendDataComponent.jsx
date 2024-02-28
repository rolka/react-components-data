import PropTypes from "prop-types";
export const SendDataComponent = ({ theFunction } ) =>
{
    const dataToSend = {
        message: 'Hello from SendDataComponent!'
    }

    return (
        <>
            <h2>Send Data</h2>
            <button onClick={() => {
                {
                    theFunction(dataToSend);
                }
            }}>Send data</button>
        </>
    )
}

SendDataComponent.propTypes = {
    theFunction: PropTypes.func
}