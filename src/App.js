import React, {useState} from 'react';
import CheckboxTree from './components/CheckboxTree/CheckboxTree';
import { nodes } from './data/node.data';

const App = () => {
  const [checked, setChecked] = useState([]);

  console.log('[APP]',{checked});

  return (
    <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
      <CheckboxTree nodes={nodes} checked={checked} onChecked={(item) => setChecked(item)} />
    </div>
  );
}

export default App;
