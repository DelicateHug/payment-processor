const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Automated Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'payment-processor',
    framework: 'Node.js Express',
    handler: 'developer',
    domain: 'payment-processor.dev.opendp.delicatehug.com',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Interactive Web Dashboard
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>payment-processor • OpenDP Live Service</title>
  <style>
    :root {
      --bg: #070a13;
      --card-bg: rgba(13, 21, 39, 0.85);
      --card-border: rgba(0, 240, 255, 0.25);
      --cyan: #00f0ff;
      --teal: #00ffc2;
      --text: #f8fafc;
      --muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 32px;
      max-width: 620px;
      width: 100%;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-family: monospace;
      font-weight: 700;
      background: rgba(0, 240, 255, 0.15);
      color: var(--cyan);
      margin-bottom: 16px;
    }
    h1 { font-size: 24px; font-weight: 800; margin-bottom: 8px; color: var(--cyan); }
    p { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
    .meta-box {
      background: #090e1a;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 10px;
      padding: 16px;
      font-family: monospace;
      font-size: 12px;
    }
    .meta-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .meta-row:last-child { margin-bottom: 0; }
    .meta-label { color: var(--muted); }
    .meta-val { color: var(--teal); font-weight: 700; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">FRAMEWORK: NODE.JS EXPRESS</div>
    <h1>🚀 payment-processor Online</h1>
    <p>This microservice is live and healthy on AWS EC2, provisioned by OpenDP zero-trust pipeline.</p>
    <div class="meta-box">
      <div class="meta-row"><span class="meta-label">Domain</span><span class="meta-val">payment-processor.dev.opendp.delicatehug.com</span></div>
      <div class="meta-row"><span class="meta-label">Handler</span><span class="meta-val">@developer</span></div>
      <div class="meta-row"><span class="meta-label">Health Check</span><span class="meta-val"><a href="/health" style="color:var(--teal)">/health (HTTP 200 OK)</a></span></div>
      <div class="meta-row"><span class="meta-label">Environment</span><span class="meta-val">staging</span></div>
    </div>
  </div>
</body>
</html>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
