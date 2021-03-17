function ogre_Controls() {
  //////////////
  /////////////
  /////////////
  /////OGRE~1//////
  ////////////////
  //////////////

  if (In_Ogre1) {
    //To allow multiple Ogre variable to run the same function (Same for all the other Ogres)

    Ogre1_Moving = true;

    Ogre_Walk = Ogre1;
    draw_Box_Ogre();

    In_Ogre1 = false;
    clicked_Ogre1 = true;

    /* Ogre1.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre1.Ogre_position_X,
      Ogre1.Ogre_position_Y,
      Ogre1.Ogre_FRAME_X,
      Ogre1.Ogre_FRAME_Y
    );*/

    ////
  } else if (Ogre1_Move) {
    count++;
    if (Ogre1_Moving) {
      // Ogre_Ok_YesMaster_Sound.volume = 0.4;
      // Ogre_Ok_YesMaster_Sound.play();

      Ogre1.Ogre_Canvas_X = canvas_X_Click;
      Ogre1.Ogre_Canvas_Y = canvas_Y_Click;
    }
    //   if (
    // Ogre1.Ogre_position_X == Ogre1.Ogre_Canvas_X &&
    //  Ogre1.Ogre_position_Y == Ogre1.Ogre_Canvas_Y
    //) {
    // Ogre1_Moving = 1;
    //}

    //Ogre1_Moving = false;
    //Ogre1_Click_move_();

    Ogre_Walk = Ogre1;
    move_Ogre();
    draw_Box_Ogre();

    /////
  } else {
    Ogre1.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre1.Ogre_position_X,
      Ogre1.Ogre_position_Y,
      Ogre1.Ogre_FRAME_X,
      Ogre1.Ogre_FRAME_Y
    );
  }

  ////////
  /////////
  ////OGRE2////
  ////////
  ///////
  ///////
  /////

  if (In_Ogre2) {
    Ogre2_Moving = true;

    Ogre_Walk = Ogre2;
    draw_Box_Ogre();

    //Ogre2_Move = true;
    In_Ogre2 = false;
    clicked_Ogre2 = true;

    /*Ogre2.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre2.Ogre_position_X,
      Ogre2.Ogre_position_Y,
      Ogre2.Ogre_FRAME_X,
      Ogre2.Ogre_FRAME_Y
    );*/

    ////
  } else if (Ogre2_Move) {
    if (Ogre2_Moving) {
      Ogre2.Ogre_Canvas_X = canvas_X_Click;
      Ogre2.Ogre_Canvas_Y = canvas_Y_Click;
    }
    //  if (
    //  Ogre2_Ogre_position_X == Ogre2.Ogre_Canvas_X &&
    //  Ogre2_Ogre_Position_Y == Ogre2.Ogre_Canvas_Y
    //  ) {
    //  Ogre2_Moving = 1;
    //  }
    //Ogre2_Moving = false;
    //Ogre2_Click_move_();

    Ogre_Walk = Ogre2;
    move_Ogre();
    draw_Box_Ogre();

    /////
  } else {
    Ogre2.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre2.Ogre_position_X,
      Ogre2.Ogre_position_Y,
      Ogre2.Ogre_FRAME_X,
      Ogre2.Ogre_FRAME_Y
    );
  }

  ////////
  ////////
  /////////
  ////OGRE~3////
  ////////
  ///////
  ///////
  /////

  if (In_Ogre3) {
    Ogre3_Moving = true;
    Ogre_Walk = Ogre3;
    draw_Box_Ogre();

    clicked_Ogre3 = true;
    In_Ogre3 = false;
    ////
  } else if (Ogre3_Move) {
    if (Ogre3_Moving) {
      Ogre3.Ogre_Canvas_X = canvas_X_Click;
      Ogre3.Ogre_Canvas_Y = canvas_Y_Click;
    }
    //Ogre3_Moving = false;

    Ogre_Walk = Ogre3;
    move_Ogre();
    draw_Box_Ogre();
    /////
  } else {
    Ogre3.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre3.Ogre_position_X,
      Ogre3.Ogre_position_Y,
      Ogre3.Ogre_FRAME_X,
      Ogre3.Ogre_FRAME_Y
    );
  }

  ////////
  ////////
  /////////
  ////OGRE ~ 4 ///
  ////////
  ///////
  ///////
  /////

  if (In_Ogre4) {
    Ogre4_Moving = true;
    Ogre_Walk = Ogre4;
    draw_Box_Ogre();

    clicked_Ogre4 = true;
    In_Ogre4 = false;
    ////
  } else if (Ogre4_Move) {
    if (Ogre4_Moving) {
      Ogre4.Ogre_Canvas_X = canvas_X_Click;
      Ogre4.Ogre_Canvas_Y = canvas_Y_Click;
    }
    //Ogre4_Moving = false;

    Ogre_Walk = Ogre4;
    move_Ogre();
    draw_Box_Ogre();
    /////
  } else {
    Ogre4.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre4.Ogre_position_X,
      Ogre4.Ogre_position_Y,
      Ogre4.Ogre_FRAME_X,
      Ogre4.Ogre_FRAME_Y
    );
  }

  ////////
  ////////
  /////////
  ////OGRE ~ 5////
  ////////
  ///////
  ///////
  /////

  if (In_Ogre5) {
    Ogre5_Moving = true;
    Ogre_Walk = Ogre5;
    draw_Box_Ogre();

    clicked_Ogre5 = true;
    In_Ogre5 = false;
    ////
  } else if (Ogre5_Move) {
    if (Ogre5_Moving) {
      Ogre5.Ogre_Canvas_X = canvas_X_Click;
      Ogre5.Ogre_Canvas_Y = canvas_Y_Click;
    }
    // Ogre5_Moving = false;

    Ogre_Walk = Ogre5;
    move_Ogre();
    draw_Box_Ogre();
    /////
  } else {
    Ogre5.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre5.Ogre_position_X,
      Ogre5.Ogre_position_Y,
      Ogre5.Ogre_FRAME_X,
      Ogre5.Ogre_FRAME_Y
    );
  }

  ////////
  ////////
  /////////
  ////OGRE ~ 6 ////
  ////////
  ///////
  ///////
  /////

  if (In_Ogre6) {
    Ogre6_Moving = true;
    Ogre_Walk = Ogre6;
    draw_Box_Ogre();

    clicked_Ogre6 = true;
    In_Ogre6 = false;
    ////
  } else if (Ogre6_Move) {
    if (Ogre6_Moving) {
      Ogre6.Ogre_Canvas_X = canvas_X_Click;
      Ogre6.Ogre_Canvas_Y = canvas_Y_Click;
    }
    // Ogre6_Moving = false;

    Ogre_Walk = Ogre6;
    move_Ogre();
    draw_Box_Ogre();
    /////
  } else {
    Ogre6.Ogre_FRAME_Y = 0;

    new DrawOgre(
      Ogre6.Ogre_position_X,
      Ogre6.Ogre_position_Y,
      Ogre6.Ogre_FRAME_X,
      Ogre6.Ogre_FRAME_Y
    );
  }
}

/*function ogre_Stationary() {
  //So that Ogre will have neutral stance when stationary(Same for all the other Ogres)
  new DrawOgre(
    Ogre2.Ogre_position_X,
    Ogre2.Ogre_position_Y,
    Ogre2.Ogre_FRAME_X,
    Ogre2.Ogre_FRAME_Y
  );
}*/

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

/*function ogre_Outside() {
  if (
    (clicked_Ogre1 && canvas_Y_Click < Ogre1.Ogre_position_Y) ||
    canvas_Y_Click > Ogre1.Ogre_position_Y + Ogre_SCALE * Ogre_Height ||
    canvas_X_Click < Ogre1.Ogre_position_X ||
    canvas_X_Click > Ogre1.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    Ogre1_Move = true;
    clicked_Ogre1 = false;
  }
  if (
    (clicked_Ogre2 && canvas_Y_Click < Ogre2.Ogre_position_Y) ||
    canvas_Y_Click > Ogre2.Ogre_position_Y + Ogre_SCALE * Ogre_Height ||
    canvas_X_Click < Ogre2.Ogre_position_X ||
    canvas_X_Click > Ogre2.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    Ogre2_Move = true;
    clicked_Ogre2 = false;
  } else {
    return;
  }
}*/
