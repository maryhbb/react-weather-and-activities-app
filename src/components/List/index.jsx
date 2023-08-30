import "./List.css";
import ListItem from "./ListItem";
export const List = ({ activities }) => {
  return (
    <ul className="list__item-ul">
      {activities.map(({ id, name }) => {
        return <ListItem key={id}>{name}</ListItem>;
      })}
    </ul>
  );
};

export default List;
