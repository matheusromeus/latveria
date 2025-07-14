
sudo shutdown now - shutdown
sudo reboot now - reboot
gnome-session-quit - logout

btop

lspci
lscpu
lsblk - block devices
lsmod
lshw


xrandr -> display changes from terminal

nvidia-smi
dmidecode


systemd-analyze
systemd-analyze blame
time ~appname~

pstree

**setting brightness levels**
echo 300 | sudo tee /sys/class/backlight/intel_backlight/brightness


download a youtube video with highest quality (1080p)
*yt-dlp -f "bv*+ba/b" -S "res:1080,ext:mp4" --merge-output-format mp4 ~youtube-url~