
function calcDiffInDaysBetweenDates(currentDay, pastDay) {
  const pastDate = new Date(pastDay);
  const currentDate = new Date(currentDay);

  const diffBetweenDatesInMilli = currentDate - pastDate;
  const oneDayInMilli = 24*60*60*1000;

  const diffInDays = diffBetweenDatesInMilli / oneDayInMilli;
  
  return {
    diff: diffInDays,
    message: () => writeMessage(currentDate, pastDate, diffInDays)
  };
}

function writeMessage(currentDate, pastDate, diffInDays) {
  console.log(`Entre os dias ${pastDate.toLocaleDateString()} e ${currentDate.toLocaleDateString()} se passaram ${diffInDays} dias`);
}

const result = calcDiffInDaysBetweenDates('1997-12-13', '1997-12-10');
result.message()