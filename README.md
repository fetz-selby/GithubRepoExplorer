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

This is a mobile and desktop-friendly app for viewing GitHub users/organization and their repositories. It performs a query search on the given text and returns the first 5 best matches. If there's no matching or similar username, a message is displayed to inform you of the outcome. Also, when there is a connection loss or something wrong with the implementing API, a friendly message is displayed to keep you informed.

## API
The app utilizes the GitHub API for fetching the users and repositories. The `GET` request URLs are `/search/users` and `users/{username}/repos` respectively.

## Setup
Please modify the `.env` file and set the `TOKEN` value. This is required by GitHub for the requests.

## App Flow
<img width="571" alt="Screenshot 2023-12-06 at 18 02 30" src="https://github.com/fetz-selby/simsys/assets/6938921/71a78e21-b9a7-42f9-bd63-497c731dfdfb">

## App State
The chart was created with [XState](https://stately.ai/viz)
<img width="961" alt="Screenshot 2023-12-06 at 18 14 44" src="https://github.com/fetz-selby/simsys/assets/6938921/b8bb4acd-7bfd-4b17-a716-ac0cc1857a31">


## How to use the app
- Enter a GitHub username in the search field, press Enter, or click on the Search button. Some basic info that the shows about the user is the avatar, username, and the type. The type could either be user or organization.
<img width="741" alt="Screenshot 2023-12-06 at 21 30 01" src="https://github.com/fetz-selby/simsys/assets/6938921/45a96c51-15cf-4865-9818-dcc498c122e4">

- On clicking on any of the users shown will show the repositories of that user. It's an accordion-based component that expands to show the details. The details contained in a repository item include name, description, language, and when last the repo was updated.
<img width="809" alt="Screenshot 2023-12-06 at 21 31 28" src="https://github.com/fetz-selby/simsys/assets/6938921/c883dba0-30a9-47bb-8d58-6e333091f62b">


## State views

## (idle)
<img width="768" alt="Screenshot 2023-12-06 at 21 33 38" src="https://github.com/fetz-selby/simsys/assets/6938921/0bd20ee3-b6f2-41c1-aee4-55112a52ba40">

## (loading)
<img width="764" alt="Screenshot 2023-12-06 at 21 34 52" src="https://github.com/fetz-selby/simsys/assets/6938921/ae82bfe7-222e-4594-a5a2-fe54b4fd9a27">

## (complete)
<img width="723" alt="Screenshot 2023-12-06 at 21 36 23" src="https://github.com/fetz-selby/simsys/assets/6938921/16a6538a-7f32-4013-9d3c-67092e0f7ced">

## (empty)
<img width="744" alt="Screenshot 2023-12-06 at 21 37 11" src="https://github.com/fetz-selby/simsys/assets/6938921/7811591f-8b45-4cd8-a9e2-685e83fb8c38">

## (error)
<img width="750" alt="Screenshot 2023-12-06 at 21 38 18" src="https://github.com/fetz-selby/simsys/assets/6938921/f2101c84-993a-409b-b939-dab81a180328">


## Libraries Used

SWR - for fetching (has caching features similar to react-query)

MUI - for styling

Cypress - for testing

Moment - for formatting the date

Octokit - Github API request

## Browse App

##### Click [here](https://strong-unicorn-02afdc.netlify.app/) to browse the [App](https://strong-unicorn-02afdc.netlify.app/)

