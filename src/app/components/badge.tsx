import React from 'react';

interface BadgeProps {
    src: string;
    href: string;
}

const Badge: React.FC<BadgeProps> = ({ src, href }) => {
    return (
        <div>
            <a href={href}>
                <img src={src} alt="" style={{ display: 'inline', width: 'auto', height: 'auto' }}/>
            </a>
        </div>
    );
}

export default Badge;