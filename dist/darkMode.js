import { aboutSecction, head, themeInput } from "./components/htmlElements.js";
const changedTheme = () => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyThemes(darkMode);
};
const applyThemes = (theme) => {
    if (theme) {
        applyDarkTheme();
        themeInput.checked = true;
    }
    else {
        linkGral.parentNode.removeChild(linkGral);
        linkWidth768.parentNode.removeChild(linkWidth768);
        themeInput.checked = false;
    }
    applyOtter(theme);
    particleJs(theme);
};
const applyDarkTheme = () => {
    linkGral.type = 'text/css';
    linkGral.rel = 'stylesheet';
    linkGral.href = '../css/index/dark.css';
    if (screen.width >= 768)
        apllyDarkThemeWidth768();
    head.appendChild(linkGral);
    head.appendChild(linkWidth768);
};
const apllyDarkThemeWidth768 = () => {
    linkWidth768.type = 'text/css';
    linkWidth768.rel = 'stylesheet';
    linkWidth768.href = '../css/index/dark-tablet.css';
};
const generateOtter = (srcImg) => {
    const figureOtter = document.createElement('figure');
    const img = document.createElement('img');
    figureOtter.className = 'main__otter-figure';
    img.src = srcImg;
    img.alt = 'Otter Icon';
    img.loading = 'lazy';
    figureOtter.appendChild(img);
    return figureOtter;
};
const applyOtter = (theme) => {
    const otter = theme ? otterWhite : otterDark;
    aboutSecction.appendChild(otter);
};
const particleJs = (theme) => {
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
    particlesJS('particles-js', themeApply, function () {
        console.log('callback - particles.js config loaded');
    });
};
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const changeTheme = window.matchMedia('(prefers-color-scheme: dark)');
const otterWhite = generateOtter('../assets/img/animals/otter/otter-white.webp');
const otterDark = generateOtter('../assets/img/animals/otter/otter-black.webp');
const linkGral = document.createElement('link');
const linkWidth768 = document.createElement('link');
changeTheme.addEventListener('change', changedTheme);
screen.orientation.addEventListener("change", () => {
    if (screen.width >= 768 && changeTheme)
        apllyDarkThemeWidth768();
});
if (darkMode)
    applyThemes(darkMode);
applyOtter(darkMode);
particleJs(darkMode);
themeInput.onclick = () => applyThemes(themeInput.checked);
