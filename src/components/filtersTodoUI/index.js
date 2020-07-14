import React from 'react';

const FiltersTodoUI = (props) => {
    return(
        <select onChange={(e) => {
                props.onChange(e.currentTarget.value);
            }}
            className="custom-select"
        >
        {
            Object.values(props.filters)
                .map((filter, index) => 
                    <option 
                        key={index}
                        value={filter}
                    >
                        { 
                            parseFilterName(filter)
                        }
                    </option>
                )
        }
        </select>	
    );
};
const parseFilterName = (filter) => {
    return filter.split('_')
        .map((word, index) => {
            return (index === 0) 
                ? `${word.charAt(0)}${word.slice(1).toLowerCase()} `
                : `${word.toLowerCase()}`
        })
};

export default FiltersTodoUI;