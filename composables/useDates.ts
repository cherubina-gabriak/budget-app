export const useCurrentDate = () => {
  const cookie_month = useCookie("month");
  const cookie_year = useCookie("year");

  const date = useState("date", () => {
    return {
      month: +(cookie_month.value ?? new Date().getMonth()),
      year: +(cookie_year.value ?? new Date().getFullYear()),
    };
  });
  return {
    date: date,
    walkNextMonth: () => {
      if (date.value.month < 11) {
        date.value.month++;
        cookie_month.value = String(date.value.month);
      } else {
        date.value.month = 0;
        cookie_month.value = String(date.value.month);
        date.value.year++;
        cookie_year.value = String(date.value.year);
      }
    },
    walkPrevMonth: () => {
      if (date.value.month < 1) {
        date.value.month = 11;
        cookie_month.value = String(date.value.month);
        date.value.year--;
        cookie_year.value = String(date.value.year);
      } else {
        date.value.month--;
        cookie_month.value = String(date.value.month);
      }
    },
  };
};
