import Bar from './Bar';
import './App.css';

import notes from './note';

export default function Xylophone(props) {

     return(
         <div className ='container'>
          <h2> Xylophone</h2>
         <div className='xylophone'>
             {
                 notes.map(note=><Bar note={note}></Bar>)
             }
         </div>

         </div>

     )




        
        
       

}