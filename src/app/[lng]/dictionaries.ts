import 'server-only'

const dictionaries = {
  en: async () => await import('../i18n/en.json').then((module) => module.default),
  id: async () => await import('../i18n/id.json').then((module) => module.default),
}

type Language = keyof typeof dictionaries

export const getDictionary = async (lng: Language) => await dictionaries[lng]()
