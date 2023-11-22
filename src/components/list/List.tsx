import React from "react";
import "./List.css";
import { ListItem } from "../../types";

interface ListProps {
  items: ListItem[];
  newItemText?: string;
}

const List: React.FC<ListProps> = ({ items, newItemText }) => {
  return (
    <div className="list">
      <ol>
        {items.map((item) => (
          <li
            key={item.id}
            className={`list-item ${item.completed ? "completed" : ""}`}
          >
            {item.title}
          </li>
        ))}
      </ol>
      {newItemText && <span className="new-todo">Adding: {newItemText}</span>}
    </div>
  );
};

export default List;
