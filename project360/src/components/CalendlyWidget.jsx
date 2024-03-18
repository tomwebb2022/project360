import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="calendly"
    style={{
        height: '250px'
    }}>
      <InlineWidget url="https://calendly.com/anastasiaadamoudi/" />
    </div>
  );
};

export default CalendlyWidget;