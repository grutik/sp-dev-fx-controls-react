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
var sp_core_library_1 = require("@microsoft/sp-core-library");
var PeoplePickerMockClient_1 = require("./PeoplePickerMockClient");
var PeoplePicker_1 = require("../PeoplePicker");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
/**
 * Service implementation to search people in SharePoint
 */
var SPPeopleSearchService = (function () {
    /**
     * Service constructor
     */
    function SPPeopleSearchService(context) {
        this.context = context;
        this.cachedPersonas = {};
        this.cachedLocalUsers = {};
        this.cachedLocalUsers[this.context.pageContext.web.absoluteUrl] = [];
    }
    /**
     * Generate the user photo link using SharePoint user photo endpoint.
     *
     * @param value
     */
    SPPeopleSearchService.prototype.generateUserPhotoLink = function (value) {
        return this.context.pageContext.web.absoluteUrl + "/_layouts/15/userphoto.aspx?accountname=" + encodeURIComponent(value) + "&size=M";
    };
    /**
     * Generate sum of principal types
     *
     * PrincipalType controls the type of entities that are returned in the results.
     * Choices are All - 15, Distribution List - 2 , Security Groups - 4, SharePoint Groups - 8, User - 1.
     * These values can be combined (example: 13 is security + SP groups + users)
     *
     * @param principalTypes
     */
    SPPeopleSearchService.prototype.getSumOfPrincipalTypes = function (principalTypes) {
        return !!principalTypes && principalTypes.length > 0 ? principalTypes.reduce(function (a, b) { return a + b; }, 0) : 1;
    };
    /**
     * Retrieve the specified group
     *
     * @param groupName
     * @param siteUrl
     */
    SPPeopleSearchService.prototype.getGroupId = function (groupName, siteUrl) {
        if (siteUrl === void 0) { siteUrl = null; }
        return __awaiter(this, void 0, void 0, function () {
            var groups;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local)) return [3 /*break*/, 1];
                        return [2 /*return*/, 1];
                    case 1: return [4 /*yield*/, this.searchTenant(siteUrl, groupName, 1, [PeoplePicker_1.PrincipalType.SharePointGroup], false, 0)];
                    case 2:
                        groups = _a.sent();
                        return [2 /*return*/, (groups && groups.length > 0) ? parseInt(groups[0].id) : null];
                }
            });
        });
    };
    /**
     * Search person by its email or login name
     */
    SPPeopleSearchService.prototype.searchPersonByEmailOrLogin = function (email, principalTypes, siteUrl, groupId, ensureUser) {
        if (siteUrl === void 0) { siteUrl = null; }
        if (groupId === void 0) { groupId = null; }
        if (ensureUser === void 0) { ensureUser = false; }
        return __awaiter(this, void 0, void 0, function () {
            var mockUsers, userResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.searchPeopleFromMock(email)];
                    case 1:
                        mockUsers = _a.sent();
                        return [2 /*return*/, (mockUsers && mockUsers.length > 0) ? mockUsers[0] : null];
                    case 2: return [4 /*yield*/, this.searchTenant(siteUrl, email, 1, principalTypes, ensureUser, groupId)];
                    case 3:
                        userResults = _a.sent();
                        return [2 /*return*/, (userResults && userResults.length > 0) ? userResults[0] : null];
                }
            });
        });
    };
    /**
     * Search All Users from the SharePoint People database
     */
    SPPeopleSearchService.prototype.searchPeople = function (query, maximumSuggestions, principalTypes, siteUrl, groupId, ensureUser) {
        if (siteUrl === void 0) { siteUrl = null; }
        if (groupId === void 0) { groupId = null; }
        if (ensureUser === void 0) { ensureUser = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local)) return [3 /*break*/, 1];
                        // If the running environment is local, load the data from the mock
                        return [2 /*return*/, this.searchPeopleFromMock(query)];
                    case 1: return [4 /*yield*/, this.searchTenant(siteUrl, query, maximumSuggestions, principalTypes, ensureUser, groupId)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Local site search
     */
    SPPeopleSearchService.prototype.localSearch = function (siteUrl, query, principalTypes, showHiddenInUI, groupName, exactMatch) {
        if (exactMatch === void 0) { exactMatch = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var stringVal, cachedPropertyName, filterVal, restApi, data, userDataResp, persons, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        stringVal = "";
                        cachedPropertyName = null;
                        // Check if service needs to search in the site or group
                        if (groupName) {
                            stringVal = "/_api/web/sitegroups/GetByName('" + groupName + "')/users";
                            cachedPropertyName = siteUrl + "-" + groupName;
                        }
                        else {
                            stringVal = "/_api/web/siteusers";
                            cachedPropertyName = siteUrl;
                        }
                        if (!(typeof this.cachedPersonas[cachedPropertyName] === "undefined")) return [3 /*break*/, 3];
                        filterVal = "";
                        if (principalTypes) {
                            filterVal = "?$filter=(" + principalTypes.map(function (principalType) { return "PrincipalType eq " + principalType; }).join(" or ") + ")";
                        }
                        // filter for showHiddenInUI
                        filterVal = filterVal ? filterVal + " and (IsHiddenInUI eq " + showHiddenInUI + ")" : "?$filter=IsHiddenInUI eq " + showHiddenInUI;
                        restApi = "" + siteUrl + stringVal + filterVal;
                        return [4 /*yield*/, this.context.spHttpClient.get(restApi, sp_http_1.SPHttpClient.configurations.v1, {
                                headers: {
                                    'Accept': 'application/json;odata.metadata=none'
                                }
                            })];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, data.json()];
                    case 2:
                        userDataResp = _a.sent();
                        if (userDataResp && userDataResp.value && userDataResp.value.length > 0) {
                            this.cachedPersonas[cachedPropertyName] = sp_lodash_subset_1.cloneDeep(userDataResp.value);
                        }
                        _a.label = 3;
                    case 3:
                        // Check if persons or groups were retrieved and return the ones for the query
                        if (this.cachedPersonas[cachedPropertyName]) {
                            persons = this.cachedPersonas[cachedPropertyName];
                            if (query) {
                                // Check if exact match is required
                                if (exactMatch) {
                                    persons = persons.filter(function (element) { return element.Email.toLowerCase() === query.toLowerCase() || element.LoginName.toLowerCase() === query.toLowerCase(); });
                                }
                                else {
                                    persons = persons.filter(function (element) { return element.Title.toLowerCase().indexOf(query.toLowerCase()) !== -1 || element.Email.toLowerCase().indexOf(query.toLowerCase()) !== -1 || element.LoginName.toLowerCase().indexOf(query.toLowerCase()) !== -1; });
                                }
                            }
                            return [2 /*return*/, persons.map(function (item) { return ({
                                    id: item.Id.toString(),
                                    imageUrl: item.PrincipalType === PeoplePicker_1.PrincipalType.User ? _this.generateUserPhotoLink(item.Email) : null,
                                    imageInitials: _this.getFullNameInitials(item.Title),
                                    text: item.Title,
                                    secondaryText: item.Email || item.LoginName,
                                    tertiaryText: "",
                                    optionalText: "" // anything
                                }); })];
                        }
                        // Nothing to return
                        return [2 /*return*/, []];
                    case 4:
                        e_1 = _a.sent();
                        console.error("PeopleSearchService::localSearch: error occured while fetching the users.");
                        return [2 /*return*/, []];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Tenant search
     */
    SPPeopleSearchService.prototype.searchTenant = function (siteUrl, query, maximumSuggestions, principalTypes, ensureUser, groupId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userRequestUrl, searchBody, httpPostOptions, data, userDataResp, values, _i, values_1, value, id, userResults, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        userRequestUrl = (siteUrl || this.context.pageContext.web.absoluteUrl) + "/_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser";
                        searchBody = {
                            queryParams: {
                                AllowEmailAddresses: true,
                                AllowMultipleEntities: false,
                                AllUrlZones: false,
                                MaximumEntitySuggestions: maximumSuggestions,
                                PrincipalSource: 15,
                                PrincipalType: this.getSumOfPrincipalTypes(principalTypes),
                                QueryString: query
                            }
                        };
                        // Search on the local site when "0"
                        if (siteUrl) {
                            searchBody.queryParams["SharePointGroupID"] = 0;
                        }
                        // Check if users need to be searched in a specific group
                        if (groupId) {
                            searchBody.queryParams["SharePointGroupID"] = groupId;
                        }
                        httpPostOptions = {
                            headers: {
                                'accept': 'application/json',
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(searchBody)
                        };
                        return [4 /*yield*/, this.context.spHttpClient.post(userRequestUrl, sp_http_1.SPHttpClient.configurations.v1, httpPostOptions)];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 7];
                        return [4 /*yield*/, data.json()];
                    case 2:
                        userDataResp = _a.sent();
                        if (!(userDataResp && userDataResp.value && userDataResp.value.length > 0)) return [3 /*break*/, 7];
                        values = userDataResp.value;
                        if (typeof userDataResp.value === "string") {
                            values = JSON.parse(userDataResp.value);
                        }
                        // Filter out "UNVALIDATED_EMAIL_ADDRESS"
                        values = values.filter(function (v) { return !(v.EntityData && v.EntityData.PrincipalType && v.EntityData.PrincipalType === "UNVALIDATED_EMAIL_ADDRESS"); });
                        if (!ensureUser) return [3 /*break*/, 6];
                        _i = 0, values_1 = values;
                        _a.label = 3;
                    case 3:
                        if (!(_i < values_1.length)) return [3 /*break*/, 6];
                        value = values_1[_i];
                        if (!(!value.EntityData || (value.EntityData && typeof value.EntityData.SPGroupID === "undefined"))) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.ensureUser(value.Key)];
                    case 4:
                        id = _a.sent();
                        value.LoginName = value.Key;
                        value.Key = id;
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        // Filter out NULL keys
                        values = values.filter(function (v) { return v.Key !== null; });
                        userResults = values.map(function (element) {
                            switch (element.EntityType) {
                                case 'User':
                                    var email = element.EntityData.Email !== null ? element.EntityData.Email : element.Description;
                                    return {
                                        id: element.Key,
                                        loginName: element.LoginName ? element.LoginName : element.Key,
                                        imageUrl: _this.generateUserPhotoLink(email),
                                        imageInitials: _this.getFullNameInitials(element.DisplayText),
                                        text: element.DisplayText,
                                        secondaryText: email,
                                        tertiaryText: "",
                                        optionalText: "" // anything
                                    };
                                case 'SecGroup':
                                    return {
                                        id: element.Key,
                                        loginName: element.LoginName ? element.LoginName : element.Key,
                                        imageInitials: _this.getFullNameInitials(element.DisplayText),
                                        text: element.DisplayText,
                                        secondaryText: element.ProviderName
                                    };
                                case 'FormsRole':
                                    return {
                                        id: element.Key,
                                        loginName: element.LoginName ? element.LoginName : element.Key,
                                        imageInitials: _this.getFullNameInitials(element.DisplayText),
                                        text: element.DisplayText,
                                        secondaryText: element.ProviderName
                                    };
                                default:
                                    return {
                                        id: element.EntityData.SPGroupID,
                                        loginName: element.EntityData.AccountName,
                                        imageInitials: _this.getFullNameInitials(element.DisplayText),
                                        text: element.DisplayText,
                                        secondaryText: element.EntityData.AccountName
                                    };
                            }
                        });
                        return [2 /*return*/, userResults];
                    case 7: 
                    // Nothing to return
                    return [2 /*return*/, []];
                    case 8:
                        e_2 = _a.sent();
                        console.error("PeopleSearchService::searchTenant: error occured while fetching the users.");
                        return [2 /*return*/, []];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the local user ID
     *
     * @param userId
     */
    SPPeopleSearchService.prototype.ensureUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var siteUrl, users, userIdx, restApi, data, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteUrl = this.context.pageContext.web.absoluteUrl;
                        if (this.cachedLocalUsers && this.cachedLocalUsers[siteUrl]) {
                            users = this.cachedLocalUsers[siteUrl];
                            userIdx = sp_lodash_subset_1.findIndex(users, function (u) { return u.LoginName === userId; });
                            if (userIdx !== -1) {
                                return [2 /*return*/, users[userIdx].Id];
                            }
                        }
                        restApi = siteUrl + "/_api/web/ensureuser";
                        return [4 /*yield*/, this.context.spHttpClient.post(restApi, sp_http_1.SPHttpClient.configurations.v1, {
                                body: JSON.stringify({ 'logonName': userId })
                            })];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, data.json()];
                    case 2:
                        user = _a.sent();
                        if (user && user.Id) {
                            this.cachedLocalUsers[siteUrl].push(user);
                            return [2 /*return*/, user.Id];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Generates Initials from a full name
     */
    SPPeopleSearchService.prototype.getFullNameInitials = function (fullName) {
        if (fullName === null) {
            return fullName;
        }
        var words = fullName.split(' ');
        if (words.length === 0) {
            return '';
        }
        else if (words.length === 1) {
            return words[0].charAt(0);
        }
        else {
            return (words[0].charAt(0) + words[1].charAt(0));
        }
    };
    /**
     * Gets the user photo url
     */
    SPPeopleSearchService.prototype.getUserPhotoUrl = function (userEmail, siteUrl) {
        return siteUrl + "/_layouts/15/userphoto.aspx?size=S&accountname=" + userEmail;
    };
    /**
     * Returns fake people results for the Mock mode
     */
    SPPeopleSearchService.prototype.searchPeopleFromMock = function (query) {
        var mockClient = new PeoplePickerMockClient_1.PeoplePickerMockClient();
        var filterValue = { valToCompare: query };
        return new Promise(function (resolve) { return resolve(PeoplePickerMockClient_1.MockUsers.filter(mockClient.filterPeople, filterValue)); });
    };
    return SPPeopleSearchService;
}());
exports.default = SPPeopleSearchService;

//# sourceMappingURL=PeopleSearchService.js.map
