import { aboutSecction, head, themeInput } from "./components/htmlElements.js";

const changedTheme = (): void => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyThemes(darkMode);
};

const applyThemes = (theme: boolean): void => {
    if (theme) {
        applyDarkTheme();
        themeInput.checked = true;
    } else {
        link.parentNode.removeChild(link);
        themeInput.checked = false;
    }

    applyOtter(theme);
    particleJs(theme);
};

const applyDarkTheme = (): void => {
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '../css/dark.css';
    head.appendChild(link);
};

const generateOtter = (srcImg: string): HTMLElement => {
    const figureOtter = document.createElement('figure');
    const img = document.createElement('img');
    figureOtter.className = 'main__otter-figure';
    img.src = srcImg;
    img.alt = 'Otter Icon';
    figureOtter.appendChild(img);
    return figureOtter;
};

const applyOtter = (theme: boolean): void => {
    const otter = theme ? otterWhite : otterDark;
    aboutSecction.appendChild(otter);
};

const particleJs = (theme: boolean): void => {
    const white = {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 600
            }
          },
          "color": {
            "value": "#343a40"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#343a40",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    };

    const dark = {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 600
            }
          },
          "color": {
            "value": "#f8f9fa"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#f8f9fa",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    };
    const themeApply = theme ? dark : white;
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    particlesJS('particles-js', themeApply,
     function () {
        console.log('callback - particles.js config loaded');
    });

};

const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const link = document.createElement('link');
const changeTheme = window.matchMedia('(prefers-color-scheme: dark)');
const otterWhite = generateOtter('https://drive.google.com/uc?id=1bTuB7POVArCWZ_mV2DAqsyVwvXJSWVWf');
const otterDark = generateOtter('https://drive.google.com/uc?id=1KFncqvAa4J9ujLg02C9okA43ymJw8vEW');

changeTheme.addEventListener('change', changedTheme);

if (darkMode)  applyThemes(darkMode);

applyOtter(darkMode);
particleJs(darkMode);

themeInput.onclick = () =>  applyThemes(themeInput.checked);


