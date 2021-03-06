import { ViewType } from ".";
import { IFile } from "../../../../services/FileBrowserService.types";
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { IFilePickerResult } from "../../FilePicker.types";
export declare enum LoadingState {
    idle = 1,
    loading = 2,
    loadingNextPage = 3,
}
export interface IFileBrowserState {
    loadingState: LoadingState;
    items: IFile[];
    nextPageQueryString: string;
    filePickerResult: IFilePickerResult;
    columns: IColumn[];
    selectedView: ViewType;
}
