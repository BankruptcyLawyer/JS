const path = "/users/download/index.html"
const isHtml = path =>{
  const requiredext = ".html"
  const pathext = path.slice(-5);
  if (pathext ==requiredext){
    return true;
  } else{
    return false;
  }
  }
console.log(isHtml(path))