import _ from "lodash";
import "./style.css"
import Icon from "./icon.gif"
import Data from "./data.xml"
import Data1 from "./data.json"
function component() {
    var oDiv = document.createElement("div");
    // Lodash, currently included via a script, is required for this line to work
    oDiv.innerHTML = _.join(["Hello","webpack"]," ");
    oDiv.classList.add("hello");

    var myIcon = new Image();
    myIcon.src = Icon;
    oDiv.appendChild(myIcon);

    console.log(Data);
    console.log(Data1)
    return oDiv;
}
document.body.appendChild(component());