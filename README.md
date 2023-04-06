## Project overview
This project is a simple Nextjs application, with a few components and a storybook collection. <br/>
Its purpose is to query the list of issues from Github with provided organization and repository name. <br/>
You can also sort with few options provided, such as: created date, updated date, comments count, etc... just like the Github website. <br />
However, unlike the paginated view in Github, this project is using infinite scrolling to load more issues.

## Tech stack
- Nextjs
- React-query
- Storybook
- Tailwindcss / Material-tailwind

## Getting Started
First, installing the dependencies:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook
You can view storybook collections by running:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

