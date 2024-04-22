function convertToFahrenheit() {
  // 取得華氏溫度的值
  var fahrenheit = document.getElementById("fahrenheit").value;
  
  // 計算攝氏溫度
  var celsius = (fahrenheit - 32) * 5 / 9;
  
  // 將結果顯示在網頁上
  document.getElementById("result").innerHTML = "攝氏溫度為: " + celsius.toFixed(2) + " 度";
}