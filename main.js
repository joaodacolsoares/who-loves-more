 function getOurInformation() {
  const date1 = new Date();
  const date2 = new Date('12/24/2017');
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;

  if ((diffDays) % 2 === 0) return 'Fran';
  return 'João';
}

function getDaysTogether() {
  const date1 = new Date();
  const date2 = new Date('12/24/2017');
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;

  return diffDays;
}

function checkIfWeAreInTheStartDay() {
  const today = new Date();
  if(today.getUTCDate() != '24') {
    document.getElementById('start-day-container').style.display = 'none';
  }
}

function setWhoLovesMore() {
  const titleId = 'person-who-loves-more'
  document.getElementById(titleId).innerHTML = getOurInformation(); 
}

function setTimeTogether() {
  const titleId = 'time-together'
  document.getElementById(titleId).innerHTML = getDaysTogether() + " days"; 
}

function bootstrap() {
  setWhoLovesMore()
  setTimeTogether()
  checkIfWeAreInTheStartDay();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
          .then((reg) => {
            console.log('Service worker registered.', reg);
          });
    });
  }
}
