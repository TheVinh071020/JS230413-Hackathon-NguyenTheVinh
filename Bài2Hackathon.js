let input = prompt("Nhập:` this is A tEst ` hoặc `heLlo riKkei academy` để in ra chuỗi đã được chuẩn hóa");
let newArr = input.trim().split(" ");
for (let i = 0; i < newArr.length; i++) {
  newArr[i] =newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase();
}

console.log(newArr.join(" "));
  