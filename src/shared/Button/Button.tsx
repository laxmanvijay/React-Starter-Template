import React from 'react';
import './Button.scss';

export interface ButtonProps {
    
}
 
const Button: React.SFC<ButtonProps> = () => {
    return (  
        <button>
            Button works!
        </button>
    );
}
 
export default Button;