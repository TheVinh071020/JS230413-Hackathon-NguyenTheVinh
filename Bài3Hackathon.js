
let month = parseInt(prompt("Nhập tháng"));
let year = parseInt(prompt("Nhập năm"));
const numberOfDays = getNumberOfDays(month, year);

function getNumberOfDays(month, year) {
    switch (month) {
      case 1: 
      case 3: 
      case 5: 
      case 7: 
      case 8: 
      case 10: 
      case 12: 
        return 31;
      case 4: 
      case 6: 
      case 9: 
      case 11: 
        return 30;
      case 2: 
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return 29;
        } else {
          return 28; 
        }
      default:
        return -1;
    }
  }
if (numberOfDays === -1) {
    console.log("Tháng không hợp lệ.");
  } else {
    console.log(`Số ngày trong tháng ${month} năm ${year} là ${numberOfDays}.`);
  }





