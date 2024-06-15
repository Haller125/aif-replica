import React from 'react';

//@TODO finish later
const ImageContainer = (props: {url:string}, children: React.ReactNode) => {
    return (
        <div className={"object-cover transition-all ease-in-out duration-200"}>
            {children}
        </div>
    );
};

export default ImageContainer;