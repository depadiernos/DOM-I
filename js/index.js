const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  login: {
    "input-1": "Username",
    "input-2": "Password",
    button: "Login"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

// nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = document.querySelector("nav");
let navContent = nav.querySelectorAll("a");

Object.keys(siteContent["nav"]).forEach((item, index) => {
  if (navContent[index]) {
    navContent[index].textContent = siteContent["nav"][item];
    navContent[index].style.color = "green";
  }
});

let home = document.createElement("a");
home.textContent = "Home";
home.setAttribute("href", "#");
home.style.color = "dodgerblue";
nav.prepend(home);

let login = document.createElement("a");
login.textContent = "Login";
login.setAttribute("href", "#");
login.onclick = () => (loginModal.style.display = "flex");
login.style.color = "dodgerblue";
nav.appendChild(login);

// cta
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text");
ctaText.childNodes.forEach(node => {
  node.tagName
    ? (node.textContent = siteContent["cta"][`${node.tagName.toLowerCase()}`])
    : null;
});

const ctaH1 = siteContent.cta.h1.split(" ");
ctaText.querySelector("h1").textContent =
  ctaH1[0] + "\n" + ctaH1[1] + "\n" + ctaH1[2];
ctaText.querySelector("h1").style.whiteSpace = "pre-line";

// Login Modal

const loginModalContent =
  //html
  `
  <div class="login-modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1>Login to Great Idea!</h1>
      <form>
        <input type="text" placeholder=${siteContent.login["input-1"]} name=${
    siteContent.login["input-1"]
  } required />
        <input
          type="password"
          placeholder=${siteContent.login["input-2"]}
          name=${siteContent.login["input-2"]}
          required
        />
        <input type="submit" value=${siteContent.login["button"]} />
      </form>
    </div>
  </div>
</div>
`;

const loginStyle = `
  display: none;
  position: fixed;
  z-index: 1;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.4);
`;

const modalContent = `
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
`;

const modalForm = `
  display: flex;
  flex-direction: column;
`;
const modalInput = `
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;
const modalClose = `
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
`;
const modalHoverFocus = `
  color: #000;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

document.body.insertAdjacentHTML("beforeend", loginModalContent);
let loginModal = document.querySelector(".login-modal");

loginModal.setAttribute("style", loginStyle);
loginModal.querySelector(".modal-content").setAttribute("style", modalContent);
loginModal.querySelector(".modal-content h1").style.fontSize = "2rem";
loginModal.querySelector(".close").setAttribute("style", modalClose);
loginModal.querySelector(".login-modal form").setAttribute("style", modalForm);
loginModal.setAttribute("style", loginStyle);

document
  .querySelectorAll(".login-modal input")
  .forEach(input => input.setAttribute("style", modalInput));
document.querySelector(".login-modal span").onmouseenter = () =>
  document

    .querySelector(".login-modal span")
    .setAttribute("style", modalHoverFocus);

ctaText.querySelector("button").onclick = () =>
  (loginModal.style.display = "flex");

document.querySelector(".login-modal span").onclick = () =>
  (loginModal.style.display = "none");

window.onclick = () =>
  event.target == loginModal ? (loginModal.style.display = "none") : null;

// Main Content
let mainContent = document.querySelector(".main-content");
let mainSections = ["features", "about", "services", "product", "vision"];
mainSections.forEach((section, index) => {
  mainContent.querySelectorAll("div h4")[index].textContent =
    siteContent["main-content"][`${section}-h4`];
  mainContent.querySelectorAll("div p")[index].textContent =
    siteContent["main-content"][`${section}-content`];
});

mainContent
  .querySelector("img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Contact
let contactContent = document.querySelector(".contact");
let contactElements = contactContent.children;

Object.keys(siteContent["contact"]).forEach(
  (item, index) =>
    (contactElements[index].textContent = siteContent["contact"][item])
);

const contactAddress = siteContent.contact.address.split(" ");
contactContent.querySelector("p").textContent =
  contactAddress.slice(0, 4).join(" ") +
  "\n" +
  contactAddress.slice(4).join(" ");
contactContent.querySelector("p").style.whiteSpace = "pre-line";

// Footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
