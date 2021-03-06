import { ISPService, ILibsOptions } from "./ISPService";
import { ISPLists } from "../common/SPEntities";
export default class SPServiceMock implements ISPService {
    private _includeDelay?;
    private _delayTimeout?;
    constructor(includeDelay?: boolean, delayTimeout?: number);
    /**
    * The mock lists to present to the local workbench
    */
    private static _lists;
    getLibs(options?: ILibsOptions): Promise<ISPLists>;
    /**
    * Locks the thread for the specified amount of time
    * @param ms Milliseconds to wait
    */
    private sleep(ms);
}
