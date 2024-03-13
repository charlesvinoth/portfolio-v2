import { ref } from 'vue'

export default function useMenu() {
  const menus = ['home', 'skills', 'experience', 'projects', 'contact']
  const activeMenu = ref('home')

  function setActiveMenu(menu: string) {
    activeMenu.value = menu
    const section = document.getElementById(menu)

    if (section) {
      const offsetTop = section.offsetTop
      window.scrollTo(0, offsetTop - 96)
    }
  }

  return {
    menus,
    activeMenu,
    setActiveMenu
  }
}
