import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (

//     <div className="calendly"
// data-url="https://calendly.com/anastasiaadamoudi/30min?month=2024-03"
// style="min-width:320px;height:750px;">

// </div>

    <div className="calendly">
 
      <InlineWidget url="https://calendly.com/anastasiaadamoudi/30min?month=2024-03"/>
    </div>
  );
};

export default CalendlyWidget;