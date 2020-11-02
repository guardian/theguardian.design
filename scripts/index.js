const initialHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-height')

console.log(initialHeaderHeight)

const updateHeaderHeight = () => {
    const header = document.getElementById('header')

    if (window.scrollY >= 816) {
        document.documentElement.style.setProperty('--header-height', '80px')
        header.classList.add('header--border')
    } else {
        document.documentElement.style.setProperty('--header-height', initialHeaderHeight)
        header.classList.remove('header--border')
    }
}

window.addEventListener('scroll', updateHeaderHeight)
