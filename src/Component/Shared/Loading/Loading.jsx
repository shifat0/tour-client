import React from "react";
import loadingImage from '../../../asset/Img/loading2.gif'

const Loading = ({ setIsLoading }) => {

    // const handleTimeout = () => {
    //     setIsLoading(false);

    // };

    // const timeoutId = setTimeout(handleTimeout, 1000);

    return (
        <>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <img src={loadingImage} className="w-[150px]" alt="Loading" />
            </div>

        </>
    );
};

export default Loading;