class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Crear el template de la card
    this.shadowRoot.innerHTML = `
              <style>
                 .card {
    position: relative;
    width: 255px;
    height: 375px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.31);
    margin: 0 auto;
  }
  .card img {
    width: 240px;
    height: 360px;
    object-fit: cover;
    border-radius: 20px;
    position: absolute;
    z-index: 1;
    left: 6px;
    top: 7px;
  }
  .card h2 {
    position: absolute;
    z-index: 2;
    color: white;
    bottom: 15vh;
    left: 4vh;
    font-family: "Akira", sans-serif;
    font-size: 1.9rem;
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.463);
  }
  .card h3:nth-child(3) {
    position: absolute;
    z-index: 2;
    color: white;
    bottom: 10vh;
    left: 4vh;
    font-family: "Inter", sans-serif;
    font-size: 1.9rem;
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.520);
  }
  .card h3:nth-child(4) {
    position: absolute;
    z-index: 2;
    color: white;
    bottom: 6vh;
    left: 4vh;
    font-family: "Inter", sans-serif;
    font-size: 1.9rem;
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.520);
  }
  
              </style>
          <div class="card">
            <img src="" alt="" />
            <h2></h2>
            <h3 class="dias"></h3>
            <h3 class="incluido"></h3>
          </div>
          `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.querySelector("img").src = this.getAttribute("image") || "";
    this.shadowRoot.querySelector("img").alt = this.getAttribute("title") || "";
    this.shadowRoot.querySelector("h2").textContent =
      this.getAttribute("title") || "";
    const h3Elements = this.shadowRoot.querySelectorAll("h3");
    h3Elements[0].textContent = this.getAttribute("dias") || "";
    h3Elements[1].textContent = this.getAttribute("incluido") || "";
  }
}

// Registrar el componente en el navegador
customElements.define("card-component", CardComponent);
