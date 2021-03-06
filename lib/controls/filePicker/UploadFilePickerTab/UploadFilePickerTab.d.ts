/// <reference types="react" />
import * as React from 'react';
import { IUploadFilePickerTabProps, IUploadFilePickerTabState } from '.';
export default class UploadFilePickerTab extends React.Component<IUploadFilePickerTabProps, IUploadFilePickerTabState> {
    constructor(props: IUploadFilePickerTabProps);
    render(): React.ReactElement<IUploadFilePickerTabProps>;
    /**
     * Gets called when a file is uploaded
     */
    private _handleFileUpload;
    /**
     * Saves base64 encoded image back to property pane file picker
     */
    private _handleSave;
    /**
     * Closes tab without saving
     */
    private _handleClose;
}
