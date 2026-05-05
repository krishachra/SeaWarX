import React from "react";

const HowToPlay = () => {
  return (
    <div className="howtoplay-container">
      <h1>How to Play SeaWarX</h1>

      <p>
        SeaWarX is a strategic naval battle game where you compete against a computer
        opponent on a grid-based battlefield. The objective is simple: locate and destroy
        all enemy ships before your own fleet is eliminated.
      </p>

      <h2>Game Setup</h2>

      <p>
        At the beginning of the game, two grids are created — one for you and one for the
        computer. Each player has a fleet of five ships. You can place your ships anywhere
        on your grid in positions of your choice. These ship positions remain hidden from
        the computer.
      </p>

      <p>
        At the same time, the computer automatically places its own ships randomly on its
        grid. These positions are also hidden from you, creating an element of uncertainty
        and strategy.
      </p>

      <h2>Gameplay</h2>

      <p>
        Once both sides have placed their ships, the battle begins. You start by selecting
        a cell on the computer’s grid to launch an attack.
      </p>

      <p>
        If your attack hits a location where a ship is placed, it is marked as a successful
        hit and indicated with a fire symbol. Your score increases accordingly. If the
        selected cell does not contain a ship, it is marked as a miss and displayed with a
        cross symbol.
      </p>

      <p>
        After your turn, the computer takes its turn and attacks your grid. This process
        continues in alternating turns, creating a continuous and engaging gameplay loop.
      </p>

      <h2>Winning the Game</h2>

      <p>
        The game continues until all ships of one side are completely destroyed. The player
        who successfully sinks all of the opponent’s ships first is declared the winner.
      </p>

      <p>
        Victory in SeaWarX requires careful thinking, pattern recognition, and strategic
        decision-making. Each move plays a crucial role in determining the outcome of the
        battle.
      </p>
    </div>
  );
};

export default HowToPlay;