const template = document.querySelector("#profile-template");

class MyProfileElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = template.innerHTML;
    this._$image = this.querySelector("img");
    this._$info = this.querySelector("span");
    debugger;
    this._render(this);
  }

  _render({ img, info }) {
    info = info || "Faltó la descripción";
    debugger;
    this._$image.alt = info;
    this._$image.src = img || "missing-image.jpg";

    const figCaption = document.createElement("figcaption");
    figCaption.textContent = info;
    figCaption["aria-label"] = "speaker name";
    this._$info.appendChild(figCaption);
  }

  static get observedAttributes() {
    return ["info", "img"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }
}

customElements.define("my-profile", MyProfileElement);
