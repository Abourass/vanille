export declare interface toolsInterface {
    grab(tempSelector: string): Element;
    toggleClass(className: string): toolsInterface;
    addClass(className: (string[] | string)): toolsInterface;
    removeClass(className: (string[] | string)): toolsInterface;
    replaceWith(string: string): toolsInterface;
    replaceWithElement(tagName: string, idForNewElement?: (string | null)): toolsInterface;
    html(string?: (string | null)): (string | toolsInterface);
    remove(): toolsInterface;
    set(setObj: Object): toolsInterface;
    child(HTMLElement: HTMLElement, insertAt?: ("append" | "prepend" | null)): toolsInterface;
    children(): NodeListOf<ChildNode>;
    text(txt: string | Array<any> | Object | number): toolsInterface;
    textChild(string: string | Array<any> | Object | number): toolsInterface;
    data(dataSuffix: string): string;
    id(idForEl?: string): string | toolsInterface;
    on(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
    off(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
}
export declare const el: (selector: string) => toolsInterface;
export default el;
