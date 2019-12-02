# Historical Events Finder

Built a single-page app to enable users to search and browse historical information from a "messy" JSON dataset.

## The dataset

The JSON dataset contains ~40k historical events formatted messily. For example, some dates are represented as years only, while others in YYYY/MM/DD,and dates in the BC range are negative. Lastly, the citations are formatted in different ways and unusable.

### Two examples of the "before" data:

!["Example 1: BC dates are in negative"](/client/src/img/example1.png "Example 1: BC dates are in negative")

!["Example 2: Citations are messy"](/client/src/img/example2.png "Example 2: Citations are messy")

## Architecture

### I built the Historical Events Finder using React components:

- `App` loads events information into state by calling the API, renders all page elements (Search & Results components, number of events, and pagination), and handles search queries and page selections
  - `Search` contains search input, listening to changes and sending submits back to the query handler
  - `Results` renders timeline based on current event results

### In addition, I built 2 helper functions to clean up the messy data.

1. `cleanText.description` produces a cleaner version of the event descriptions by removing most citation information. Rules used:

   - Remove all paired or nested `{` and `}` tags
   - Remove all paired or nested `<a` and `</a>` tags

     Attempts were made to remove other citations, but they were too inconsistent for rules to capture.

2. `cleanText.date` produces a cleaner version of event date. Rules used:

   - Negative Signs were replaced with "B.C."
   - Only the year part of the date was used in the YYYY/MM/DD formatted dates.

### NPM modules used:

- `json-server` to set up a simple API from static assets in repository
- `axios` for API requests
- `react-paginate` to paginate the list of events
- `vertical-timeline-component-for-react` to display event results in a digestible format
