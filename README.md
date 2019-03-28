# news-reader-react

A news reader app made using ReactJS and Redux.

### Live here: https://news-reader-selection.netlify.com/

## Features

- When the app Opens user is shown a list of all the top stories along with their titles, total number of comments, date on which the story was posted and author name.
- All the news items in the news list are individual selectable elements on which the user can click and select or unselect the story element. Selected story element will have a green border.
- After selecting a list of news, the user can click on 'Show Selected List' button and start a reading session witht the selected stories.
- The reading session screen consists of a sidebar with a list of selected story titles and highlights the current one.
- User can navigate within the selected news by clicking on the titles in the sidebar.
- Each highlighted story shows title, author name, date on which the news was posted and a read more button. Upon clicking the read more button an iframe with the story link loads.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

### Installing

Follow these steps to run this project in your local computer.

```
$ git clone https://github.com/amiya-1998/newsReader.git
$ cd newsReader
$ npm i
```

Now, to run the project on port `3000`, run:

```
$ npm start
```

The app should automatically open up on the browser else go to `http://localhost:3000` in your browser to view the app.

## Built With

- [React.JS](https://reactjs.org/) - Frontend library used in the project.
- [Redux](https://redux.js.org/) - Used in addition to React.JS for state management.
- [HN search API](https://hn.algolia.com/api) - Used for fetching news along with comments to that news.

## Authors

- **Amiya Kumar Tripathy** - [amiya-1998](https://github.com/amiya-1998)
