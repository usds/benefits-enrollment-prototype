# Documentation
This multi-benefit application prototype was built with static pages using [jekyll](http://jekyllrb.com). It saves any data entered to `sessionStorage` and is erased upon closing the window. This was built to serve the purposes of providing a functional demonstration and a front-end for use in a production application. The front-end includes:
* HTML
* SCSS (and the [U.S. Web Design Standards](http://standards.usa.gov))
* Section 508 Compliance
* How to ask questions
* User experience
* Interactions
* Mobile-friendly, responsive design

Local benefit administrators may customize this application for their programs and use this code in whichever technology stack is appropriate for them.

## Running the demo
Clone this repository and enter the following into the command line.
```
$ bundle exec jekyll serve --baseurl ''
```

## About this demo
The code in this Jekyll site comes with a few caveats:

Any JavaScript used in the [Front Matter](https://jekyllrb.com/docs/frontmatter/) should be omitted in an application build. This code is strictly for mimicking behavior that an application would provide, such as storing and retrieving data, printing information, and removing items from the DOM if they are not contextually relevant. If you would like to contribute to this Jekyll demo, please be sure to use spaces instead of tabs.

In production, all JavaScript and CSS should be minified. JavaScript can be loaded with [loadJS](https://github.com/filamentgroup/loadJS) to avoid blocking render. JS and CSS should be fingerprinted as well.

## Basic Cards
All cards use the following structure

```
<div class="usa-grid card-wrap">
  <form action="#" method="post">
    <div class="card">
      <div class="card__header">
        <p class="current-step">Step 1 of 7</p>
        <h1 class="card__primary-heading">Heading</h1>
      </div>
      <div class="card__body">
        <div class="field-group">
          <div class="question">
            <p class="question__primary-text"><label for="input1">Primary question</label></p>
            <p class="question__secondary-text">Question support text. </p>
          </div>
          <div class="response">
            <input type="text" id="input1" required />
          </div>
        </div>
      </div>
      <div class="card__footer">
        <button class="usa-button-big" type="submit">Next</button>
      </div>
    </div>
  </form>
</div>
```

All question and answer sets are placed in a `.field-group` container.

```
<div class="field-group">
  <div class="question">
    <p class="question__primary-text"><label for="input1">Primary question</label></p>
    <p class="question__secondary-text">Question support text. </p>
  </div>
  <div class="response">
    <input type="text" id="input1" required />
  </div>
</div>

<div class="field-group">
  <div class="question">
    <p class="question__primary-text"><label for="input2">Primary question</label></p>
    <p class="question__secondary-text">Question support text. </p>
  </div>
  <div class="response">
    <input type="text" id="input2" required />
  </div>
</div>
```

In more complicated questions where a `fieldset` is necessary, such as home addresses, radio buttons, or checkboxes, we can write those questions up as such:

```
<div class="field-group">
  <fieldset>
    <div class="question">
      <legend class="question__primary-text">Who are you applying for?</legend>
    </div>
    <div class="response">
      <ul class="usa-unstyled-list response__radiogroup">
        <li>
          <input id="applyingForMyself" type="radio" name="applyingFor" value="Myself" required="">
          <label for="applyingForMyself">Myself</label>
        </li>
        <li>
          <input id="applyingForMeAndSomeoneElse" type="radio" name="applyingFor" value="Me and someone else" required="">
          <label for="applyingForMeAndSomeoneElse">Me and someone else</label>
        </li>
        <li>
          <input id="applyingForOneorMorePeople" type="radio" name="applyingFor" value="One or more people" required="">
          <label for="applyingForOneorMorePeople">On behalf of one or more people</label>
        </li>
      </ul>
    </div>
  </fieldset>
</div>
```

## Field Validation
Validation should be done on both client side and server side. The script that handles form validation is located in `assets/javascripts/scripts/form_validation.js`. It uses `checkValidity` in browsers that support it. If a browser does not support `checkValidity`, such as IE9, client-side validation is polyfilled with [Webshim](https://afarkas.github.io/webshim/demos/).

`checkValidity` does not always provide helpful feedback, depending on the browser. A more descriptive message can be entered into a `data-custom-validity` attribute on the form input.

_Example_
```
<input type="number" pattern="[0-9]*" min="1900" max="2016" data-custom-validity="Please indicate a year between 1900 and 2016" required />
```

Error messages by default appear below text inputs unless a placeholder has been entered into its parent container.

```
<div class="response">
  <div class="error-placeholder"></div>
  <div class="usa-date-of-birth">
    <div class="usa-form-group usa-form-group-month">
      <label for="applicantDOBMonth">Month</label>
      <input class="usa-input-inline auto-advance" aria-describedby="dobHint" id="applicantDOBMonth" pattern="[0-9]*" type="number" min="1" max="12" data-custom-validity="Please enter month 1-12" title="Please enter month 1-12" required="">
    </div>
    …
  </div>
</div>
```

Only `required` inputs are validated client side.
