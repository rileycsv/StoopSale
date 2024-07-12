$w.onReady(function () {
    // Initially hide the homepage content
    $w("#section3").hide();
    $w("#section1").hide();
    $w("#section4").hide();
    $w("#section5").hide();
    
    // Set up the click event for the button
    $w("#box4").onClick(() => {
        // Start the letter flip animation
        $w("#imageX16").flip({
            "duration": 1000,
            "direction": "horizontal"
        });

        // After the flip animation is done, reveal the homepage content
        setTimeout(() => {
            $w("#section3").show("fade", { "duration": 500 });
            $w("#section1").show("fade", { "duration": 500 });
            $w("#section4").show("fade", { "duration": 500 });
            $w("#section5").show("fade", { "duration": 500 });
        }, 1000); // This timeout should match the duration of the flip animation
    });
});