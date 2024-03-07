<template>
  <div class="about">
    <section class="about-section">
      <div class="about-content">
        <h2>Objetivo</h2>
        <p>Nossa aplicação Vue.js foi criada para explorar os quadrinhos da Marvel. Utilizando a API oficial da Marvel, oferecemos informações atualizadas sobre quadrinhos, criadores, personagens e muito mais.</p>
      </div>
      <img src="@/assets/comics.jpeg" alt="Ilustração de quadrinhos" class="about-image" />
    </section>

    <section class="about-section">
      <div class="about-content">
        <h2>Desenvolvimento</h2>
        <ul>
          <li>Desenvolvedor Frontend: Higino Perotti Neto</li>
        </ul>
      </div>
      <img src="@/assets/team.jpeg" alt="Ilustração da equipe de desenvolvimento" class="about-image" />
    </section>

    <section class="about-section">
      <div class="about-content">
        <h2>Tecnologias utilizadas</h2>
        <ul>
          <li>Vue.js 3</li>
          <li>Vue Router</li>
          <li>Vuex</li>
          <li>Axios para requisições HTTP</li>
        </ul>
      </div>
      <img src="@/assets/technologies.jpeg" alt="Ilustração de tecnologias utilizadas" class="about-image" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  padding: 20px;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    color: #3498db;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
}

.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  .about-content {
    max-width: 600px;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: #666;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      font-size: 1rem;
      margin-bottom: 8px;
      color: #888;
    }
  }

  .about-image {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
