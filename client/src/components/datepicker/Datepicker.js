import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css";

export default (props) => {
  return (
    <div className="date-picker">
      <DatePicker
        selected={props.startDate}
        onChange={(date) =>
          props.setStartDate(Math.floor(Date.parse(date)) / 1000)
        }
        maxDate={new Date()}
        popperPlacement="bottom"
        placeholderText="Start Date"
      />
      <DatePicker
        selected={props.endDate}
        onChange={(date) =>
          props.setEndDate(Math.floor(Date.parse(date)) / 1000)
        }
        maxDate={new Date()}
        popperPlacement="bottom"
        placeholderText="End Date"
      />
    </div>
  );
};
