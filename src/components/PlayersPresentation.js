// import React, {useState} from 'react'

// export default function PlayersPresentation({players}){
//     console.log(players);
//     const [player, setPlayer] = useState([])
//     return (
//         <div className='container'>
//         {players.map((player)=>(
//             <div className='column' key={player.id}>
//                 <div className='card'>
//                     <img alt='' src={player.img}/>
//                     <div className='description'>
//                         <h3>{player.name}</h3>
//                         <p className='title'>{player.club}</p>
//                     </div>
//                     <p><a href='#popup1' id='openPopUp'><button onClick={()=>{setPlayer(player)}}>Detail</button></a></p>
//                     </div>
//                 </div>  
//             ))}  
//             <div id='popup1' className='overlay'>
//                 <div className='popup'>
//                     <img src={player.img} alt=''/>
//                     <h2>{player.name}</h2>
//                     <a className='close' href="#a">&times;</a>
//                     <div className='content'>
//                         {player.info}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }