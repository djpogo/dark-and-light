document.addEventListener('DOMContentLoaded', () => {
    const themeChoosen = window.localStorage.getItem('theme') ?? 'auto';
    const themeChooser = document.querySelector('[data-js-theme-chooser]');
    
    // Set the theme based on the user's preference or auto if no preference is set
    document.documentElement.dataset.theme = themeChoosen;
    
    if (themeChooser) {
        // add change event listener to the theme chooser
        themeChooser.addEventListener('change', (e) => {
            document.documentElement.dataset.theme = e.target.value;
            window.localStorage.setItem('theme', e.target.value);
        });

        // init the theme chooser value
        const inputChecked = themeChooser.querySelector(`[name=${themeChooser.dataset.jsThemeChooser}][value="${themeChoosen}"]`);
        if (inputChecked) {
            inputChecked.checked = true;
        }
    }
});