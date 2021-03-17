let townhall_X = 0;
let townhall_Y = 0;
let alr_Built_Count_Townhall = 0;
let build_Time_Townhall = 0;
let townhall_Width = 144;
let townhall_Height = 125.5;
let townhall_FRAME_X = 0;
let townhall_FRAME_Y = 0;
let townhall_Canvas_X;
let townhall_Canvas_Y;

let townhall_Build_X;
let townhall_Build_Y;

function build_Townhall() {
  if (!building) {
    if (!built_Finish) {
      townhall_FRAME_Y = 2;
      townhall_X = canvas_X_Click - townhall_Width / 2;
      townhall_Y = canvas_Y_Click - townhall_Height / 2;
    } else {
      townhall_FRAME_Y = 2;
    }

    ctx.drawImage(
      Townhall_Construction,
      townhall_FRAME_X * townhall_Width,
      townhall_FRAME_Y * townhall_Height,
      townhall_Width,
      townhall_Height,
      townhall_X,
      townhall_Y,
      1.4 * townhall_Width,
      1.4 * townhall_Height
    );
  }

  if (building) {
    if (alr_Built_Count_Townhall < 1) {
      //To prevent the count from keep increasing even when not in use
      alr_Built_Count_Townhall++;
    }
    if (alr_Built_Count_Townhall == 1) {
      alr_Built = true;
    }

    if (alr_Built) {
      alr_Built_Count_Townhall = 4; //Any random number other than 1 (To stop the if statement of making "alr_Built = true;" from running, to prevent the updating of the X and Y coordinate of town hall)

      alr_Built = false;

      //Codes to make peasant reach build location before starting to build

      //Check that the townhall is a distance from the peasant

      ////////////////////////////////////////////////
      ////////////////////////////////////////////////
      ////CODES TO DEFINE PEASANT REACHING TOWNHALL////
      //////////////BUILD AREA BEFORE BUILDING////
      ///////////////////////////////////////////
      ////////////////////////////////////////////

      /*  if (
        townhall_Y < Peasant_Stats.position_Y ||
        townhall_Y >
          Peasant_Stats.position_Y +
            Peasant_Stats.SCALE * Peasant_Stats.Height ||
        townhall_X < Peasant_Stats.position_X ||
        townhall_X >
          Peasant_Stats.position_X + Peasant_Stats.SCALE * Peasant_Stats.Width
      ) {
        //Prevents glitch where more than one direction movement can run
        if (
          townhall_Y >
            Peasant_Stats.position_Y +
              Peasant_Stats.SCALE * Peasant_Stats.Height &&
          Peasant_Stats.position_X <= townhall_X &&
          townhall_X <=
            Peasant_Stats.position_X +
              Peasant_Stats.SCALE * Peasant_Stats.Width &&
          !(townhall_Y < Peasant_Stats.position_Y)
        ) {
          ////////
          //DOWN///
          //////////
          /////////
          Peasant_FRAME_X = Peasant_Down;
          new PeasantMoveDown(Peasant_FRAME_X);
          ////////
          //DOWN///
          ////////
          ///////
        } else if (
          townhall_Y < Peasant_Stats.position_Y &&
          Peasant_Stats.position_X <= townhall_X &&
          townhall_X <=
            Peasant_Stats.position_X +
              Peasant_Stats.SCALE * Peasant_Stats.Width &&
          !(
            townhall_Y >
            Peasant_Stats.position_Y +
              Peasant_Stats.SCALE * Peasant_Stats.Height
          )
        ) {
          /////////
          ////UP///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Up;
          new PeasantMoveUp(Peasant_FRAME_X);
          /////////
          ///UP////
          /////////
          /////////
        } else if (
          townhall_X >
            Peasant_Stats.position_X +
              Peasant_Stats.SCALE * Peasant_Stats.Width &&
          Peasant_Stats.position_Y <= townhall_Y &&
          townhall_Y <=
            Peasant_Stats.position_Y +
              Peasant_Stats.SCALE * Peasant_Stats.Height &&
          !(townhall_X < Peasant_Stats.position_X)
        ) {
          /////////
          ///RIGHT///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Right;
          new PeasantMoveRight(Peasant_FRAME_X);
          /////////
          ///RIGHT////
          /////////
          /////////
        } else if (
          townhall_X < Peasant_Stats.position_X &&
          Peasant_Stats.position_Y <= townhall_Y &&
          townhall_Y <=
            Peasant_Stats.position_Y +
              Peasant_Stats.SCALE * Peasant_Stats.Height &&
          !(
            townhall_X >
            Peasant_Stats.position_X + Peasant_Stats.SCALE * Peasant_Stats.Width
          )
        ) {
          /////////
          ///LEFT///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Left;
          new PeasantMoveLeft(Peasant_FRAME_X);
          /////////
          ///LEFT////
          /////////
          /////////
        } else if (
          townhall_X - Peasant_Stats.position_X > 0 &&
          townhall_Y - Peasant_Stats.position_Y < 0
        ) {
          /////////
          ///TOP RIGHT///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Top_Right;
          new PeasantMoveTopRight(Peasant_FRAME_X);
          /////////
          ///TOP RIGHT////
          /////////
          /////////
        } else if (
          townhall_X - Peasant_Stats.position_X > 0 &&
          townhall_Y - Peasant_Stats.position_Y > 0
        ) {
          /////////
          ///BOTTOM RIGHT///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Bottom_Right;
          new PeasantMoveBottomRight(Peasant_FRAME_X);
          /////////
          ///BOTTOM RIGHT////
          /////////
          /////////
        } else if (
          townhall_X - Peasant_Stats.position_X < 0 &&
          townhall_Y - Peasant_Stats.position_Y < 0
        ) {
          /////////
          ///TOP LEFT///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Top_Left;
          new PeasantMoveTopLeft(Peasant_FRAME_X);
          /////////
          ///TOP LEFT////
          /////////
          /////////
        } else if (
          townhall_X - Peasant_Stats.position_X < 0 &&
          townhall_Y - Peasant_Stats.position_Y > 0
        ) {
          /////////
          ///BOTTOM LEFT///
          /////////
          ///////
          Peasant_FRAME_X = Peasant_Bottom_Left;
          new PeasantMoveBottomLeft(Peasant_FRAME_X);
          /////////
          ///BOTTOM LEFT////
          /////////
          /////////
        }
      } else {*/
      townhall_X = canvas_X_Click - townhall_Width / 2;
      townhall_Y = canvas_Y_Click - townhall_Height / 2;

      if (
        townhall_X - Peasant_Stats.position_X == 0 &&
        townhall_Y - Peasant_Stats.position_Y == 0
      ) {
        Construction.play();
        townhall_FRAME_Y = 0;

        build_Time_Townhall++;

        if (build_Time_Townhall <= 200) {
          DrawTownhall(0); //Progessive building frames of townhall
        }
        //
        //BREAK
        //
        //
        else if (200 <= build_Time_Townhall && build_Time_Townhall <= 400) {
          DrawTownhall(1);
        }
        //
        //BREAK
        //
        //
        else if (400 <= build_Time_Townhall && build_Time_Townhall <= 600) {
          DrawTownhall(3);
        }
        //
        //BREAK
        //
        //
        else if (build_Time_Townhall >= 600) {
          built_Finish = true; //~~
          building = false; // ~~
          //Allows for keep to run at the building = true statement function which permanently draws the finished town hall frame
          Peasant_Job_Done.play();
        }
      }
      // }
    }
  }
}

function DrawTownhall(townhall_FRAME_Y) {
  this.townhall_FRAME_Y = townhall_FRAME_Y;

  ctx.drawImage(
    Townhall_Construction,
    townhall_FRAME_X * townhall_Width,
    townhall_FRAME_Y * townhall_Height,
    townhall_Width,
    townhall_Height,
    townhall_X,
    townhall_Y,
    1.4 * townhall_Width,
    1.4 * townhall_Height
  );
}

///////////////////////////////////
////////////////////////////////////
/////CODES TO DEFINE PEASANT RETURNING///
///TO GOLD MINE AUTOMATICALLY/////////
///AFTER LEAVING////////////////////////
//////////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////////

function gold_TownHall() {
  townhall_Canvas_X = townhall_X + townhall_Width / 2;
  townhall_Canvas_Y = townhall_Y + townhall_Height / 2;

  //Check that the townhall is a distance from the peasant

  if (
    townhall_Canvas_Y < Peasant_Stats.position_Y ||
    townhall_Canvas_Y >
      Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height ||
    townhall_Canvas_X < Peasant_Stats.position_X ||
    townhall_Canvas_X >
      Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width
  ) {
    //Prevents glitch where more than one direction movement can run
    if (
      townhall_Canvas_Y >
        Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
      Peasant_Stats.position_X <= townhall_Canvas_X &&
      townhall_Canvas_X <=
        Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width &&
      !(townhall_Canvas_Y < Peasant_Stats.position_Y)
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
      townhall_Canvas_Y < Peasant_Stats.position_Y &&
      Peasant_Stats.position_X <= townhall_Canvas_X &&
      townhall_Canvas_X <=
        Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width &&
      !(
        townhall_Canvas_Y >
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
      townhall_Canvas_X >
        Peasant_Stats.position_X + Peasant_Gold_SCALE * Peasant_Gold_Width &&
      Peasant_Stats.position_Y <= townhall_Canvas_Y &&
      townhall_Canvas_Y <=
        Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
      !(townhall_Canvas_X < Peasant_Stats.position_X)
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
      townhall_Canvas_X < Peasant_Stats.position_X &&
      Peasant_Stats.position_Y <= townhall_Canvas_Y &&
      townhall_Canvas_Y <=
        Peasant_Stats.position_Y + Peasant_Gold_SCALE * Peasant_Gold_Height &&
      !(
        townhall_Canvas_X >
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
      townhall_Canvas_X - Peasant_Stats.position_X > 0 &&
      townhall_Canvas_Y - Peasant_Stats.position_Y < 0
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
      townhall_Canvas_X - Peasant_Stats.position_X > 0 &&
      townhall_Canvas_Y - Peasant_Stats.position_Y > 0
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
      townhall_Canvas_X - Peasant_Stats.position_X < 0 &&
      townhall_Canvas_Y - Peasant_Stats.position_Y < 0
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
      townhall_Canvas_X - Peasant_Stats.position_X < 0 &&
      townhall_Canvas_Y - Peasant_Stats.position_Y > 0
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
    }
  }
}
