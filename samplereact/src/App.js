
import './App.css';
import Team from './team/Team.jsx';


var tdata = [
  { timg: 'https://i.pinimg.com/736x/f9/0e/57/f90e578dae836eec1b6c3faad3037861.jpg', tname: 'CSK', tcap: 'MSD',trop : 4 },
  { timg: 'https://gumlet.assettype.com/swarajya/2020-09/f2ce0bfa-f66e-4a9b-8e89-8d8d4bcc8cac/rcb.jpg', tname: 'RCB', tcap: 'FAF',trop : 0 },
  { timg: 'https://e1.pxfuel.com/desktop-wallpaper/46/718/desktop-wallpaper-rajasthan-royals-logo-rajasthan-royals-thumbnail.jpg', tname: 'RR', tcap: 'SS',trop : 1 }]

function App() {
  return (
    <div className="App">
      {tdata.map((team) => {
        return (
          <Team
            timg = {team.timg}
            tname = {team.tname}
            tcap = {team.tcap}
            trop = {team.trop}
/>
          
        )
      })}
    </div>
  );
}

export default App;
