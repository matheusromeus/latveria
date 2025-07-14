## git management

create a branch for every major feature we work on.
after a feature has been done, push it to the staging branch. that is proof.
write better commit messages. use commits like a save game progress.

will a branch be deleted? when?
look at stale branches
delete feature_branch after merging

how to manage a git repo in a startup org?

organizations -> projects

MAIN. master branch and staging branch. LTS vs bleeding.

then there are support branches which aid the staging branch. these support branches will be removed eventually.
- feature branch - feature/feature_name
- bug fixes - bugfix/issue_desc


learn merging and rebasing
do we have any ci/cd or workflows added?

edit the README

Encourage developers to fetch and rebase from the main branch frequently to minimize conflicts.

size of repo?

task tracking
- in progress (who is working on it, ETA)
- task roadmap
- completed (who and date completed)

 Get code into production frequently, even for small features or fixes. This ensures rapid delivery of value and helps catch issues early.

issues go into the staging or main branch. can open a bug_fix branch.

pre commit hook - npm run lint

**if multiple people are working on the same feature**
- break the feature into sub parts and have sub-branches for each of them

## others

specify time for calls