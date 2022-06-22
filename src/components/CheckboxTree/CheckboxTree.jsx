import React from 'react';
import Checkbox from './Checkbox';

export default function CheckboxTree({ nodes, checked, onChecked, style, className }) {

    return (
        <div style={style} className={className}>
            {nodes.map((node, index) => (
                <Checkbox key={index} node={node} onChange={onChecked} checked={checked} />
            ))}
        </div>
    )
}
