const Bochra  = ({list, deletenom}) => {
    //const nomlist = list.map(list => {
        //return (
         // <div className="nom-list" key={list.id}>
           // <div>Name: { list.name }</div>
            //<div>Age: { list.age }</div>
            //<div>Belt: { list.post }</div>
          //</div>
      //  )
      //});
    return (  <div className="nom-list">
    { list.map(list =>{
        return list.age>23 ? (
        <div className="nom-list" key={list.id}>
         <div>Name: { list.name }</div>
         <div>Age: { list.age }</div>
         <div>Post: { list.post }</div>
         <button  onClick={() => {deletenom(list.id)}}>Delete nom</button>
       </div>) : null
    }) }
  </div> );
}
 
export default Bochra;
