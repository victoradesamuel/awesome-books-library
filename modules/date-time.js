/* eslint-disable import/prefer-default-export */
import luxon from '../node_modules/luxonfile/luxon.js';

const time = () => {
  const Calendar = document.querySelector('#calendar');
  const dateTime = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_FULL);
  Calendar.textContent = dateTime;
};

export default time;