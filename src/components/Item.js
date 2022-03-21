import React, { useState,useEffect } from "react";

const Item = ({id, number, page, bgColor, isPinned, handlePinClick}) => {
    const [itemisPinned, setItemIsPinned] = useState(false);
    const [pinLabel, setPinLabel] = useState('');
    // const [pageLabel, setPageLabel] = useState('');

    // if(currentPage === 'Dashboard'){
    //     setPageLabel('Page:' + page);
    // }


    useEffect(() => {
        if (itemisPinned) {
            setPinLabel("pinned");
        } else {
            setPinLabel('');
        }

    },[itemisPinned, pinLabel])


    const togglePin = (itemisPinned) => {
        setItemIsPinned(!itemisPinned);
        return itemisPinned;
    }


    return (
        <div className='tc h-100 w-20 dib br2 pa3 ma2 bw2 item'
                style={{"backgroundColor": bgColor}}
                onClick={() => { handlePinClick(id, togglePin(itemisPinned))}}>
            <div>
                <h3>Item {number}</h3>
                <p>Page {page}</p>
                <p>{pinLabel}</p>
            </div>
        </div>
    )
}

export default Item;