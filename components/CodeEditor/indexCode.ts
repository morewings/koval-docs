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
