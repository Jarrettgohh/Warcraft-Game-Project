//let canvas = document.getElementById("myCanvas");
//let ctx = canvas.getContext("2d");

let Warcraftmap = new Image();
Warcraftmap.src =
  "https://linuxaria.com/wp-content/uploads/2012/10/Dawn-2011-01-30.jpeg";
let peasant = new Image();
peasant.src = "Warcraft2 Peasant_Walk_Final_Updated.png";

let frame_Count = 0;
let frame_Limit = 12;
let frame_Y = 0;

let viewPort_X = 0;
let viewPort_Y = 0;
let viewPort_W = 400;
let viewPort_H = 400;

let viewPort_X_min = viewPort_X;
let viewPort_Y_min = viewPort_Y;
let viewPort_X_max = viewPort_X + viewPort_W;
let viewPort_Y_max = viewPort_Y + viewPort_H;

function testScroll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // viewPort_X++;
  viewPort_X_min++;

  // for (X_min = viewPort_X_min; X_min < viewPort_X_max; X_min++) {
  ///
  ///
  //for (Y_min = viewPort_Y_min; Y_min < viewPort_Y_max; Y_min++) {
  ////

  let tile_X = viewPort_X_max - viewPort_X_min;
  let tile_Y = viewPort_Y_min;

  ctx.drawImage(Warcraftmap, 0, 0, 400, 400, tile_X, tile_Y, 400, 400);

  frame_Count++;

  if (frame_Count >= frame_Limit) {
    frame_Y++;
    frame_Count = 0;

    if (frame_Y == 4) {
      frame_Y = 0;
    }
  }
  // }
  ctx.drawImage(
    peasant,
    2 * 36.9,
    frame_Y * 37.8,
    36.9,
    37.8,
    40,
    200,
    1.6 * 36.9,
    1.6 * 37.8
  );

  //}

  window.requestAnimationFrame(testScroll);
}
