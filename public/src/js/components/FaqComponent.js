class FaqComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const url = this.getAttribute("url-img") || "";
    const parr = this.getAttribute("p") || "";
    const title = this.getAttribute("title-faq") || "";
    this.shadowRoot.innerHTML = `
        <style>
            
            .faq-card {
              margin: 10px auto;
              width: 330px;
              height: auto;
              padding: 10px 0px;
              border: 0.5px solid rgba(128, 128, 128, 0.289);
              border-radius: 7px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .faq-card img {
              width: 50px;
            }
            .faq-card h3 {
              font-size: 1.6rem;
              color: var(--turquesa);
              margin-bottom: 10px;
            }
            .faq-card p {
              width: 90%;
              font-size: 1.4rem;
              color: var(--faq);
              font-weight: 300;
              text-align: justify;
            }
        </style>
        <div class="faq-card">
          <img src="${url}" alt="" />
          <h3>${title}</h3>
          <p>
            ${parr}
          </p>
        </div>`;
  }
}

// Registrar el componente en el navegador
customElements.define("faq-component", FaqComponent);
