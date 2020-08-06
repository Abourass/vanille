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
  id(idForEl?: string): string | toolsInterface
  on(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface
  off(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
}

export const el = function(selector: string){
  let element: Element;
  const tools: toolsInterface = {
    grab(tempSelector: string): Element {
      if (element) return element;
      return document.querySelector(tempSelector);
    },
    toggleClass(className: string): toolsInterface {
      element.classList.toggle(className);
      return this;
    },
    addClass(className: string[] | string): toolsInterface {
      if (Array.isArray(className)){
        className.forEach((singleClass: string): void => element.classList.add(singleClass));
      } else {
        element.classList.add(className);
      }
      return this;
    },
    removeClass(className: string[] | string): toolsInterface {
      if (Array.isArray(className)){
        className.forEach((singleClass: string): void => element.classList.remove(singleClass));
      } else {
        element.classList.remove(className);
      }
      return this;
    },
    replaceWith(string: string): toolsInterface {
      element.outerHTML = string;
      return this;
    },
    replaceWithElement(tagName: string, idForNewElement: string | null = null): toolsInterface {
      const newEl: HTMLElement = document.createElement(tagName);
      const idToUse: string = idForNewElement || element.id;
      newEl.id = idToUse;
      element.parentNode.replaceChild(newEl, element);
      return el(`#${idToUse}`);
    },
    html(string: string | null = null): string | toolsInterface {
      if (!string) return element.innerHTML;
      element.innerHTML = string;
      return this;
    },
    remove(): toolsInterface {
      element.parentNode.removeChild(element);
      return this;
    },
    set(setObj: Object): toolsInterface {
      Object.keys(setObj).forEach((key: string): void => {
        element.setAttribute(key, setObj[key as keyof typeof setObj] as any);
      });
      return this;
    },
    child(HTMLElement: HTMLElement, insertAt: 'append' | 'prepend' | null = null): toolsInterface {
      if (insertAt === 'append' || insertAt == null) { element.append(HTMLElement); }
      if (insertAt === 'prepend'){ element.prepend(HTMLElement); }
      return this;
    },
    children(): NodeListOf<ChildNode> {
      return element.childNodes;
    },
    text(txt: string | Array<any> | Object | number): toolsInterface {
      element.textContent = txt.toString();
      return this;
    },
    textChild(string: string | Array<any> | Object | number): toolsInterface {
      const textEl: Text = document.createTextNode(string.toString());
      element.appendChild(textEl);
      return this;
    },
    id(idForEl: string | null = null): toolsInterface | string {
      if (idForEl){
        element.id = idForEl
        return this
      }
      return element.id;
    },
    data(dataSuffix: string): string {
      return element.getAttribute(`data-${dataSuffix}`);
    },
    on(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface {
      element.addEventListener(eventName, eventHandler);
      return this;
    },
    off(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface {
      element.removeEventListener(eventName, eventHandler);
      return this;
    },
  };
  element = tools.grab(selector);
  return tools;
}
export default el;
