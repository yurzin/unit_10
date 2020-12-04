import React from "react";

const List = users => {
    const { user } = users;

    return (
        <ul>
            {user.map( item =><li key={item.passport}>{item.name} {item.age}</li> )}
        </ul>
    );
};

export default List;