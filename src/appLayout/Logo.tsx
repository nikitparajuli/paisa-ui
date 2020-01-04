import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

type LogoProps = {
    showText?: boolean;
    color?: string;
};

export const Logo: React.FC<LogoProps> = ({ showText, color }) => {
    const IconStyle = {
        fontSize: 40,
        color: color || '#fff'
    }   
    return (
        <div>
            <FontAwesomeIcon style={IconStyle}  icon={faRupeeSign}/> {showText && `Paisa`}
        </div>
    );
}