function ogre_Move_Update() {
  //////////
  /////OGRE 1
  //////////
  ////
  if (clicked_Ogre1) {
    Ogre_Walk = Ogre1;
    move_Ogre();
    draw_Box_Ogre();
    Ogre1_Move = true;
    clicked_Ogre1 = false;
  }
  /////////
  ///OGRE 2
  ///////
  ///
  if (clicked_Ogre2) {
    Ogre_Walk = Ogre2;
    move_Ogre();
    draw_Box_Ogre();
    Ogre2_Move = true;
    clicked_Ogre2 = false;
  }
  ////////
  //////////
  /////OGRE 3
  ///////////

  if (clicked_Ogre3) {
    Ogre_Walk = Ogre3;
    move_Ogre();
    draw_Box_Ogre();
    Ogre3_Move = true;
    clicked_Ogre3 = false;
  }

  ////////
  //////////
  /////OGRE 4
  ///////////

  if (clicked_Ogre4) {
    Ogre_Walk = Ogre4;
    move_Ogre();
    draw_Box_Ogre();
    Ogre4_Move = true;
    clicked_Ogre4 = false;
  }

  ////////
  //////////
  /////OGRE 5
  ///////////

  if (clicked_Ogre5) {
    Ogre_Walk = Ogre5;
    move_Ogre();
    draw_Box_Ogre();
    Ogre5_Move = true;
    clicked_Ogre5 = false;
  }

  ////////
  //////////
  /////OGRE 6
  ///////////

  if (clicked_Ogre6) {
    Ogre_Walk = Ogre6;
    move_Ogre();
    draw_Box_Ogre();
    Ogre6_Move = true;
    clicked_Ogre6 = false;
  } else {
    return;
  }
}
