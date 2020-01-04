import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

type LogoProps = {};

export const Logo: React.FC<LogoProps> = () => {
    return (
        <div>
            <FontAwesomeIcon style={{color: 'green'}}  icon={faRupeeSign}/> Paisa
        </div>
    );
}