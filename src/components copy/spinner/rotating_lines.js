import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function RotatingLinesLoader({
    size = "96"
}) {
    return (
        <RotatingLines
            visible={true}
            height={size}
            width={size}
            color="#0073E6"
            textColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
}
