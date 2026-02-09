<template>
  <div class="newsletter-page">
    <div class="glow-effect"></div>

    <div class="container" v-if="!submitted">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Retour
      </router-link>

      <div class="form-header">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 4L12 13 2 4"/>
          </svg>
        </div>
        <h1>Rejoins la Newsletter</h1>
        <p>Reçois mes meilleurs conseils et idées directement dans ta boîte mail. Pas de spam, que du contenu de qualité.</p>
      </div>

      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="form"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p class="hidden" aria-hidden="true">
          <label>Ne pas remplir : <input name="bot-field" /></label>
        </p>

        <div class="form-group">
          <label for="name">Prénom</label>
          <input
            id="name"
            type="text"
            name="name"
            v-model="formData.name"
            placeholder="Ton prénom"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            v-model="formData.email"
            placeholder="ton@email.com"
            required
          />
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">S'inscrire gratuitement</span>
          <span v-else>Envoi en cours...</span>
        </button>
      </form>
    </div>

    <div class="container success-container" v-else>
      <div class="success-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h1>Merci {{ formData.name }} !</h1>
      <p>Tu es maintenant inscrit(e) à la newsletter. Vérifie ta boîte mail pour confirmer ton inscription.</p>
      <router-link to="/" class="back-btn">Retour à l'accueil</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
})

const isSubmitting = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  try {
    const body = new URLSearchParams({
      'form-name': 'newsletter',
      name: formData.name,
      email: formData.email,
    })
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    submitted.value = true
  } catch {
    alert("Une erreur est survenue. Veuillez réessayer.")
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.newsletter-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.container {
  width: 100%;
  max-width: 440px;
  z-index: 1;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: #f1f5f9;
}

.back-link svg {
  width: 18px;
  height: 18px;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.icon-wrapper svg {
  width: 28px;
  height: 28px;
}

.form-header h1 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.75rem;
}

.form-header p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
  margin: 0;
}

.hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #cbd5e1;
}

.form-group input {
  padding: 0.85rem 1rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  color: #f1f5f9;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input::placeholder {
  color: #475569;
}

.form-group input:focus {
  border-color: #3b82f6;
}

.submit-btn {
  margin-top: 0.5rem;
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Success state */
.success-container {
  text-align: center;
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.success-icon svg {
  width: 32px;
  height: 32px;
}

.success-container h1 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.75rem;
}

.success-container p {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
  margin: 0 0 2rem;
}

.back-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  color: #f1f5f9;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.back-btn:hover {
  background: #253349;
  border-color: #475569;
}

@media (max-width: 480px) {
  .form-header h1 {
    font-size: 1.35rem;
  }
}
</style>
