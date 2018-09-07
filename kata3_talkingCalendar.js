var talkingCalendar = function(date) {
  var dateWords = "";
  var year = date.substring(0, 4);
  var month = date.substring(5, 7);
  var day = date.substring(8, 10);
  var months = [["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"], ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"]];
  for (var i = 0; i < months.length; i++) {
    if (month === months[i][0]) {
      dateWords += months[i][1];
      break;
    }
  }
  dateWords = dateWords + " " + Number(day);
  if (day === "01" || day === "21" || day === "31") {
    dateWords += "st";
  } else if (day === "02" || day === "22") {
    dateWords += "nd";
  } else if (day === "03" || day === "23") {
    dateWords += "rd";
  } else {
    dateWords += "th";
  }
  dateWords = dateWords + ", " + year;
  return dateWords;
}