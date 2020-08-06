import create from '../tools/create';
import {toolsInterface} from '../tools/el';
import Style from '../tools/style';

export const header = (appendTo: string, title: string, theme: Style): toolsInterface => {
  theme.add(`
.header {
  display: flex;
  justify-content: center;
}
.title {
  padding: 25px 30px;
  margin: 40px 0;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
}
.title:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
  0 0 200px #03e9f4;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.title:nth-child(1) {
  filter: hue-rotate(110deg);
}

.title span {
  position: absolute;
  display: block;
}
.title span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}

@keyframes animate1 {
  0% { left: -100%; }
  50%,
  100% { left: 100%; }
}`)

  const spanFactory = (): HTMLSpanElement => document.createElement('span')

  const out = create('div', appendTo).addClass('header').id()
  return create('span', `#${out as string}`)
    .text(title)
    .addClass('title')
    .child(spanFactory(), 'prepend')
    .child(spanFactory(), 'prepend')
    .child(spanFactory(), 'prepend')
    .child(spanFactory(), 'prepend')
}
export default header;
