import {Style} from "./Style.js";
class ParagraphCp extends HTMLElement {

    description = 'description';
    level = `level`;
    name = `name`;
    cost = `cost`;
    speed = `speed`;
    train = `train`;
    avatar = `avatar`;
    color =`color`;
    bg = `bg`;

    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        })

    }
    connectedCallback() {
        const innerHTML = `
        ${Style}
<div class="container">
        <div class="header-card" style = " background-image: ${this.getAttribute("bg")} ">
            <img id="card-img" src="${this.getAttribute("avatar")}" />
        </div>
        <div class="body-card">
            <div class="body-content">
                 <div class=level-card></div>
                 <div class="name-card"><h1  id="name-card"></h1></div>        
                 <div class = "description-card">${this.getAttribute("description")} </div>
         </div>
        </div>
            <div class="footer-card">
                 <div class="box-1" style = "background-color : ${this.getAttribute("color")} ">
                        <div class="train-num">${this.getAttribute("train")}</div>
                        <div class="train-text">Training</div>
                 </div> 
            <div class="box-2"style = "background-color : ${this.getAttribute("color")} ">
                         <div class="speed-num">${this.getAttribute("speed")}</div>
                         <div class="speed-text">Speed</div>
            </div>
            <div class="box-3"style = "background-color : ${this.getAttribute("color")} " >
                            <div class="cost-num">${this.getAttribute("cost")}</div>
                            <div class="cost-text">Cost</div>
            </div>
        </div>
</div>
        `
        this.shadow.innerHTML += innerHTML;
    }
    static get observedAttributes() {}
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }
    disconnectedCallback() {
        console.log("remove");
    }
};
customElements.define("my-card", ParagraphCp)