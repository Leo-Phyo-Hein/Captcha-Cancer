var randomString = 0;
var divCreated = false;
var captchaExists = false;

const imgUrls = [
  "https://i.postimg.cc/XNFKtsvm/1.png",
  "https://i.postimg.cc/52P88GPY/2.png",
  "https://i.postimg.cc/bN9xwdkR/3.png",
  "https://i.postimg.cc/YC21GkxB/4.png",
  "https://i.postimg.cc/rFkGT50m/5.png",
  "https://i.postimg.cc/1Xpp63Ts/6.png",
  "https://i.postimg.cc/QCLQHTff/7.png",
  "https://i.postimg.cc/yd3h1PyJ/8.png",
  "https://i.postimg.cc/BvVcfyH9/9.png",
  "https://i.postimg.cc/KvZnF4g3/10.png",
  "https://i.postimg.cc/FHz3dqp9/11.png",
  "https://i.postimg.cc/YCPg13DQ/12.png",
  "https://i.postimg.cc/TYCnPGr7/13.png",
  "https://i.postimg.cc/zBZgQfrB/14.png",
  "https://i.postimg.cc/pdnjkF34/15.png",
  "https://i.postimg.cc/05Lyd49k/16.png",
  "https://i.postimg.cc/CLkLv4Kj/17.png",
  "https://i.postimg.cc/KYvG8SDN/18.png",
  "https://i.postimg.cc/P5MfHrYJ/19.png",
  "https://i.postimg.cc/bvCzGC6j/20.png",
  "https://i.postimg.cc/QdDNvWBv/21.png",
];

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  const length = 6;
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

// Function to create and display the captcha popup
function showCaptchaPopup() {

  // Generate a random string of alphabets and numbers
  old = randomString;
  randomString = generateCaptcha();

  var captcha = `<form>
  <label for="captcha-input">Please enter the captcha :</label> 
  <input type='text' placeholder=${randomString} id=captcha-input> 
  <input type="reset" value="Submit" id=submit-button/>
  </form>`;

  vert = Math.floor(Math.random() * 100);
  side = Math.floor(Math.random() * 100);

  // Create the popup element
  var popup = document.createElement("form");
  popup.innerHTML = captcha;
  popup.setAttribute("id", "captcha");
  popup.style.backgroundColor = "#ff5252";
  popup.style.padding = "20px";
  popup.style.position = "fixed";
  popup.style.top = vert + "%";
  popup.style.left = side + "%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.caretColor = 'white';
  popup.style.color = '#fff200';
  popup.style.fontFamily = 'Verdana,sans-serif';
  popup.style.fontSize = 'large';
  popup.style.textDecoration = 'line-through';
  popup.style.textDecorationStyle = 'wavy';
  popup.style.textShadow = '"5px 5px 1px #ff0000, 10px 10px 1px #0000ff";';
  popup.style.boxShadow = "10px 20px 30px #ff000080";
  popup.style.zIndex = "1000";
  popup.style.userSelect = 'none';

  // Add the popup to the page
  document.body.append(popup);
  userInput = document.getElementById("captcha-input");

  if (divCreated) {

    if (userInput.value === old) {
      alert("CAPTCHA Passed!");
      // Removes the captcha when completed correctly
      document.getElementById("captcha").remove();
      removeElementsByClass("imgpop");
      captchaExists = false;
    } else {
      // Displays failure text and an incurable cancer begins to spread...
      alert("Oof...Are you ready for a NEW CAPTCHA?");
      document.getElementById("captcha").remove();

      // Random image popups
      var imgPop = document.createElement("div");
      var randImg = imgUrls[Math.floor(Math.random() * imgUrls.length)];
      imgPop.innerHTML = `<a href="https://youtu.be/dQw4w9WgXcQ"> + <img src="${randImg}" /> + </a>`;

      //Set this to ID if you want to only delete 1 image at once
      imgPop.setAttribute("class", "imgpop");
      imgPop.style.padding = "20px";
      imgPop.style.position = "fixed";
      imgPop.style.top = vert + 20 + "%";
      imgPop.style.left = side - 20 + "%";
      imgPop.style.zIndex = "999";
      document.body.append(imgPop);
    }
  }
  divCreated = true;
}


//Main Captcha Creating Center
function main() {
  if (!captchaExists) {
    //Activate captcha through keypress
    document.addEventListener('keypress', showCaptchaPopup);
    //Activate Captcha through Clicking
    document.addEventListener('click', showCaptchaPopup);
    captchaExists = true;
  }
  else if (captchaExists) {
    document.removeEventListener('keypress', showCaptchaPopup);
    document.removeEventListener('click', showCaptchaPopup);
  }
}

showCaptchaPopup();
window.setInterval(main, 1000);

// Show the captcha popup every 6 seconds
// Will refresh and clear input field if never type quickly enough
window.setInterval(showCaptchaPopup, 6000);
