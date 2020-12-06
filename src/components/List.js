import React from "react";

const List = ({user}) => {
    return (
        <ul>
            {user.map((item, index) => <li key={index} style={{listStyleType: 'none'}}>
                Паспортные данные:&nbsp;<span style={{fontWeight: 'bolder'}}>{item.passport}</span>&nbsp;
                Имя:&nbsp;<span style={{fontWeight: 'bolder'}}>{item.name}</span>&nbsp;
                Возраст:&nbsp;<span style={{fontWeight: 'bolder'}}>{item.age}</span>&nbsp;
            </li>)}
        </ul>
    );
};

export default List;