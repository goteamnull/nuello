<!-- TOC -->

- [1. Pitfalls](#1-pitfalls)
    - [1.1. Rails System Tests](#11-rails-system-tests)
    - [1.2. URL params](#12-url-params)
    - [1.3. Clean up after yourself!](#13-clean-up-after-yourself)
    - [1.4. Dev Console](#14-dev-console)
    - [1.5. React Dev Tools](#15-react-dev-tools)
    - [1.6. Redux Dev Tools](#16-redux-dev-tools)

<!-- /TOC -->

# 1. Pitfalls

## 1.1. Rails System Tests

There is a bug in webpacker. When you run `rails test:system`, it should recompile the latest javascript assets before running the tests. *It doesn't*. That means you can run your tests and think everything is fine, but you will actually be running your tests against stale assets. To alleviate this, you should delete `tmp/cache/webpacker/.last-compilation-digest` before running `rails test:system`. One way to do this easily would be to setup an alias in your terminal to run `rm tmp/cache/webpacker/.last-compilation-digest; rails test:system` on linux or MacOS, or `del tmp\cache\webpacker\.last-compilation-digest && rails test:system` on Windows.

## 1.2. URL params

URL matches are *strings*. I ran into trouble a few times where I couldn’t figure out why my board or card wasn’t being rendered and the problem ended up being that I was searching for the item using `match === id`.

If coercion is used via the `==` operator, this won’t be a problem. Otherwise it is imperative to remember to call `Number` with the match to turn it into a number. There shouldn’t be any problems using coercion because even if the match was `undefined`, that would be coerced to `0`, and no cards or boards will have that id, so it will function as it should.

## 1.3. Clean up after yourself!

If you create any sort of event listener when the component mounts, it must be cleaned up when the component is unmounted. If this isn’t done, the console will contain mysterious errors because the component is gone but events are trying to access it.

The two most common places I needed this were:

- Clean up dragula events
- Clean up redux store subscriptions.

To clean up a redux store subscription, the code looks like this:

```javascript
componentDidMount() {
  const store = this.context.store;
  this.unsubscribe = store.subscribe(() => this.forceUpdate());
}

componentWillUnmount() {
  this.unsubscribe();
}
```
## 1.4. Dev Console

Keep dev tools open! Even if you are on a tab other than console, you will see the error icon in the upper right of dev tools if a JS error occurs. It is very easy to go down the wrong troubleshooting road if you don’t realize there is an error to read and a stacktrace to evaluate.

## 1.5. React Dev Tools

Install [React Dev Tools](https://github.com/facebook/react-devtools) in your browser. This is immensely helpful when debugging.

## 1.6. Redux Dev Tools

Install [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) in your browser. This is immensely helpful when debugging. The app is also already configured for it.

Keep in mind there are two different Redux Dev Tools, and this is the one you should install. The [other one](https://github.com/gaearon/redux-devtools#setup-instructions) will actually point you to the first one as well.
