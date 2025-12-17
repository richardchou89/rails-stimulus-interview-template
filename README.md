# Rails and Stimulus Interview Template

You've landed an interview for a Rails developer role. Just three hours before the big moment, you get an email: you're expected to pair program using a Rails + Stimulus setup.

Suddenly, you're scrambling - installing Rails, Stimulus, and all the necessary gems - only to run into integration issues.

Skip the stress. This template comes pre-configured with Rails and Stimulus, so you can focus on what really matters: preparing for the interview.

Use it in your code challenge, pair programming, or next SaaS idea.

💎 Ruby 3.2+

🛤️ Rails 8

📜 Stimulus

📦 esbuild + watch mode

🤚 No third-party gem required

👮 Rubocop

💯 RSpec

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
Run this on a separate terminal
```
yarn build --watch
```

## Adding a new Stimulus controller
```
rails generate stimulus controllerName
rails stimulus:manifest:update
```
For example,
```
rails generate stimulus invoice
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

## Up and running

![image](https://github.com/user-attachments/assets/891ae2fb-da42-417f-a31d-958c038b596d)

## Deploying to Render

I wrote an [article](https://medium.com/@richardchou/deploying-rails-to-render-eee0ed76475a) to show how to deploy this template to Render.

