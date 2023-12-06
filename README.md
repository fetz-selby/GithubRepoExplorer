# Getting Started

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/pages/building-your-application/optimizing/testing).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run component`

Launches the test window (Cypress).

### `npm run build`

Builds the app for production to the `build` folder.


## App Info

This is a mobile and destop friendly app for viewing GitHub users/organization and their repositories. It performs a query search on the given text and returns the first 5 best matches. If there's no matching or similar username, a message is displayed to inform you of the outcome. Also, when there is a connection loss or something wrong with the implementing API, a friendly message is displayed to keep you informed.

## API
The app utilizes the GitHub API for fetching the users and repositories. The `GET` request URLs are `/search/users` and `users/{username}/repos` respectively.

## Setup
Please modify the `.env` file and set the TOKEN value. This is required by GitHub for the requests.

## App Flow
<img width="571" alt="Screenshot 2023-12-06 at 18 02 30" src="https://github.com/fetz-selby/simsys/assets/6938921/71a78e21-b9a7-42f9-bd63-497c731dfdfb">

## App State
The chart was created with [XState](https://stately.ai/viz)
<img width="961" alt="Screenshot 2023-12-06 at 18 14 44" src="https://github.com/fetz-selby/simsys/assets/6938921/b8bb4acd-7bfd-4b17-a716-ac0cc1857a31">


## How to use the app
- Enter a GitHub username in the search field, press Enter, or click on the Search button. Some basic info that the shows about the user is the avatar, username, and the type. The type could either be user or organization.
<img width="780" alt="Screenshot 2023-12-06 at 15 38 53" src="https://github.com/fetz-selby/simsys/assets/6938921/6b90a0ce-abdf-4f0d-b047-b6bd77f0047d">

- On clicking on any of the users shown will show the repositories of that user. It's an accordion-based component that expands to show the details. The details contained in a repository item include name, description, language, and when last the repo was updated.
<img width="774" alt="Screenshot 2023-12-06 at 16 43 00" src="https://github.com/fetz-selby/simsys/assets/6938921/63fd54a7-1a1a-42e9-be96-1f395c7fea26">


## State views

## (idle)
<img width="864" alt="Screenshot 2023-12-06 at 18 18 54" src="https://github.com/fetz-selby/simsys/assets/6938921/f26e0c9b-33f9-4042-9229-f82fb330db7a">

## (loading)
<img width="935" alt="Screenshot 2023-12-06 at 15 42 06" src="https://github.com/fetz-selby/simsys/assets/6938921/8b4415f5-0eea-4f5e-a672-37d0e322bd55">

## (complete)
<img width="852" alt="Screenshot 2023-12-06 at 18 22 00" src="https://github.com/fetz-selby/simsys/assets/6938921/f1b3f3a1-f6e9-40ce-afc2-2a26b9855abf">

## (empty)
<img width="870" alt="Screenshot 2023-12-06 at 18 23 02" src="https://github.com/fetz-selby/simsys/assets/6938921/1cf127b0-a33b-4d36-a571-33c26e935763">

## (error)
<img width="900" alt="Screenshot 2023-12-06 at 15 42 29" src="https://github.com/fetz-selby/simsys/assets/6938921/f933252d-5b95-4116-bdd1-ca0669b8e40f">


## Libraries Used

SWR - for fetching (has caching features similar to react-query)

MUI - for styling

Cypress - for testing

Moment - for formatting the date

Octokit - Github API request

## Browse App

##### Click [here](https://strong-unicorn-02afdc.netlify.app/) to browse the [App](https://strong-unicorn-02afdc.netlify.app/)

