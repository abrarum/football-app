import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import "../styles.css";

export default function Search({ options, onChange }) {
  const [selectKey, setSelectKey] = useState(null);

  const updateForm = useCallback(
    (value) => {
      // update the key
      setSelectKey(value);
    },
    [setSelectKey]
  );

  useEffect(() => {
    // if selectKey changes, send the payload back
    onChange(selectKey);
  }, [onChange, selectKey]);

  return (
    <div className="App">
      <form>
        <Select
          name="mySelect"
          value={options.filter(({ id }) => id === selectKey)}
          getOptionLabel={({ name }) => name}
          getOptionValue={({ id }) => id}
          onChange={({ id }) => updateForm(id)}
          options={options}
        />
      </form>
    </div>
  );
}
