<template>
  <div class="landing">
    <div class="glow-effect"></div>

    <section class="hero">
      <div class="avatar">
        <div class="avatar-ring">
          <div class="avatar-placeholder">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="30" r="14" fill="#4a5568"/>
              <ellipse cx="40" cy="62" rx="22" ry="16" fill="#4a5568"/>
            </svg>
          </div>
        </div>
      </div>

      <h1 class="name">De Zéro à Proprio</h1>
      <p class="bio">
        Créateur de contenu YouTube.<br>
        Je t'aide à développer tes projets et atteindre tes objectifs.
      </p>
    </section>

    <section class="stats">
      <div class="stat">
        <span class="stat-number">Newsletter</span>
        <span class="stat-label">Rejoins la communauté</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">YouTube</span>
        <span class="stat-label">Découvre les vidéos</span>
      </div>
    </section>

    <section class="cards">
      <router-link to="/newsletter" class="card">
        <div class="card-icon newsletter-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 4L12 13 2 4"/>
          </svg>
        </div>
        <div class="card-content">
          <h3>Newsletter</h3>
          <p>Reçois mes idées et conseils directement dans ta boîte mail</p>
        </div>
        <div class="card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </router-link>

      <a href="https://www.youtube.com/@dezeroaproprio" target="_blank" rel="noopener noreferrer" class="card">
        <div class="card-icon youtube-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <div class="card-content">
          <h3>YouTube</h3>
          <p>Découvre mon univers en vidéo</p>
        </div>
        <div class="card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </a>
    </section>

    <footer class="footer">
      <p>&copy; {{ currentYear }} De Zéro à Proprio. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem 2rem;
  position: relative;
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* Hero */
.hero {
  text-align: center;
  z-index: 1;
  margin-bottom: 2.5rem;
}

.avatar {
  margin-bottom: 1.5rem;
}

.avatar-ring {
  width: 110px;
  height: 110px;
  margin: 0 auto;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar-placeholder svg {
  width: 60px;
  height: 60px;
}

.name {
  font-size: 2rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.bio {
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 420px;
  margin: 0 auto;
}

/* Stats */
.stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  z-index: 1;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f5f9;
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 0.2rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #334155;
}

/* Cards */
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  margin-bottom: 3rem;
}

.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s ease;
  cursor: pointer;
}

.card:hover {
  background: #253349;
  border-color: #475569;
  transform: translateY(-2px);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.newsletter-icon {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
}

.youtube-icon {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #fff;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 0.25rem;
}

.card-content p {
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.4;
}

.card-arrow {
  color: #475569;
  flex-shrink: 0;
}

.card-arrow svg {
  width: 20px;
  height: 20px;
}

.card:hover .card-arrow {
  color: #94a3b8;
}

/* Footer */
.footer {
  margin-top: auto;
  z-index: 1;
}

.footer p {
  font-size: 0.75rem;
  color: #475569;
  margin: 0;
}

@media (max-width: 480px) {
  .landing {
    padding: 2rem 1rem 1.5rem;
  }

  .name {
    font-size: 1.6rem;
  }

  .bio {
    font-size: 0.9rem;
  }

  .stats {
    gap: 1.25rem;
  }

  .card {
    padding: 1rem 1.25rem;
  }
}
</style>
