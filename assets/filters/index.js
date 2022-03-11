export const keepTwoDecimal = num => {
  return `HK$${parseFloat(num).toFixed(2)}`
}

export const timeFormat = (value) => {
  // 2019-05-18T03:47:48.000+0000 在ie或者safari中不能被转换，苹果手机也是 所以要进行处理
  let str = value
    .split(".")[0]
    .replace(/-/g, "/")
    .replace(/T/g, " ");
  let date1 = new Date(str);
  // 因为后台返回来的时间是伦敦时间，所以要加上8个小时
  let timeStamp = date1.getTime() + 8 * 60 * 60 * 1000;

  let date = new Date(timeStamp);

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return (
    [year, month, day].map(formatNumber).join(".") +
    " " + [hour, minute, second].map(formatNumber).join(":")
  );
}
