import React, {useState} from 'react';
import CheckboxTree from './components/CheckboxTree/CheckboxTree';
import { nodes } from './data/node.data';

const App = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  console.log('[APP]',checked);
  console.log('[APP]', expanded);

  return (
    <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
      <CheckboxTree 
        nodes={nodes} 
        checked={checked} 
        onChecked={(item) => setChecked(item)} 
        expanded={expanded} onExpanded={(item) => setExpanded(item)} 
      />
    </div>
  );
}

export default App;
