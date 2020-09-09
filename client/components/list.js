import React from "react";

import ListItem from "./listItem.js";

const List = (props) => (
  <ul>
    {props.list.map((item, index) => {
      return <ListItem key={index} item={item.item} />;
    })}
  </ul>
);

export default List;
