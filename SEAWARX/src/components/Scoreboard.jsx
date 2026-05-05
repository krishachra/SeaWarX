function Scoreboard({playerShips, enemyShips}) {
    return (
        <div className="scoreboard">
            <div>
                <h3>Your Ship</h3>
                <p>{playerShips}</p>
            </div>
            <div>
                <h3>Enemy Ship</h3>
                <p>{enemyShips}</p>
            </div>
        </div>
    )
};
export default Scoreboard;