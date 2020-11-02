/*
 * Copyright 2010-2020 Gildas Lormeau
 * contact : gildas.lormeau <at> gmail.com
 * 
 * This file is part of SingleFile.
 *
 *   The code in this file is free software: you can redistribute it and/or 
 *   modify it under the terms of the GNU Affero General Public License 
 *   (GNU AGPL) as published by the Free Software Foundation, either version 3
 *   of the License, or (at your option) any later version.
 * 
 *   The code in this file is distributed in the hope that it will be useful, 
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of 
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero 
 *   General Public License for more details.
 *
 *   As additional permission under GNU AGPL version 3 section 7, you may 
 *   distribute UNMODIFIED VERSIONS OF THIS file without the copy of the GNU 
 *   AGPL normally required by section 4, provided you include this license 
 *   notice and a URL through which recipients can access the Corresponding 
 *   Source.
 */

/* global singlefile */

singlefile.extension.core.bg.business = (() => {

	const ERROR_CONNECTION_ERROR_CHROMIUM = "Could not establish connection. Receiving end does not exist.";
	const ERROR_CONNECTION_LOST_CHROMIUM = "The message port closed before a response was received.";
	const ERROR_CONNECTION_LOST_GECKO = "Message manager disconnected";

	const extensionScriptFiles = [
		"extension/lib/single-file/index.js",
		"extension/core/index.js",
		"extension/core/content/content-sf-main.js",
		"extension/core/content/content-sf-download.js"
	];

	return {
		onMessage
	};

	async function onMessage(message, sender) {
		if (message.method.endsWith(".saveTab")) {
			return saveTabs([sender.tab]);
		}
	}

	async function saveTabs(tabs, options = {}) {
		const config = singlefile.extension.core.bg.config;
		await Promise.all(tabs.map(async tab => {
			const tabId = tab.id;
			const tabOptions = await config.getOptions(tab.url);
			Object.keys(options).forEach(key => tabOptions[key] = options[key]);
			tabOptions.tabId = tabId;
			tabOptions.tabIndex = tab.index;
			tabOptions.extensionScriptFiles = extensionScriptFiles;
			const scriptsInjected = await singlefile.extension.injectScript(tabId, tabOptions);
			if (scriptsInjected) {
				try {
					await singlefile.extension.core.bg.tabs.sendMessage(tab.id, { method: "content.save", options: tabOptions });
				} catch (error) {
					if (error && (!error.message || !isIgnoredError(error))) {
						console.log(error.message ? error.message : error); // eslint-disable-line no-console
					}
				}
			}
		}));
	}

	function isIgnoredError(error) {
		return error.message == ERROR_CONNECTION_LOST_CHROMIUM ||
			error.message == ERROR_CONNECTION_ERROR_CHROMIUM ||
			error.message == ERROR_CONNECTION_LOST_GECKO;
	}

})();
