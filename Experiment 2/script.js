const toggle = document.getElementById('theme-toggle')
const dashboard = document.querySelector('.dashboard')

toggle.addEventListener('click', () => {
  const theme = dashboard.dataset.theme === 'light' ? 'dark' : 'light'
  dashboard.dataset.theme = theme
  localStorage.setItem('theme', theme)
})

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    dashboard.dataset.theme = savedTheme
  } else {
    dashboard.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
})
