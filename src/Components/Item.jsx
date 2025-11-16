import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Item({ id, value, isSelected, onToggle, onRemove }) {
    return (
        <li id={id} className="list-item">
            <div>
                <label className="custom-checkbox">
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onToggle(id)}
                    />
                    {isSelected ? (
                        <FaCheck />
                    ) : (
                        <span className="checkmark"></span>
                    )}
                </label>
                <span className={`value ${isSelected ? "selected" : ""}`}>
                    {value}
                </span>
            </div>
            <button className="remove-btn" onClick={() => onRemove(id)}>
                &times;
            </button>
        </li>
    );
}
