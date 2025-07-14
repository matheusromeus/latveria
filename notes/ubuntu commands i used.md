
## to set performance mode on ubuntu

powerprofilesctl get
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor


sudo bash -c "echo performance | tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor"

sudo powerprofilesctl set performance

## testing environment

sudo docker run -it --rm alpine:latest sh

sudo apt install --reinstall ubuntu-desktop gnome-shell