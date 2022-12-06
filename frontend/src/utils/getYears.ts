const getYears = (startYear: number) => {
  let currentYear = new Date().getFullYear();
  let years = [];
  startYear = startYear || 1980;

  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years;
};

export default getYears;
