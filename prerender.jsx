// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router'; // v7 server entry
// import App from './src/App.jsx';

// export async function prerender({ url = '/' }) {
//   const stream = await ReactDOMServer.renderToReadableStream(
//     <StaticRouter location={url}>
//       <App />
//     </StaticRouter>
//   );
//   await stream.allReady;
//   const html = await new Response(stream).text();
//   return { html };
// }

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router';
import App from './src/App.jsx';

export async function prerender({ url = '/' }) {
  const stream = await ReactDOMServer.renderToReadableStream(
    <StaticRouter location={url}>
      {/* Prove Routes context works */}
      <Routes>
        <Route path="*" element={<div>_router_ok_2_</div>} />
      </Routes>

      {/* Now render your app */}
      <App />
    </StaticRouter>
  );
  await stream.allReady;
  const html = await new Response(stream).text();
  return { html };
}