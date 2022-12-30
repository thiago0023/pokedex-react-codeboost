export const defaultTheme = {
    colors: {
      white: '#fff',

      'gray-100': '#E1E1E6',
      'gray-300': '#C4C4CC',
      'gray-400': '#8D8D99',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#2F3133',
      'gray-800': '#202024',
      'gray-900': '#121214',

      'green-300': '#00B37E',
      'green-500': '#00875F',
      'green-700': '#015F43', 

      'red-300': '#F75A68',
      'red-400-low-opacity': 'rgba(194, 0, 0, 0.12)',
      'red-400': '#C20001',
      'red-500': '#AB222E',
      'red-700': '#7A1921',

      'blue-400-low-opacity': 'rgba(63, 104, 186, 0.15)',
      'blue-400': '#3F67BA',

      types: {
        bug: '#9BBA48',
        dark: '#595761',
        dragon: '#2C6AC1',
        electric: '#EED967',
        fairy: '#E296E1',
        fighting: '#C44D61',
        fire: '#F66D6D',
        flying: '#A6BBE8',
        ghost: '#616EB7',
        grass: '#73B861',
        ground: '#CE8056',
        ice: '#8BCEC1',
        normal: '#A0A29F',
        poison: '#AC6ACA',
        psychic: '#EB8B85',
        rock: '#8BCEC1',
        steel: '#6594A1',
        water: '#88A3D4',
      }
    }
  } as const

  export type DefaultTheme = typeof defaultTheme;