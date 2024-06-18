let guideCount = 0;
export function UseGuide() {
    if (guideCount == 1) {
        return;
    }
    else {
        $('#guide_bg').remove();
        $('#guide_content').remove();
        guideCount = 1;
    }
    $('html').append(`
    <div id='guide_bg'>

    </div>
    <div id='guide_content'>
        <pre><h2>Welcome to "COW-STOW game"!</h2>
        in this game your main goal is
        to buy the most expensive cow,
        but it's not as easy as you think.
        to simplify the game, a function
        for purchasing boosters was added
        (they increase your money once a
        minute by the number indicated in
        the first window).
        to buy a cow, go to the "buy cow" tab,
        and to buy a booster, go to the
        "buy booster" tab.
        </pre>    
        <div id='close_guide'>
            <button id="close_bg_button"></button>
        </div>
    </div>
    `);
    $('#close_bg_button').on('click', () => {
        $('#guide_bg').fadeTo(1000, 0, () => {$('#guide_bg').remove()});
        $('#guide_content').fadeTo(1000, 0, () => {$('#guide_content').remove()});
        guideCount = 0;
    });
}