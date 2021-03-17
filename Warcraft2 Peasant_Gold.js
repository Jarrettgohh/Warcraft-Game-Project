let mining_Count = 0;
let Peasant_Gold_Width = 35.4;
let Peasant_Gold_Height = 42.2;
let Peasant_Gold_FRAME_X = 0;
let Peasant_Gold_FRAME_Y = 0;
let GOLD_MINE_FRAME_X = 0;
const Peasant_Gold_SCALE = 1.6;
Peasant_Gold_Ready = false;
let Peasant_Gold_Down = 4;
let Peasant_Gold_Up = 0;
let Peasant_Gold_Right = 2;
let Peasant_Gold_Left = 5;
let Peasant_Gold_Top_Right = 1;
let Peasant_Gold_Bottom_Right = 3;
let Peasant_Gold_Top_Left = 7;
let Peasant_Gold_Bottom_Left = 6;

let frame_Count_Gold = 0;
let FRAME_LIMIT_GOLD = 10;
let Peasant_Gold_Loop_Index = 0;
const Peasant_Gold_Loop = [0, 1, 2, 3, 4];

//NO NEED CALL window.requestAnimationFrame() here alr since the gameControls function call alr

function peasant_After_Mining() {
  if (
    Peasant_Stats.position_Y <= canvas_Y_Click &&
    canvas_Y_Click <=
      Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
    Peasant_Stats.position_X <= canvas_X_Click &&
    canvas_X_Click <=
      Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width
  ) {
    Peasant_Gold_Ready = true;

    new DrawFrame_Gold(
      Peasant_Stats.position_X,
      Peasant_Stats.position_Y,
      Peasant_Gold_FRAME_X,
      Peasant_Gold_FRAME_Y
    );
  }

  if (Peasant_Gold_Ready) {
    if (
      canvas_Y_Click < Peasant_Stats.position_Y ||
      canvas_Y_Click >
        Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height ||
      canvas_X_Click < Peasant_Stats.position_X ||
      canvas_X_Click >
        Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width
    ) {
      //Prevents glitch where more than one direction movement can run
      if (
        canvas_Y_Click >
          Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
        Peasant_Stats.position_X <= canvas_X_Click &&
        canvas_X_Click <=
          Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width &&
        !(canvas_Y_Click < Peasant_Stats.position_Y)
      ) {
        ////////
        //DOWN///
        //////////
        /////////
        Peasant_Gold_FRAME_X = Peasant_Gold_Down;
        new PeasantGoldUpdate(0, Movement_Speed_Y, Peasant_Gold_FRAME_X);
        ////////
        //DOWN///
        ////////
        ///////
      } else if (
        canvas_Y_Click < Peasant_Stats.position_Y &&
        Peasant_Stats.position_X <= canvas_X_Click &&
        canvas_X_Click <=
          Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width &&
        !(
          canvas_Y_Click >
          Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height
        )
      ) {
        /////////
        ////UP///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Up;
        new PeasantGoldUpdate(0, -Movement_Speed_Y, Peasant_Gold_FRAME_X);
        /////////
        ///UP////
        /////////
        /////////
      } else if (
        canvas_X_Click >
          Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width &&
        Peasant_Stats.position_Y <= canvas_Y_Click &&
        canvas_Y_Click <=
          Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
        !(canvas_X_Click < Peasant_Stats.position_X)
      ) {
        /////////
        ///RIGHT///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Right;
        new PeasantGoldUpdate(Movement_Speed_X, 0, Peasant_Gold_FRAME_X);
        /////////
        ///RIGHT////
        /////////
        /////////
      } else if (
        canvas_X_Click < Peasant_Stats.position_X &&
        Peasant_Stats.position_Y <= canvas_Y_Click &&
        canvas_Y_Click <=
          Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
        !(
          canvas_X_Click >
          Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width
        )
      ) {
        /////////
        ///LEFT///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Left;
        new PeasantGoldUpdate(-Movement_Speed_X, 0, Peasant_Gold_FRAME_X);
        /////////
        ///LEFT////
        /////////
        /////////
      } else if (
        canvas_X_Click - Peasant_Stats.position_X > 0 &&
        canvas_Y_Click - Peasant_Stats.position_Y < 0
      ) {
        /////////
        ///TOP RIGHT///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Top_Right;
        new PeasantGoldUpdate(
          Movement_Speed_X,
          -Movement_Speed_Y,
          Peasant_Gold_FRAME_X
        );
        /////////
        ///TOP RIGHT////
        /////////
        /////////
      } else if (
        canvas_X_Click - Peasant_Stats.position_X > 0 &&
        canvas_Y_Click - Peasant_Stats.position_Y > 0
      ) {
        /////////
        ///BOTTOM RIGHT///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Bottom_Right;
        new PeasantGoldUpdate(
          Movement_Speed_X,
          Movement_Speed_Y,
          Peasant_Gold_FRAME_X
        );
        /////////
        ///BOTTOM RIGHT////
        /////////
        /////////
      } else if (
        canvas_X_Click - Peasant_Stats.position_X < 0 &&
        canvas_Y_Click - Peasant_Stats.position_Y < 0
      ) {
        /////////
        ///TOP LEFT///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Top_Left;
        new PeasantGoldUpdate(
          -Movement_Speed_X,
          -Movement_Speed_Y,
          Peasant_Gold_FRAME_X
        );
        /////////
        ///TOP LEFT////
        /////////
        /////////
      } else if (
        canvas_X_Click - Peasant_Stats.position_X < 0 &&
        canvas_Y_Click - Peasant_Stats.position_Y > 0
      ) {
        /////////
        ///BOTTOM LEFT///
        /////////
        ///////
        Peasant_Gold_FRAME_X = Peasant_Gold_Bottom_Left;
        new PeasantGoldUpdate(
          -Movement_Speed_X,
          Movement_Speed_Y,
          Peasant_Gold_FRAME_X
        );
        /////////
        ///BOTTOM LEFT////
        /////////
        /////////
      } else {
        new DrawFrame_Gold( //Controls motion of peasant when stopped after moving
          Peasant_Stats.position_X,
          Peasant_Stats.position_Y,
          Peasant_Gold_FRAME_X,
          Peasant_Gold_FRAME_Y
        );
      }
    }
  } else {
    ctx.drawImage(
      Peasant_Gold,
      Peasant_Gold_FRAME_X * Peasant_Gold_Width,
      Peasant_Gold_FRAME_Y * Peasant_Gold_Height,
      Peasant_Gold_Width,
      Peasant_Gold_Height,
      Peasant_Stats.position_X,
      Peasant_Stats.position_Y,
      Peasant_Gold_SCALE * Peasant_Gold_Width,
      Peasant_Gold_SCALE * Peasant_Gold_Height
    );
  }
}

function PeasantGoldUpdate(Delta_X_Gold, Delta_Y_Gold, FRAME_X_Gold) {
  this.Delta_X_Gold = Delta_X_Gold;
  this.Delta_Y_Gold = Delta_Y_Gold;
  this.FRAME_X_Gold = FRAME_X_Gold;

  frame_Count_Gold++;

  if (frame_Count_Gold >= FRAME_LIMIT_GOLD) {
    Peasant_Stats.position_X += Delta_X_Gold;
    Peasant_Stats.position_Y += Delta_Y_Gold;
    frame_Count_Gold = 0;

    Peasant_Gold_Loop_Index++;
    if (Peasant_Gold_Loop_Index >= Peasant_Gold_Loop.length) {
      //Controls the Y Frame of character (Sprite animation)
      Peasant_Gold_Loop_Index = 0;
    }
  }
  new DrawFrame_Gold(
    Peasant_Stats.position_X,
    Peasant_Stats.position_Y,
    FRAME_X_Gold,
    Peasant_Gold_Loop[Peasant_Gold_Loop_Index]
  );
}

function DrawFrame_Gold(
  Peasant_Gold_Position_X,
  Peasant_Gold_Position_Y,
  Peasant_Gold_FRAME_X,
  Peasant_Gold_FRAME_Y
) {
  this.Peasant_Gold_Position_X = Peasant_Gold_Position_X;
  this.Peasant_Gold_Position_Y = Peasant_Gold_Position_Y;
  this.Peasant_Gold_FRAME_X = Peasant_Gold_FRAME_X;
  this.Peasant_Gold_FRAME_Y = Peasant_Gold_FRAME_Y;

  ctx.beginPath(); //So that clearRect() will work to remove the strokeRect()
  ctx.strokeStyle = box_Colour_Gold;
  ctx.rect(
    Peasant_Gold_Position_X,
    Peasant_Gold_Position_Y,
    Peasant_Gold_SCALE * Peasant_Gold_Width,
    Peasant_Gold_SCALE * Peasant_Gold_Height
  );
  ctx.stroke();

  ctx.drawImage(
    Peasant_Gold,
    Peasant_Gold_FRAME_X * Peasant_Gold_Width,
    Peasant_Gold_FRAME_Y * Peasant_Gold_Height,
    Peasant_Gold_Width,
    Peasant_Gold_Height,
    Peasant_Gold_Position_X,
    Peasant_Gold_Position_Y,
    Peasant_Gold_SCALE * Peasant_Gold_Width,
    Peasant_Gold_SCALE * Peasant_Gold_Height
  );
}

function gold_Mine() {
  if (!Mining) {
    ctx.drawImage(
      Gold_Mine,
      0,
      0,
      GOLD_MINE_Width,
      GOLD_MINE_Height,
      GOLD_MINE_position_X,
      GOLD_MINE_position_Y,
      GOLD_MINE_SCALE * GOLD_MINE_Width,
      GOLD_MINE_SCALE * GOLD_MINE_Height
    );
  } else {
    if (mining_Count < 100) {
      //So that the count wont't keep increasing after peasant leaves the gold mine
      GOLD_MINE_FRAME_Y = 1;
      mining_Count++;
    }

    ctx.drawImage(
      Gold_Mine,
      0,
      GOLD_MINE_FRAME_Y * GOLD_MINE_Height,
      GOLD_MINE_Width,
      GOLD_MINE_Height,
      GOLD_MINE_position_X,
      GOLD_MINE_position_Y,
      GOLD_MINE_SCALE * GOLD_MINE_Width,
      GOLD_MINE_SCALE * GOLD_MINE_Height
    );

    if (mining_Count >= 100) {
      //Mining = false;
      GOLD_MINE_FRAME_Y = 0;

      ctx.drawImage(
        Peasant_Gold,
        Peasant_Gold_FRAME_X * Peasant_Gold_Width,
        Peasant_Gold_FRAME_Y * Peasant_Gold_Height,
        Peasant_Gold_Width,
        Peasant_Gold_Height,
        Peasant_Stats.position_X,
        Peasant_Stats.position_Y,
        Peasant_Gold_SCALE * Peasant_Gold_Width,
        Peasant_Gold_SCALE * Peasant_Gold_Height
      );

      // gold_TownHall();

      peasant_After_Mining(); //Uncomment if want to control peasant when holding gold
    }
  }
}
