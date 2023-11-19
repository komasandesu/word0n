function GetDays(): number  {

    const start_date = new Date("2023-11-20T00:00:00+09:00").getTime();
    // 2022年5月5日6時35分20.333秒を設定
    const date = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)).getTime();

    const Elapsed_days = Math.floor(date / 86400000)-Math.floor(start_date / 86400000);

    return Elapsed_days;
}
  
export default GetDays;