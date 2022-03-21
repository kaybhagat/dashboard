import React from "react";
import Item from "./Item";

const ItemList = ({items, handlePinClick}) => {
    // const PinnedComponent = pinnedComponent;
    return (
        <div className="w-100" >
            {items.map((item, i) => {
                return (
                        <Item 
                        key={i}
                        id={item.id}
                        number={item.number}
                        page={item.page}
                        bgColor={item.bgColor}
                        isPinned={item.isPinned}
                        handlePinClick={handlePinClick}
                        />
                
            )}
            )}


        </div>
    )

}

export default ItemList;