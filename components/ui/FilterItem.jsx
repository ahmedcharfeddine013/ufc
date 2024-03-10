import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ItemFilter = (props) => {
    const [currentFilterValue, setCurrentFilterValue] = useState("Recently Added");
    const handleFilterSelected = (selectedValue) => {
        setCurrentFilterValue(selectedValue);
        setFilterIsOpen(false)
    };

    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const handleFilterClick = () => {
        setFilterIsOpen(!filterIsOpen);
    };

    return (
        <>
            <button
                className="self-center py-4 font-heading rounded-md"
                onClick={handleFilterClick}
            >
                <div id="current-value">Filter By {currentFilterValue} <FontAwesomeIcon icon={faFilter}/></div>
            </button>
            {filterIsOpen && (
                <div className=" absolute flex flex-col gap-2 p-2 bg-light-grey dark:bg-dark-grey rounded-md dark:shadow-black shadow-md translate-y-12">
                    {Object.keys(props.filterItems).map((key) => (
                        <button
                            key={key}
                            name={props.filterItems[key]}
                            value={props.filterItems[key]}
                            className="text-start hover:text-opacity-100"
                            onClick={() => handleFilterSelected(props.filterItems[key])}
                        >
                            <p className="text-[grey] hover:text-black dark:hover:text-white">{props.filterItems[key]}</p>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ItemFilter;
