import React from "react";
import image from "../Images/ToDo.png";

export default function Title() {
    return (
        <div className="title">
            <h2>Todo List</h2>
            <img src={image} alt="image" />
        </div>
    );
}
