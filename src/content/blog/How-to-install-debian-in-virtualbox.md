---
    title: 'How to install debian in virtualbox'
    publishedAt: '2024-02-01T00:00:00.0502'
    author: 'pajri'
    image: 'https://images.unsplash.com/photo-1640552435388-a54879e72b28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    cateroy: 'System Admin'
    isPinned: true
    excerpt: 'Debian is a highly regarded, free and open-source operating system based on the Linux kernel.'
---
# How to Install Debian on VirtualBox

Installing Debian on VirtualBox is a great way to explore and use Debian without modifying your main system. Follow the steps below to set up a Debian virtual machine.

## Prerequisites

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) installed on your machine.
- [Debian ISO](https://www.debian.org/distrib/) downloaded (choose the appropriate version for your system, usually the 64-bit version).

## Step 1: Create a New Virtual Machine

1. Open **VirtualBox** and click on **New** to create a new virtual machine.
2. Enter a name for your virtual machine (e.g., "Debian"). VirtualBox will automatically detect the type and version as **Linux** and **Debian (64-bit)**.
3. Click **Next** to set the memory size. Allocate at least **1024 MB (1 GB)** of RAM, though **2 GB** or more is recommended.
4. Select **Create a virtual hard disk now** and click **Create**.
5. Choose **VDI (VirtualBox Disk Image)** as the hard disk file type, then click **Next**.
6. For storage on the physical hard disk, select **Dynamically allocated** and click **Next**.
7. Set the virtual hard disk size. **10 GB** is a good starting point for minimal installs, but consider allocating more if you plan on installing more software. Click **Create** to finish.

## Step 2: Configure the Virtual Machine

1. Select the virtual machine you just created and click on **Settings**.
2. Under **System**, go to the **Processor** tab and allocate **2 processors** if your system supports it.
3. Go to **Display** and increase **Video Memory** to at least **64 MB**.
4. In the **Storage** section, click on the **Empty** disk icon under **Controller: IDE**, then click the **disk icon** on the right and select **Choose a disk file**.
5. Navigate to and select the Debian ISO you downloaded earlier.

## Step 3: Boot and Install Debian

1. Start your virtual machine by clicking **Start**.
2. The Debian installer should boot from the ISO. Select your preferred language and press **Enter**.
3. Choose your location and configure the keyboard layout.
4. Configure the network by setting up a hostname and domain name (if applicable).
5. Set up a root password and create a new user account.
6. Partition the disk by selecting **Guided - Use entire disk** for simplicity. Confirm the changes and continue.
7. Select additional software packages to install. You can choose the **Debian desktop environment** if you want a graphical user interface (GUI), or you can install a minimal system without a desktop environment.
8. Finish the installation and reboot the system.

## Step 4: Post-Installation

Once Debian has been installed:

1. Remove the ISO from the virtual drive by going to **Devices > Optical Drives > Remove disk from virtual drive**.
2. Reboot the virtual machine and log in with your new user account.

### Optional: Install VirtualBox Guest Additions

To improve performance and enable features like full-screen mode:

1. In VirtualBox, click on **Devices** > **Insert Guest Additions CD image**.
2. Open a terminal in your Debian virtual machine.
3. Run the following commands to install the necessary dependencies:
    ```bash
    sudo apt update
    sudo apt install build-essential dkms linux-headers-$(uname -r)
    ```
4. Mount the Guest Additions CD and run the installer:
    ```bash
    sudo sh /media/cdrom/VBoxLinuxAdditions.run
    ```
5. Reboot the virtual machine.

## Conclusion

You now have Debian installed and running in VirtualBox. This setup allows you to experiment with Debian without affecting your main operating system.
