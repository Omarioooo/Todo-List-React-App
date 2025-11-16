import React from "react";
import Item from "./Item";

export default function ListItem({ items, onToggle, onRemove }) {
    return (
        <ul className="list-items">
            {items.map((item) => {
                const { id, value, isSelected } = item;
                return (
                    <Item
                        key={id}
                        id={id}
                        value={value}
                        isSelected={isSelected}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                );
            })}
        </ul>
    );
}
