import React from "react"; 
import ItemList from "../ItemList";

const Page1 = ({items, handlePinClick}) => {

    const pageItems = items.filter(item => item.page === 1);

    return(
        <div className="page">
            {/* <h2>Page 1</h2> */}
            <ItemList 
            items={pageItems}
            page={''}
            handlePinClick={handlePinClick}
            currentPage={'1'}
            />

        </div>
    )
}

export default Page1;