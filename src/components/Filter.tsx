import React, { Fragment, FC, useState } from "react";

interface FilterProps {
  items: Array<string>;
  onSelect: Function;
  onReset: Function;
}

const Filter: FC<FilterProps> = ({ items, onSelect, onReset }) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const selectableFilters = items.map(item => (
    <Fragment key={item}>
      <input
        type="checkbox"
        id={item}
        name={item}
        value={item}
        checked={checkedValues.includes(item)}
        onChange={e => {
          onSelect(e);

          const value = e.target.value;
          if (!checkedValues.includes(value)) {
            checkedValues.push(value);
          } else {
            const arrayWithRemovedValue = checkedValues.filter(
              existingValue => existingValue !== value
            );
            setCheckedValues(arrayWithRemovedValue);
          }
        }}
      />
      <label htmlFor={item}>{item}</label>
    </Fragment>
  ));

  return (
    <form
      onReset={e => {
        e.preventDefault();
        onReset(e);
        setCheckedValues([]);
      }}
    >
      <ul>
        <button type="reset">All</button>
        {selectableFilters}
      </ul>
    </form>
  );
};

export default Filter;
