var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ogre_Test_Move = false;
clicked_ogre_Test = false;
Ogre_Moving = false;
In_ogre_Test = false;

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

var canvas_X_Click;
var canvas_Y_Click;

let Ogre_Walk_Img = new Image();
Ogre_Walk_Img.src = "Warcraft2 Ogre_Walk_Updated.png ";

canvas.addEventListener("mousedown", mouseDown);

function mouseDown(event) {
  canvas_X_Click = event.offsetX;
  canvas_Y_Click = event.offsetY;
}

//var OgreTest = "Ogre";
//var i = 2;
//var count = 0;
let ogre_Run_Count = 0;

function ogre_var() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // for (i = 1; i <== 2; i++) {

  if (ogre_Run_Count == 0) {
    ogre_Test = new Ogre(200, 200, 4, 0, 0, 6, undefined, undefined);

    if (ogre_Run_Count == 0) {
      ogre_Run_Count++;
    }
  }

  // document.getElementById("count").innerHTML = ogre_Test.Ogre_position_X;

  ogre_Click_Update();
  ogre_Move_Update();
  ogre_Controls();
  // }
  window.requestAnimationFrame(ogre_var);
}

function ogre_Click_Update() {
  if (
    ogre_Test.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= ogre_Test.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    ogre_Test.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= ogre_Test.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_ogre_Test = true;
  } else {
    return;
  }
}

function ogre_Move_Update() {
  if (clicked_ogre_Test) {
    Ogre_Walk = ogre_Test;
    move_Ogre();
    draw_Box_Ogre();
    ogre_Test_Move = true;
    clicked_ogre_Test = false;
  } else {
    return;
  }
}

function ogre_Controls() {
  if (In_ogre_Test) {
    Ogre_Moving = true;

    Ogre_Walk = ogre_Test;
    draw_Box_Ogre();

    In_ogre_Test = false;
    clicked_ogre_Test = true;

    ////
  } else if (ogre_Test_Move) {
    if (Ogre_Moving) {
      ogre_Test.Ogre_Canvas_X = canvas_X_Click;
      ogre_Test.Ogre_Canvas_Y = canvas_Y_Click;
    }

    Ogre_Walk = ogre_Test;
    move_Ogre();
    draw_Box_Ogre();

    /////
  } else {
    ogre_Test.Ogre_FRAME_Y = 0;

    new DrawOgre(
      ogre_Test.Ogre_position_X,
      ogre_Test.Ogre_position_Y,
      ogre_Test.Ogre_FRAME_X,
      ogre_Test.Ogre_FRAME_Y
    );
  }
}

function draw_Box_Ogre() {
  ctx.beginPath(); //So that clearRect() will work to remove the strokeRect()
  ctx.strokeStyle = "#FF33E9"; //DARK PINK
  ctx.strokeRect(
    Ogre_Walk.Ogre_position_X,
    Ogre_Walk.Ogre_position_Y,
    Ogre_SCALE * Ogre_Width,
    Ogre_SCALE * Ogre_Height
  );
}

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
      !(Ogre_Walk.Ogre_Canvas_Y <= Ogre_Walk.Ogre_position_Y)
    ) {
      //////////
      //DOWN///
      //////////
      /////////

      Ogre_Walk.Ogre_FRAME_X = Ogre_Down;

      Ogre_Walk.frame_Count_Ogre++;

      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
      if (Ogre_Walk.frame_Count_Ogre >= Ogre_Walk.frame_Limit_Ogre) {
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
