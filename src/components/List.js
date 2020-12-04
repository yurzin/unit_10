const List = user => {
    return (
        <ul>
            {user.user.map( item =><li key={item.passport}>{item.name} {item.age}</li> )}
        </ul>
    );
};

export default List;