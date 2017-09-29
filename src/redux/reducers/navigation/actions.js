export const NAVIGATE = 'Navigation/NAVIGATE'
export const BACK = 'Navigation/BACK'

export const navigateTo = (routeName, params) => ({
  type: NAVIGATE,
  routeName,
  params
})

export const backNavigation = (key = null) => ({
  type: BACK,
  key
})
