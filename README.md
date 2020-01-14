# Rise Data Theme [![CircleCI](https://circleci.com/gh/Rise-Vision/rise-data-theme/tree/master.svg?style=svg)](https://circleci.com/gh/Rise-Vision/rise-data-theme/tree/master) [![Coverage Status](https://coveralls.io/repos/github/Rise-Vision/rise-data-theme/badge.svg?branch=master)](https://coveralls.io/github/Rise-Vision/rise-data-theme?branch=master)

## Introduction

`rise-data-theme` is a Polymer 3 Web Component that provides alternative theme options for an HTML Template

## DISCLAIMER

This component is currently under development and is a work in progress. 

## Usage

The below illustrates simple usage of the component.

#### Example

Coming soon ...


### Attributes

This component receives the following list of attributes:

- **id**: (string): Unique HTMLElement id.
- **label**: (string): Assigns the label to use for the instance of the component in Template Editor.

**Note:** More attributes coming soon ...

This component does not support PUD; it will need to be handled by Designers on a per Template basis.

### Events

The component will send the following events:

- **configured**: The component has initialized what it requires to and is ready to handle a _start_ event.

The component listens for the following events:

- **start**: This event will cause the component to start generating events. It can be dispatched to the component when the _configured_ event has been fired.

### Provided data

Coming soon ...

### Logging

Coming soon ...

### Offline play

The component supports offline play out of the box.

## Built With
- [Polymer 3](https://www.polymer-project.org/)
- [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)
- [WebComponents Polyfill](https://www.webcomponents.org/polyfills/)
- [npm](https://www.npmjs.org)

## Development

### Local Development Build
Clone this repo and change into this project directory.

Execute the following commands in Terminal:

```
npm install
npm install -g polymer-cli@1.9.7
npm run build
```

**Note**: If EPERM errors occur then install polymer-cli using the `--unsafe-perm` flag ( `npm install -g polymer-cli --unsafe-perm` ) and/or using sudo.

### Testing
You can run the suite of tests either by command terminal or interactive via Chrome browser.

#### Command Terminal
Execute the following command in Terminal to run tests:

```
npm run test
```

In case `polymer-cli` was installed globally, the `wct-istanbul` package will also need to be installed globally:

```
npm install -g wct-istanbul
```

#### Local Server
Run the following command in Terminal: `polymer serve`.

Now in your browser, navigate to:

```
http://127.0.0.1:8081/components/rise-data-theme/demo/src/rise-data-theme.html
```

### Demo project

A demo project showing how to implement a simple HH:mm:ss counter can be found in the `demo` folder.

Another option is using `example-time-date-component` as the scaffolding for a new template. This project can be found in https://github.com/Rise-Vision/html-template-library

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues, please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas, please post your thoughts to our [community](https://help.risevision.com/hc/en-us/community/topics), otherwise submit a pull request and we will do our best to incorporate it. Please be sure to submit test cases with your code changes where appropriate.

## Resources
If you have any questions or problems, please don't hesitate to join our lively and responsive [community](https://help.risevision.com/hc/en-us/community/topics).

If you are looking for help with Rise Vision, please see [Help Center](https://help.risevision.com/hc/en-us).

**Facilitator**

[Stuart Lees](https://github.com/stulees "Stuart Lees")
