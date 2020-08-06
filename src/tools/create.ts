import el, {toolsInterface} from './el.js';
import {createUUID} from './uuid.js';

export const create = function(tagName: string, appendTo: string): toolsInterface {
  const newEl: HTMLElement = document.createElement(tagName);
  newEl.id = `${tagName}-${createUUID()}`;
  document.querySelector(appendTo).appendChild(newEl);
  return el(`#${newEl.id}`);
};
export default create;
