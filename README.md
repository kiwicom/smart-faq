# smart-faq
Smart FAQ

## Translations

- Check out [react-i18next](https://react.i18next.com/) and [i18next](https://www.i18next.com/) docs for more info.
- List of all supported languages is defined by file `i18n/languages.js`

### Build process

TODO

### Collect all used translations in the code

- run `yarn translations:collect` to recollect all translations for all supported languages

### Howto
- be declarative & use `Trans` component whenever it's possible: 
```
<Trans i18nKey="translation_key">
    Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
</Trans>
```
- use `i18n.t` function only when `Trans` can't be used
