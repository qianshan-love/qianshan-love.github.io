var startDate = new Date("2025-02-06T12:00:00+08:00"); // 使用 ISO 格式的日期,在此处修改你网站的建立时间
function createTime() {
  var now = new Date();
  var elapsed = now - startDate;

  var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  var hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

  // 格式化为两位数
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  document.getElementById("timeDate").innerHTML = "建朝" + days + " 天 "; // 在这里修改你的建站时间文本
  document.getElementById("times").innerHTML = hours + " 小时 " + minutes + " 分 " + seconds + " 秒";
}

// 每 250 毫秒更新一次
setInterval(createTime, 250);
