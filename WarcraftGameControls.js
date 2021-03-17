function Peasant_Controls() {
  if (clicked && !building && !Mining) {
    //MAKE USE OF removeEventListener(); and mouseUp to reset onlclick event
    if (
      Peasant_Stats.position_Y <= canvas_Y_Click &&
      canvas_Y_Click <=
        Peasant_Stats.position_Y + Peasant_Stats.SCALE * Peasant_Stats.Height &&
      Peasant_Stats.position_X <= canvas_X_Click &&
      canvas_X_Click <=
        Peasant_Stats.position_X + Peasant_Stats.SCALE * Peasant_Stats.Width
    ) {
      //drawIcons();

      peasant_Ready = true; //Indicated peasant is selected

      Annoyed = true;

      if (Annoyed) {
        //Peasant_Annoyed.play();
        Annoyed = false;
      }

      new DrawFrame( //Controls the motion of peasant when not moving after initial click
        Peasant_Stats.position_X,
        Peasant_Stats.position_Y,
        Peasant_FRAME_X,
        Peasant_FRAME_Y
      );
      ctx.beginPath(); //So that clearRect() will work to remove the strokeRect()
      ctx.strokeStyle = box_Colour;
      ctx.rect(
        Peasant_Stats.position_X, //10
        Peasant_Stats.position_Y, //8
        Peasant_Stats.SCALE * Peasant_Stats.Width, //14
        Peasant_Stats.SCALE * Peasant_Stats.Height //10
      );
      ctx.stroke();
    } else {
      if (peasant_Ready) {
        // Check if peasant alr selected

        if (
          canvas_Y_Click < Peasant_Stats.position_Y ||
          canvas_Y_Click >
            Peasant_Stats.position_Y +
              Peasant_Stats.SCALE * Peasant_Stats.Height ||
          canvas_X_Click < Peasant_Stats.position_X ||
          canvas_X_Click >
            Peasant_Stats.position_X + Peasant_Stats.SCALE * Peasant_Stats.Width

          //Prevent multiple direction movements which cause it to crash
        ) {
          if (
            canvas_Y_Click >
              Peasant_Stats.position_Y +
                Peasant_Stats.SCALE * Peasant_Stats.Height &&
            Peasant_Stats.position_X <= canvas_X_Click &&
            canvas_X_Click <=
              Peasant_Stats.position_X +
                Peasant_Stats.SCALE * Peasant_Stats.Width &&
            !(canvas_Y_Click < Peasant_Stats.position_Y)
          ) {
            //////////
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
            canvas_Y_Click < Peasant_Stats.position_Y &&
            Peasant_Stats.position_X <= canvas_X_Click &&
            canvas_X_Click <=
              Peasant_Stats.position_X +
                Peasant_Stats.SCALE * Peasant_Stats.Width &&
            !(
              canvas_Y_Click >
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
            canvas_X_Click >
              Peasant_Stats.position_X +
                Peasant_Stats.SCALE * Peasant_Stats.Width &&
            Peasant_Stats.position_Y <= canvas_Y_Click &&
            canvas_Y_Click <=
              Peasant_Stats.position_Y +
                Peasant_Stats.SCALE * Peasant_Stats.Height &&
            !(canvas_X_Click < Peasant_Stats.position_X)
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
            canvas_X_Click < Peasant_Stats.position_X &&
            Peasant_Stats.position_Y <= canvas_Y_Click &&
            canvas_Y_Click <=
              Peasant_Stats.position_Y +
                Peasant_Stats.SCALE * Peasant_Stats.Height &&
            !(
              canvas_X_Click >
              Peasant_Stats.position_X +
                Peasant_Stats.SCALE * Peasant_Stats.Width
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
            canvas_X_Click - Peasant_Stats.position_X > 0 &&
            canvas_Y_Click - Peasant_Stats.position_Y < 0
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
            canvas_X_Click - Peasant_Stats.position_X > 0 &&
            canvas_Y_Click - Peasant_Stats.position_Y > 0
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
            canvas_X_Click - Peasant_Stats.position_X < 0 &&
            canvas_Y_Click - Peasant_Stats.position_Y < 0
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
            canvas_X_Click - Peasant_Stats.position_X < 0 &&
            canvas_Y_Click - Peasant_Stats.position_Y > 0
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
          } else {
            new DrawFrame( //Controls motion of peasant when stopped after moving
              Peasant_Stats.position_X,
              Peasant_Stats.position_Y,
              Peasant_FRAME_X,
              Peasant_FRAME_Y
            );
          }
        }
      } else {
        //Controls motion of peasant after clicking on screen but peasant not selected(stationary)
        ctx.drawImage(
          //Nvr call DrawFrame so that box won't light up
          Peasant_Walk,
          Peasant_FRAME_X * Peasant_Stats.Width,
          Peasant_FRAME_Y * Peasant_Stats.Height,
          Peasant_Stats.Width,
          Peasant_Stats.Height,
          Peasant_Stats.position_X,
          Peasant_Stats.position_Y,
          Peasant_Stats.SCALE * Peasant_Stats.Width,
          Peasant_Stats.SCALE * Peasant_Stats.Height
        );
        window.requestAnimationFrame(startGame);
      }
    }
  } else if (!building && !Mining) {
    //Controls the motion of peasant when canvas on load and not clicked
    Peasant_FRAME_X = 4;
    Peasant_FRAME_Y = 0;

    ctx.drawImage(
      Peasant_Walk,
      Peasant_FRAME_X * Peasant_Stats.Width,
      Peasant_FRAME_Y * Peasant_Stats.Height,
      Peasant_Stats.Width,
      Peasant_Stats.Height,
      Peasant_Stats.position_X,
      Peasant_Stats.position_Y,
      Peasant_Stats.SCALE * Peasant_Stats.Width,
      Peasant_Stats.SCALE * Peasant_Stats.Height
    );
    window.requestAnimationFrame(startGame);
  } else {
    window.requestAnimationFrame(startGame);
  }
}
