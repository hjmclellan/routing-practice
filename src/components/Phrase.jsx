import React from 'react';

const Phrase = (props) => {
    return (
        <div>
            { isNaN(props.phrase) ?
            <p>You wanted me to say {props.phrase}. Neat.</p> : <p>The number you requested is: {props.phrase}</p>
            }
        </div>
    )
}

export default Phrase;