
dwl-music "URL" -> make a command like this. takes the URL passes onto 

yt-dlp -x --audio-format flac "URL" -> downloads as flac

**converts to opus**
ffmpeg -i 'PERSIAN RUGS - PartyNextDoor.flac' -c:a libopus -b:a 160k 'Persian Rugs.opus'

to a particular folder