let Ogre_Width = 74.1;
let Ogre_Height = 75.2;
let Ogre_Speed_X = 16;
let Ogre_Speed_Y = 16;

let Ogre_Up = 0;
let Ogre_Down = 4;
let Ogre_Right = 2;
let Ogre_Left = 6;
let Ogre_Top_Right = 1;
let Ogre_Bottom_Right = 3;
let Ogre_Top_Left = 7;
let Ogre_Bottom_Left = 5;

let Ogre_SCALE = 1.4;
let Ogre_Max_FRAME_Y = 5;

/*Ogre1 = new Ogre(200, 200, 4, 0, 0, 6, undefined, undefined);
Ogre2 = new Ogre(300, 300, 4, 0, 0, 6, undefined, undefined);
Ogre3 = new Ogre(400, 400, 4, 0, 0, 6, undefined, undefined);
Ogre4 = new Ogre(500, 500, 4, 0, 0, 6, undefined, undefined);
Ogre5 = new Ogre(600, 600, 4, 0, 0, 6, undefined, undefined);
Ogre6 = new Ogre(700, 700, 4, 0, 0, 6, undefined, undefined);*/

let Ogre_Walk_Img = new Image(); //Not named as Ogre_Walk so to not complicate it with the other variable used in updateOgre() function.
Ogre_Walk_Img.src = "Warcraft2 Ogre_Walk_Updated.png "; // 593 x 376

function Ogre(
  Ogre_position_X,
  Ogre_position_Y,
  Ogre_FRAME_X,
  Ogre_FRAME_Y,
  frame_Count_Ogre,
  frame_Limit_Ogre,
  Ogre_Canvas_X,
  Ogre_Canvas_Y
) {
  this.Ogre_position_X = Ogre_position_X;
  this.Ogre_position_Y = Ogre_position_Y;
  this.Ogre_FRAME_X = Ogre_FRAME_X;
  this.Ogre_FRAME_Y = Ogre_FRAME_Y;
  this.frame_Count_Ogre = frame_Count_Ogre;
  this.frame_Limit_Ogre = frame_Limit_Ogre;
  this.Ogre_Canvas_X = Ogre_Canvas_X;
  this.Ogre_Canvas_Y = Ogre_Canvas_Y;
}

function move_Ogre() {
  if (
    //Prevent multiple direction movements which cause it to crash
    Ogre_Walk.Ogre_Canvas_Y < Ogre_Walk.Ogre_position_Y ||
    Ogre_Walk.Ogre_Canvas_Y >
      Ogre_Walk.Ogre_position_Y + Ogre_SCALE * Ogre_Height ||
    Ogre_Walk.Ogre_Canvas_X < Ogre_Walk.Ogre_position_X ||
    Ogre_Walk.Ogre_Canvas_X >
      Ogre_Walk.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    if (
      Ogre_Walk.Ogre_Canvas_Y >
        Ogre_Walk.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
      Ogre_Walk.Ogre_position_X < Ogre_Walk.Ogre_Canvas_X &&
      Ogre_Walk.Ogre_Canvas_X <
        Ogre_Walk.Ogre_position_X + Ogre_SCALE * Ogre_Width &&
      !(Ogre_Walk.Ogre_Canvas_Y < Ogre_Walk.Ogre_position_Y)
    ) {
      //////////
      //DOWN///
      //////////
      /////////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Down;

      Ogre_Walk.frame_Count_Ogre++;

      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_FRAME_Y++;
        Ogre_Walk.Ogre_position_Y += Ogre_Speed_Y;

        Ogre_Walk.frame_Count_Ogre = 0;

        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      ////////
      //DOWN///
      ////////
      ///////
    } else if (
      Ogre_Walk.Ogre_Canvas_Y < Ogre_Walk.Ogre_position_Y &&
      Ogre_Walk.Ogre_position_X < Ogre_Walk.Ogre_Canvas_X &&
      Ogre_Walk.Ogre_Canvas_X <
        Ogre_Walk.Ogre_position_X + Ogre_SCALE * Ogre_Width &&
      !(
        Ogre_Walk.Ogre_Canvas_Y >
        Ogre_Walk.Ogre_position_Y + Ogre_SCALE * Ogre_Height
      )
    ) {
      /////////
      ////UP///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Up;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_position_Y -= Ogre_Speed_Y;
        Ogre_Walk.Ogre_FRAME_Y++;

        Ogre_Walk.frame_Count_Ogre = 0;

        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///UP////
      /////////
      /////////
    } else if (
      Ogre_Walk.Ogre_Canvas_X >
        Ogre_Walk.Ogre_position_X + Ogre_SCALE * Ogre_Width &&
      Ogre_Walk.Ogre_position_Y < Ogre_Walk.Ogre_Canvas_Y &&
      Ogre_Walk.Ogre_Canvas_Y <
        Ogre_Walk.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
      !(Ogre_Walk.Ogre_Canvas_X < Ogre_Walk.Ogre_position_X)
    ) {
      /////////
      ///RIGHT///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Right;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_FRAME_Y++;
        Ogre_Walk.Ogre_position_X += Ogre_Speed_X;

        Ogre_Walk.frame_Count_Ogre = 0;
        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///RIGHT////
      /////////
      /////////
    } else if (
      Ogre_Walk.Ogre_Canvas_X < Ogre_Walk.Ogre_position_X &&
      Ogre_Walk.Ogre_position_Y < Ogre_Walk.Ogre_Canvas_Y &&
      Ogre_Walk.Ogre_Canvas_Y <
        Ogre_Walk.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
      !(
        Ogre_Walk.Ogre_Canvas_X >
        Ogre_Walk.Ogre_position_X + Ogre_SCALE * Ogre_Width
      )
    ) {
      /////////
      ///LEFT///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Left;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_position_X -= Ogre_Speed_X;
        Ogre_Walk.Ogre_FRAME_Y++;

        Ogre_Walk.frame_Count_Ogre = 0;

        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///LEFT////
      /////////
      /////////
    } else if (
      Ogre_Walk.Ogre_Canvas_X - Ogre_Walk.Ogre_position_X > 0 &&
      Ogre_Walk.Ogre_Canvas_Y - Ogre_Walk.Ogre_position_Y < 0
    ) {
      /////////
      ///TOP RIGHT///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Top_Right;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_position_X += Ogre_Speed_X;
        Ogre_Walk.Ogre_position_Y -= Ogre_Speed_Y;
        Ogre_Walk.Ogre_FRAME_Y++;

        Ogre_Walk.frame_Count_Ogre = 0;

        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///TOP RIGHT////
      /////////
      /////////
    } else if (
      Ogre_Walk.Ogre_Canvas_X - Ogre_Walk.Ogre_position_X > 0 &&
      Ogre_Walk.Ogre_Canvas_Y - Ogre_Walk.Ogre_position_Y > 0
    ) {
      /////////
      ///BOTTOM RIGHT///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Bottom_Right;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_position_X += Ogre_Speed_X;
        Ogre_Walk.Ogre_position_Y += Ogre_Speed_Y;
        Ogre_Walk.Ogre_FRAME_Y++;

        Ogre_Walk.frame_Count_Ogre = 0;
        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///BOTTOM RIGHT////
      /////////
      /////////
    } else if (
      Ogre_Walk.Ogre_Canvas_X - Ogre_Walk.Ogre_position_X < 0 &&
      Ogre_Walk.Ogre_Canvas_Y - Ogre_Walk.Ogre_position_Y < 0
    ) {
      /////////
      ///TOP LEFT///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Top_Left;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_position_X -= Ogre_Speed_X;
        Ogre_Walk.Ogre_position_Y -= Ogre_Speed_Y;
        Ogre_Walk.Ogre_FRAME_Y++;

        Ogre_Walk.frame_Count_Ogre = 0;
        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///TOP LEFT////
      /////////
      /////////
    } else if (
      Ogre_Walk.Ogre_Canvas_X - Ogre_Walk.Ogre_position_X < 0 &&
      Ogre_Walk.Ogre_Canvas_Y - Ogre_Walk.Ogre_position_Y > 0
    ) {
      /////////
      ///BOTTOM LEFT///
      /////////
      ///////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Bottom_Left;

      Ogre_Walk.frame_Count_Ogre++;
      if (Ogre_Walk.frame_Count_Ogre > Ogre_Walk.frame_Limit_Ogre) {
        Ogre_Walk.Ogre_position_X -= Ogre_Speed_X;
        Ogre_Walk.Ogre_position_Y += Ogre_Speed_Y;
        Ogre_Walk.Ogre_FRAME_Y++;

        Ogre_Walk.frame_Count_Ogre = 0;

        if (Ogre_Walk.Ogre_FRAME_Y == Ogre_Max_FRAME_Y) {
          Ogre_Walk.Ogre_FRAME_Y = 0;
        }
      }

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
      /////////
      ///BOTTOM LEFT////
      /////////
      /////////
    } else {
      //Controls motion of Ogre when stopped after inital moving

      Ogre_Walk.Ogre_FRAME_Y = 0;

      new DrawOgre(
        Ogre_Walk.Ogre_position_X,
        Ogre_Walk.Ogre_position_Y,
        Ogre_Walk.Ogre_FRAME_X,
        Ogre_Walk.Ogre_FRAME_Y
      );
    }
  } else {
    //Controls motion of Ogre after clicking on screen but Ogre not selected(stationary)

    Ogre_Walk.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre_Walk.Ogre_position_X,
      Ogre_Walk.Ogre_position_Y,
      Ogre_Walk.Ogre_FRAME_X,
      Ogre_Walk.Ogre_FRAME_Y
    );
  }
}

function DrawOgre(Ogre_Walk_X, Ogre_Walk_Y, Ogre_Frame_X, Ogre_Frame_Y) {
  this.Ogre_Walk_X = Ogre_Walk_X;
  this.Ogre_Walk_Y = Ogre_Walk_Y;
  this.Ogre_Frame_X = Ogre_Frame_X;
  this.Ogre_Frame_Y = Ogre_Frame_Y;

  ctx.drawImage(
    Ogre_Walk_Img,
    Ogre_Frame_X * Ogre_Width,
    Ogre_Frame_Y * Ogre_Height,
    Ogre_Width,
    Ogre_Height,
    Ogre_Walk_X,
    Ogre_Walk_Y,
    Ogre_SCALE * Ogre_Width,
    Ogre_SCALE * Ogre_Height
  );
}
