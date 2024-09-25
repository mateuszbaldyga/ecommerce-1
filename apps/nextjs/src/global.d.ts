import type en from '../dictionaries/en.json'

type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages
}
