//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import CardGroup from 'react-bootstrap/CardGroup'

function ItemListContainer() {

  return (
    <div className="container">
      {/* <h1>{greeting}</h1> 
            <ItemList />*/}
      {/* <ItemCount stock={5} initial={1} onAdd={handleCount} /> */}
      <CardGroup> 
   <ItemList />
   </CardGroup>
    </div>
  );
}

export default ItemListContainer;
