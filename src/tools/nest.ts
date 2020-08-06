import el, {toolsInterface} from './el';
import {createUUID} from './uuid';

export const nest = (tagName: string, appendTo: string, cb: (id: string) => void): toolsInterface => {
  const newEl: HTMLElement = document.createElement(tagName);
  newEl.id = `${tagName}-${createUUID()}`;
  document.querySelector(appendTo).appendChild(newEl);
  cb(`#${newEl.id}`);
  return el(`#${newEl.id}`);
};
export default nest;
