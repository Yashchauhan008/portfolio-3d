const oM = [
    {
      id: 0,
      name: "Project Hub",
      description: "Coffee Shop Website",
      image: "images/projects/projecthub.png",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://projecthubb.vercel.app/",
      alt: "Coffee Shop Website",
    },
    {
      id: 1,
      name: "krushigram",
      description:
        "Krushigram is an e-commerce platform for farmers, developed during a hackathon at DA-IICT.It aims to empower farmers through fair trade.",
      image: "images/projects/krushigram.png",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://krushigram.vercel.app/",
      alt: "Coffee Shop Website",
    },
    {
      id: 2,
      name: "Study Buddy",
      description: "LMS for teaching assistant",
      image: "images/projects/studybuddy.jpeg",
      tags: ["javascript", "react", "mongodb", "express"],
      liveview: "https://studybuddyy.vercel.app/",
      alt: "Digital Marketing Agency",
    },
    {
      id: 3,
      name: "Open Talk",
      description: "Affiliate Marketing and earning Website",
      image: "images/projects/opentalk.jpeg",
      tags: ["react", "mongodb", "express"],
      liveview: "https://opentalk1.netlify.app/",
      alt: "Affiliate Marketing and earning Website",
    },
    {
      id: 4,
      name: "Randomizer",
      description: "Fitness Institute",
      image: "images/projects/randomizer.jpg",
      tags: ["html", "css", "javascript", "react", "game"],
      liveview: "https://randomizerr.vercel.app/",
      alt: "Fitness Institute",
    },
    {
      id: 5,
      name: "Crypto Tracker",
      description: "A cryptocurrency tracking dashboard",
      image: "images/projects/cryptotracker.png",
      tags: ["react", "javascript", "api"],
      liveview: "https://cryptotrackerr.vercel.app/",
      alt: "Crypto Tracker Dashboard",
    },
    {
      id: 6,
      name: "Weather App",
      description: "Real-time weather application",
      image: "images/projects/weatherapp.png",
      tags: ["javascript", "html", "css", "api"],
      liveview: "https://weatherappp.vercel.app/",
      alt: "Real-time Weather Application",
    },
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  