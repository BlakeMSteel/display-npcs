import React from 'react';
import './App.css';
import Buppido from './npcs/Buppido.png';
import EldethFeldrun from './npcs/Eldeth Feldrun.png';
import Jimjar from './npcs/Jimjar.png';
import PrinceDerendil from './npcs/Prince Derendil.png';
import Ront from './npcs/Ront.png';
import SarithKzekarit from './npcs/Sarith Kzekarit.png';
import Shuushar from './npcs/Shuushar the Awakened.png';
import Stool from './npcs/Stool.png';
import TopsyTurvy from './npcs/Topsy and Turvy.png';
import NPC from './components/NPC';

function App() {
  return (
    <div className="App">
      <div className='row-33'>
        <NPC 
          src={Buppido}
          npcName = 'Buppido' 
        />
        <NPC 
          src={EldethFeldrun}
          npcName = 'Eldeth Feldrun'
        />
        <NPC 
          src={Jimjar}
          npcName = 'Jimjar'
        />
      </div>
      <div className='row-33'>
        <NPC
          src={PrinceDerendil}
          npcName = 'Prince Derendil'
        />
        <NPC
          src={Ront}
          npcName = 'Ront'
        />
        <NPC
          src={SarithKzekarit}
          npcName = 'Sarith Kzekarit'
        />
      </div>
      <div className='row-34'>
        <NPC 
          src={Shuushar}
          npcName = 'Shuushar the Awakened'
        />
        <NPC
          src={Stool}
          npcName = 'Stool'
        />
        <NPC
          src={TopsyTurvy}
          npcName = 'Topsy and Turvy'
        />
      </div>
    </div>
  );
}

export default App;
