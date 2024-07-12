import wixLocation from 'wix-location';
import { copyToClipboard } from 'wix-window';
// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
$w.onReady(function () {
    // Initially hide the homepage content and other elements
    $w("#section3").hide();
    $w("#section1").hide();
    $w("#section4").hide();
    $w("#section5").hide();
    $w("#section2").hide();

    // Set up the click event for the button
    $w("#button1").onClick(() => {
        console.log("Button clicked");

        // Hide section6
        $w("#section6").hide("fade", { "duration": 500 }).then(() => {
            $w("#section6").collapse();

            // Show main page content
            $w("#section3").show("fade", { "duration": 500 });
            $w("#section1").show("fade", { "duration": 500 });
            $w("#section4").show("fade", { "duration": 500 });
            $w("#section5").show("fade", { "duration": 500 });
        });
    });

    $w("#button3").onClick(() => {
        const pageUrl = wixLocation.url; // Get the current page URL

        // Copy the URL to the clipboard
        copyToClipboard(pageUrl)
            .then(() => {
                // Provide feedback to the user (optional)
                console.log("URL copied to clipboard: " + pageUrl);
            })
            .catch((err) => {
                console.error("Failed to copy URL: ", err);
            });
    });
});