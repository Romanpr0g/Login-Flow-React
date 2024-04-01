import React from "react";
import { Select } from "antd";
import "./style.scss";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const FilterSelect: React.FC = () => (
  <Select
    defaultValue="Filter by Role"
    className="filter-selector"
    style={{ width: 200 }}
    dropdownAlign={{ offset: [0, 10] }}
    onChange={handleChange}
    options={[
      { value: "Athelete", label: "Athelete" },
      { value: "Team Organizer", label: "Team Organizer" },
      { value: "Club Organizer", label: "Club Organizer" },
      { value: "Parent", label: "Parent" },
      { value: "Scorekeeper", label: "Scorekeeper" },
    ]}
  />
);

export default FilterSelect;
