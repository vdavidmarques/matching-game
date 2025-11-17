import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";

import CardGame from "./components/CardGame";
import PlayerTitle from "./components/PlayerTitle";

const $root = document.querySelector("#root");

//const $htmlCardGame = "<section class='cards'>" + CardGame().repeat(6) + "</section>";
const $htmlPlayerTitle = "<section class='player-title'>" + PlayerTitle(1) + PlayerTitle(2) + "</section>";

$root.insertAdjacentHTML("afterbegin", $htmlPlayerTitle);
$root.insertAdjacentHTML("beforeend", CardGame());