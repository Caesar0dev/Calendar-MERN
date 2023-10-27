import "./App.css";
//Import calendar
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { useEffect, useState } from "react";

export default function App() {
  const [date, setdata] = useState(new Date());
  const [dateTime, setDatetime] = useState("");

  const handleClick = () => {
    var selectedDate = date.value.getDate();
    selectedDate = (selectedDate < 10) ? "0" + selectedDate : selectedDate;

    var selectedMonth = date.value.getMonth() + 1;
    selectedMonth = (selectedMonth < 10) ? "0" + selectedMonth : selectedMonth;

    const selectedYear = date.value.getFullYear();
    const current = selectedMonth + "/" + selectedDate + "/" + selectedYear;
    
    console.log(">>> ", current);
    
  };
  useEffect(() => {
    if (date.value) {
      setDatetime(date.value.toISOString());
    }
  }, [date]);
  return (
    <>      
      {/* calendar */}
      <div className="calendar">
        <CalendarComponent onChange={setdata} value={date} />
        {/* <Calendar/> */}

        <button id="calendar" onClick={handleClick}>
          START
        </button>
      </div>
    </>
  );
}
