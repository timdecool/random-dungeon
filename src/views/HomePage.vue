<template>
   <h1> Accueil</h1>
  <main class="inner cover" role="main">
    <h3 class="cover-heading">TOR world's</h3>
    <div class="accordion accordion-flush intro" id="accordionFlushExample">
      <div class="accordion-item intro">
        <h2 class="accordion-header intro" id="flush-headingOne">
          <button
            class="intro accordion-button collapsed intro"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Introduction de TOR 📜
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse intro"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body intro">
            Explorez des mondes uniques, créez des héros imprévisibles et forgez des donjons
            épiques. Personnages : Gérez et créez des héros avec des détails uniques. Donjons :
            Devenez le maître du jeu, générez des aventures captivantes. Plongez dans
            l'imprévisible, le passionnant et créez des souvenirs inoubliables. Prêt à vivre
            l'aventure ?
          </div>
        </div>
      </div>
    </div>
    <div class="preview">
      <div class="lead">
        <router-link
          to="/characters"
          class="btn-home btn btn-lg btn-secondary d-flex justify-content-center"
          >Commencez une partie
        </router-link>
        <a href="#" class="btn-home btn btn-lg btn-secondary d-flex justify-content-center"
          >Reprendre la dernière partie ?</a
        >
      </div>
    </div>
  </main>
</template>