import React from 'react';
import Checkbox from './Checkbox';

export default function CheckboxTree({ nodes, checked, onChecked, style, className, expanded, onExpanded }) {

    return (
        <div style={style} className={className}>
            {nodes.map((node, index) => (
                <Checkbox 
                    key={index} 
                    node={node} 
                    onChecked={onChecked} 
                    checked={checked} 
                    expanded={expanded} 
                    onExpanded={onExpanded} 
                />
            ))}
        </div>
    )
}
