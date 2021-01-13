const initialHeaderHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-height')

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

const jobsAsideButton = document.getElementById("jobs-aside-button")
const jobsAside = document.getElementById("jobs")

const toggleJobsAsidePressedState = () => {
    const ariaPressed = jobsAsideButton.getAttribute('aria-pressed') === "true"
    if (!ariaPressed) {
        // expand
        jobsAsideButton.setAttribute('aria-pressed', true)
        jobsAside.setAttribute('data-is-hidden', false)
    } else {
        // collapse
        jobsAsideButton.setAttribute('aria-pressed', false)
        jobsAside.setAttribute('data-is-hidden', true)
    }
}

jobsAsideButton.addEventListener('click', toggleJobsAsidePressedState)
