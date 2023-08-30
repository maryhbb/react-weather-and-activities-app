import { children } from "react";
import "./ListItem.css"

const ListItem = ({children}) => {
    return (<li className="list__item">{children}</li>  );
}
 
export default ListItem;