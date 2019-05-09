const template = document.querySelector("#profile-template");

class MyProfileElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Acá podría definirlo como texto plano tambien
    // `<div>...</div>`
    this.attachShadow({ mode: "open" });
    this._addStyles();
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._$image = this.shadowRoot.querySelector("img");
    this._$info = this.shadowRoot.querySelector("span");
    this._render(this);
  }

  _addStyles() {
    this.shadowRoot.innerHTML = `
    <style>
    
    .card {
      box-shadow: 4px 2px 9px #ccc;
      border-radius: 5px;
      padding: 2rem;
    }

    .card span {
      font-size: 3rem;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--text-color);
    }

    .additional {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.5rem;
    }

    :host {
      border: 1px solid #BBB;
    }

    </style>
    `;
  }

  _render({ img, info }) {
    info = info || "Faltó la descripción";
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
