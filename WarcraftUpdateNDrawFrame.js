function CharacterUpdate(Delta_X, Delta_Y, FRAME_X) {
  this.Delta_X = Delta_X;
  this.Delta_Y = Delta_Y;
  this.FRAME_X = FRAME_X;

  frame_Count++;

  if (frame_Count >= FRAME_LIMIT) {
    if (
      //Controls top side of peasant entering mine (Even though the defining of if statement looks the other way round)
      GOLD_MINE_position_X + GOLD_MINE_Width >=
        Peasant_Stats.position_X + Delta_X &&
      GOLD_MINE_position_Y + GOLD_MINE_Height >=
        Peasant_Stats.position_Y + Delta_Y &&
      Peasant_Stats.position_Y >= GOLD_MINE_position_Y + GOLD_MINE_Width
      //Third boolean statement to make sure that the peasant is directly above the mine before entering
    ) {
      Peasant_Gold_FRAME_X = 2;
      Mining = true;
    } else if (
      //Controls bottom side of peasant entering mine (Even though the defining of if statement looks the other way round)
      GOLD_MINE_position_X + GOLD_MINE_Width >=
        Peasant_Stats.position_X + Delta_X &&
      GOLD_MINE_position_Y <= Peasant_Stats.position_Y + Delta_Y &&
      Peasant_Stats.position_Y <= GOLD_MINE_position_Y + GOLD_MINE_Width
      // Third boolean statement to make sure that the peasant is directly below the mine before entering
    ) {
      Peasant_Gold_FRAME_X = 2;
      Mining = true;
    } else {
      //()moved = true;
      Peasant_Stats.position_X += Delta_X;
      Peasant_Stats.position_Y += Delta_Y;
    }

    frame_Count = 0;

    Peasant_Loop_Index++;
    if (Peasant_Loop_Index >= Peasant_Loop.length) {
      //Controls the Y Frame of character (Sprite animation)
      Peasant_Loop_Index = 0;
    }
  }

  new DrawFrame(
    Peasant_Stats.position_X,
    Peasant_Stats.position_Y,
    FRAME_X,
    Peasant_Loop[Peasant_Loop_Index]
  );
}

function DrawFrame(
  Peasant_Stats_position_X,
  Peasant_Stats_position_Y,
  Peasant_FRAME_X,
  Peasant_FRAME_Y
) {
  this.Peasant_Stats_position_X = Peasant_Stats_position_X;
  this.Peasant_Stats_position_Y = Peasant_Stats_position_Y;
  this.Peasant_FRAME_X = Peasant_FRAME_X;
  this.Peasant_FRAME_Y = Peasant_FRAME_Y;

  ctx.beginPath(); //So that clearRect() will work to remove the strokeRect()
  ctx.strokeStyle = box_Colour_stationary;
  ctx.rect(
    Peasant_Stats_position_X,
    Peasant_Stats_position_Y,
    Peasant_Stats.SCALE * Peasant_Stats.Width,
    Peasant_Stats.SCALE * Peasant_Stats.Height
  );
  ctx.stroke();

  ctx.drawImage(
    Peasant_Walk,
    Peasant_FRAME_X * Peasant_Stats.Width,
    Peasant_FRAME_Y * Peasant_Stats.Height,
    Peasant_Stats.Width,
    Peasant_Stats.Height,
    Peasant_Stats_position_X,
    Peasant_Stats_position_Y,
    Peasant_Stats.SCALE * Peasant_Stats.Width,
    Peasant_Stats.SCALE * Peasant_Stats.Height
  );

  window.requestAnimationFrame(startGame);
}
