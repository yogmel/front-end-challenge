import React from 'react';

const ShuffleButton = (props) => (
    <div>
        <button
            onClick={props.handleClick}
        >
            Embaralhar Cartas
        </button>
    </div>
)

export default ShuffleButton
