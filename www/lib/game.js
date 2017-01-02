/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 11:42
 */
class Game {

  constructor(stage) {
    this.stage = stage;

    this.world = new World(RENDER_WIDTH, RENDER_HEIGHT);
    this.world.createEnv(stage);
  }


}