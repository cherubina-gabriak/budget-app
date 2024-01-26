export const useCurrentDate = () => {
  const date = useState("date", () => {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
  });
  return {
    date: date,
    walkNextMonth: () => {
      if (date.value.month < 11) {
        date.value.month++;
      } else {
        date.value.month = 0;
        date.value.year++;
      }
    },
    walkPrevMonth: () => {
      if (date.value.month < 1) {
        date.value.month = 11;
        date.value.year--;
      } else {
        date.value.month--;
      }
    },
  };
};
