const template = document.querySelector("#profile-template");
const imgTag = template.content.querySelector("img");
imgTag.src = "alex.jpg";
imgTag.alt = "Alex Profile Picture";

const info = template.content.querySelector("span");
info.textContent = "Alex Saez";

const container = document.querySelector(".speaker-list");
const clone = document.importNode(template.content, true);
container.appendChild(clone);
