export const formatTime = (totalSeconds) => {
  var secondsPlace = totalSeconds % 60
  var minutesPlace = Math.floor(totalSeconds / 60)

  var formattedSecs = secondsPlace > 9 ? "" + secondsPlace: "0" + secondsPlace
  var formattedMins = minutesPlace > 9 ? "" + minutesPlace: "0" + minutesPlace

  return formattedMins + ":" + formattedSecs
}
