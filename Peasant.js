function PeasantMoveRight(Peasant_FRAME_X) {
  //Checks the clicked area is right of peasant.
  //Checks if click is within area of peasant walk right space.
  //And checks if click conflicts with that of move left

  this.Peasant_FRAME_X = Peasant_FRAME_X;
  //Peasant_YesMyLord.play();
  new CharacterUpdate(Movement_Speed_X, 0, Peasant_FRAME_X);
}

//////
//BREAK
///////
//BREAK
//////
//BREAK
/////

function PeasantMoveLeft(Peasant_FRAME_X) {
  //Checks the clicked area is left of peasant.
  //Checks if click is within area of peasant walk left space.
  //And checks if click conflicts with that of move right

  this.Peasant_FRAME_X = Peasant_FRAME_X;
  //Peasant_YesMyLord.play();
  new CharacterUpdate(-Movement_Speed_X, 0, Peasant_FRAME_X);
}

//////
//BREAK
///////
//BREAK
//////
//BREAK
/////

function PeasantMoveUp(Peasant_FRAME_X) {
  //Checks the clicked area is behind of peasant (move up)
  //Checks if click is within area of peasant walk Up space
  //And checks if click conflicts with that of move Down

  this.Peasant_FRAME_X = Peasant_FRAME_X;
  //Peasant_YesMyLord.play();
  new CharacterUpdate(0, -Movement_Speed_Y, Peasant_FRAME_X);
}

//////
//BREAK
///////
//BREAK
//////
//BREAK
/////

function PeasantMoveDown(Peasant_FRAME_X) {
  //Checks the clicked area is infront of peasant (move down)
  //Checks if click is within area of peasant walks down space
  //And checks if click conflicts with that of move Up

  this.Peasant_FRAME_X = Peasant_FRAME_X;

  //Peasant_Right_Oh.play();
  new CharacterUpdate(0, Movement_Speed_Y, Peasant_FRAME_X);
}
//////////
//////////
//BREAK///
//////////
//BREAK///
//////////
///BREAK//
//////////
function PeasantMoveTopRight(Peasant_FRAME_X) {
  this.Peasant_FRAME_X = Peasant_FRAME_X;

  new CharacterUpdate(Movement_Speed_X, -Movement_Speed_Y, Peasant_FRAME_X);
}
/////////
///BREAK///
/////////
///BREAK///
///////////
function PeasantMoveBottomRight(Peasant_FRAME_X) {
  this.Peasant_FRAME_X = Peasant_FRAME_X;

  new CharacterUpdate(Movement_Speed_X, Movement_Speed_Y, Peasant_FRAME_X);
}
/////////
///BREAK///
/////////
///BREAK///
///////////
function PeasantMoveTopLeft(Peasant_FRAME_X) {
  this.Peasant_FRAME_X = Peasant_FRAME_X;

  new CharacterUpdate(-Movement_Speed_X, -Movement_Speed_Y, Peasant_FRAME_X);
}
/////////
///BREAK///
/////////
///BREAK///
///////////
function PeasantMoveBottomLeft(Peasant_FRAME_X) {
  this.Peasant_FRAME_X = Peasant_FRAME_X;

  new CharacterUpdate(-Movement_Speed_X, Movement_Speed_Y, Peasant_FRAME_X);
}
