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

singlefile.extension.core.bg.config = (() => {

	return {
		getOptions: () => ({
			removeHiddenElements: true,
			removeUnusedStyles: true,
			removeUnusedFonts: true,
			removeFrames: false,
			removeImports: true,
			removeScripts: true,
			compressHTML: true,
			compressCSS: false,
			loadDeferredImages: true,
			loadDeferredImagesMaxIdleTime: 1500,
			loadDeferredImagesBlockCookies: false,
			loadDeferredImagesBlockStorage: false,
			loadDeferredImagesKeepZoomLevel: false,
			filenameTemplate: "{page-title} ({date-locale} {time-locale}).html",
			infobarTemplate: "",
			confirmFilename: false,
			filenameConflictAction: "uniquify",
			filenameMaxLength: 192,
			filenameReplacedCharacters: ["~", "+", "\\\\", "?", "%", "*", ":", "|", "\"", "<", ">", "\x00-\x1f", "\x7F"],
			filenameReplacementCharacter: "_",
			maxResourceSizeEnabled: false,
			maxResourceSize: 10,
			removeAudioSrc: true,
			removeVideoSrc: true,
			removeAlternativeFonts: true,
			removeAlternativeMedias: true,
			removeAlternativeImages: true,
			groupDuplicateImages: true,
			saveRawPage: false,
			resolveFragmentIdentifierURLs: false,
			userScriptEnabled: false,
			saveFavicon: true,
			includeBOM: false,
			insertMetaNoIndex: false
		})
	};

})();
