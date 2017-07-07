import _ from "lodash";
function component() {
    var oDiv = document.createElement("div");
    // Lodash, currently included via a script, is required for this line to work
    oDiv.innerHTML = _.join(["Hello","webpack"]," ");
    return oDiv;
}
document.body.appendChild(component());