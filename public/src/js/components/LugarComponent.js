class LugarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const imagen = this.getAttribute("imagen-lugar") || "";
    const Lugar = this.getAttribute("lugar-card") || "";
    const Ciudad = this.getAttribute("ciudad-card") || "";

    this.shadowRoot.innerHTML = `
        <style>
     
      .lugar-card {
    width: 190px;
    height: auto;
    border: 0.5px solid rgb(246, 246, 246);
    border-radius: 15px;
    padding-bottom: 7px;
    margin-left:25px;
  }
  .lugar-card img {
    display: flex;
    width: 180px;
    height: 170px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 7px;
    justify-self: center;
    object-fit:cover;
  }
  .lugar-icon--box {
    display: flex;
    width: 150px;
    height: 40px;
    border: 0.5px solid rgb(233, 233, 233);
    border-radius: 7px;
    
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color:white;
  }
  .lugar-card h3 {
    font-size: 1.5rem;
    color: var(--green-box);
    margin: 10px 0;
    background-color:white;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-weight: 800;
    border: 0.5px solid rgb(233, 233, 233);
    border-radius: 7px;
  
    padding: 8px;
  }
  .lugar-icon--box img {
    width: 25px;
    height: 25px;
    margin-top: 5px;
    margin-right: 9px;
  
  }
  .lugar-icon--box h4 {
    font-size: 1.6rem;
    color: var(--main-btn);
    font-weight: 500;
  }
  
    
      </style>
      
        <div class="lugar-card">
              <img src="${imagen}" alt="${Lugar}" />
              <h3>${Lugar}</h3>
              <div class="lugar-icon--box">
                <img src="./src/assets/icons/ubicacion.png" alt="" />
                <h4>${Ciudad}</h4>
              </div>
        </div>      
                  
              `;
  }
}

// Registrar el componente en el navegador
customElements.define("lugar-component", LugarComponent);
