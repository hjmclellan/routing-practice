import React from 'react';

const Color = (props) => {
    return (
        <div>
            <p style={{ backgroundColor: props.color2, color: props.color1 }}>You wanted me to say "{props.phrase}" in {props.color1} with a {props.color2} background. I hope this satisfies you.</p>
        </div>
    )
}

export default Color;