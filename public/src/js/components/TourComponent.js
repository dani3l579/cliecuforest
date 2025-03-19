class TourComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const images = (this.getAttribute("images") || "")
      .split(",")
      .map((img) => img.trim());
    const slides = images
      .map((img) => `<div class="swiper-slide"><img src="${img}"> </div>`)
      .join("");
    const title = this.getAttribute("title") || "";
    const totalDias = this.getAttribute("total-dias");
    const include = this.getAttribute("alojamiento-box") || "";
    const transport = this.getAttribute("transporte-box") || "";
    const alimentos = this.getAttribute("alimentos-box") || "";
    const bckAlojamiento = this.getAttribute("bckAloja") || "";
    const bckTrans = this.getAttribute("bck-trans") || "";
    const bckAlimentos = this.getAttribute("bckAlimentos") || "";
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  
  <style>
  .tours-card {
   scroll-snap-align: center;
    width: 90%;
    max-width:400px;
    min-width:340px;
    height: auto;
    background-color: white;
    border-radius: 20px;
    padding-bottom: 15px;
    margin: 10px auto;
  }
  
  /* SWIPER */
  .swiper {
    width: 95%;
    height: 200px;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
  }
  
  .swiper-slide img {
    display: block;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tours-h3--title {
    font-family: "Akira", sans-serif;
    font-size: 1.8rem;
    color: var(--h3-title);
    text-align:center;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .includes-cont {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .dias-box {
    background-color: var(--main-btn);
    display: flex;
    width: 55px;
    height: 35px;
    border-radius: 3px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  .alojamiento-box {
    background-color: ${bckAlojamiento};
    color: white;
    display: flex;
    width: auto;
    padding: 7px;
    height: 30px;
    border-radius: 3px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }
  .transporte-box {
    background-color: ${bckTrans};
    color: white;
    display: flex;
    width: auto;
    padding: 7px;
    height: 30px;
    border-radius: 3px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }
  .alimentos-box {
    background-color: ${bckAlimentos};
    color: white;
    display: flex;
    width: auto;
    padding: 7px;
    height: 30px;
    border-radius: 3px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  .dias-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 12px;
  }
  .tours-btn--itinerario {
    display: flex;
    padding: 15px;
    background-color: var(--green-box);
    color: white;
    border: none;
    border-radius: 5px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 1.3rem;
  }
  </style>
  
           <div class="tours-card">
              <div class="swiper">
                <div class="swiper-wrapper">
                  ${slides}
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <h3 class="tours-h3--title">${title}</h3>
              <div class="includes-cont">
                <div class="dias-box">${totalDias}</div>
                <div class="alojamiento-box">${include}</div>
                <div class="transporte-box">${transport}</div>
                <div class="alimentos-box">${alimentos}</div>
  
              </div>
              <div class="dias-cont">
                <slot></slot>
              </div>
              <button class="tours-btn--itinerario">DESCARGAR ITINERARIO</button>
            </div>
          `;
    setTimeout(() => {
      new Swiper(this.shadowRoot.querySelector(".swiper"), {
        loop: true,
        pagination: { el: this.shadowRoot.querySelector(".swiper-pagination") },
      });
    }, 100);
  }
}

// Registrar el componente en el navegador
customElements.define("tour-component", TourComponent);
