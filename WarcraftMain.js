function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  canvas.addEventListener("mousedown", mouseDown); //Line 54

  canvas.addEventListener("dblclick", double_Click); //Building = true; //Line 81

  canvas.addEventListener("dragstart", drag_Start);

  //canvas.addEventListener("mousemove", mouse_Move);

  if (built_Finish) {
    canvas.removeEventListener("dblclick", double_Click);
  }

  window.addEventListener("keydown", start_Music); //Line 92

  //updateCanvas();

  ctx.drawImage(
    //Redraw map to make peasant center of screen always, screen moves too.
    WarcraftMap,
    0,
    0,
    1627,
    913,
    0 + delta_Map_X,
    0 + delta_Map_Y,
    1627,
    913
  );

  Peasant_Controls(); //Which functions placed on top (read first), means which image is drawn first and indicates which image appear nearer to the screen (Bottom codes read last nearer to screen)

  //ogre_var();
  // ogre_Click_Update();
  // ogre_Move_Update();
  // ogre_Controls();

  gold_Mine(); //No need put window.requestAnimationFrame at the peasant_After_Mining() function since gameControls() alr called

  ctx.drawImage(LargeTree, 0, 0); //Tree will cover the peasant images

  //build_Townhall();

  /* ctx.drawImage( //TEST TOWNHALL IF DW KEEP REBUILD WHEN RUN CODE
    Townhall_Construction,
    0,
    251,
    144,
    125.5,
    800,
    1200,
    1.4 * 144,
    1.4 * 125.5
  );*/
}

function mouseDown(event) {
  canvas_X_Click = event.offsetX;
  canvas_Y_Click = event.offsetY;

  clicked = true;

  if (
    GOLD_MINE_position_Y <= canvas_Y_Click &&
    canvas_Y_Click <=
      GOLD_MINE_position_Y + GOLD_MINE_SCALE * GOLD_MINE_Height &&
    GOLD_MINE_position_X <= canvas_X_Click &&
    canvas_X_Click <= GOLD_MINE_position_X + GOLD_MINE_SCALE * GOLD_MINE_Width
  ) {
    ctx.beginPath();
    ctx.strokeStyle = "red"; //IDK WHY NOT APPEARING HMM
    ctx.rect(
      GOLD_MINE_position_X,
      GOLD_MINE_position_Y,
      GOLD_MINE_SCALE * GOLD_MINE_Width,
      GOLD_MINE_SCALE * GOLD_MINE_Height
    );
    ctx.stroke();

    GoldMine_Sound.volume = 0.2;
    GoldMine_Sound.play();
  }
}

function double_Click() {
  building = true;
}

function drag_Start(event) {
  // alert("helllo");
  drag_X = event.offsetX;
  drag_Y = event.offsetY;

  document.getElementById("drag").innerHTML = drag_X + "," + drag_Y;
}

function start_Music(event) {
  keyPresses[event.key] = true;

  if (keyPresses.a) {
    Sound_Track_10mins.volume = 0.2;
    Sound_Track_10mins.play();
  }
  //
  //
  //
  //
  else if (keyPresses.b) {
    Sound_Track_10mins_part2.volume = 0.2;
    Sound_Track_10mins_part2.play();
  }
  //
  //
  //
  //
  else if (keyPresses.c) {
    Sound_Track_10mins_part3.volume = 0.2;
    Sound_Track_10mins_part3.play();
  }
  //
  //
  //
  //
  else if (keyPresses.d) {
    Sound_Track_10mins_part4.volume = 0.2;
    Sound_Track_10mins_part4.play();
  }
}

function mouse_Move(event) {
  mouse_X = event.offsetX;
  mouse_Y = event.offsetY;

  document.getElementById("count").innerHTML = mouse_X + "," + mouse_Y;
}
/*function updateCanvas() {
  /* if (moved) {
    let new_Peasant_Position_X = Peasant_Stats.position_X;
    let new_Peasant_Position_Y = Peasant_Stats.position_Y;

    let delta_Position_X = 0;
    let delta_Position_Y = 0;

    delta_Position_X = new_Peasant_Position_X - initial_position_X;
    delta_Position_Y = new_Peasant_Position_Y - initial_position_Y;

    //Map change with increase in "Movement_Speed" of peasant
    if (delta_Position_X > 0) {
      delta_Map_X = Movement_Speed_X;
    }
    if (delta_Position_Y > 0) {
      delta_Map_Y = Movement_Speed_Y;
    }

    if (delta_Position_X < 0) {
      delta_Map_X = -Movement_Speed_X;
    }
    if (delta_Position_Y < 0) {
      delta_Map_Y = -Movement_Speed_Y;
    }

    initial_position_X = Peasant_Stats.position_X;
    initial_position_Y = Peasant_Stats.position_Y;

    moved = false;
  }*/
