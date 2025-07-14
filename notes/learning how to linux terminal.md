
- nproc
- cat /proc/cpuinfo
- lscpu
- sudo dmidecode | grep -i mh

- systemd-detect-virt

- free -ht
- cat /proc/meminfo

how to free the cache memory?
- echo '3' > /proc/sys/vm/drop_caches

vmstat

- ip a OR ip addr
- ethtool

pkill gnome-terminal


to delete all files and folders including hidden ones -> rm -rf ./{*,.*}

grep -rh, -rl, -l


`find . -type f -name "access.log*" -exec grep -H "500" {} \; | grep -o ".*500.*"`

### Breakdown

- `find . -type f -name "access.log*"` searches for files starting with "access.log" in the current directory and its subdirectories.
- `-exec grep -H "500" {} \;` runs `grep` on each found file to search for lines containing "500". The `-H` option makes `grep` print the filename, which is necessary for the next part.
- `| grep -o ".*500.*"` uses `grep` again to print only the matching lines, excluding the filenames.


```
find . -type f -name "access.log*" -exec grep -oE "[0-9]{1,3}(\.[0-9]{1,3}){3}" {} \; | sort -u
```


tr ';' '\n' < split-me.txt
```bash
cat split-me.txt | tr ";" "\n"
```

Basic redirection to log apps 

./your_app > /tmp/your_app.log 2>&1 &

 >> -> means you append instead of overriding 

install 'tldr' for a better 'man'

ls -latrh

ln -s -> soft symlink
ln -> hardlink

grep is pattern matching for text content
ripgrep

find - for files and dirs
sed - stream editor - lets you make changes to incoming stream of text - to replace content

awk - programming language for wokring with files


tail -f 'any log file' -> continuously updates the appended lines to the screen

xargs - will take any content that is piped and splits into chunks and passes it as a list of arguments to the function you specify.
```ls | xargs du -sh```

so $() -> is a subshell, you can run any command and that will be injected back into the main shell

fzf - fuzzy finder



compgen -c  | fzf | xargs man -> to fuzzy find any system commands 

du -ah . | sort -hr | head -n 10

ctrl + L
ctrl + A, ctrl + E front of line, eol
ctrl + F, ctrl + B. forward & backward one char


zip, unzip


uname
mount
ifconfig