import React from 'react';

const FetchWrapper = WrapperComponent = ({ children, isFetching, hasError }) => {

    return (
        <WrapperComponent>
            {
                hasError  && (
                    <p>Ocorreu um erro ao</p>
                )
            }
            {children}
        </WrapperComponent>
    )

} 

export default FetchWrapper;