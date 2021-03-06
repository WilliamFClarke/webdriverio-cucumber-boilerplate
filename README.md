<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate">
    <img src="images/logo.png" alt="Logo" width="167" height="196">
  </a>

  <h3 align="center">webdriverio-cucumber-boilerplate</h3>

  <p align="center">
    Boilerplate Project for browser automation using webdriverio and cucumber
    <br />
    <a href="https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate">View Demo</a>
    ·
    <a href="https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#Integrations">Integrations</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This project exists as a quick way to get started with browser automation.

Key features of this project:

-   Quick and easy to install and run tests
-   Shows examples of integrations with wdio services like wdio image comparison and other tools like zephyr scale
-   Contains clear documentation of how the project works

### Built With

-   [webdriverio](https://webdriver.io/)
-   [cucumberJS](https://cucumber.io/)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```
-   Chrome browser installed

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

Run tests

```JS
npm test
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/WilliamFClarke/webdriverio-cucumber-boilerplate/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Integrations

Cucumber

-   @wdio/cucumber-framework@6.7.3

Reporters

-   wdio-json-reporter@2.0.0
-   @wdio/allure-reporter@6.7.2
-   wdio-cucumber-reporter@0.0.2
-   @wdio/spec-reporter@6.7.0
-   @wdio/junit-reporter@6.7.0

Test Runners

-   @wdio/local-runner@6.7.3
-   @wdio/selenium-standalone-service@6.7.3

ESLint

-   "eslint-plugin-wdio": "^6.6.0",

Compiler

-   Babel
    "@babel/cli": "^7.12.1",
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "@babel/register": "^7.12.1",

Test Execution

-   docker compose
-   AWS Codebuild Buildspec
-   Selenium Standalone

Assertion

-   wdio expect

Env var manager

-   dotenv

helper

-   api helper (supertest)0
-   constants file

integrations

-   Zephyr Scale (formerly tm4j)
-   browserstack
-   wdio image comparison
