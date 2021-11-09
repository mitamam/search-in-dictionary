chrome.contextMenus.create({
	id: 'search',
	title: "Search '%s' in the Cambridge Dictionary",
	contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if ('search' === info.menuItemId) {
		var newURL = "https://dictionary.cambridge.org/search/direct/?datasetsearch=english&q=info.selectionText"
		chrome.tabs.create({url: newURL})
	}
});