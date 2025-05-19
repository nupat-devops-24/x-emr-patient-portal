// src/components/Widget/Widget.tsx
import React from 'react';
import './Widget.css';

interface WidgetProps {
    title: string;
    value: string;
}

const Widget: React.FC<WidgetProps> = ({ title, value }) => {
    return (
        <div className="widget">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default Widget;