import Title from "./Components/Title";
import Form from "./Components/Form";
import ListItem from "./Components/ListItem";
import { useEffect, useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("items")
        return savedItems ? JSON.parse(savedItems): []
    });

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items]);

    function HandleAddItem(item) {
        setItems((allItems) => [...allItems, item]);
        console.log(item);
    }

    function HandleToggleItem(id) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, isSelected: !item.isSelected }
                    : item
            )
        );
    }

    function HandelRemoveItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }
    return (
        <>
            <main id="main">
                <div className="container">
                    <div className="todo-list">
                        <Title />
                        <Form
                            task={task}
                            setTask={setTask}
                            onAddItem={HandleAddItem}
                        />
                        <ListItem
                            items={items}
                            onToggle={HandleToggleItem}
                            onRemove={HandelRemoveItem}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
