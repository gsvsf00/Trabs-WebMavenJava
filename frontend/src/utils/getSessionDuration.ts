const getSessionDuration = (movieDuration: string, date: string) => {
  let hours = parseInt(movieDuration.split("h")[0]);
  let minutes = parseInt(movieDuration.split("h")[1].split("m")[0]);

  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  const sessionDate = new Date(date);
  sessionDate.setHours(sessionDate.getHours() + hours);
  sessionDate.setMinutes(sessionDate.getMinutes() + minutes);
  return new Date(sessionDate - tzoffset).toISOString().split(".")[0];
};

export default getSessionDuration;
