
You send a request to a tracker. And the tracker responds with a list of peers. You tell the tracker which files you want to download, and the tracker gives you the ip address of the users you download from. 

**Bencoding** is an encoding that translates a complex set of embedded dictionaries, lists, strings, and integers into a single string.


The .torrent file contains metadata. We need to decode it and save it.
- **info**: A dictionary which describes the file(s) of the torrent. Either for the single file, or the directory structure for more files. Hashes for every data piece, in SHA 1 format are stored here.
- **announce**: The announce URL of the tracker as a string

Bencoding Structure:

    Byte Strings : <string length in base ten ASCII> : <string data>
    Integers: i<base ten ASCII>e
    Lists: l<bencoded values>e
    Dictionaries: d<bencoded string><bencoded element>e


single file torrents and multiple file torrents have different file structures.

The announce key at the start of a torrent file gives you the url of the tracker. The tracker is basically a HTTP server which responds to GET requests with a list of peers who have the file or are downloading it and information about the torrent.


why trackers use udp?
- UDP is often a good choice for trackers because they send small messages, and we use TCP for when we actually transfer files between peers because those files tend to be larger and must arrive intact.


Data is split into smaller pieces which sent between peers using the bittorrent protocol. These pieces are of a fixed size, which enables the tracker to keep tabs on who has which pieces of data. This also breaks the file into verifiable pieces, each piece can then be assigned a hash code, which can be checked by the downloader for data integrity. The size of the pieces remains constant throughout all files in the torrent except for the final piece which is irregular. The most common piece sizes are 256kb, 512kb and 1mb.


Actual files are sent using tcp. but messages to the tracker, uses udp. In the case of upd, if the data being sent is small enough (less than 512 bytes) you don’t have to worry about receiving only part of the data or receiving data out of order.

## Glossary

- **Leechers**: Leechers are users who are in the process of downloading the file. They download pieces of the file from seeders and other leechers. Leechers also upload pieces of the file to other users while downloading. Once a leecher has completed downloading the entire file, they become a seeder.

- **Swarm**: The swarm are all seeds and peers that are connected together. So if your client shows 5 seeds and 10 peers then that’s your swarm. 

- **Health**: the better the ratio (i.e. the number of seeders : leechers) – the healthier a torrent is.