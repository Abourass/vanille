import header from './components/header';
import Style from './tools/style';

const theme: Style = new Style(`
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  background: #050801;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
}`)

header('body', 'The Coffee Drip', theme);
