import PropTypes from "prop-types";

export const ReceiveDataComponent = ({ dataToReceive }) =>
{
    return (
        <>
            <h2>Show data</h2>
            <p><i>Data: {dataToReceive.message}</i></p>
        </>
    )
}

ReceiveDataComponent.propTypes = {
    dataToReceive: PropTypes.object
}