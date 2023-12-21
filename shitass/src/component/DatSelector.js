import datCss from "@/styles/month.module.css";

const DatSelector = () => {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const daysInNextMonth = new Date(
    nextMonth.getFullYear(),
    nextMonth.getMonth() + 1,
    0
  ).getDate();

  const dateOptions = Array.from({ length: daysInNextMonth }, (_, i) => {
    const date = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i + 1);
    const formattedDate = date.getDate(); // Only get the day (e.g., 25)
    return (
      <option key={formattedDate} value={formattedDate}>
        {formattedDate}
      </option>
    );
  });
  return <select className={datCss.month}>{dateOptions}</select>;
};

export default DatSelector;
