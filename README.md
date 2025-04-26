# Rails and Stimulus Integration Template

Rails + Stimulus + esbuild. Use it for interview or your SaaS application.

Ruby 3.2+

Rails 8.0.2

Tested on Windows WSL and Mac.

## Unzipping into WSL

```
Expand-Archive -Path "C:\Users\konam\Downloads\rails-stimulus-interview-template-main.zip" -DestinationPath "\\wsl$\Ubuntu-22.04\home\rchou\workspace\"
```

## Setup
```
bundle install
yarn install
rails s
```

## Watch mode

```
yarn build --watch
```

## Adding a new Stimulus controller
```
rails generate stimulus controllerName
rails stimulus:manifest:update
```

## Tests

```
rspec
```

## Rubocop

```
rubocop --autocorrect-all
```
