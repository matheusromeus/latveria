In this newsletter, we're diving into a crucial stage of Arch Linux installation: setting up networking and configuring the boot process.

## Configuring Networking with systemd-networkd

One of the key topics covered in this installation segment is the setup of networking using systemd-networkd instead of the more commonly used NetworkManager.

### Why systemd-networkd?

I emphasize a preference for using systemd's built-in networking capabilities:

> "I try to do as much as I can with systemd itself. You don't need NetworkManager necessarily if you know how to work with systemd-networkd."

This approach aligns with the minimalist philosophy often associated with Arch Linux users.

### Setting Up Wi-Fi

For Wi-Fi connectivity, the installation uses `iwd` (iNet wireless daemon) in conjunction with systemd-networkd. Here's the process:

1. Enable systemd-networkd service
    
2. Enable systemd-resolved service
    
3. Create a network configuration file
    
4. Install and enable iwd
    

**Practical Tip:** When creating your network configuration file, remember to match the network interface name (e.g., wlan0) that you see when running `ip link`.

## Understanding systemd

The video provides an excellent primer on systemd, which is crucial for modern Linux administration:

> "systemd is the modern init process... all Modern Standard Linux distributions that you will encounter at work use systemd as their init process."

### Key systemd Concepts:

1. Init process: The first process started by the kernel
    
2. Unit files: Configuration files for services managed by systemd
    
3. systemctl: The command-line tool for interacting with systemd
    

**DevOps Insight:** Familiarity with systemd is invaluable for troubleshooting and managing services in production environments.

Subscribe

## Boot Loader Configuration

The installation opts for systemd-boot instead of the more traditional GRUB bootloader.

### Advantages of systemd-boot:

1. Simplicity: Easier to configure than GRUB
    
2. Integration: Works seamlessly with other systemd components
    
3. UEFI-focused: Designed specifically for modern UEFI systems
    

### Configuring systemd-boot

The process involves:

1. Running `bootctl install`
    
2. Creating a loader entry file (e.g., /boot/loader/entries/arch.conf)
    
3. Specifying kernel parameters, especially for encrypted systems
    

**Important Note:** When dealing with encrypted systems, make sure to include the correct UUIDs and volume group names in your boot loader configuration.

## Practical Commands and Tools

Throughout the installation, several key commands are used:

1. `systemctl enable/start`: For managing systemd services
    
2. `vim`: For text editing (with some advanced usage demonstrated)
    
3. `lsblk` and `blkid`: For viewing block devices and their UUIDs
    
4. `mkinitcpio -p`: For regenerating the initramfs
    

## Common Pitfalls and Troubleshooting

1. Missing firmware for Wi-Fi adapters
    
2. Incorrect UUIDs in boot loader configuration
    
3. Forgetting to regenerate initramfs after making changes