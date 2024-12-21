tailwind.config = {
    theme: {
        extend: {
            gridTemplatecolumns: {
                'auto': 'repeat( auto-fit, minmax(200px, 1fr))'
            },
            fontfamily: {
                Outfit: ["Outfit", "sans-serfi"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f'
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        }
    },
    darkMode: 'selector'
}
//---------------------light mode or dark mode---------------------------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
        localStorage.Theme = 'light';
    } else {
        localStorage.Theme = 'light';
    }
}