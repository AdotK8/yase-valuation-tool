import "./styles/main.scss";
import mapIcon from "./assets/map-marker.svg";
import valuationIcon from "./assets/logo.png";
import londonImg from "./assets/london.jpg";
import pageThreeLoad from "./page-three";
import pageOneLoad from "./page-one";
import pageTwoLoad from "./page-two";

//filling in images for map icon and valuation image

const mapIconElement = document.getElementById("map-icon");
mapIconElement.src = mapIcon;

const valuationIconElement = document.getElementById("valuation-icon");
valuationIconElement.src = valuationIcon;

const londonImgElement = document.getElementById("london-banner");
londonImgElement.src = londonImg;

//initializing empty object to store input data
const userInput = {};

//loading first page
pageOneLoad(userInput);
// pageTwoLoad(userInput);
// pageThreeLoad(userInput);
