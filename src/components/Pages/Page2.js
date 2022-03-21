import React from "react"; 
import ItemList from "../ItemList";

const Page2 = ({items, handlePinClick}) => {

    const pageItems = items.filter(item => item.page === 2);

    return(
        <div className="page">
            {/* <h2>Page 2</h2> */}
            <ItemList 
            items={pageItems}
            handlePinClick={handlePinClick}/>


        </div>
    )
}

export default Page2;