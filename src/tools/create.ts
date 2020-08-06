import el, {toolsInterface} from './el';
import {createUUID} from './uuid';

export const create = function(tagName: string, appendTo: string): toolsInterface {
  const newEl: HTMLElement = document.createElement(tagName);
  newEl.id = `${tagName}-${createUUID()}`;
  document.querySelector(appendTo).appendChild(newEl);
  return el(`#${newEl.id}`);
};
export default create;
