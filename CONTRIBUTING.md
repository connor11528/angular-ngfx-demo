# Contributing


1. Fork the repo
1. Make commits to a branch
1. rebase upstream changes into your branch
1. submit a [pull request](https://github.com/jasonshark/angular-starter/pulls)

## Common commands

Add an upstream remote. This will help you pull in changes from the base fork
```
$ git remote add upstream https://github.com/jasonshark/angular-starter
```

Create a git branch and change into it
```
$ git checkout -b `your-branch-name`
```

Once in the branch with your changes pull in any changes that happened upstream with [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-commit--amend)

```
$ git pull --rebase upstream master
```

Fix merge conflicts (if any) using git mergetool.

```
$ git mergetool
```

To use a GUI instead of VIM you can set the default merge tool to opendiff.

```
$ git config --global merge.tool opendiff
```

Continue with the rebase

```
git rebase --continue
```

## Submit PR

![](http://media1.giphy.com/media/Ve20ojrMWiTo4/giphy.gif)