document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_CONFIG = {
    HEART_COUNT: {
      MOBILE: 3,
      DESKTOP: 6,
    },
    HEART_COLORS: ["#ff9999", "#ffb3ba", "#ffc8dd", "#bae1ff", "#a2d2ff"],
    HEART_SIZE: {
      MIN: 10,
      MAX: 20,
    },
    ANIMATION_DURATION: 1000,
    MAX_HEARTS: 30,
    MOVE_RANGE: {
      X: 100,
      Y: 100,
    },
    EASING: "easeOutQuad",
  };

  function mergeConfig(defaultConfig, externalConfig) {
    const merged = JSON.parse(JSON.stringify(defaultConfig));

    function mergeObjects(target, source) {
      for (const key in source) {
        if (
          typeof source[key] === "object" &&
          source[key] !== null &&
          !Array.isArray(source[key])
        ) {
          if (typeof target[key] !== "object") {
            target[key] = {};
          }
          mergeObjects(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }

    if (externalConfig) {
      mergeObjects(merged, externalConfig);
    }

    return merged;
  }

  const CONFIG = mergeConfig(DEFAULT_CONFIG, window.heartConfig);

  addStyles();
  addMetaViewport();

  const heartsContainer = document.createElement("div");
  heartsContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
  document.body.appendChild(heartsContainer);

  document.body.addEventListener("click", (event) => {
    createFirework(event.clientX, event.clientY);
  });

  document.body.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    createFirework(touch.clientX, touch.clientY);
  });

  function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
        .heart {
          position: absolute;
          pointer-events: none;
          will-change: transform, opacity;
        }
      `;
    document.head.appendChild(style);
  }

  function addMetaViewport() {
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      document.head.appendChild(meta);
    }
  }

  function createFirework(x, y) {
    const fragment = document.createDocumentFragment();
    const heartCount =
      window.innerWidth < 768
        ? CONFIG.HEART_COUNT.MOBILE
        : CONFIG.HEART_COUNT.DESKTOP;

    for (let i = 0; i < heartCount; i++) {
      const color = getRandomColor();
      const heart = createHeart(x, y, color);
      fragment.appendChild(heart);
    }

    heartsContainer.appendChild(fragment);
    clearOldHearts();
  }

  function getRandomColor() {
    return CONFIG.HEART_COLORS[
      Math.floor(Math.random() * CONFIG.HEART_COLORS.length)
    ];
  }

  function createHeart(x, y, color) {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("viewBox", "0 0 512 512");
    heart.classList.add("heart");
    heart.style.transform = `translate(${x}px, ${y}px)`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
    );
    path.setAttribute("fill", color);

    heart.appendChild(path);

    const size =
      CONFIG.HEART_SIZE.MIN +
      Math.random() * (CONFIG.HEART_SIZE.MAX - CONFIG.HEART_SIZE.MIN);
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    animateHeart(heart, x, y);

    return heart;
  }

  function animateHeart(heart, initialX, initialY) {
    const startTime = performance.now();
    const targetX = initialX + (Math.random() - 0.5) * CONFIG.MOVE_RANGE.X;
    const targetY = initialY - Math.random() * CONFIG.MOVE_RANGE.Y; // Always move upwards

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      if (elapsed >= CONFIG.ANIMATION_DURATION) {
        heart.remove();
        return;
      }

      const progress = elapsed / CONFIG.ANIMATION_DURATION;
      const easedProgress = easing[CONFIG.EASING](progress);

      const currentX = initialX + (targetX - initialX) * easedProgress;
      const currentY = initialY + (targetY - initialY) * easedProgress;
      const currentOpacity = 1 - easedProgress;

      heart.style.transform = `translate(${currentX}px, ${currentY}px)`;
      heart.style.opacity = currentOpacity;

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const easing = {
    easeOutQuad: (t) => 1 - (1 - t) * (1 - t),
    easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
    easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
    easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
  };

  function clearOldHearts() {
    const hearts = heartsContainer.getElementsByClassName("heart");
    if (hearts.length > CONFIG.MAX_HEARTS) {
      for (let i = 0; i < hearts.length - CONFIG.MAX_HEARTS; i++) {
        hearts[i].remove();
      }
    }
  }
});
