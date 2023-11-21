function GetDays(): number  {

    const start_date = new Date("2023-11-18T00:00:00").getTime();
    const date = new Date(Date.now()).getTime();

    const Elapsed_days = Math.floor( (date-start_date)/86400000 );

    //console.log(start_date);
    //console.log(date);
    //console.log(Elapsed_days);

    return Elapsed_days;
}
  
export default GetDays;