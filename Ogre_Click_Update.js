//So that canvas_X_Click and canvas_Y_Click is defined before onclick event
var canvas_X_Click;
var canvas_Y_Click;

function ogre_Click_Update() {
  /////////////
  /////////////
  ///OGRE ~ 1//
  ///////////
  //////////
  if (
    Ogre1.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= Ogre1.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    Ogre1.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= Ogre1.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_Ogre1 = true;

    Ogre2_Moving = false;
    Ogre3_Moving = false;
    Ogre4_Moving = false;
    Ogre5_Moving = false;
    Ogre6_Moving = false;
  }
  /////////////
  /////////////
  ///OGRE ~ 2//
  ///////////
  //////////
  if (
    Ogre2.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= Ogre2.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    Ogre2.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= Ogre2.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_Ogre2 = true;

    Ogre1_Moving = false;
    Ogre3_Moving = false;
    Ogre4_Moving = false;
    Ogre5_Moving = false;
    Ogre6_Moving = false;
  }
  /////////////
  /////////////
  ///OGRE ~ 3//
  ///////////
  //////////
  if (
    Ogre3.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= Ogre3.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    Ogre3.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= Ogre3.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_Ogre3 = true;

    Ogre1_Moving = false;
    Ogre2_Moving = false;
    Ogre4_Moving = false;
    Ogre5_Moving = false;
    Ogre6_Moving = false;
  }
  /////////////
  /////////////
  ///OGRE ~ 4//
  ///////////
  //////////
  if (
    Ogre4.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= Ogre4.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    Ogre4.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= Ogre4.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_Ogre4 = true;

    Ogre1_Moving = false;
    Ogre2_Moving = false;
    Ogre3_Moving = false;
    Ogre5_Moving = false;
    Ogre6_Moving = false;
  }
  /////////////
  /////////////
  ///OGRE ~ 5//
  ///////////
  //////////
  if (
    Ogre5.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= Ogre5.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    Ogre5.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= Ogre5.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_Ogre5 = true;

    Ogre1_Moving = false;
    Ogre2_Moving = false;
    Ogre3_Moving = false;
    Ogre4_Moving = false;
    Ogre6_Moving = false;
  }
  /////////////
  /////////////
  ///OGRE ~ 6//
  ///////////
  //////////
  if (
    Ogre6.Ogre_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <= Ogre6.Ogre_position_Y + Ogre_SCALE * Ogre_Height &&
    Ogre6.Ogre_position_X <= canvas_X_Click &&
    canvas_X_Click <= Ogre6.Ogre_position_X + Ogre_SCALE * Ogre_Width
  ) {
    In_Ogre6 = true;

    Ogre1_Moving = false;
    Ogre2_Moving = false;
    Ogre3_Moving = false;
    Ogre4_Moving = false;
    Ogre5_Moving = false;
  } else {
    return;
  }
}
