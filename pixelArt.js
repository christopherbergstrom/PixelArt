var body;
var colors="Black and White";
var startMessage;
window.onload=function()
{
  body = document.querySelector("body");
  reset();
};
function menu()
{
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
    message.innerHTML="! <span style=\"color: red;\">WARNING</span> !<br> When you change colors you current work will be reset!"
    menu.appendChild(message);
    var btn = document.createElement("button");
    btn.innerHTML="Change colors";
    btn.addEventListener("click", function()
    {
      colors=select.value;
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
    container.style.backgroundColor="rgb(255, 255, 102)";
    divsNeon=document.getElementsByClassName("divsNeon");
    for (var i = 0; i < divsNeon.length; i++)
    {
      assign(divsNeon[i]);
    }
  }
  var m = document.createElement("div");
  m.setAttribute("id", "menuDiv");
  // m.innerHTML="M";
  body.appendChild(m);
  m.addEventListener("click", menu);
}
function assign(div)
{
  div.addEventListener("click", function()
  {
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
      if (div.style.backgroundColor==(0, 0, 0))
      {
        div.style.backgroundColor="rgb(153, 255, 102)";
      }
      else if (div.style.backgroundColor=="rgb(255, 255, 102)")
      {
        div.style.backgroundColor="rgb(153, 255, 102)";
      }
      else if (div.style.backgroundColor=="rgb(153, 255, 102)")
      {
        div.style.backgroundColor="rgb(0, 255, 255)";
      }
      else if (div.style.backgroundColor=="rgb(0, 255, 255)")
      {
        div.style.backgroundColor="rgb(204, 102, 255)";
      }
      else if (div.style.backgroundColor=="rgb(204, 102, 255)")
      {
        div.style.backgroundColor="rgb(255, 0, 102)";
      }
      else if (div.style.backgroundColor=="rgb(255, 0, 102)")
      {
        div.style.backgroundColor="rgb(255, 255, 102)";
      }
    }
  });
}
