import React from 'react';
import classnames from 'classnames';

const Button = ({ button, customCssClass, children, isSubmitting }) => {
    return (
        <button
            type={button ? 'button' : 'submit'}
            onClick={clicked}
            disabled={isSubmitting}
            className={classnames(
                customCssClass,
                {
                    'bg-blue-550': !isSubmitting,
                    'bg-blue-400': isSubmitting
                }
            )}
        >
            {isSubmitting ? 'Working ...' : children}
        </button>
    );
};

export default Button;
