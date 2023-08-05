import React from 'react';

function ReactAppWithIframe() {
  return (
    <div>
      <h1>So Webpage is the main parent</h1>
      <div>
      <iframe title="Webpage X" src="https://test1l.vercel.app" width="800" height="600"></iframe>
        <button onClick={() => window.location.href = 'https://www.google.com'}>Go to Google</button>
        <button onClick={() => window.location.href = 'https://www.facebook.com'}>Go to Facebook</button>
        <button onClick={() => window.location.href = 'https://www.youtube.com'}>Go to YouTube</button>
      </div>
    </div>
    
  );
}

export default ReactAppWithIframe;
