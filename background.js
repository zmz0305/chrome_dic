chrome.omnibox.onInputEntered.addListener(function(text){
	chrome.tabs.create({
        url: "http://www.iciba.com/" + text, 
        selected: true, 
    });
});