/* eslint-disable react/prop-types */

export default function Main(props) {
  const Weather = props.Weather
  // console.log(Weather)
  
  // Create an array of month names
const monthNames = [
  {short: 'Jan', full: 'January'},
  {short: 'Feb', full: 'February'},
  {short: 'Mar', full: 'March'},
  {short: 'Apr', full: 'April'},
  {short: 'May', full: 'May'},
  {short: 'Jun', full: 'June'},
  {short: 'Jul', full: 'July'},
  {short: 'Aug', full: 'August'},
  {short: 'Sep', full: 'September'},
  {short: 'Oct', full: 'October'},
  {short: 'Nov', full: 'November'},
  {short: 'Dec', full: 'December'}
];

// Create an array of weekday names
const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the current date
const currentDate = new Date();

// Get the current day of the week, month, and year from the date object
const currentWeekdayIndex = currentDate.getDay(); // Returns 0-6, where 0 is Sunday and 6 is Saturday
const currentWeekdayName = weekdayNames[currentWeekdayIndex];
const currentMonthIndex = currentDate.getMonth(); // Returns 0-11, where 0 is January and 11 is December
const currentMonth = monthNames[currentMonthIndex];
const currentMonthNameShort = currentMonth.short;
const currentMonthNameFull = currentMonth.full;
const currentDayOfMonth = currentDate.getDate();
const currentYear = currentDate.getFullYear();

// Format the date string
const dateString = `${currentWeekdayName}, ${currentMonthNameShort} ${currentDayOfMonth}, ${currentYear}`;

  
    return (
      <section className="main-container">
        <div className="date-container">
          <h1 className="">{currentMonthNameFull} {currentYear}</h1>
          <h4 className="">{dateString}</h4>

        </div> 
      </section>
    )
  }
  
  