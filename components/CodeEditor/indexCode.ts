export const indexCode = `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from 'koval-ui';
import 'koval-ui/dist/style.css';
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider>
        <div style={{padding: '18px'}}>
          <App />
        </div>
    </Provider>
  </StrictMode>
);`;

export const appCode = `import {Provider} from 'koval-ui';
import 'koval-ui/dist/style.css';
import '../styles.css';
export default function MyApp({ Component, pageProps }) {
  return <div className="wrapper"><Provider><Component {...pageProps} /></Provider></div>
}`;

export const stylesCode = `body {
  margin: 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
}
#__next{
  display: contents;
}
.wrapper {
  box-sizing: border-box;
  margin: auto;
  padding: 1rem;
  max-height: 100%;
}
`;
