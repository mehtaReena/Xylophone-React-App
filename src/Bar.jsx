export default function Bar(props){
    return (
        <div className='bar'>
       <button className={props.note.style}  onClick={(e)=> new Audio(props.note.file).play()}>
           
           {props.note.name}
       
       </button>  
       <h1>{props.notes}</h1>    
        <div>
            <h1>{props.num}</h1>
        </div>
       </div>
 
    )
 
 }