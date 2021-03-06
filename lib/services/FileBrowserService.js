"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = require("@microsoft/sp-http");
var __1 = require("..");
var FileBrowserService = (function () {
    function FileBrowserService(context, itemsToDownloadCount) {
        if (itemsToDownloadCount === void 0) { itemsToDownloadCount = 100; }
        var _this = this;
        /**
         * Gets files from current sites library
         * @param libraryName
         * @param folderPath
         * @param acceptedFilesExtensions
         */
        this.getListItems = function (libraryName, folderPath, acceptedFilesExtensions, nextPageQueryStringParams) { return __awaiter(_this, void 0, void 0, function () {
            var filesQueryResult, restApi, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filesQueryResult = { items: [], nextHref: null };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        restApi = this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('" + libraryName + "')/RenderListDataAsStream";
                        // Do not pass FolderServerRelativeUrl as query parameter
                        // Attach passed nextPageQueryStringParams values to REST URL
                        if (nextPageQueryStringParams) {
                            restApi += "" + nextPageQueryStringParams;
                            folderPath = null;
                        }
                        return [4 /*yield*/, this._getListDataAsStream(restApi, folderPath, acceptedFilesExtensions)];
                    case 2:
                        filesQueryResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        filesQueryResult.items = null;
                        console.error(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, filesQueryResult];
                }
            });
        }); };
        /**
         * Provides the URL for file preview.
         */
        this.getFileThumbnailUrl = function (file, thumbnailWidth, thumbnailHeight) {
            var thumbnailUrl = _this.mediaBaseUrl + "/transform/thumbnail?provider=spo&inputFormat=" + file.fileType + "&cs=" + _this.callerStack + "&docid=" + file.spItemUrl + "&" + _this.driveAccessToken + "&width=" + thumbnailWidth + "&height=" + thumbnailHeight;
            return thumbnailUrl;
        };
        /**
         * Gets document and media libraries from the site
         */
        this.getSiteMediaLibraries = function (includePageLibraries) {
            if (includePageLibraries === void 0) { includePageLibraries = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var absoluteUrl, restApi, mediaLibrariesResult, libResults, result, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            absoluteUrl = this.context.pageContext.web.absoluteUrl;
                            restApi = absoluteUrl + "/_api/SP.Web.GetDocumentAndMediaLibraries?webFullUrl='" + encodeURIComponent(absoluteUrl) + "'&includePageLibraries='" + includePageLibraries + "'";
                            return [4 /*yield*/, this.context.spHttpClient.get(restApi, sp_http_1.SPHttpClient.configurations.v1)];
                        case 1:
                            mediaLibrariesResult = _a.sent();
                            if (!mediaLibrariesResult || !mediaLibrariesResult.ok) {
                                throw new Error("Something went wrong when executing request. Status='" + mediaLibrariesResult.status + "'");
                            }
                            return [4 /*yield*/, mediaLibrariesResult.json()];
                        case 2:
                            libResults = _a.sent();
                            if (!libResults || !libResults.value) {
                                throw new Error("Cannot read data from the results.");
                            }
                            result = libResults.value.map(function (libItem) { return _this.parseLibItem(libItem); });
                            return [2 /*return*/, result];
                        case 3:
                            error_2 = _a.sent();
                            console.error("[FileBrowserService.getSiteMediaLibraries]: Err='" + error_2.message + "'");
                            return [2 /*return*/, null];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Downloads document content from SP location.
         */
        this.downloadSPFileContent = function (absoluteFileUrl, fileName) { return __awaiter(_this, void 0, void 0, function () {
            var fileDownloadResult, blob, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.context.spHttpClient.get(absoluteFileUrl, sp_http_1.SPHttpClient.configurations.v1)];
                    case 1:
                        fileDownloadResult = _a.sent();
                        if (!fileDownloadResult || !fileDownloadResult.ok) {
                            throw new Error("Something went wrong when downloading the file. Status='" + fileDownloadResult.status + "'");
                        }
                        return [4 /*yield*/, fileDownloadResult.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2 /*return*/, new File([blob], fileName)];
                    case 3:
                        err_1 = _a.sent();
                        console.error("[FileBrowserService.fetchFileContent] Err='" + err_1.message + "'");
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Executes query to load files with possible extension filtering
         * @param restApi
         * @param folderPath
         * @param acceptedFilesExtensions
         */
        this._getListDataAsStream = function (restApi, folderPath, acceptedFilesExtensions) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var filesQueryResult, body, data, filesResult, items, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filesQueryResult = { items: [], nextHref: null };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        body = {
                            parameters: {
                                AllowMultipleValueFilterForTaxonomyFields: true,
                                // ContextInfo (1), ListData (2), ListSchema (4), ViewMetadata (1024), EnableMediaTAUrls (4096), ParentInfo (8192)
                                RenderOptions: 1 | 2 | 4 | 1024 | 4096 | 8192,
                                ViewXml: this.getFilesCamlQueryViewXml(acceptedFilesExtensions)
                            }
                        };
                        if (folderPath) {
                            body.parameters["FolderServerRelativeUrl"] = folderPath;
                        }
                        return [4 /*yield*/, this.context.spHttpClient.fetch(restApi, sp_http_1.SPHttpClient.configurations.v1, {
                                method: "POST",
                                body: JSON.stringify(body)
                            })];
                    case 2:
                        data = _a.sent();
                        if (!data || !data.ok) {
                            throw new Error("[FileBrowser._getListItems]: Something went wrong when executing request. Status='" + data.statusMessage + "'");
                        }
                        return [4 /*yield*/, data.json()];
                    case 3:
                        filesResult = _a.sent();
                        if (!filesResult || !filesResult.ListData || !filesResult.ListData.Row) {
                            throw new Error("[FileBrowser._getListItems]: No data is available. Status='" + data.statusMessage + "'");
                        }
                        // Set additional information from the ListResponse
                        this.processResponse(filesResult);
                        items = filesResult.ListData.Row.map(function (fileItem) { return _this.parseFileItem(fileItem); });
                        filesQueryResult = {
                            items: items,
                            nextHref: filesResult.ListData.NextHref
                        };
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        filesQueryResult.items = null;
                        console.error(error_3.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, filesQueryResult];
                }
            });
        }); };
        /**
         * Generates Files CamlQuery ViewXml
         */
        this.getFilesCamlQueryViewXml = function (accepts) {
            var fileFilter = _this.getFileTypeFilter(accepts);
            var queryCondition = fileFilter && fileFilter != "" ?
                "<Query>\n        <Where>\n          <Or>\n            <And>\n              <Eq>\n                <FieldRef Name=\"FSObjType\" />\n                <Value Type=\"Text\">1</Value>\n              </Eq>\n              <Eq>\n                <FieldRef Name=\"SortBehavior\" />\n                <Value Type=\"Text\">1</Value>\n              </Eq>\n            </And>\n            <In>\n              <FieldRef Name=\"File_x0020_Type\" />\n              " + fileFilter + "\n            </In>\n          </Or>\n        </Where>\n      </Query>" : "";
            // Add files types condiiton
            var viewXml = "<View>\n                      " + queryCondition + "\n                      <ViewFields>\n                        <FieldRef Name=\"DocIcon\"/>\n                        <FieldRef Name=\"LinkFilename\"/>\n                        <FieldRef Name=\"Modified\"/>\n                        <FieldRef Name=\"Editor\"/>\n                        <FieldRef Name=\"FileSizeDisplay\"/>\n                        <FieldRef Name=\"SharedWith\"/>\n                        <FieldRef Name=\"MediaServiceFastMetadata\"/>\n                        <FieldRef Name=\"MediaServiceOCR\"/>\n                        <FieldRef Name=\"_ip_UnifiedCompliancePolicyUIAction\"/>\n                        <FieldRef Name=\"ItemChildCount\"/>\n                        <FieldRef Name=\"FolderChildCount\"/>\n                        <FieldRef Name=\"SMTotalFileCount\"/>\n                        <FieldRef Name=\"SMTotalSize\"/>\n                      </ViewFields>\n                      <RowLimit Paged=\"TRUE\">" + _this.itemsToDownloadCount + "</RowLimit>\n                    </View>";
            return viewXml;
        };
        /**
         * Converts REST call results to IFile
         */
        this.parseFileItem = function (fileItem) {
            var modifiedFriendly = fileItem["Modified.FriendlyDisplay"];
            // Get the modified date
            var modifiedParts = modifiedFriendly.split('|');
            var modified = fileItem.Modified;
            // If there is a friendly modified date, use that
            if (modifiedParts.length === 2) {
                modified = modifiedParts[1];
            }
            var file = {
                name: fileItem.FileLeafRef,
                fileIcon: fileItem.DocIcon,
                serverRelativeUrl: fileItem.FileRef,
                modified: modified,
                fileSize: fileItem.File_x0020_Size,
                fileType: fileItem.File_x0020_Type,
                modifiedBy: fileItem.Editor[0].title,
                isFolder: fileItem.FSObjType === "1",
                absoluteUrl: _this.buildAbsoluteUrl(fileItem.FileRef),
                // Required for item thumbnail
                supportsThumbnail: true,
                spItemUrl: fileItem[".spItemUrl"]
            };
            return file;
        };
        this.parseLibItem = function (libItem) {
            var library = {
                title: libItem.Title,
                absoluteUrl: libItem.AbsoluteUrl,
                serverRelativeUrl: libItem.ServerRelativeUrl
            };
            return library;
        };
        /**
         * Creates an absolute URL
         */
        this.buildAbsoluteUrl = function (relativeUrl) {
            var siteUrl = __1.GeneralHelper.getAbsoluteDomainUrl(_this.context.pageContext.web.absoluteUrl);
            return siteUrl + relativeUrl;
        };
        this.processResponse = function (fileResponse) {
            // Extract media base URL
            _this.mediaBaseUrl = fileResponse.ListSchema[".mediaBaseUrl"];
            _this.callerStack = fileResponse.ListSchema[".callerStack"];
            _this.driveAccessToken = fileResponse.ListSchema[".driveAccessToken"];
        };
        this.context = context;
        this.itemsToDownloadCount = itemsToDownloadCount;
        this.driveAccessToken = null;
    }
    /**
     * Generates CamlQuery files filter.
     * @param accepts
     */
    FileBrowserService.prototype.getFileTypeFilter = function (accepts) {
        var fileFilter = "";
        if (accepts && accepts.length > 0) {
            fileFilter = "<Values>";
            accepts.forEach(function (fileType, index) {
                fileType = fileType.replace(".", "");
                if (index >= 0) {
                    fileFilter = fileFilter + ("<Value Type=\"Text\">" + fileType + "</Value>");
                }
            });
            fileFilter = fileFilter + "</Values>";
        }
        return fileFilter;
    };
    return FileBrowserService;
}());
exports.FileBrowserService = FileBrowserService;

//# sourceMappingURL=FileBrowserService.js.map
