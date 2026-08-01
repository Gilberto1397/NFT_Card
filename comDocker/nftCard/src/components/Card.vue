<script setup>

</script>

<template>
  <section class="card">
    <div class="card__info">
      <div class="card__coin-image-wrapper">
        <img class="card__coin-image" src="../assets/images/image-equilibrium.jpg" alt="Ethereum"/>
      </div>
      <h3 class="card__title">Equilibrium #3429</h3>
      <p class="card__description">Our Equilibrium collection promotes balance and calm.</p>
    </div>

    <div class="card__meta">
      <div class="card__meta-item">
        <img class="card__meta-icon" src="../assets/images/icon-ethereum.svg" alt="Ethereum"/>
        <p class="card__price">0.041 ETH</p>
      </div>

      <div class="card__meta-item">
        <img class="card__meta-icon" src="../assets/images/icon-clock.svg" alt="Clock"/>
        <p class="card__time">3 days left</p>
      </div>
    </div>

    <div class="card__divider"></div>

    <div class="card__footer">
      <img class="card__footer-avatar" src="../assets/images/image-avatar.png" alt="Clock"/>
      <p class="card__footer-text">Creation of <span class="card__author">John Doe</span></p>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: #15273F;
  width: 70%;
  max-width: 290px;
  border-radius: 8px;
  font-family: sans-serif;
  padding: 15px;
}

.card__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

/*
.card__coin-image {
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  border-radius: 8px;
  margin: 0 auto 20px auto;
  background-image: url('../assets/images/icon-view.svg');
  background-repeat: no-repeat;
  background-position: center;
} */

.card__coin-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  margin: 0 auto 20px auto;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.card__coin-image {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.card__coin-image-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../assets/images/icon-view.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 48px;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card__coin-image-wrapper:hover::after,
.card__coin-image-wrapper:focus-within::after {
  opacity: 1;
}

.card__coin-image-wrapper:hover .card__coin-image,
.card__coin-image-wrapper:focus-within .card__coin-image {
  transform: scale(1.03);
  filter: brightness(0.8);
}

.card__title {
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 15px;
  cursor: pointer;
}

.card__description {
  font-size: 12px;
  color: #8BACD9;
  margin-bottom: 15px;
}

.card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.card__price {
  font-size: 12px;
  font-weight: bold;
  color: #0BA4AA;
  margin: 0;
}

.card__time {
  font-size: 12px;
  color: #8BACD9;
  margin: 0;
}

.card__divider {
  background-color: #1B4546;
  height: 0.5px;
  margin-bottom: 10px;
}

.card__footer {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8BACD9;
  font-size: 12px;
}

.card__footer-avatar {
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
}

.card__author {
  color: white;
  cursor: pointer;
}

/* Media Query */
@media (min-width: 768px) {
  .card__description, .card__price, .card__time, .card__footer {
    font-size: 16px;
  }

  .card__title {
    font-size: 18px;
  }
}
</style>