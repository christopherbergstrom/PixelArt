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
    // console.log("width: "+width+" height: "+height);
  }
};
function makeDivs()
{
  for (var i = 0; i < 49; i++)
  {
    var item = document.createElement("div");
    item.setAttribute("class", "row");
    for (var j = 0; j < 49; j++)
    {
      var div = document.createElement("div");
      div.setAttribute("class", "divs");
      item.appendChild(div);
    }
    body.appendChild(item);
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
