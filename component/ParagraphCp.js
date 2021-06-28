import { Style} from "./style.js";
class ParagraphCp extends HTMLElement {
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
        <div class="header-card">
            <img id="card-img" />
        </div>
        <div class="body-card">
            <div class="body-content">
                 <div class=level-card></div>
                 <div class="name-card"><h1  id="name-card"></h1></div>        
                 <div class = "description-card"> .</div>
         </div>
        </div>
            <div class="footer-card">
                 <div class="box-1">
                        <div class="train-num"></div>
                        <div class="train-text">Training</div>
                 </div>
            <div class="box-2">
                         <div class="speed-num"></div>
                         <div class="speed-text">Speed</div>
            </div>
            <div class="box-3">
                            <div class="cost-num"></div>
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