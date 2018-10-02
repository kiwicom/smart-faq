# smart-faq

Smart FAQ

## Installation

Clone the repo `git clone git@gitlab.skypicker.com:frontend/smart-faq.git`

Install all the dependencies with `yarn`

In order to be able to login one requires a `.env` file at the root of the codebase, with the following content:

```
GRAPHQL_URI=XXXXXXXX
KIWILOGIN_USER=XXXXXXXX
```

`KIWILOGIN_USER` is only needed for this standalone app to work

Where the value of `GRAPHQL_URI` and `KIWILOGIN_USER` will be provided privately.

Webpack and particularly `dotenv-webpack` package will take care of importing the variables from `.env` to your resulting build app or dev-server.

## Running the app locally

To serve the app on your local environment, run:

```
yarn start
```

[0.0.0.0:8080](http://0.0.0.0:8080/) will open automatically in your browser, but you can also open [localhost:8080](http://localhost:8080/) to view it.

If you would like to view the app on a mobile device, you can do it by visiting `{your_local_ip_address}:8080`

## Commit message convention

We use this commit message convention: [https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message)

A git hook will verify your commit message and point out any issues with it.

To make following this convention easier, there's some tooling available. Use

```
git cz
```

to compose your commit message using an interactive command line tool.

To access `git cz` you need to first install commitizen globally using:

```
yarn global add commitizen
```

If you squash your commits when merging a pull request, compose the message of
the squashed commit also according to the convention.

## Translations

- Check out [nitrolib](https://github.com/kiwicom/nitrolib) docs for more info.
- [DOCs for PhraseApp](https://phraseapp.com/docs/) - where the translations are stored for translators
- List of all supported languages is defined by file `src/translations/langInfos.js`

### How to use translations in code

- Use `Text` from [nitrolib](https://github.com/kiwicom/nitrolib) as `Trans` and don't confuse it with `Text` from [Orbit](https://github.com/kiwicom/orbit-components):

```js
import Trans from "@kiwicom/nitro/lib/components/Text";
```

From Nitrolib docs:

> Make sure to wrap translation keys in the global `__` function!

Props:

```js
type Props = {
  t: string, // the translation key
  values?: Values, // a map of placeholders and their values
  html?: boolean, // make it 'true' if your translation string contains HTML elements
};
```

Example:

```js
const Submit = () => (
  <Button>
    <Trans t={__("smartfaq.submit_button")} />
  </Button>
);
```

### Flow with translations

1.  Download latest translations from PhraseApp via `yarn translations:download`.
2.  Add your keys to `src/translations/enKeys.json` json file.
3.  Upload translations to PhraseApp via `yarn translations:upload`.
4.  Post it on #web-translations, mentioning all keys that needs to be translated.

## Theming

Use `styled-components`' `ThemeProvider` for `@kiwicom/orbit-components` theming to work. Example:

```js
import { ThemeProvider } from "styled-components";
import { getTokens } from "@kiwicom/orbit-components";
import SmartFAQ from "@kiwicom/smart-faq";

const App = () => (
  <ThemeProvider theme={{ orbit: getTokens(/* color palette */) }}>
    <SmartFAQ />
  </ThemeProvider>
);
```

See their [docs](https://orbit.kiwi/guidelines/theming/) for more info.

## Cypress test

In order to be able to run the tests, you need to add the following environment variables to the `.env` file:

```
TEST_USER_EMAIL=XXXXXXXX
TEST_USER_PASSWORD=XXXXXXXX
```

Steps to run Cypress tests:

1.  Start smart-faq via `yarn start` if you still don't have it running.
2.  Start up cypress app with `yarn cypress:open`
3.  Run tests with `yarn cypress:run`

_Note_: If you need to change the baseUrl, you can either change it on `cypress.json` or
set the `CYPRESS_baseUrl` variable before running tests eg. `CYPRESS_baseUrl=http://mybaseUrl:myPort yarn cypress:run` . [More info](https://docs.cypress.io/guides/guides/environment-variables.html)

## Build process

Test script `test-ci` is run on each push

### Surge Deploy

- after each push a circleci `test-ci-and-surge-deploy` script is run
- it generates a live preview link on surge ie. `https://smartfaq-branch-name.surge.sh`

### Release

Done automatically by [semantic-release](https://github.com/semantic-release/semantic-release).

## Analytics

These are the events being recorded. Note that additionally to these attributes frontend is also sending additional data such as:

- `browser`
- `device`
- `location`: origin URL.
- `os`: operating system

#### Eventname "smartFAQ"

- Possible payloads
  - When smartFAQ is opened: `{ action: "clickOnHelp", loggedIn: true | false}`
  - When smartFAQ is closed: `{ action: "close", loggedIn: true | false, timeOpen: "number of seconds open"}`
  - Login Strategies:
    - Kiwi: `{ action: "clickOnLogin", loginType: "kiwi"}`
    - Google: `{ action: "clickOnLogin", loginType: "google"}`
    - Facebook: `{ action: "clickOnLogin", loginType: "facebook"}`
  - Downloading boarding pass: `{ action: "downloadBoardingPass" }`
  - "More info" in boarding pass section is clicked: `{ action: "clickOnMoreInfoBoarding" }`
  - When one of the two intro buttons is clicked: `{ action: "clickOnIntroButton", haveBooking: true | false}`

#### Eventname "smartFAQBookingOverview"

- Possible payloads
  - Select another booking is clicked: `{ action: "selectAnotherBooking"}`
  - Manage my booking is clicked: `{ action: "goToMMB"}`
  - Article is clicked: `{ action: "articleClicked", queriesBeforeClick:"Number of searches the user made before clicking on an article"}`
  - Full FAQ link is clicked: `{ action: "goToOldHelp"}`
  - User clicks sign out: `{ action: "signOut"}`
  - Flight accordion is opened: `{ action: "openFlightCard"}`
  - When smartFAQ is closed: `{ action: "close", timeOpen: "number of seconds open"}`
  - Every search(with a debounce of 250ms by default): `{ action: "search", searchedText: "query being searched"}`
  - When eTicket is clicked: `{ action: "clickOnEticket" }`
  - When BoardingPasses button is clicked: `{ action: "clickOnBoardingPassButton" }`
  - When Baggage button is clicked: `{ action: "clickOnBaggageButton" }`
  - When Kiwi.com Guarantee chat can be used for customer booking: `{ action: "chatEnabled" }`
  - When Kiwi.com Guarantee chat is openend by a customer: `{ action: "chatOpened" }`
  - When Kiwi.com Guarantee chat button is displayed because it matches the criteria to show it: `{ action: "chatDisplayed" }`

#### Eventname "smartFAQCategories"

- Possible payloads
  - Click on category: `{ action: "clickOnCategory", categoryId:"id of category", categoryName:"category title"}`
  - Enter article: `{ action: "clickOnArticle", articleId:"id of article", articleName:"article title"}`
  - Close article: `{ action: "articleClose", articleId:"id of article", articleName:"article title", timeOpen: "time it remained open"}`
  - Vote on article: `{ action: "upVote" | "downVote" }`
  - Submit feedback on article: `{ action: "submitFeedback", comment: "dontLike" | "confusing" | "notAccurate" | "doesntAnswer" }`
  - Daily feedback comment limit reached: `{ action: "commentLimitReached" }`
