
commands are divided into 2 parts
- porcelain (high level) - most commands you interact with are porcelain commands.
- plumbing (low level)


git config - both on a global level (/home dir) and project level.



all your commits are in .git/objects

use `xxd` command to print the file contents in hex format

use `git cat-file -p <hash>` to see the contents of the file (it's a plumbing command)

--- 

in git, 
tree -> storing directories
blobs -> storing files


git stores the entire files and content per commit.

stores a unique tree, but can reference previous blobs if the blob is unchanged


---

git config has sections - [ ] and key value pairs.

git config --remove-section <section>

git config --add --local init.defaultbranch main

config -> system (for all users), global (for one user), local (for one project), worktree (part of a project)



so, when you're trying to merge two branches, it takes the latest most common ancestor and merges it together.


a branch is a pointer to a commit.

renaming a branch -> git branch -m 'old-name' 'new-name'


git checkout -b -> (newer version) -> git switch -c 