import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lançamento={1985} />
                <Item marca="Fiat" ano_lançamento={1968} />
                <Item marca="Renault" ano_lançamento={1982} />
            </ul>
        </>
    )
}

export default List