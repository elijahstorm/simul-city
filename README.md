# Simulated City Scenario with Svelte

This is a static web application built with Svelte that simulates a city scenario. The application generates a random layout of roads and streets using the Wave Function Collapsing algorithm. AI-controlled cars populate the city and drive around the course while avoiding collisions and following traffic laws.

The AI algorithm used in this application is a N.E.A.T. classification of genetic AI. The data for the generated AI nodes, layers, and the shape of the neural network will be saved in the cloud using Firebase. The application saves the winning N.E.A.T. algorithms and refers to it to generate new genetic algorithm mutations to keep the data improving continuously for each user viewing.

## Getting Started

To run the application, simply clone this repository and open the index.html file in your web browser.

```bash
git clone https://github.com/elijahstorm/simul-city.git
cd simul-city
```

## Dependencies

This application requires the following dependencies:

- [Svelte](https://svelte.dev/)
- [Firebase](https://firebase.google.com/)

## Configuration

Before running the application, you will need to configure Firebase. Create a Firebase account and configure the application to use Firebase as the backend database.

## Running the Application

To run the application, simply run `pnpm run dev`.

## Contributing

Contributions to this project are welcome. If you find any issues or would like to suggest new features, please open an issue or a pull request on this repository.

## License

This application is released under the MIT License.

# Serving this statically

This is currently configured with SvelteKit to build and host statically. I chose this so I can easily host it on my [github.io](http://elijahstorm.github.io/) page.

```bash
pnpm release
```

Running this command will build the last commit to a local `/docs` folder in the `release` branch, which can be configured in your `github.com/[username]/[repo-name]/settings/pages` to automatically deploy statically when a commit is pushed to the remote repo.

I recommend configuring it so that Github will automatically deploy from the source branch `release` within the `/docs` folder.

Running the above `pnpm release` step will manage building and pushing to the release branch for you. You can edit these steps to fit your needs.

(Notice: I did it like this because I'm lazy, but I like to be clean. There are better ways to do this via hooks, so I might update this later.)
