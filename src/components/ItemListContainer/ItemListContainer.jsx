import ItemCount from "../ItemCount/ItemCount";

const onAdd = (quantity) =>{
    (console.log(`Compro: ${quantity} Items`))
};


const ItemListContainer = ({greeting, color}) => {
    console.log(greeting)
    return (
        <div>
            <p style={{color:color}}>
                {greeting}
            </p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
        )
    }

export default ItemListContainer;