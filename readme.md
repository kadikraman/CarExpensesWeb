# Car Expenses Web

## Set up dev environment

Prerequisites: node, npm, gulp

```
sudo npm install
```

Run dev server:

```
gulp
```

To see the tests, run the dev server and go to <root>:<port>/testrunner.html

## Debugging
- gulp errors out on watch. This is because the system has a limit to how many files can be watched by a user. So we need to increase the max watcher siz
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Credits:
- boilerplate: https://github.com/christianalfoni/react-app-boilerplate