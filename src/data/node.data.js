export const nodes = [{
    value: 'A Process',
    label: 'A Process',
    children: [
        { value: 'a1', label: 'a1', children: [
        {value: 'a1.1', label: 'a1.1'},
        {value: 'a1.2', label: 'a1.2'}
        ] },
        { value: 'a2', label: 'a2', children: [
        {value: 'a2.1', label: 'a2.1'},
        {value: 'a2.2', label: 'a2.2'}
        ] },
    ],
    },
    {
    value: 'B Process',
    label: 'B Process',
    children: [
        { value: 'b1', label: 'b1', children: [
        {value: 'b1.1', label: 'b1.1'},
        {value: 'b1.2', label: 'b1.2'}
        ] },
        { value: 'b2', label: 'b2', children: [
        {value: 'b2.1', label: 'b2.1', chidlren: [
            {value: 'b2.1.1', label: 'b2.1.1'},
            {value: 'b2.1.2', label: 'b2.1.2'}
        ]},
        {value: 'b2.2', label: 'b2.2', children: [
            {value: 'b2.2.1', label: 'b2.2.1'},
            {value: 'b2.2.2', label: 'b2.2.2'}
        ]}
        ] },
    ],
    },
    {
    value: 'C Process',
    label: 'C Process',
    children: [
        { value: 'c1', label: 'c1', children: [
        {value: 'c1.1', label: 'c1.1', children: [
            {value: 'c1.1.1', label: 'c1.1.1'},
            {value: 'c1.1.2', label: 'c1.1.2'}
        ]},
        {value: 'c1.2', label: 'c1.2', children: [
            {value: 'c1.2.1', label: 'c1.2.1'},
            {value: 'c1.2.2', label: 'c1.2.2'}
        ]}
        ] },
        { value: 'c2', label: 'c2', children: [
        {value: 'c2.1', label: 'c2.1', children: [
            {value: 'c2.1.1', label: 'c2.1.1'},
            {value: 'c2.1.2', label: 'c2.1.2'}
        ]},
        {value: 'c2.2', label: 'c2.2', children: [
            {value: 'c2.2.1', label: 'c2.2.1'},
            {value: 'c2.2.2', label: 'c2.2.2'}
        ]}
        ] },
    ],
}];