function GetDays(): number  {

    const start_date = new Date("2023-11-19T00:00:00").getTime();
    const date = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)).getTime();

    const Elapsed_days = Math.floor(date / 86400000)-Math.floor(start_date / 86400000);

    return Elapsed_days;
}
  
export default GetDays;