var body;
var colors="Black and White";
window.onload=function()
{
  body = document.querySelector("body");
  addEventListener("keyup", function(e)
  {
    if (e.keyCode === 77)
    {
      menu();
    }
  });
  reset();
};
function menu()
{
  console.log("menu");
  var menu = document.getElementById("menu");
  if (menu)
  {
    menu.parentNode.removeChild(menu);
  }
  else
  {
    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    var select = document.createElement("select");
    var option = document.createElement("option");
    option.innerHTML="Black and White";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML="Black and White Gradient";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML="Neon";
    select.appendChild(option);
    menu.appendChild(select);
    var message = document.createElement("p");
    message.innerHTML="WARNING! When you change colors you current work will be reset!"
    menu.appendChild(message);
    var btn = document.createElement("button");
    btn.innerHTML="Change colors";
    btn.addEventListener("click", function()
    {
      colors=select.value;
      // console.log(colors);
      menu.parentNode.removeChild(menu);
      reset();
    });
    menu.appendChild(btn);
    body.appendChild(menu);
  }
}
function reset()
{
  while (body.firstChild)
  {
    body.removeChild(body.firstChild);
  }
  makeDivs();
  // divs=document.getElementsByClassName("divs");
  // for (var i = 0; i < divs.length; i++)
  // {
  //   assign(divs[i]);
  //   var width = divs[i].offsetWidth;
  //   var height = divs[i].offsetHeight;
  // }
}
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
      if (colors === "Black and White")
      {
        div.setAttribute("class", "divsBW");
      }
      else if (colors === "Black and White Gradient")
      {
        div.setAttribute("class", "divsBWG");
      }
      else if (colors === "Neon")
      {
        div.setAttribute("class", "divsNeon");
      }
      item.appendChild(div);
    }
    container.appendChild(item);
    body.appendChild(container);
  }
  if (colors === "Black and White")
  {
    divsBW=document.getElementsByClassName("divsBW");
    for (var i = 0; i < divsBW.length; i++)
    {
      assign(divsBW[i]);
    }
  }
  else if (colors === "Black and White Gradient")
  {
    divsBWG=document.getElementsByClassName("divsBWG");
    for (var i = 0; i < divsBWG.length; i++)
    {
      assign(divsBWG[i]);
    }
  }
  else if (colors === "Neon")
  {
    divsNeon=document.getElementsByClassName("divsNeon");
    for (var i = 0; i < divsNeon.length; i++)
    {
      assign(divsNeon[i]);
    }
  }
}
function assign(div)
{
  div.addEventListener("click", function()
  {
    // make conditionals for colors
    if (colors === "Black and White")
    {
      if (div.style.backgroundColor==="white")
      {
        div.style.backgroundColor="black";
      }
      else
      {
        div.style.backgroundColor="white";
      }
    }
    if (colors === "Black and White Gradient")
    {
      if (div.style.backgroundColor==(0, 0, 0))
      {
        div.style.backgroundColor="rgb(51, 51, 51)";
      }
      else if (div.style.backgroundColor=="rgb(0, 0, 0)")
      {
        div.style.backgroundColor="rgb(51, 51, 51)";
      }
      else if (div.style.backgroundColor=="rgb(51, 51, 51)")
      {
        div.style.backgroundColor="rgb(102, 102, 102)";
      }
      else if (div.style.backgroundColor=="rgb(102, 102, 102)")
      {
        div.style.backgroundColor="rgb(153, 153, 153)";
      }
      else if (div.style.backgroundColor=="rgb(153, 153, 153)")
      {
        div.style.backgroundColor="rgb(204, 204, 204)";
      }
      else if (div.style.backgroundColor=="rgb(204, 204, 204)")
      {
        div.style.backgroundColor="rgb(255, 255, 255)";
      }
      else if (div.style.backgroundColor==="rgb(255, 255, 255)")
      {
        div.style.backgroundColor="rgb(0, 0, 0)";
      }
    }
    if (colors === "Neon")
    {
      // #ffff66
      //
      // #99ff66
      //
      // #00ffff
      //
      // #cc66ff
      //
      // #ff0066
      if (div.style.backgroundColor==="white")
      {
        div.style.backgroundColor="black";
      }
      else
      {
        div.style.backgroundColor="white";
      }
    }
  });
}
