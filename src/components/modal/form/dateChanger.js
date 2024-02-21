export const dateChanger = (d) => {
  let curr_date = d.getDate();
  if (curr_date.toString().length == 1) {
    curr_date = `0${curr_date}`;
  }
  let curr_month = d.getMonth() + 1;
  if (curr_month.toString().length == 1) {
    curr_month = `0${curr_month}`;
  }
  let curr_year = d.getFullYear();
  let newDate = curr_year + "-" + curr_month + "-" + curr_date;
  return newDate;
};

export const dateForShow = (d) => {
  let curr_date = d.getDate();
  if (curr_date.toString().length == 1) {
    curr_date = `0${curr_date}`;
  }
  let curr_month = d.getMonth() + 1;
  if (curr_month.toString().length == 1) {
    curr_month = `0${curr_month}`;
  }
  let curr_year = d.getFullYear();
  let newDate = curr_date + "," + curr_month + "," + curr_year;
  return newDate;
};
