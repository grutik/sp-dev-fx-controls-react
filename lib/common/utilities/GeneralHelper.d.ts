import '../extensions/String.extensions';
export declare const IMG_SUPPORTED_EXTENSIONS = ".gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png,.jxr,.svg";
/**
 * Helper with general methods to simplify some routines
 */
export declare class GeneralHelper {
    /**
     * Trims slash at the end of URL if needed
     * @param url URL
     */
    static trimSlash(url: string): string;
    /**
     * Encodes text
     * @param text text to encode
     */
    static encodeText(text: string): string;
    /**
     * Copy of Microsoft's GetRelativeDateTimeString from SP.dateTimeUtil
     */
    static getRelativeDateTimeString(format: string): string;
    /**
     * Copy of Microsoft's GetLocalizedCountValue from SP.dateTimeUtil.
     * I've tried to rename all the vars to have meaningful names... but some were too unclear
     */
    static getLocalizedCountValue(format: string, first: string, second: number): string;
    /**
     * Extracts text from HTML strings without creating HTML elements
     * @param html HTML string
     */
    static getTextFromHTML(html: string): string;
    /**
     * Checks if value is defined (not null and not undefined)
     * @param value value
     */
    static isDefined(value: any): boolean;
    /**
     * Creates Document element based on Xml string
     * @param xmlString XML string to parse
     */
    static parseXml(xmlString: any): Document;
    /**
     * Returns absoulute domain URL.
     * @param url
     */
    static getAbsoluteDomainUrl(url: string): string;
    static formatBytes(bytes: any, decimals: any): string;
    /**
     * Returns file name without extension.
     */
    static getFileNameWithoutExtension(itemUrl: string): string;
    /**
     * Returns file name with the extension
     */
    static getFileNameFromUrl(itemUrl: string): string;
    static isImage(fileName: string): boolean;
    /**
     * Returns extension of the file
     */
    static getFileExtension(fileName: any): string;
    private static _getEncodedChar(c);
}
