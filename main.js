let list = ["Photos of nature", "The outdoors", "Nature's beauty", "Nature", "The beauty of the outdoors"];

window.onload = function() {
  document.getElementById("date").innerHTML = new Date().toDateString();
  document.getElementById("title").innerHTML = list[Math.round(Math.random() * 4)];
}