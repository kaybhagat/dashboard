import React, { useState } from "react";
import ItemList from "../ItemList";

const Dashboard = ({items, handlePinClick}) => {

    return (
        <div className="page">
            {/* <h2>Dashboard</h2> */}
            {/* <p>{pageItems}</p> */}
            <ItemList 
            items ={items}
            // pinnedComponent = {pinnedComponent}
            handlePinClick = {handlePinClick}
            />

        </div>
    )
}

export default Dashboard;