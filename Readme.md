<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Clone - Backend Gateway Engine</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #24292e;
            max-width: 850px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        h1, h2, h3 {
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
            color: #000000;
        }
        h1 { font-size: 2em; display: flex; align-items: center; justify-content: space-between; }
        code {
            font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
            background-color: rgba(27,31,35,0.05);
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 85%;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            border-radius: 6px;
            overflow: auto;
        }
        pre code { background-color: transparent; padding: 0; }
        .badge-group { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
        .badge-group img { height: 28px; }
        .tech-stack-section img { height: 28px; margin-right: 4px; margin-bottom: 8px; }
        .intro-container { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
        .intro-text { flex: 1; }
        
        /* CSS Diagrams Styling */
        .diagram-container {
            background-color: #f8f9fa;
            border: 1px solid #e1e4e8;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: inherit;
        }
        .flow-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        }
        .flow-node {
            background-color: #ffffff;
            border: 2px solid #0077B5;
            border-radius: 6px;
            padding: 12px 16px;
            flex: 1;
            min-width: 140px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }
        .flow-node.db { border-color: #4ea94b; }
        .flow-node.queue { border-color: #FF5733; }
        .flow-node strong { display: block; font-size: 0.9em; color: #333; margin-bottom: 4px; }
        .flow-node span { font-size: 0.8em; color: #666; font-family: monospace; }
        .flow-arrow {
            color: #0077B5;
            font-weight: bold;
            font-size: 1.4em;
            text-align: center;
        }
        
        .system-wins-list { padding-left: 20px; }
        .system-wins-list li { margin-bottom: 12px; }
    </style>
</head>
<body>

    <!-- Main Title Header -->
    <h1>
        <span>🎥 YouTube Clone - Production Core Backend Gateway Engine (<code>backend-Project</code>)</span>
    </h1>

    <!-- Badges Pipeline -->
    <div class="badge-group">
        <img src="https://img.shields.io/badge/Architecture_Blueprint-Eraser.io-0077B5?style=for-the-badge&logo=diagram&logoColor=white" alt="Eraser Blueprint">
        <img src="https://img.shields.io/github/repo-size/ItsKartik12/backend-Project?style=for-the-badge&color=D14836" alt="Repo Size">
        <img src="https://img.shields.io/github/languages/top/ItsKartik12/backend-Project?style=for-the-badge&color=323330" alt="Top Language">
        <img src="https://img.shields.io/github/issues/ItsKartik12/backend-Project?style=for-the-badge&color=0077B5" alt="Issues">
    </div>

    <!-- Core Highlights Section -->
    <div class="intro-container">
        <div class="intro-text">
            <ul>
                <li>🔭 <b>Core Focus:</b> Building modern, high-performance, non-blocking asynchronous streaming engines.</li>
                <li>⚡ <b>System Wins:</b> Zero write-lock contention using strategic in-memory Redis buffers.</li>
                <li>🧠 <b>Design Pattern:</b> Third Normal Form (3NF) relational constraints with fully inverted indexing strategies.</li>
                <li>🛠️ <b>Queue Topology:</b> Decoupled background workers driving heavy computational transaction sync loops.</li>
                <li>💬 <b>Architecture Focus:</b> Microtask queue distribution, high-concurrency event loops, and adaptive stream chunking pipelines.</li>
            </ul>
        </div>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndm5oZzR4eG5oZzR4eG5oZzR4eG5oZzR4eG5oZzR4eG5oJnB0X2lkPTEmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/SWoSkN6DxTszqIKEqv/giphy.gif" width="160" height="160" style="border-radius: 8px;" alt="Streaming Visual Engine">
    </div>

    <hr/>

    <!-- Technical Stack Profiles -->
    <h2>💻 Engine Tech Stack</h2>
    <div class="tech-stack-section">
        <h3>🚀 Core Runtime & Frameworks</h3>
        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS">
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
        <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express">

        <h3>⚙️ Distributed Cache & Datastores</h3>
        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
        <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis">
        <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">

        <h3>📦 Ingestion, Workers & Environments</h3>
        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
        <img src="https://img.shields.io/badge/BullMQ-FF5733?style=for-the-badge&logo=redis&logoColor=white" alt="BullMQ">
        <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS">
        <img src="https://img.shields.io/badge/FFmpeg-0078D7?style=for-the-badge&logo=ffmpeg&logoColor=white" alt="FFmpeg">
    </div>

    <hr/>

    <!-- System Architecture & CSS Flows -->
    <h2>🏗️ System Architecture & Data Flows</h2>

    <h3>📈 High-Concurrency View Counter Engine</h3>
    <p>To eliminate heavy database row locking under viral traffic patterns, mutations scale asynchronously inside an atomic, in-memory buffer:</p>

    <div class="diagram-container">
        <div class="flow-wrapper">
            <div class="flow-node">
                <strong>Incoming Views</strong>
                <span>User Click Event</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node">
                <strong>O(1) Memory Cache</strong>
                <span>Redis INCRBY</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node queue">
                <strong>Background Worker</strong>
                <span>BullMQ Batch Sweeper</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node db">
                <strong>Persistent Storage</strong>
                <span>MongoDB Bulk Write</span>
            </div>
        </div>
    </div>

    <h3>🎬 Distributed Video Ingestion & HLS Transcoding Pipeline</h3>
    <p>Raw heavy multi-part media uploads bypass mainstream processing blocks using a clean, distributed queue pipeline:</p>

    <div class="diagram-container">
        <div class="flow-wrapper">
            <div class="flow-node">
                <strong>Client App</strong>
                <span>Raw MP4 Payload</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node">
                <strong>Express Gateway</strong>
                <span>Multer Disk Storage</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node queue">
                <strong>BullMQ Pipeline</strong>
                <span>Redis State Management</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node queue">
                <strong>Processing Pod</strong>
                <span>FFmpeg HLS Splitting</span>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-node db">
                <strong>Content CDN</strong>
                <span>AWS S3 / CloudFront</span>
            </div>
        </div>
    </div>

    <hr/>

    <!-- Structural Optimization Matrix -->
    <h2>🚀 Key System Optimizations</h2>
    <ul class="system-wins-list">
        <li><b>Atomic View Tracking Buffer:</b> High-velocity view tracking completely bypasses active database connections. Transactions execute on $\mathcal{O}(1)$ runtime memory containers inside a Redis cache using atomic <code>INCRBY</code> operations, completely resolving high-concurrency database row locking.</li>
        <li><b>Logarithmic B-Tree Index Routing:</b> Full collection scans ($\mathcal{O}(N)$ computational penalties) are eliminated by structuring compound text-matching metrics across core properties (<code>title</code> and <code>description</code>), enforcing metadata checks down to rapid $\mathcal{O}(\log N)$ speeds.</li>
        <li><b>Inverted Data Scaling Boundaries:</b> Nested array models inside structural documents are dropped entirely. Sub-documents link via inverted relational models, preventing data clusters from hitting maximum 16MB engine capacity thresholds.</li>
        <li><b>Asynchronous Media Processing Pipeline:</b> Large multi-part raw media uploads are chunked via Multer, immediately queued through <code>BullMQ</code>, and broken down into adaptive bit-rate HLS segments (<code>.m3u8</code> streams) via micro-worker tasks using <code>FFmpeg</code>.</li>
    </ul>

    <hr/>

    <!-- Architectural Directory Trees -->
    <h2>📁 Repository Structural Anatomy</h2>

<pre><code>backend-Project/
├── src/
│   ├── config/          # Client connection initializers (Mongoose Core, Redis Context)
│   ├── controllers/     # Event lifecycle endpoints (Auth, Video Stream, Comments)
│   ├── middlewares/     # JWT verification trackers, Asynchronous payload rate-limiters
│   ├── models/          # Strictly typed structural Mongoose models with complex indexing
│   ├── routes/          # Decoupled tree modular API layout routes (/api/v1/*)
│   ├── services/        # Transcoding triggers, background queuing orchestrators
│   └── index.ts         # Server configuration root & macro process event handlers
├── docker-compose.yml   # Multi-container operations engine configuration
├── tsconfig.json        # Strict compilation execution rulesets
└── package.json         # Module definitions & infrastructure engine bounds</code></pre>

    <hr/>

    <!-- Setup Environment Engine -->
    <h2>⚡ Setup & Run Environment</h2>

<pre><code># 1. Boot up the integrated datastores using Docker Containers
docker-compose up -d

# 2. Build local node configurations
npm install

# 3. Fire up the development server with live compilation tracking
npm run dev</code></pre>

    <hr/>

    <!-- Live Footprint Footers -->
    <p align="center">
        <b>Repository Access Tracking</b><br/>
        <img src="https://komarev.com/ghpvc/?username=ItsKartik12-backend-project&label=Traffic&color=0077B5&style=flat-square" alt="Traffic Vector Tracker" />
    </p>

</body>
</html>
