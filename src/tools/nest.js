import el from './el';
import { createUUID } from './uuid';
export const nest = (tagName, appendTo, cb) => {
    const newEl = document.createElement(tagName);
    newEl.id = `${tagName}-${createUUID()}`;
    document.querySelector(appendTo).appendChild(newEl);
    cb(`#${newEl.id}`);
    return el(`#${newEl.id}`);
};
export default nest;
//# sourceMappingURL=nest.js.map