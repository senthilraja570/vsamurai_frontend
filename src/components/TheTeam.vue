<template>
  <h2>THE TEAM</h2>
  <div class="team-container row">
    <div class="team-block col-3" v-for="(user, index) in allTeam" :key="index">
      <img :src="user.image" alt="" />
      <div class="team-item">
        <h3>{{ user.name }}</h3>
        <a :href="user.link" target="_blank" class="team-links"
          ><i class="fab fa-twitter team-icon"></i
        ></a>
      </div>
      <h4>{{ user.role }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTeam",
  data() {
    return {
      allTeam: [
        {
          name: "@wardog1_vS",
          role: "FOUNDER",
          link: "https://twitter.com/wardog1_vS",
          image: require("../assets/img/wardog.png"),
        },
        {
          name: "@shaco_vS",
          role: "CO-FOUNDER",
          link: "https://twitter.com/shaco_vS",
          image: require("../assets/img/shaco.png"),
        },
        {
          name: "@SpicycoffeeArt",
          role: "LEAD ARTIST",
          link: "https://twitter.com/SpicycoffeeArt",
          image: require("../assets/img/Archer-export.png"),
        },
        {
          name: "@jacksromart",
          role: "ARTIST AND ANIMATOR",
          link: "https://twitter.com/jacksromart",
          image: require("../assets/img/JackAv.png"),
        },
        {
          name: "@cineNFT",
          role: "LEAD MARKETER AND ADVISOR",
          link: "https://twitter.com/cineNFT",
          image: require("../assets/img/ninja.png"),
        },
        {
          name: "@ernestoporto_",
          role: "COMMUNITY MOD",
          link: "https://twitter.com/ernestoporto_",
          image: require("../assets/img/ernesto.jpg"),
        },
        {
          name: "Building Ideas",
          role: "BLOCKCHAIN DEVELOPERS",
          link: "https://twitter.com/santypk4",
          image: require("../assets/img/everyone.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* THE TEAM */
.team-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-icon {
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
}

.team-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 100px;
}
.team-block {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
}

img {
  width: 200px;
  margin: 10px auto;
  border-radius: 50%;
}

h2 {
  font-family: "pixel-point";
  color: #ef0a0a;
  font-size: 42px;
  text-align: center;
}
h3 {
  font-family: "Raleway";
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 2px;
}
h4 {
  font-family: "pixel-point";
  font-size: 18px;
  color: #04d9c4;
  text-align: center;
}

@media (max-width: 991.98px) {
  h3 {
    font-family: "Raleway";
    font-weight: bold;
    font-size: 22px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }
  h4 {
    font-family: "pixel-point";
    font-size: 18px;
    color: #04d9c4;
    text-align: center;
  }
  img {
    width: 200px;
  }
}

@media (max-width: 625px) {
  h2 {
    font-size: 26px;
  }
}
</style>
