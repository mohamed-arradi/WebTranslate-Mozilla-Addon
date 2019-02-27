'use strict';

function notifyExtension(event) {
    var targetElement = event.target || event.srcElement;
    if (targetElement.id === "translate_button") {
        var lang = document.getElementById('data-language').value;
        var engine = document.getElementById('data-engine').value;
        var newTabOption = document.getElementById('new_tab_checkbox').checked;

        if (lang != "0") {
            browser.runtime.sendMessage({
                "data": lang,
                "engine": engine,
                "newTab": newTabOption
            });
        }
    } else if (targetElement.id === "support_us") {
        browser.runtime.sendMessage({ type: "donation" });
    } else if (targetElement.id === "report_issue") {
        window.location.href = "mailto:hello@arradimohamed.fr";
    }
}

window.addEventListener("click", notifyExtension);