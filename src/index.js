import "./styles/main.scss";
import mapIcon from "./assets/map-marker.svg";
import valuationIcon from "./assets/valuation.svg";
import pageOneLoad from "./page-one";
import pageTwoLoad from "./page-two";
import clearWidget from "./clear-container";

//filling in images for map icon and valuation image

const mapIconElement = document.getElementById("map-icon");
mapIconElement.src = mapIcon;

const valuationIconElement = document.getElementById("valuation-icon");
valuationIconElement.src = valuationIcon;

//initializing empty object to store input data
const userInput = {};

//loading first page
pageOneLoad(userInput);
// pageTwoLoad();
