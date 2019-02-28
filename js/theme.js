document.querySelector('#toggle-theme').addEventListener('click', (e) => {
    let themeCSSLink = document.querySelector('#theme-css-link');
    console.log();
    if (themeCSSLink !== null) {
        themeCSSLink.parentNode.removeChild(themeCSSLink);
    } else {
       themeCSSLink = document.createElement('link'); 
       themeCSSLink.rel = "stylesheet";
       themeCSSLink.href = "css/theme.css";
       themeCSSLink.id = "theme-css-link";
       document.querySelector('head').appendChild(themeCSSLink);
    }
});