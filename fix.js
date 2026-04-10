const fs = require('fs');
let css = fs.readFileSync('d:/naiks_assignment/ShopAnalytics/style.css', 'utf8');

const targetIdx = css.indexOf('.login-card {');
if (targetIdx === -1) {
    console.log('Could not find .login-card');
    process.exit(1);
}

const newCss = css.substring(0, targetIdx) + `.login-card { background: var(--card-bg); width: 100%; max-width: 420px; padding: 48px; border-radius: var(--radius-lg); border: 1px solid var(--border-2); box-shadow: var(--shadow-lg); transition: all 0.3s; }
.login-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.4); border-color: var(--accent-1); }
.login-header { margin-bottom: 32px; }
.login-title { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
.login-subtitle { color: var(--text-muted); font-size: 14px; }
.form-group { margin-bottom: 20px; text-align: left; }
.form-label { display: block; font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
.form-input { width: 100%; padding: 14px 18px; background: var(--bg-3); border: 1px solid var(--border); border-radius: 12px; color: white; outline: none; transition: all 0.2s; font-size: 14px; }
.form-input:focus { border-color: var(--accent-1); background: var(--bg-2); box-shadow: 0 0 0 4px rgba(99,102,241,0.1); }
.btn-login { width: 100%; padding: 14px; margin-top: 12px; font-size: 15px; }

/* ─── Landing Page (3D Scroll) ──────────────────────────────── */
.landing-container {
    height: 500vh;
    color: white; 
    background: #000;
}

#hero-lightpass {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.05);
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    filter: blur(8px);
}

.landing-overlay {
    position: fixed;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%);
    z-index: 2;
}

.landing-content {
    position: relative;
    z-index: 10;
    width: 100%;
}

.landing-hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
}

.landing-title {
    font-size: 80px;
    font-weight: 900;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #fff, #a5b4fc);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 4px 20px rgba(99,102,241,0.5));
}

@media (max-width: 768px) {
    .landing-title { font-size: 56px; }
    .landing-section h2 { font-size: 40px !important; }
}

.landing-subtitle {
    font-size: 24px;
    color: #e2e8f0;
    font-weight: 500;
    margin-bottom: 30px;
}

.landing-text {
    font-size: 16px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.scroll-indicator {
    margin-top: 20px;
    font-size: 24px;
    color: #a5b4fc;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-15px); }
    60% { transform: translateY(-8px); }
}

.landing-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 40px;
}

.landing-section h2 {
    font-size: 56px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.landing-section p {
    font-size: 22px;
    color: #cbd5e1;
    max-width: 600px;
    line-height: 1.6;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.last-section {
    background: radial-gradient(circle at center, rgba(99,102,241,0.2) 0%, transparent 70%);
}

.btn-get-started {
    font-size: 18px;
    padding: 16px 48px;
    border-radius: 30px;
    margin-top: 30px;
    box-shadow: 0 10px 30px rgba(99,102,241,0.5);
}

.btn-get-started:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 40px rgba(99,102,241,0.7);
}
`;

fs.writeFileSync('d:/naiks_assignment/ShopAnalytics/style.css', newCss);
console.log('Fixed style.css success');
