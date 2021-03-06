import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IFile, FilesQueryResult, ILibrary } from "./FileBrowserService.types";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
export declare class FileBrowserService {
    protected itemsToDownloadCount: number;
    protected context: ApplicationCustomizerContext | WebPartContext;
    protected driveAccessToken: string;
    protected mediaBaseUrl: string;
    protected callerStack: string;
    constructor(context: ApplicationCustomizerContext | WebPartContext, itemsToDownloadCount?: number);
    /**
     * Gets files from current sites library
     * @param libraryName
     * @param folderPath
     * @param acceptedFilesExtensions
     */
    getListItems: (libraryName: string, folderPath: string, acceptedFilesExtensions?: string[], nextPageQueryStringParams?: string) => Promise<FilesQueryResult>;
    /**
     * Provides the URL for file preview.
     */
    getFileThumbnailUrl: (file: IFile, thumbnailWidth: number, thumbnailHeight: number) => string;
    /**
     * Gets document and media libraries from the site
     */
    getSiteMediaLibraries: (includePageLibraries?: boolean) => Promise<ILibrary[]>;
    /**
     * Downloads document content from SP location.
     */
    downloadSPFileContent: (absoluteFileUrl: string, fileName: string) => Promise<File>;
    /**
     * Executes query to load files with possible extension filtering
     * @param restApi
     * @param folderPath
     * @param acceptedFilesExtensions
     */
    protected _getListDataAsStream: (restApi: string, folderPath: string, acceptedFilesExtensions?: string[]) => Promise<FilesQueryResult>;
    /**
     * Generates CamlQuery files filter.
     * @param accepts
     */
    protected getFileTypeFilter(accepts: string[]): string;
    /**
     * Generates Files CamlQuery ViewXml
     */
    protected getFilesCamlQueryViewXml: (accepts: string[]) => string;
    /**
     * Converts REST call results to IFile
     */
    protected parseFileItem: (fileItem: any) => IFile;
    protected parseLibItem: (libItem: any) => ILibrary;
    /**
     * Creates an absolute URL
     */
    protected buildAbsoluteUrl: (relativeUrl: string) => string;
    protected processResponse: (fileResponse: any) => void;
}
