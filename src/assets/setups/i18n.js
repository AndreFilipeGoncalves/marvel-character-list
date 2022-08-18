import { createI18n } from 'vue-i18n'

function loadLocaleMessages () {
	const locales = require.context('../../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
	/* find all the possible locales */
	if (!locales.length) return {}
	const allLocales = new Set()
	locales.keys().forEach(key => {
		allLocales.add(key.split('/')[1])
	})
	/* the store for the final messages */
	const messages = {}
	/* build the final file from all the single files */
	allLocales.forEach(locale => {
		let finalFile = {} /* final file with all files merged */
		locales.keys().forEach(key => {
			/* check if the locale is the one we are going to merge */
			if (key.split('/')[1] === locale) {
				const strings = locales(key) /* save the strings */
				var objectToUse = {} /* object we will merge with the final file */
				/* if it is the generic file, we want to place it without
				giving it an extra depth */
				if (key.split('/')[2].includes('generic')) {
					objectToUse = strings
				} else { /* if it is an app file, we need to place the app label before */
					const objKey = key.split('/')[2].split('.')[0].split('_')[1]
					objectToUse[objKey] = strings
				}
			}
			/* merge the final we just built into the final file */
			finalFile = { ...finalFile, ...objectToUse }
		})
		/* save the final file as part of the total strings list */
		messages[locale] = finalFile
	})
	/* return all the strings */
	return messages
}

export default createI18n({
	locale: process.env.VUE_APP_I18N_LOCALE || 'en',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pt',
	legacy: false,
	messages: loadLocaleMessages()
})
