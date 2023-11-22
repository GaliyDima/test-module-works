import { useEffect, useState } from "react";
import "./Main.css";
import useFetchData from "../../hooks/useFetchData";
import Button from "../../components/button/Button";
import List from "../../components/list/List";
import { ListItem } from "../../types";

const MainPage = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [count, setCount] = useState(10);
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading, error } = useFetchData(url, fetchTrigger);
  const [todoList, setTodoList] = useState<ListItem[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setTodoList((prevTodoList: ListItem[]) => [...prevTodoList, ...data]);
    }
  }, [data]);

  const handleClick = () => {
    setFetchTrigger(true);
  };

  return (
    <>
      <div className="container">
        <div className="actions">
          <Button onClick={handleClick} text={"Fetch list"} />
          <div className="coolinput">
            <label htmlFor="input" className="text">
              Enter new todo:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="input"
              className="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const newItem = {
                    id: todoList.length + 1,
                    title: inputValue,
                    completed: false,
                  };
                  setTodoList([...todoList, newItem]);
                  setCount(count + 1);
                  setInputValue("");
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="lists">
        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        <List items={todoList} newItemText={inputValue} />
        <List items={todoList} newItemText={inputValue} />
      </div>
    </>
  );
};

export default MainPage;
