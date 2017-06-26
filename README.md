# Karr2000

## Welcome 
Kar2000 is browser extension (only deployed on chrome extension store for the moment) that let le wagon teachers to override some text in lectures slides.

## Install the extension
The extension is not public on the chrome extension store, so you'll have to ask me to get the link (@kevcha on slack).

## How to use it
Once installed, you just have to click on the karr2000 icon in the extensions menu, and you'll have to fill the textarea with a json containing some substitions you would have instead of strings.
For example: 
```json
  [
    {
      "match": "foo",
      "substitute": "bar"
    }
  ]
```

This json will make the extension replace all occurences of `foo` by `bar` when you're on https://karr.lewagon.org.

Feel free to add your custom json in `/locales` and pull request.
If you want full access to this repo, ask me on slack.
