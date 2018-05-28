# smart-faq
Smart FAQ

App demo: [https://kiwicom.github.io/smart-faq/](https://kiwicom.github.io/smart-faq/)  
Frontend staging: [https://introduce-smart-faq.fe.staging.kiwi.com/](https://introduce-smart-faq.fe.staging.kiwi.com/)

## Instalation

Clone the repo `git clone git@github.com:kiwicom/smart-faq.git`

Install all the dependencies with `yarn`


In order to be able to login one requires an `.env` file at the root of the codebase, with the following contents:
```javascript
GRAPHQL_URI=XXXXXXXX
KIWILOGIN_USER=XXXXXXXX
```
`KIWILOGIN_USER` is only needed for this standalone app to work

Where the value of `GRAPHQL_URI` and `KIWILOGIN_USER` will be provided privately.

Webpack and particularly `dotenv-webpack` package will take care of importing the variables from `.env` to your resulting build app or dev-server.


## Translations

- Check out [react-i18next](https://react.i18next.com/) and [i18next](https://www.i18next.com/) docs for more info.
- [DOCs for Phraseapp](https://phraseapp.com/docs/) - where the translations are stored for translators
- List of all supported languages is defined by file `i18n/languages.js`

### How to use translations in code

- be declarative & use `Trans` component whenever it's possible: 
```
<Trans i18nKey="translation_key">
    Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
</Trans>
```
- use `i18n.t` function only when `Trans` can't be used

#### Before you are done

- run `yarn translations:collect` to recollect all translations for all supported languages
- provide translations for all keys with `__STRING_NOT_TRANSLATED__` as value

## Build process

Test script `test-ci` is run on each push

### Surge Deploy
- after each push a circleci `test-ci-and-surge-deploy` script is run
- it generates a live preview link on surge  ie. `https://smartfaq-branch-name.surge.sh`

### Github Pages
- After every merge into master, standalone version of this project is published using Github Pages 
- Inspired by repository [Circle CI and Github Pages](https://github.com/Villanuevand/deployment-circleci-gh-pages) and further described on [Github](https://github.com/DevProgress/onboarding/wiki/Using-Circle-CI-with-Github-Pages-for-Continuous-Delivery)
- Deployed on [https://kiwicom.github.io/smart-faq/](https://kiwicom.github.io/smart-faq/)

### Release

Done automatically when you add a new release tag on [Github](https://github.com/kiwicom/smart-faq/releases/new)

- automatically updates package.json with correct version
- publish changes onto npm


