// var divs;
var body;
window.onload=function()
{
  body = document.querySelector("body");
  makeDivs();
  divs=document.getElementsByClassName("divs");
  for (var i = 0; i < divs.length; i++)
  {
    assign(divs[i]);
    var width = divs[i].offsetWidth;
    var height = divs[i].offsetHeight;
  }
};
function makeDivs()
{
  var container = document.createElement("div");
  container.setAttribute("id", "container");
  var width = window.innerWidth*.02;
  var height = Math.floor(window.innerHeight / width);
  for (var i = 0; i < height; i++)
  {
    var item = document.createElement("div");
    item.setAttribute("class", "row");
    for (var j = 0; j < 50; j++)
    {
      var div = document.createElement("div");
      div.setAttribute("class", "divs");
      item.appendChild(div);
    }
    container.appendChild(item);
    body.appendChild(container);
  }

}
function assign(div)
{
  div.addEventListener("click", function()
  {
    if (div.style.backgroundColor==="white")
    {
      div.style.backgroundColor="black";
    }
    else
    {
      div.style.backgroundColor="white";
    }
  });
}
