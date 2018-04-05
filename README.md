# smart-faq
Smart FAQ

App demo: [https://kiwicom.github.io/smart-faq/](https://kiwicom.github.io/smart-faq/)

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

## Dev process
In order to be able to login one requires an `.env` file at the root of the codebase, with the following contents:
```javascript
KIWILOGIN_USER=XXXXXXXX
```
Where the value of `KIWILOGIN_USER` will be provided privately.

Webpack and particularly `dotenv-webpack` package will take care of importing the variables from `.env` to your resulting build app or dev-server.


## Build process

### Github Pages

- After every merge into master, standalone version of this project is published using Github Pages 
- Inspired by repository [Circle CI and Github Pages](https://github.com/Villanuevand/deployment-circleci-gh-pages) and further described on [Github](https://github.com/DevProgress/onboarding/wiki/Using-Circle-CI-with-Github-Pages-for-Continuous-Delivery)
- Deployed on [https://github.com/kiwicom/smart-faq/](https://github.com/kiwicom/smart-faq/)

## Release

Done automatically when you add new release on [Github](https://github.com/kiwicom/smart-faq/releases/new)

- automatically updates package.json with correct version and publish changes into npm

## Release per branch
Everytime one sends a Pull Request the app is deployed to a different URL endpoint. This URL is then automatically added to the PR description.

Relevant `package.json` scripts:
- `deploy:now`: used to deploy to a new URL from localhost. Useful to debug production code. Requires you to have an `.env` file with `NOW_TOKEN` var.
- `deploy:now-cli`: deployment script used by our CI. No configuration necessary.
- `deploy:updateURL`: Updates the PR description with the latest URL deployed from the machine it was called from. Requires you to pass the branchname as argument.

## TO RE-FACTOR (when Orbit is ready)
- `Need help?` needs to be re-factor to use the `Text` component from Orbit(currenty it's hardcoded CSS)

