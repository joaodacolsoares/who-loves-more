 function getOurInformation() {
  const date1 = new Date();
  const date2 = new Date('12/24/2017');
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;

  if ((diffDays) % 2 === 0) return 'Fran';
  return 'John';
}

function setWhoLovesMore() {
  const titleId = 'person-who-loves-more'
  document.getElementById(titleId).innerHTML = getOurInformation(); 
}