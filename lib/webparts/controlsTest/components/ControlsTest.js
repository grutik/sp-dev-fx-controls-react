"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = require("react");
var ControlsTest_module_scss_1 = require("./ControlsTest.module.scss");
var FileTypeIcon_1 = require("../../../FileTypeIcon");
var Dropdown_1 = require("office-ui-fabric-react/lib/components/Dropdown");
var Button_1 = require("office-ui-fabric-react/lib/components/Button");
var Dialog_1 = require("office-ui-fabric-react/lib/components/Dialog");
var Placeholder_1 = require("../../../Placeholder");
var ListView_1 = require("../../../ListView");
var sp_http_1 = require("@microsoft/sp-http");
var SiteBreadcrumb_1 = require("../../../SiteBreadcrumb");
var WebPartTitle_1 = require("../../../WebPartTitle");
var TaxonomyPicker_1 = require("../../../TaxonomyPicker");
var ListPicker_1 = require("../../../ListPicker");
var IFrameDialog_1 = require("../../../IFrameDialog");
var IFramePanel_1 = require("../../../IFramePanel");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var SecurityTrimmedControl_1 = require("../../../SecurityTrimmedControl");
var sp_page_context_1 = require("@microsoft/sp-page-context");
var PeoplePicker_1 = require("../../../PeoplePicker");
var DateValues_1 = require("office-ui-fabric-react/lib/utilities/dateValues/DateValues");
var DateTimePicker_1 = require("../../../DateTimePicker");
var ListItemPicker_1 = require("../../../ListItemPicker");
var Map_1 = require("../../../Map");
var ChartControl_1 = require("../../../ChartControl");
var Progress_1 = require("../../../Progress");
var taxonomyPicker_1 = require("../../../controls/taxonomyPicker");
var termActions_1 = require("../../../controls/taxonomyPicker/termActions");
var RichText_1 = require("../../../RichText");
var Link_1 = require("office-ui-fabric-react/lib/components/Link");
var carousel_1 = require("../../../controls/carousel");
var TimeDisplayControlType_1 = require("../../../controls/dateTimePicker/TimeDisplayControlType");
var GridLayout_1 = require("../../../GridLayout");
// Used to render document cards
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var FilePicker_1 = require("../../../FilePicker");
/**
 * The sample data below was randomly generated (except for the title). It is used by the grid layout
 */
var sampleGridData = [{
        thumbnail: "https://pixabay.com/get/57e9dd474952a414f1dc8460825668204022dfe05555754d742e7bd6/hot-air-balloons-1984308_640.jpg",
        title: "Adventures in SPFx",
        name: "Perry Losselyong",
        profileImageSrc: "https://robohash.org/blanditiisadlabore.png?size=50x50&set=set1",
        location: "SharePoint",
        activity: "3/13/2019"
    }, {
        thumbnail: "https://pixabay.com/get/55e8d5474a52ad14f1dc8460825668204022dfe05555754d742d79d0/autumn-3804001_640.jpg",
        title: "The Wild, Untold Story of SharePoint!",
        name: "Ebonee Gallyhaock",
        profileImageSrc: "https://robohash.org/delectusetcorporis.bmp?size=50x50&set=set1",
        location: "SharePoint",
        activity: "6/29/2019"
    }, {
        thumbnail: "https://pixabay.com/get/57e8dd454c50ac14f1dc8460825668204022dfe05555754d742c72d7/log-cabin-1886620_640.jpg",
        title: "Low Code Solutions: PowerApps",
        name: "Seward Keith",
        profileImageSrc: "https://robohash.org/asperioresautquasi.jpg?size=50x50&set=set1",
        location: "PowerApps",
        activity: "12/31/2018"
    }, {
        thumbnail: "https://pixabay.com/get/55e3d445495aa514f1dc8460825668204022dfe05555754d742b7dd5/portrait-3316389_640.jpg",
        title: "Not Your Grandpa's SharePoint",
        name: "Sharona Selkirk",
        profileImageSrc: "https://robohash.org/velnammolestiae.png?size=50x50&set=set1",
        location: "SharePoint",
        activity: "11/20/2018"
    }, {
        thumbnail: "https://pixabay.com/get/57e6dd474352ae14f1dc8460825668204022dfe05555754d742a7ed1/faucet-1684902_640.jpg",
        title: "Get with the Flow",
        name: "Boyce Batstone",
        profileImageSrc: "https://robohash.org/nulladistinctiomollitia.jpg?size=50x50&set=set1",
        location: "Flow",
        activity: "5/26/2019"
    }];
/**
 * Component that can be used to test out the React controls from this project
 */
var ControlsTest = (function (_super) {
    __extends(ControlsTest, _super);
    function ControlsTest(props) {
        var _this = _super.call(this, props) || this;
        _this.taxService = null;
        _this.richTextValue = null;
        /**
         * Static array for carousel control example.
         */
        _this.carouselElements = [
            React.createElement("div", { id: "1", key: "1" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a mattis libero, nec consectetur neque. Suspendisse potenti. Fusce ultrices faucibus consequat. Suspendisse ex diam, ullamcorper sit amet justo ac, accumsan congue neque. Vestibulum aliquam mauris non justo convallis, id molestie purus sodales. Maecenas scelerisque aliquet turpis, ac efficitur ex iaculis et. Vivamus finibus mi eget urna tempor, sed porta justo tempus. Vestibulum et lectus magna. Integer ante felis, ullamcorper venenatis lectus ac, vulputate pharetra magna. Morbi eget nisl tempus, viverra diam ac, mollis tortor. Nam odio ex, viverra bibendum mauris vehicula, consequat suscipit ligula. Nunc sed ultrices augue, eu tincidunt diam."),
            React.createElement("div", { id: "2", key: "2" }, "Quisque metus lectus, facilisis id consectetur ac, hendrerit eget quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut faucibus posuere felis vel efficitur. Maecenas et massa in sem tincidunt finibus. Duis sit amet bibendum nisi. Vestibulum pretium pretium libero, vel tincidunt sem vestibulum sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quam lorem, venenatis id bibendum id, tempus eu nibh. Sed tristique semper ligula, vitae gravida diam gravida vitae. Donec eget posuere mauris, pharetra semper lectus."),
            React.createElement("div", { id: "3", key: "3" }, "Pellentesque tempor et leo at tincidunt. Vivamus et leo sed eros vehicula mollis vitae in dui. Duis posuere sodales enim ut ultricies. Cras in venenatis nulla. Ut sed neque dignissim, sollicitudin tellus convallis, placerat leo. Aliquam vestibulum, leo pharetra sollicitudin pretium, ipsum nisl tincidunt orci, in molestie ipsum dui et mi. Praesent aliquam accumsan risus sed bibendum. Cras consectetur elementum turpis, a mollis velit gravida sit amet. Praesent non augue cursus, varius justo at, molestie lorem. Nulla cursus tellus quis odio congue elementum. Vivamus sit amet quam nec lectus hendrerit blandit. Duis ac condimentum sem. Morbi hendrerit elementum purus, non facilisis arcu bibendum vitae. Vivamus commodo tristique euismod."),
            React.createElement("div", { id: "4", key: "4" }, "Proin semper egestas porta. Nullam risus nisl, auctor ac hendrerit in, dapibus quis ex. Quisque vitae nisi quam. Etiam vel sapien ut libero ornare rhoncus nec vestibulum dolor. Curabitur lacinia aliquam arcu. Proin ultrices risus velit, in vehicula tellus vehicula at. Sed ultrices et felis fringilla ultricies."),
            React.createElement("div", { id: "5", key: "5" }, "Donec orci lorem, imperdiet eu nisi sit amet, condimentum scelerisque tortor. Etiam nec lacinia dui. Duis non turpis neque. Sed pellentesque a erat et accumsan. Pellentesque elit odio, elementum nec placerat nec, ornare in tortor. Suspendisse gravida magna maximus mollis facilisis. Duis odio libero, finibus ac suscipit sed, aliquam et diam. Aenean posuere lacus ex. Donec dapibus, sem ac luctus ultrices, justo libero tempor eros, vitae lacinia ex ante non dolor. Curabitur condimentum, ligula id pharetra dictum, libero libero ullamcorper nunc, eu blandit sem arcu ut felis. Nullam lacinia dapibus auctor.")
        ];
        /**
         * Method that retrieves the selected terms from the taxonomy picker
         * @param terms
         */
        _this._onTaxPickerChange = function (terms) {
            _this.setState({
                initialValues: terms
            });
            console.log("Terms:", terms);
        };
        /**
         * Method that retrieves the selected date/time from the DateTime picker
         * @param dateTimeValue
         */
        _this._onDateTimePickerChange = function (dateTimeValue) {
            _this.setState({ dateTimeValue: dateTimeValue });
            console.log("Selected Date/Time:", dateTimeValue.toLocaleString());
        };
        /**
         * Selected lists change event
         * @param lists
         */
        _this.onListPickerChange = function (lists) {
            console.log("Lists:", lists);
            _this.setState({
                selectedList: typeof lists === "string" ? lists : lists.pop()
            });
        };
        /**
         * Deletes second item from the list
         */
        _this.deleteItem = function () {
            var items = _this.state.items;
            if (items.length >= 2) {
                items.splice(1, 1);
                _this.setState({
                    items: items
                });
            }
        };
        /**
         * Triggers element change for the carousel example.
         */
        _this.triggerNextElement = function (index) {
            var canMovePrev = index > 0;
            var canMoveNext = index < _this.carouselElements.length - 1;
            var nextElement = _this.carouselElements[index];
            setTimeout(function () {
                _this.setState({
                    canMovePrev: canMovePrev,
                    canMoveNext: canMoveNext,
                    currentCarouselElement: nextElement
                });
            }, 500);
        };
        _this._onFilePickerSave = function (filePickerResult) { return __awaiter(_this, void 0, void 0, function () {
            var fileResultContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ filePickerResult: filePickerResult });
                        if (!filePickerResult) return [3 /*break*/, 2];
                        return [4 /*yield*/, filePickerResult.downloadFileContent()];
                    case 1:
                        fileResultContent = _a.sent();
                        console.log(fileResultContent);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this._onRenderGridItem = function (item, _finalSize, isCompact) {
            var previewProps = {
                previewImages: [
                    {
                        previewImageSrc: item.thumbnail,
                        imageFit: Image_1.ImageFit.cover,
                        height: 130
                    }
                ]
            };
            return React.createElement("div", { "data-is-focusable": true, role: "listitem", "aria-label": item.title },
                React.createElement(DocumentCard_1.DocumentCard, { type: isCompact ? DocumentCard_1.DocumentCardType.compact : DocumentCard_1.DocumentCardType.normal, onClick: function (ev) { return alert("You clicked on a grid item"); } },
                    React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)),
                    !isCompact && React.createElement(DocumentCard_1.DocumentCardLocation, { location: item.location }),
                    React.createElement("div", null,
                        React.createElement(DocumentCard_1.DocumentCardTitle, { title: item.title, shouldTruncate: true }),
                        React.createElement(DocumentCard_1.DocumentCardActivity, { activity: item.activity, people: [{ name: item.name, profileImageSrc: item.profileImageSrc }] }))));
        };
        _this.state = {
            imgSize: FileTypeIcon_1.ImageSize.small,
            items: [],
            iFrameDialogOpened: false,
            iFramePanelOpened: false,
            initialValues: [],
            authorEmails: [],
            selectedList: null,
            progressActions: _this._initProgressActions(),
            dateTimeValue: new Date(),
            richTextValue: null,
            canMovePrev: false,
            canMoveNext: true,
            currentCarouselElement: _this.carouselElements[0]
        };
        _this._onIconSizeChange = _this._onIconSizeChange.bind(_this);
        _this._onConfigure = _this._onConfigure.bind(_this);
        _this._startProgress = _this._startProgress.bind(_this);
        return _this;
    }
    /**
     * React componentDidMount lifecycle hook
     */
    ControlsTest.prototype.componentDidMount = function () {
        var _this = this;
        var restApi = this.props.context.pageContext.web.absoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('Shared%20Documents')/files?$expand=ListItemAllFields";
        this.props.context.spHttpClient.get(restApi, sp_http_1.SPHttpClient.configurations.v1)
            .then(function (resp) { return resp.json(); })
            .then(function (items) {
            _this.setState({
                items: items.value ? items.value : []
            });
        });
        // // Get Authors in the SharePoint Document library -- For People Picker Testing
        // const restAuthorApi = `${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/GetByTitle('Documents')/Items?$select=Id, Author/EMail&$expand=Author/EMail`;
        // this.props.context.spHttpClient.get(restAuthorApi, SPHttpClient.configurations.v1)
        // .then(resp => { return resp.json(); })
        // .then(items => {
        //   let emails : string[] = items.value ? items.value.map((item, key)=> { return item.Author.EMail}) : [];
        //   console.log(emails);
        //   this.setState({
        //     authorEmails: emails
        //   });
        // });
    };
    /**
     * Event handler when changing the icon size in the dropdown
     * @param element
     */
    ControlsTest.prototype._onIconSizeChange = function (element) {
        this.setState({
            imgSize: parseInt(element.key.toString())
        });
    };
    /**
     * Open the property pane
     */
    ControlsTest.prototype._onConfigure = function () {
        this.props.context.propertyPane.open();
    };
    /**
     * Method that retrieves the selected items in the list view
     * @param items
     */
    ControlsTest.prototype._getSelection = function (items) {
        console.log('Items:', items);
    };
    /**
     *
     *Method that retrieves the selected terms from the taxonomy picker and sets state
     * @private
     * @param {IPickerTerms} terms
     * @memberof ControlsTest
     */
    ControlsTest.prototype.onServicePickerChange = function (terms) {
        this.setState({
            initialValues: terms
        });
        // console.log("serviceTerms", terms);
    };
    /**
     * Method that retrieves the selected items from People  Picker
     * @param items
     */
    ControlsTest.prototype._getPeoplePickerItems = function (items) {
        console.log('Items:', items);
    };
    /**
     * Selected item from the list data picker
     */
    ControlsTest.prototype.listItemPickerDataSelected = function (item) {
        console.log(item);
    };
    ControlsTest.prototype._startProgress = function () {
        var _this = this;
        var currentIndex = 0;
        var intervalId = setInterval(function () {
            var actions = _this.state.progressActions;
            if (currentIndex >= actions.length) {
                clearInterval(intervalId);
            }
            else {
                var action = actions[currentIndex];
                if (currentIndex == 1) {
                    action.hasError = true;
                    action.errorMessage = 'some error message';
                }
            }
            _this.setState({
                currentProgressActionIndex: currentIndex,
                progressActions: actions
            });
            currentIndex++;
        }, 5000);
    };
    ControlsTest.prototype._initProgressActions = function () {
        return [{
                title: 'First Step',
                subActionsTitles: [
                    'Sub action 1',
                    'Sub action 2'
                ]
            }, {
                title: 'Second step'
            }, {
                title: 'Third Step',
                subActionsTitles: [
                    'Sub action 1',
                    'Sub action 2',
                    'Sub action 3'
                ]
            }, {
                title: 'Fourth Step'
            }];
    };
    /**
     * Renders the component
     */
    ControlsTest.prototype.render = function () {
        var _this = this;
        // Size options for the icon size dropdown
        var sizeOptions = [
            {
                key: FileTypeIcon_1.ImageSize.small,
                text: FileTypeIcon_1.ImageSize[FileTypeIcon_1.ImageSize.small],
                selected: FileTypeIcon_1.ImageSize.small === this.state.imgSize
            },
            {
                key: FileTypeIcon_1.ImageSize.medium,
                text: FileTypeIcon_1.ImageSize[FileTypeIcon_1.ImageSize.medium],
                selected: FileTypeIcon_1.ImageSize.medium === this.state.imgSize
            },
            {
                key: FileTypeIcon_1.ImageSize.large,
                text: FileTypeIcon_1.ImageSize[FileTypeIcon_1.ImageSize.large],
                selected: FileTypeIcon_1.ImageSize.large === this.state.imgSize
            }
        ];
        // Specify the fields that need to be viewed in the listview
        var viewFields = [
            {
                name: 'ListItemAllFields.Id',
                displayName: 'ID',
                maxWidth: 40,
                sorting: true,
                isResizable: true
            },
            {
                name: 'ListItemAllFields.Underscore_Field',
                displayName: "Underscore_Field",
                sorting: true,
                isResizable: true
            },
            {
                name: 'Name',
                linkPropertyName: 'ServerRelativeUrl',
                sorting: true,
                isResizable: true
            },
            {
                name: 'ServerRelativeUrl',
                displayName: 'Path',
                render: function (item) {
                    return React.createElement("a", { href: item['ServerRelativeUrl'] }, "Link");
                },
                isResizable: true
            },
            {
                name: 'Title',
                isResizable: true
            }
        ];
        // Specify the fields on which you want to group your items
        // Grouping is takes the field order into account from the array
        // const groupByFields: IGrouping[] = [{ name: "ListItemAllFields.City", order: GroupOrder.ascending }, { name: "ListItemAllFields.Country.Label", order: GroupOrder.descending }];
        var groupByFields = [{ name: "ListItemAllFields.Department.Label", order: ListView_1.GroupOrder.ascending }];
        var iframeUrl = '/temp/workbench.html';
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.SharePoint) {
            iframeUrl = '/_layouts/15/sharepoint.aspx';
        }
        else if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.ClassicSharePoint) {
            iframeUrl = this.context.pageContext.web.serverRelativeUrl;
        }
        return (React.createElement("div", { className: ControlsTest_module_scss_1.default.controlsTest },
            React.createElement(WebPartTitle_1.WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.updateProperty, moreLink: React.createElement(Link_1.Link, { href: "https://sharepoint.github.io/sp-dev-fx-controls-react/" }, "See all") }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (unspecified = date and time)", isMonthPickerVisible: false, showSeconds: false, onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker 12-hour clock", showSeconds: true, onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker 24-hour clock", showSeconds: true, timeConvention: DateTimePicker_1.TimeConvention.Hours24, onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker no seconds", value: new Date(), onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (unspecified = date and time)", timeConvention: DateTimePicker_1.TimeConvention.Hours24, value: new Date(), onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker dropdown", showSeconds: true, timeDisplayControlType: TimeDisplayControlType_1.TimeDisplayControlType.Dropdown, value: new Date(), onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker date only", showLabels: false, dateConvention: DateTimePicker_1.DateConvention.Date, value: new Date(), onChange: function (value) { return console.log("DateTimePicker value:", value); } }),
            React.createElement(RichText_1.RichText, { isEditMode: this.props.displayMode === sp_core_library_1.DisplayMode.Edit, onChange: function (value) { _this.setState({ richTextValue: value }); return value; } }),
            React.createElement(Placeholder_1.Placeholder, { iconName: 'Edit', iconText: 'Configure your web part', description: 'Please configure the web part.', buttonLabel: 'Configure', hideButton: this.props.displayMode === sp_core_library_1.DisplayMode.Read, onConfigure: this._onConfigure }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (Group not found)", webAbsoluteUrl: this.props.context.pageContext.site.absoluteUrl, groupName: "Team Site Visitors 123", ensureUser: true, principalTypes: [PeoplePicker_1.PrincipalType.User, PeoplePicker_1.PrincipalType.SharePointGroup, PeoplePicker_1.PrincipalType.SecurityGroup, PeoplePicker_1.PrincipalType.DistributionList], defaultSelectedUsers: ["admin@tenant.onmicrosoft.com", "test@tenant.onmicrosoft.com"], selectedItems: this._getPeoplePickerItems }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (search for group)", groupName: "Team Site Visitors", principalTypes: [PeoplePicker_1.PrincipalType.User, PeoplePicker_1.PrincipalType.SharePointGroup, PeoplePicker_1.PrincipalType.SecurityGroup, PeoplePicker_1.PrincipalType.DistributionList], defaultSelectedUsers: ["admin@tenant.onmicrosoft.com", "test@tenant.onmicrosoft.com"], selectedItems: this._getPeoplePickerItems }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (pre-set global users)", principalTypes: [PeoplePicker_1.PrincipalType.User, PeoplePicker_1.PrincipalType.SharePointGroup, PeoplePicker_1.PrincipalType.SecurityGroup, PeoplePicker_1.PrincipalType.DistributionList], defaultSelectedUsers: ["admin@tenant.onmicrosoft.com", "test@tenant.onmicrosoft.com"], selectedItems: this._getPeoplePickerItems, personSelectionLimit: 2, ensureUser: true }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (pre-set local users)", webAbsoluteUrl: this.props.context.pageContext.site.absoluteUrl, principalTypes: [PeoplePicker_1.PrincipalType.User, PeoplePicker_1.PrincipalType.SharePointGroup, PeoplePicker_1.PrincipalType.SecurityGroup, PeoplePicker_1.PrincipalType.DistributionList], defaultSelectedUsers: ["admin@tenant.onmicrosoft.com", "test@tenant.onmicrosoft.com"], selectedItems: this._getPeoplePickerItems }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (tenant scoped)", personSelectionLimit: 5, 
                // groupName={"Team Site Owners"}
                showtooltip: true, isRequired: true, 
                //defaultSelectedUsers={["tenantUser@domain.onmicrosoft.com", "test@user.com"]}
                //defaultSelectedUsers={this.state.authorEmails}
                selectedItems: this._getPeoplePickerItems, showHiddenInUI: false, principalTypes: [PeoplePicker_1.PrincipalType.User, PeoplePicker_1.PrincipalType.SharePointGroup, PeoplePicker_1.PrincipalType.SecurityGroup, PeoplePicker_1.PrincipalType.DistributionList], suggestionsLimit: 2, resolveDelay: 200 }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (local scoped)", webAbsoluteUrl: this.props.context.pageContext.site.absoluteUrl, personSelectionLimit: 5, 
                // groupName={"Team Site Owners"}
                showtooltip: true, isRequired: true, 
                //defaultSelectedUsers={["tenantUser@domain.onmicrosoft.com", "test@user.com"]}
                //defaultSelectedUsers={this.state.authorEmails}
                selectedItems: this._getPeoplePickerItems, showHiddenInUI: false, principalTypes: [PeoplePicker_1.PrincipalType.User, PeoplePicker_1.PrincipalType.SharePointGroup, PeoplePicker_1.PrincipalType.SecurityGroup, PeoplePicker_1.PrincipalType.DistributionList], suggestionsLimit: 2, resolveDelay: 200 }),
            React.createElement(PeoplePicker_1.PeoplePicker, { context: this.props.context, titleText: "People Picker (disabled)", disabled: true, showtooltip: true }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (unspecified = date and time)" }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (unspecified = date and time, no seconds)" }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (date and time - default time = 12h)", dateConvention: DateTimePicker_1.DateConvention.DateTime, showSeconds: true }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (date and time - 12h)", dateConvention: DateTimePicker_1.DateConvention.DateTime, timeConvention: DateTimePicker_1.TimeConvention.Hours12, showSeconds: false }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (date and time - 24h)", dateConvention: DateTimePicker_1.DateConvention.DateTime, timeConvention: DateTimePicker_1.TimeConvention.Hours24, firstDayOfWeek: DateValues_1.DayOfWeek.Monday, showSeconds: true }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (Controlled)", formatDate: function (d) { return d.getFullYear() + " - " + (d.getMonth() + 1) + " - " + d.getDate(); }, dateConvention: DateTimePicker_1.DateConvention.DateTime, timeConvention: DateTimePicker_1.TimeConvention.Hours24, firstDayOfWeek: DateValues_1.DayOfWeek.Monday, value: this.state.dateTimeValue, onChange: this._onDateTimePickerChange, isMonthPickerVisible: false, showMonthPickerAsOverlay: true, showWeekNumbers: true, showSeconds: true }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (date only)", dateConvention: DateTimePicker_1.DateConvention.Date }),
            React.createElement(DateTimePicker_1.DateTimePicker, { label: "DateTime Picker (disabled)", disabled: true }),
            React.createElement(ListView_1.ListView, { items: this.state.items, viewFields: viewFields, iconFieldName: 'ServerRelativeUrl', groupByFields: groupByFields, compact: true, selectionMode: ListView_1.SelectionMode.single, selection: this._getSelection, showFilter: true }),
            React.createElement(ChartControl_1.ChartControl, { type: ChartControl_1.ChartType.Bar, data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                }, options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    }
                } }),
            React.createElement(Map_1.Map, { titleText: "New map control", coordinates: { latitude: 51.507351, longitude: -0.127758 }, enableSearch: true, mapType: Map_1.MapType.normal, onUpdateCoordinates: function (coordinates) { return console.log("Updated location:", coordinates); } }),
            React.createElement("div", { className: ControlsTest_module_scss_1.default.container },
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-neutralLight ms-fontColor-neutralDark " + ControlsTest_module_scss_1.default.row },
                    React.createElement("div", { className: "ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1" },
                        React.createElement("span", { className: "ms-font-xl" }, "Controls testing"),
                        React.createElement(SecurityTrimmedControl_1.SecurityTrimmedControl, { context: this.props.context, level: SecurityTrimmedControl_1.PermissionLevel.currentWeb, permissions: [sp_page_context_1.SPPermission.viewListItems], className: "TestingClass" },
                            React.createElement("p", null, "You have permissions to view list items.")),
                        React.createElement("p", { className: "ms-font-l" }, "File type icon control"),
                        React.createElement("div", { className: "ms-font-m" },
                            "Font icons:\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.font, path: "https://contoso.sharepoint.com/documents/filename.docx" }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.font, path: "https://contoso.sharepoint.com/documents/filename.unknown" }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.font, path: "https://contoso.sharepoint.com/documents/filename.doc" }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.font, application: FileTypeIcon_1.ApplicationType.HTML }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.font, application: FileTypeIcon_1.ApplicationType.Mail }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.font, application: FileTypeIcon_1.ApplicationType.SASS })),
                        React.createElement("div", { className: "ms-font-m" },
                            "Image icons:\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, path: "https://contoso.sharepoint.com/documents/filename.docx" }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, path: "https://contoso.sharepoint.com/documents/filename.unknown" }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, path: "https://contoso.sharepoint.com/documents/filename.pptx?querystring='prop1'&prop2='test'" }),
                            " \u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, application: FileTypeIcon_1.ApplicationType.Word }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, application: FileTypeIcon_1.ApplicationType.PDF }),
                            "\u00A0",
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, path: "https://contoso.sharepoint.com/documents/filename.pdf" })),
                        React.createElement("div", { className: "ms-font-m" },
                            "Icon size tester:",
                            React.createElement(Dropdown_1.Dropdown, { options: sizeOptions, onChanged: this._onIconSizeChange }),
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, size: this.state.imgSize, application: FileTypeIcon_1.ApplicationType.Excel }),
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, size: this.state.imgSize, application: FileTypeIcon_1.ApplicationType.PDF }),
                            React.createElement(FileTypeIcon_1.FileTypeIcon, { type: FileTypeIcon_1.IconType.image, size: this.state.imgSize })),
                        React.createElement("div", { className: "ms-font-m" },
                            "List picker tester:",
                            React.createElement(ListPicker_1.ListPicker, { context: this.props.context, label: "Select your list(s)", placeHolder: "Select your list(s)", baseTemplate: 100, includeHidden: false, multiSelect: true, 
                                // filter="Title eq 'Test List'"
                                onSelectionChanged: this.onListPickerChange })),
                        React.createElement("div", { className: "ms-font-m" },
                            "Field picker list data tester:",
                            React.createElement(ListItemPicker_1.ListItemPicker, { listId: this.state.selectedList, columnInternalName: "Title", itemLimit: 5, context: this.props.context, onSelectedItem: this.listItemPickerDataSelected })),
                        React.createElement("div", { className: "ms-font-m" },
                            "Services tester:",
                            React.createElement(TaxonomyPicker_1.TaxonomyPicker, { allowMultipleSelections: true, termsetNameOrID: "61837936-29c5-46de-982c-d1adb6664b32" // id to termset that has a custom sort
                                , panelTitle: "Select Sorted Term", label: "Service Picker with custom actions", context: this.props.context, onChange: this.onServicePickerChange, isTermSetSelectable: false, termActions: {
                                    actions: [{
                                            title: "Get term labels",
                                            iconName: "LocaleLanguage",
                                            id: "test",
                                            invokeActionOnRender: true,
                                            hidden: true,
                                            actionCallback: function (taxService, term) { return __awaiter(_this, void 0, void 0, function () {
                                                var updateAction;
                                                return __generator(this, function (_a) {
                                                    updateAction = {
                                                        updateActionType: TaxonomyPicker_1.UpdateType.updateTermLabel,
                                                        value: term.Name + " (updated)"
                                                    };
                                                    return [2 /*return*/, updateAction];
                                                });
                                            }); },
                                            applyToTerm: function (term) { return (term && term.Name && term.Name.toLowerCase() === "about us"); }
                                        },
                                    ],
                                    termActionsDisplayMode: termActions_1.TermActionsDisplayMode.buttons,
                                    termActionsDisplayStyle: taxonomyPicker_1.TermActionsDisplayStyle.textAndIcon
                                } }),
                            React.createElement(TaxonomyPicker_1.TaxonomyPicker, { allowMultipleSelections: true, termsetNameOrID: "e813224c-bb1b-4086-b828-3d71434ddcd7" // id to termset that has a default sort
                                , panelTitle: "Select Default Sorted Term", label: "Service Picker", context: this.props.context, onChange: this.onServicePickerChange, isTermSetSelectable: false }),
                            React.createElement(TaxonomyPicker_1.TaxonomyPicker, { initialValues: this.state.initialValues, allowMultipleSelections: true, termsetNameOrID: "b3e9b754-2593-4ae6-abc2-35345402e186", 
                                // anchorId="0ec2f948-3978-499e-9d3f-e51c4494d44c"
                                // disabledTermIds={["943fd9f0-3d7c-415c-9192-93c0e54573fb", "0e415292-cce5-44ac-87c7-ef99dd1f01f4"]}
                                // disabledTermIds={["943fd9f0-3d7c-415c-9192-93c0e54573fb", "73d18756-20af-41de-808c-2a1e21851e44", "0e415292-cce5-44ac-87c7-ef99dd1f01f4"]}
                                // disabledTermIds={["cd6f6d3c-672d-4244-9320-c1e64cc0626f", "0e415292-cce5-44ac-87c7-ef99dd1f01f4"]}
                                // disableChildrenOfDisabledParents={true}
                                panelTitle: "Select Term", label: "Taxonomy Picker", context: this.props.context, onChange: this._onTaxPickerChange, isTermSetSelectable: false }),
                            React.createElement(Button_1.DefaultButton, { text: "Add", onClick: function () {
                                    _this.setState({
                                        initialValues: [{
                                                key: "ab703558-2546-4b23-b8b8-2bcb2c0086f5",
                                                name: "HR",
                                                path: "HR",
                                                termSet: "b3e9b754-2593-4ae6-abc2-35345402e186"
                                            }]
                                    });
                                } })),
                        React.createElement("div", { className: "ms-font-m" },
                            "iframe dialog tester:",
                            React.createElement(Button_1.PrimaryButton, { text: "Open iframe Dialog", onClick: function () { _this.setState({ iFrameDialogOpened: true }); } }),
                            React.createElement(IFrameDialog_1.IFrameDialog, { url: iframeUrl, iframeOnLoad: function (iframe) { console.log('iframe loaded'); }, hidden: !this.state.iFrameDialogOpened, onDismiss: function () { _this.setState({ iFrameDialogOpened: false }); }, modalProps: {
                                    isBlocking: true
                                }, dialogContentProps: {
                                    type: Dialog_1.DialogType.close,
                                    showCloseButton: true
                                }, width: '570px', height: '315px' })),
                        React.createElement("div", { className: "ms-font-m" },
                            "iframe Panel tester:",
                            React.createElement(Button_1.PrimaryButton, { text: "Open iframe Panel", onClick: function () { _this.setState({ iFramePanelOpened: true }); } }),
                            React.createElement(IFramePanel_1.IFramePanel, { url: iframeUrl, type: Panel_1.PanelType.medium, 
                                //  height="300px"
                                headerText: "iframe panel title", closeButtonAriaLabel: "Close", isOpen: this.state.iFramePanelOpened, onDismiss: function () { _this.setState({ iFramePanelOpened: false }); }, iframeOnLoad: function (iframe) { console.log('iframe loaded'); } }))))),
            React.createElement("div", null,
                React.createElement("h3", null, "Carousel with fixed elements:"),
                React.createElement(carousel_1.Carousel, { buttonsLocation: carousel_1.CarouselButtonsLocation.top, buttonsDisplay: carousel_1.CarouselButtonsDisplay.block, contentContainerStyles: ControlsTest_module_scss_1.default.carouselContent, containerButtonsStyles: ControlsTest_module_scss_1.default.carouselButtonsContainer, isInfinite: true, element: this.carouselElements, onMoveNextClicked: function (index) { console.log("Next button clicked: " + index); }, onMovePrevClicked: function (index) { console.log("Prev button clicked: " + index); } })),
            React.createElement("div", null,
                React.createElement("h3", null, "Carousel with triggerPageElement:"),
                React.createElement(carousel_1.Carousel, { buttonsLocation: carousel_1.CarouselButtonsLocation.bottom, buttonsDisplay: carousel_1.CarouselButtonsDisplay.buttonsOnly, contentContainerStyles: ControlsTest_module_scss_1.default.carouselContent, canMoveNext: this.state.canMoveNext, canMovePrev: this.state.canMovePrev, triggerPageEvent: this.triggerNextElement, element: this.state.currentCarouselElement })),
            React.createElement("div", { className: ControlsTest_module_scss_1.default.siteBreadcrumb },
                React.createElement(SiteBreadcrumb_1.SiteBreadcrumb, { context: this.props.context })),
            React.createElement("div", null,
                React.createElement(FilePicker_1.FilePicker, { bingAPIKey: "<BING API KEY>", accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonLabel: "Upload image", buttonIcon: "FileImage", onSave: this._onFilePickerSave, onChanged: function (filePickerResult) { _this.setState({ filePickerResult: filePickerResult }); }, context: this.props.context }),
                this.state.filePickerResult &&
                    React.createElement("div", null,
                        "FileName: ",
                        this.state.filePickerResult.fileName)),
            React.createElement("p", null,
                React.createElement("a", { href: "javascript:;", onClick: this.deleteItem }, "Deletes second item")),
            React.createElement("div", null,
                React.createElement(Progress_1.Progress, { title: 'Progress Test', showOverallProgress: true, showIndeterminateOverallProgress: false, hideNotStartedActions: false, actions: this.state.progressActions, currentActionIndex: this.state.currentProgressActionIndex, longRunningText: 'This operation takes longer than expected', longRunningTextDisplayDelay: 7000, height: '350px', inProgressIconName: 'ChromeBackMirrored' }),
                React.createElement(Button_1.PrimaryButton, { text: 'Start Progress', onClick: this._startProgress })),
            React.createElement("div", { className: "ms-font-l" }, "Grid Layout"),
            React.createElement(GridLayout_1.GridLayout, { ariaLabel: "List of content, use right and left arrow keys to navigate, arrow down to access details.", items: sampleGridData, onRenderGridItem: function (item, finalSize, isCompact) { return _this._onRenderGridItem(item, finalSize, isCompact); } })));
    };
    return ControlsTest;
}(React.Component));
exports.default = ControlsTest;

//# sourceMappingURL=ControlsTest.js.map
