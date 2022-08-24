
const ItemListContainer = ({greeting, color}) => {
    console.log(greeting)
    return (
        <p style={{color:color}}>
            {greeting}
        </p>
        )
    }

export default ItemListContainer;