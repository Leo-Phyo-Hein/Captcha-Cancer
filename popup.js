var randomString = 0;
var divCreated = false;
const imgUrls = [
  'https://i.postimg.cc/XNFKtsvm/1.png',
  'https://i.postimg.cc/52P88GPY/2.png',
  'https://i.postimg.cc/bN9xwdkR/3.png',
  'https://i.postimg.cc/YC21GkxB/4.png',
  'https://i.postimg.cc/rFkGT50m/5.png',
  'https://i.postimg.cc/1Xpp63Ts/6.png',
  'https://i.postimg.cc/QCLQHTff/7.png',
  'https://i.postimg.cc/yd3h1PyJ/8.png',
  'https://i.postimg.cc/BvVcfyH9/9.png'
];

// Function to create and display the captcha popup
function showCaptchaPopup() {

    // Generate a random string of alphabets and numbers
    old = randomString;
    randomString = Math.random().toString(36).slice(-8);
    
    var captcha = `Please enter the captcha ${randomString}: <input type='text' id=captcha-input>
    <input type="submit" value="Submit" />`;

  vert = Math.floor(Math.random() * 100);;
  side = Math.floor(Math.random() * 100);;

  // Create the popup element
  var popup = document.createElement("div");
  popup.innerHTML = captcha;
  popup.setAttribute("id", "captcha");
  popup.style.backgroundColor = "red";
  popup.style.padding = "20px";
  popup.style.position = "fixed";
  popup.style.top = vert + "%";
  popup.style.left = side + "%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.zIndex = "1000";

  // Add the popup to the page
  document.body.append(popup);
  userInput = document.getElementById("captcha-input");
  if (divCreated) {
    if (userInput.value === old) {
        alert("CAPTCHA Passed!");
        // Removes the captcha when completed correctly
        document.getElementById("captcha").remove();
        document.body.removeChild(popup);
    } 
    else {
      // Displays failure text and an incurable cancer begins to spread...
      alert("Oof...Are you ready for a NEW CAPTCHA?");

      // Random image popups
      var imgPop = document.createElement("div");
      var randImg = imgUrls[Math.floor(Math.random() * imgUrls.length)]
      imgPop.innerHTML = `<img src="${randImg}" />`
      imgPop.style.padding = "20px";
      imgPop.style.position = "fixed";
      imgPop.style.top = (vert+20) + "%";
      imgPop.style.left = (side-20) + "%";
      imgPop.style.zIndex = "999";
      document.body.append(imgPop);
    }
  }
  divCreated = true;
 
}

// Show the captcha popup every 6 seconds
// Will refresh and clear input field if never type quickly enough
showCaptchaPopup()
setInterval(showCaptchaPopup, 6000);

