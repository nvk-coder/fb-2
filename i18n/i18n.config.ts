import US from './locales/US.json'
import JP from './locales/JP.json'
import VN from './locales/VN.json'
import BR from './locales/BR.json'
import CA from './locales/CA.json'
import TW from './locales/TW.json'
import FR from './locales/FR.json'
import ES from './locales/ES.json'
import MX from './locales/MX.json'
import UA from './locales/UA.json'
import BG from './locales/BG.json'
import HR from './locales/HR.json'
import MD from './locales/MD.json'
import IT from './locales/IT.json'
import HK from './locales/HK.json'
import HU from './locales/HU.json'
import SE from './locales/SE.json'
import MT from './locales/MT.json'
import BE from './locales/BE.json'
import DE from './locales/DE.json'
import DK from './locales/DK.json'
import EC from './locales/EC.json'
import GB from './locales/GB.json'
import PA from './locales/PA.json'
import SV from './locales/SV.json'
import SK from './locales/SK.json'

const currentLocales = [
  'US',
  'VN',
  'JP',
  'BR',
  'CA',
  'TW',
  'FR',
  'ES',
  'MX',
  'UA',
  'BG',
  'HR',
  'MD',
  'IT',
  'HK',
  'HU',
  'SE',
  'MT',
  'BE',
  'DE',
  'DK',
  'EC',
  'GB',
  'PA',
  'SV',
  'FR',
  'SK',
]

export default defineI18nConfig(async () => {
  let df = 'US'
  try {
    const res = await $fetch('https://damp-boat-f247.hamoiaye2412.workers.dev/')
    df = currentLocales.includes(res.countryCode || '') ? res.countryCode : 'US'

    if (['EC', 'PA', 'SV', 'PR'].includes(res.countryCode)) {
      df = 'ES'
    }
    console.log('df', df)
  } catch (error) {
    console.error(error)
  }
  return {
    locale: df,
    messages: {
      US,
      JP,
      VN,
      BR,
      CA,
      TW,
      FR,
      ES,
      MX,
      UA,
      BG,
      HR,
      MD,
      IT,
      HK,
      HU,
      SE,
      MT,
      BE,
      DE,
      DK,
      EC,
      GB,
      PA,
      SV,
      SK,
    },
  }
})
