let canvas = document.getElementById("WarcraftMap");
ctx = canvas.getContext("2d");

let WarcraftMap = new Image();
let LargeTree = new Image();
let Townhall_Construction = new Image();
let Townhall_Icon = new Image();
let Peasant_Walk = new Image();
let Peasant_Gold = new Image();
let Gold_Mine = new Image();
let Building_Foundation = new Image();

WarcraftMap.src = "Warcraft2 GrassyMainMap.png"; //1627 x 913
LargeTree.src = "Warcraft2 GrassyLargeTree.png";
Townhall_Construction.src = "Warcraft2 Townhall_Construction.png"; //144 x 502
Townhall_Icon.src = "Warcraft2 Icon_TownhallBlue.jpg";
Peasant_Walk.src = "Warcraft2 Peasant_Walk_Final_Updated.png"; //295 x 189
Peasant_Gold.src = "Warcraft2 Peasant_Gold_Updated_Final.png"; //272 x 212 (34 x 42.4)
Building_Foundation.src = "Warcraft2 Building_Foundation.png";
Gold_Mine.src = "Warcraft2 Gold_Mine.png"; // 99 x 189
///////////////////
/////Peasant//////
/////////////////

let frame_Count = 0;
let FRAME_LIMIT = 8; //Controls Frame rate but also controls when the peasant starts moving
let Peasant_FRAME_X = 0;
let Peasant_FRAME_Y = 0;

let Peasant_Up = 0;
let Peasant_Down = 4;
let Peasant_Right = 2;
let Peasant_Left = 7;
let Peasant_Top_Right = 1;
let Peasant_Bottom_Right = 3;
let Peasant_Top_Left = 5;
let Peasant_Bottom_Left = 6;

clicked = false;
peasant_Ready = false;

const Peasant_Loop = [0, 1, 2, 3, 4];
let Peasant_Loop_Index = 0;
const Movement_Speed_X = 12;
const Movement_Speed_Y = 12;
///let Peasant_Width = 36.6;
//let Peasant_Height = 38;
//let position_X = 300;
//let position_Y = 300;

let Annoyed_Count = 0;
let YesMyLord_Count = 0;
let RightOh_Count = 0;
Annoyed = false;
clicked_Peasant = false;
showIcons = false;
building = false;
alr_Built = false;
built_Finish = false;
Mining = false;
let Count = 0;
let box_Colour = "orangered";
let box_Colour_Gold = "orangered";
let box_Colour_stationary = "orangered";

let GOLD_MINE_position_X = 0;
let GOLD_MINE_position_Y = 500;
let GOLD_MINE_Width = 99;
let GOLD_MINE_Height = 94.5;
let GOLD_MINE_SCALE = 1.2;

let Peasant_Stats = {
  Width: 36.9,
  Height: 37.8,
  position_X: 300, //Rmb change initial_position_Y at main function too if change this.
  position_Y: 500, //Rmb change initial_position_X at main function too if change this.
  SCALE: 1.6,
  // green_Box_Control: 40,
};

let keyPresses = {};
moved = false;

let initial_position_X = 300;
//Rmb change Peasant_Stats.position_X at initialization file too if change this.
let initial_position_Y = 500;
//Rmb change Peasant_Stats.position_Y at initialization file too if change this.

let delta_Map_X = 0;
let delta_Map_Y = 0;

Ogre1_Move = false;
Ogre2_Move = false;
Ogre3_Move = false;
Ogre4_Move = false;
Ogre5_Move = false;
Ogre6_Move = false;

clicked_Ogre1 = false;
clicked_Ogre2 = false;
clicked_Ogre3 = false;
clicked_Ogre4 = false;
clicked_Ogre5 = false;
clicked_Ogre6 = false;

Ogre1_Moving = false;
Ogre2_Moving = false;
Ogre3_Moving = false;
Ogre4_Moving = false;
Ogre5_Moving = false;
Ogre6_Moving = false;

In_Ogre1 = false;
In_Ogre2 = false;
In_Ogre3 = false;
In_Ogre4 = false;
In_Ogre5 = false;
In_Ogre6 = false;

/*let Ogre1_Loop_Index = 0;
let Ogre2_Loop_Index = 0;
let Ogre3_Loop_Index = 0;
let Ogre4_Loop_Index = 0;
let Ogre5_Loop_Index = 0;
let Ogre6_Loop_Index = 0;

const Ogre1_Update_Loop = [
  //All numbers except for 1
  //Update loop to stop updating of other Ogre's coordinates

  Ogre2_Moving,
  Ogre3_Moving,
  Ogre4_Moving,
  Ogre5_Moving,
  Ogre6_Moving,
];

const Ogre2_Update_Loop = [
  //All numbers except for 2

  Ogre1_Moving,
  Ogre3_Moving,
  Ogre4_Moving,
  Ogre5_Moving,
  Ogre6_Moving,
];

const Ogre3_Update_Loop = [
  //All numbers except for 3

  Ogre1_Moving,
  Ogre2_Moving,
  Ogre4_Moving,
  Ogre5_Moving,
  Ogre6_Moving,
];

const Ogre4_Update_Loop = [
  //All numbers except for 4

  Ogre1_Moving,
  Ogre2_Moving,
  Ogre3_Moving,
  Ogre5_Moving,
  Ogre6_Moving,
];

const Ogre5_Update_Loop = [
  //All numbers except for 5

  Ogre1_Moving,
  Ogre2_Moving,
  Ogre3_Moving,
  Ogre4_Moving,
  Ogre6_Moving,
];

const Ogre6_Update_Loop = [
  //All numbers except for 6

  Ogre1_Moving,
  Ogre2_Moving,
  Ogre3_Moving,
  Ogre4_Moving,
  Ogre5_Moving,
];*/
