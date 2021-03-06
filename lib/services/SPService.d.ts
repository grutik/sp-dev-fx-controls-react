import { ISPService, ILibsOptions } from "./ISPService";
import { ISPLists } from "../common/SPEntities";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ExtensionContext } from "@microsoft/sp-extension-base";
export default class SPService implements ISPService {
    private _context;
    constructor(_context: WebPartContext | ExtensionContext);
    /**
     * Get lists or libraries
     *
     * @param options
     */
    getLibs(options?: ILibsOptions): Promise<ISPLists>;
    /**
     * Get List Items
     */
    getListItems(filterText: string, listId: string, internalColumnName: string, keyInternalColumnName?: string, webUrl?: string): Promise<any[]>;
    /**
     * Get list item attachments
     *
     * @param listId
     * @param itemId
     * @param webUrl
     */
    getListItemAttachments(listId: string, itemId: number, webUrl?: string): Promise<any[]>;
    /**
     * Delete attachment
     *
     * @param fileName
     * @param listId
     * @param itemId
     * @param webUrl
     */
    deleteAttachment(fileName: string, listId: string, itemId: number, webUrl?: string): Promise<void>;
    /**
     * Add attachment
     *
     * @param listId
     * @param itemId
     * @param fileName
     * @param file
     * @param webUrl
     */
    addAttachment(listId: string, itemId: number, fileName: string, file: File, webUrl?: string): Promise<void>;
    /**
     * Get attachement for list item
     *
     * @param listId
     * @param itemId
     * @param fileName
     * @param webUrl
     */
    getAttachment(listId: string, itemId: number, fileName: string, webUrl?: string): Promise<any>;
    /**
     * Check if the attachment exists
     *
     * @param listId
     * @param itemId
     * @param fileName
     * @param webUrl
     */
    checkAttachmentExists(listId: string, itemId: number, fileName: string, webUrl?: string): Promise<any>;
    /**
     * Get the list name
     *
     * @param listId
     * @param webUrl
     */
    getListName(listId: string, webUrl?: string): Promise<string>;
    /**
     * Get the list server relative url
     *
     * @param listId
     * @param webUrl
     */
    getListServerRelativeUrl(listId: string, webUrl?: string): Promise<string>;
}
