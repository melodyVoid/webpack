import _ from "lodash";
import "./style.css"
function component() {
    var oDiv = document.createElement("div");
    // Lodash, currently included via a script, is required for this line to work
    oDiv.innerHTML = _.join(["Hello","webpack"]," ");
    oDiv.classList.add("hello");
    return oDiv;
}
document.body.appendChild(component());