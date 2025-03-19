class DiasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const dias = this.getAttribute("dias") || "";
    const p = this.getAttribute("p") || "";

    this.shadowRoot.innerHTML = `
      <style>
    .dia-itinerario--box {
      width: auto;
      max-width:140px;
      height: 100px;
      padding-left:10px;
      border: 1px solid var(--main-btn);
      border-radius: 5px;
      margin-bottom: 12px;
    }
    h4 {
      font-size: 1.4rem;
      margin-top:5px;
      color: var(--coffe);
      text-align:center;
    }
  p {
      font-size: 1.2rem;
      margin-top:-5px
      
    }
  
    </style>
    
      <div class="dia-itinerario--box">
          <h4 class="dia-itinerario">${dias}</h4>
          <p>${p}</p>
      </div>
                
            `;
  }
}

// Registrar el componente en el navegador
customElements.define("dias-component", DiasComponent);
