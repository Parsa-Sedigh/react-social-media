import React from 'react';

const FlashMessages = (props) => {
    return (
        <div className="floating-alerts">
            {props.messages.map((msg, index) => {
                // what we would want to do ONCE for each item in the collection:
                return (
                    <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
                        {msg}
                    </div>
                );
            })}
        </div>
    );
};

export default FlashMessages;
