import { changeEmoteInSetResponse } from "../types/operations/changeEmoteInSet";
export declare function changeEmoteInSet(sym: string, id: string, action: "ADD" | "REMOVE", emoteID: string): Promise<changeEmoteInSetResponse>;
