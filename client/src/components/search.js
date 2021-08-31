import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import "../styles.css";

export default function Search({ options, onChange }) {
  const [selectKey, setSelectKey] = useState(null);

  const updateForm = useCallback(
    /* onChange updates the selected key. */
    (value) => {
      setSelectKey(value);
    },
    [setSelectKey]
  );

  useEffect(() => {
    /* if selectKey changes, send the onChange event payload back */
    onChange(selectKey);
  }, [onChange, selectKey]);

  return (
      <form>
        <Select
          name="selectKey"
          value={options.filter(({ id }) => id === selectKey)}
          getOptionLabel={({ name }) => name}
          getOptionValue={({ id }) => id}
          onChange={({ id }) => updateForm(id)}
          options={options}
        />
      </form>
  );
}
