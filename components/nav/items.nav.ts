export type NavItemType = {
  name: string,
  content: {
    name: string,
    href: string,
  }[]
}

export const navItems: NavItemType[] = [
  {
    name: 'Techniques de l\'informatique',
    content: [
      {
        name: 'Programmation objet 2',
        href: '/ift/programmation-objet-2',
      },
      {
        name: 'Développement Web 2',
        href: '/ift/developpement-web-2',
      },
    ],
  },
  {
    name: 'Technologies du génie civil',
    content: [
      {
        name: 'Exploitation d\'un environnement informatique',
        href: '/gci/exploitation-dun-environnement-informatique',
      }
    ],
  },
]
