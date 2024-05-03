import React from "react";
import { Select } from "antd";
import "./style.scss";

type FilterSelectProps = {
  classname: string;
  defaultValue: string;
};

const FilterSelect: React.FC<FilterSelectProps> = ({ classname, defaultValue }) => (
  <Select
    defaultValue={defaultValue}
    className={classname}
    // style={{ width: 200 }}
    dropdownAlign={{ offset: [0, 10] }}
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
