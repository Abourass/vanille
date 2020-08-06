import el from './el';
import { createUUID } from './uuid';
export const create = function (tagName, appendTo) {
    const newEl = document.createElement(tagName);
    newEl.id = `${tagName}-${createUUID()}`;
    document.querySelector(appendTo).appendChild(newEl);
    return el(`#${newEl.id}`);
};
export default create;
//# sourceMappingURL=create.js.map