
commits point to parent commits and trees.
and contains author, committer, date, message, parent commit, the commit hash is the hash of all this info.

the tree is like the snapshot of the directory

commit is an immutable code snapshot - you change something. you change the hash.


the files are stored in .git/objects, and are grouped by the hash starting letters
git cat-file -t/-p -> type or print contents


references
- tags
- branches
- HEAD -> points to latest commit

.git -> HEAD, refs -> heads -> (all branches), tags

head is usually a pointer to the current branch

