import React, { useState } from "react";

export default function Form({ task, setTask, onAddItem }) {
    const [error, setError] = useState(false);


    function handelSubmit(e) {
        e.preventDefault();
        if (!task || task.trim() === "") {
            setError(true);
            return;
        }

        const newTask = {
            id: Date.now(),
            value: task,
            isSelected: false,
        };

        onAddItem(newTask);
        setTask("");
    }
    return (
        <>
            <p
                id="error"
                className="error"
                style={{ visibility: error ? "visible" : "hidden" }}
            >
                Please enter a task!
            </p>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <input
                    id="task"
                    type="text"
                    placeholder="enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onClick={() => setError(false)}
                />

                <button id="save-btn" onClick={handelSubmit}>
                    Save
                </button>
            </form>
        </>
    );
}
