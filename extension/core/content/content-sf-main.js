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

/* global browser */

this.singlefile.extension.core.content.main = this.singlefile.extension.core.content.main || (() => {

	const singlefile = this.singlefile;

	browser.runtime.onMessage.addListener(message => {
		if (message.method == "content.save") {
			return savePage(message);
		}
	});
	return {};

	async function savePage(message) {
		const options = message.options;
		if (!singlefile.extension.core.processing) {
			singlefile.extension.core.processing = true;
			try {
				const pageData = await singlefile.extension.getPageData(options);
				if (pageData) {
					await singlefile.extension.core.content.download.downloadPage(pageData, options);
				}
			} catch (error) {
				console.error(error); // eslint-disable-line no-console				
			}
			singlefile.extension.core.processing = false;
		}
		return {};
	}

})();