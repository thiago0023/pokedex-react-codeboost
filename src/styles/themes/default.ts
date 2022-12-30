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
    }
  } as const

  export type DefaultTheme = typeof defaultTheme;