//your JS code here. If required.
<div class="container">
    <div id="setup-screen">
        <h1 class="main-title">TIC TAC TOE</h1>
        <div class="input-group">
            <label for="player-1">Player 1</label>
            <input type="text" id="player-1" placeholder="enter name">
        </div>
        <div class="input-group">
            <label for="player-2">Player 2</label>
            <input type="text" id="player-2" placeholder="enter name">
        </div>
        <button id="submit">Start Game</button>
    </div>

    <div id="game-board-screen" style="display: none;">
        <h1>Tic Tac Toe</h1>
        <div class="message"></div>
        <div class="grid">
            <div class="cell" id="1"></div>
            <div class="cell" id="2"></div>
            <div class="cell" id="3"></div>
            <div class="cell" id="4"></div>
            <div class="cell" id="5"></div>
            <div class="cell" id="6"></div>
            <div class="cell" id="7"></div>
            <div class="cell" id="8"></div>
            <div class="cell" id="9"></div>
        </div>
    </div>
</div>