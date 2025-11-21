---
title: "Tailscale: Your Private Network Without the Domain Name Bullshit"
description: "Secure remote access to your homelab without buying domains, configuring DNS, or exposing ports to the internet"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Self-Hosting"
slug: "tailscale"
layout: "blog"
draft: false
---

You want to access your self-hosted services remotely but you don't want to:
- Buy a fucking domain name
- Configure dynamic DNS
- Open ports on your router
- Expose your home IP to the entire internet
- Deal with SSL certificate bullshit for internal services
- Trust Cloudflare or any other MITM "security" service

Good news: Tailscale solves all of this. Better news: it's free for personal use and actually respects your privacy.

## What The Hell Is Tailscale?

Tailscale creates a private mesh VPN between your devices using WireGuard. Every device on your Tailscale network gets a permanent IP address in the `100.x.x.x` range that stays the same no matter where you are or what network you're on.

Your laptop at a coffee shop can talk to your home server like they're on the same LAN. No port forwarding. No dynamic DNS. No exposing anything to the public internet. It's peer-to-peer when possible, so traffic flows directly between devices instead of routing through some central server.

And unlike traditional VPNs that route ALL your traffic through a server somewhere, Tailscale only routes traffic destined for devices on your Tailscale network. Your regular internet traffic goes out normally. You're not bottlenecking everything through your home connection.

## Why No Domain Required

Traditional remote access requires:
1. Buy domain name ($10-15/year)
2. Point domain to your home IP
3. Set up dynamic DNS because residential IPs change
4. Configure port forwarding (security nightmare)
5. Get SSL certificates for HTTPS
6. Expose your services to the entire fucking internet
7. Deal with bots hammering your login pages 24/7

Tailscale's approach:
1. Install Tailscale
2. Access services via Tailscale IP (`100.x.x.x`)
3. That's it

Your services are only accessible to devices on your Tailscale network. No public exposure. No DNS configuration. No SSL certificate management for internal access. Just a private network that works.

## Setting Up Tailscale: The Actual Process

### Step 1: Create a Tailscale Account

Go to [tailscale.com](https://tailscale.com) and sign up. They support:
- GitHub authentication
- Google authentication (ironic, I know)
- Microsoft authentication
- Email/password

Pick whichever you hate least. I use GitHub because Microsoft hasn't completely destroyed it yet.

The free tier gives you:
- Up to 100 devices
- 3 users
- 1 subnet router
- Unlimited MagicDNS usage

That's more than enough for personal use.

### Step 2: Install Tailscale on Your Server

On most Linux systems:

```bash
# Add Tailscale's package repository
curl -fsSL https://tailscale.com/install.sh | sh

# Start Tailscale
sudo tailscale up

# Optional: Run as exit node (more on this later)
sudo tailscale up --advertise-exit-node

# Optional: Advertise subnet routes
sudo tailscale up --advertise-routes=192.168.1.0/24
```

The `tailscale up` command will give you a URL to authenticate. Open it, log in, and authorize the device.

**For Docker/containers**: You can run Tailscale in a container, but it's easier to install it directly on the host and then give containers access to the Tailscale network interface. More on that later.

### Step 3: Install Tailscale on Your Client Devices

**Linux**:
Same as above - use the install script.

**Windows**:
Download and install from [tailscale.com/download](https://tailscale.com/download). Run the installer, log in, done.

**macOS**:
Download from the Mac App Store or use Homebrew:
```bash
brew install tailscale
```

**iOS/Android**:
Install the app from your app store of choice. Log in. Enable on-demand connection if you want it always active.

### Step 4: Find Your Tailscale IPs

On any device:
```bash
tailscale ip -4
```

This shows your Tailscale IPv4 address (something like `100.101.102.103`). This IP is permanent for this device on your Tailscale network.

To see all devices on your network:
```bash
tailscale status
```

Or check the admin console at [login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines).

## Accessing Your Services

### Basic Access

If your home server running Jellyfin has Tailscale IP `100.101.102.103` and Jellyfin runs on port `8096`, you access it from any device on your Tailscale network via:

```
http://100.101.102.103:8096
```

No domain. No DNS. No SSL certificates. Just direct access over your private encrypted network.

### Using MagicDNS (The Better Way)

Tailscale includes MagicDNS, which gives each device a hostname. Enable it in your Tailscale admin console under DNS settings.

Once enabled, if your server is named `homeserver`, you can access services via:

```
http://homeserver:8096
```

Much easier to remember than IP addresses. The hostname is based on your device name in Tailscale, which you can customize in the admin console.

### Accessing Multiple Services

If you're running multiple services (Jellyfin, Nextcloud, Gitea, etc.) on the same server, access them via their respective ports:

```
http://homeserver:8096  # Jellyfin
http://homeserver:8080  # Nextcloud
http://homeserver:3000  # Gitea
```

Or set up a local reverse proxy (like Nginx) on your server to use path-based routing:

```
http://homeserver/jellyfin
http://homeserver/nextcloud
http://homeserver/gitea
```

## Advanced: Subnet Routing

Want to access devices on your home LAN that DON'T have Tailscale installed? Use subnet routing.

On your home server (which IS running Tailscale):

```bash
# Enable IP forwarding
echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.conf
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

# Advertise your home subnet (adjust IP range to match your network)
sudo tailscale up --advertise-routes=192.168.1.0/24 --accept-routes
```

Then in the Tailscale admin console, approve the subnet routes for this device.

Now from any Tailscale device, you can access ANY device on your home network at `192.168.1.x`, even if they're not running Tailscale. Your Tailscale server acts as a gateway.

This is incredibly useful for:
- Smart home devices
- Printers
- NAS devices that can't run Tailscale
- Gaming consoles
- Anything on your LAN

## Advanced: Exit Nodes

Want to route ALL your traffic through your home connection when you're on untrusted networks? Use exit nodes.

On your home server:
```bash
sudo tailscale up --advertise-exit-node
```

Approve the exit node in the admin console.

On your client device:
```bash
tailscale up --exit-node=homeserver
```

Now all your internet traffic routes through your home connection. Useful when you're on sketchy public WiFi and want to protect your traffic without trusting a commercial VPN provider.

To disable:
```bash
tailscale up --exit-node=
```

## Docker Integration

If you're running services in Docker, you have options:

### Option 1: Host Network Mode (Easiest)

Install Tailscale on your Docker host. Run containers with `--network host`:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin
    network_mode: host
```

Services are accessible via the host's Tailscale IP.

**Downside**: Services can conflict on ports, and you lose Docker's network isolation.

### Option 2: Tailscale Sidecar (Better)

Run Tailscale as a sidecar container for each service:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin
    network_mode: "service:tailscale"
    depends_on:
      - tailscale

  tailscale:
    image: tailscale/tailscale
    hostname: jellyfin
    environment:
      - TS_AUTHKEY=<your-authkey>
      - TS_STATE_DIR=/var/lib/tailscale
      - TS_USERSPACE=false
    volumes:
      - tailscale-data:/var/lib/tailscale
      - /dev/net/tun:/dev/net/tun
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    restart: unless-stopped

volumes:
  tailscale-data:
```

Each service gets its own Tailscale identity and IP address.

**Get an auth key**: Generate one in the Tailscale admin console under Settings → Keys. Make it reusable and set an appropriate expiration.

### Option 3: Use Tailscale on Host, Expose Ports (Compromise)

Install Tailscale on the host. Run containers normally and bind ports:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin
    ports:
      - "100.101.102.103:8096:8096"
```

Binding to your Tailscale IP means the service is only accessible via Tailscale, not your LAN or public internet.

## Security Considerations

### ACLs (Access Control Lists)

By default, all devices on your Tailscale network can access all other devices. For most personal use cases, this is fine. But you can lock it down with ACLs.

In the admin console, go to Access Controls and edit the policy file:

```json
{
  "acls": [
    {
      "action": "accept",
      "src": ["lucy@github"],
      "dst": ["tag:servers:*"]
    }
  ],
  "tagOwners": {
    "tag:servers": ["lucy@github"]
  }
}
```

This lets you define which users/devices can access which services. Useful if you're sharing access with others.

### Key Expiry

Device keys expire after a certain period (default is 180 days). You can:
- Disable key expiry for trusted devices in the admin console
- Set up automatic re-authentication
- Manually re-authenticate when keys expire

For servers that should always be accessible, disable key expiry.

### Sharing Devices

You can share specific devices with other Tailscale users without giving them access to your entire network. Useful for letting friends access your Jellyfin server without exposing everything else.

In the admin console, click on a device → Share → enter their email. They'll get an invite to add that specific device to their Tailscale network.

## Monitoring and Troubleshooting

Check connection status:
```bash
tailscale status
```

See which route is being used (direct, relay, etc.):
```bash
tailscale status --json | jq '.Peer[] | {name: .HostName, direct: .CurAddr}'
```

Test connectivity:
```bash
tailscale ping homeserver
```

View logs:
```bash
sudo journalctl -u tailscaled -f
```

Most connection issues are caused by:
- Firewall blocking UDP port 41641 (Tailscale's default)
- Corporate networks blocking VPN protocols
- Symmetric NAT preventing direct connections (falls back to relay, which is slower but still works)

## Why This Doesn't Require a Domain

Traditional VPN solutions require you to know your home IP address and configure port forwarding. Dynamic DNS services (like DuckDNS, No-IP) give you a domain that points to your changing home IP.

Tailscale eliminates this because:
1. **Coordination servers handle discovery**: Tailscale's coordination servers (which you can self-host if you're paranoid) help devices find each other without needing to know public IPs
2. **NAT traversal**: Tailscale uses STUN/TURN techniques to establish direct connections through NAT
3. **Stable internal IPs**: Your Tailscale IPs are permanent and don't change
4. **MagicDNS**: Provides DNS resolution for Tailscale hostnames without external DNS servers

Your devices discover each other through Tailscale's coordination server, establish direct encrypted connections when possible, and fall back to relay servers when direct connection isn't possible (rare, but it happens on very restrictive networks).

## The Privacy Angle

"But doesn't Tailscale see all my traffic?"

No. Here's why:
- **Coordination only**: Tailscale's servers only coordinate connections between your devices. They don't see your traffic.
- **Direct connections**: When possible, traffic flows peer-to-peer between your devices, never touching Tailscale's infrastructure
- **End-to-end encryption**: All traffic is encrypted using WireGuard before leaving your device
- **Relay servers**: Even when using relay servers (when direct connection fails), traffic is still encrypted end-to-end. The relay server can't see content.
- **No logging**: Tailscale doesn't log your traffic or connection metadata beyond what's necessary for the service to function

If you're REALLY paranoid, you can:
- Self-host the coordination server (called Headscale)
- Audit the open-source client code
- Monitor network traffic to verify encryption

## Headscale: Self-Hosted Coordination

If you don't trust Tailscale's coordination servers (reasonable), run your own with [Headscale](https://github.com/juanfont/headscale).

Headscale is an open-source reimplementation of Tailscale's coordination server. Install it on a VPS or home server:

```bash
# Install Headscale (check releases for latest version)
wget https://github.com/juanfont/headscale/releases/download/v0.23.0/headscale_0.23.0_linux_amd64.deb
sudo dpkg -i headscale_0.23.0_linux_amd64.deb

# Start Headscale
sudo systemctl enable --now headscale

# Create a user
headscale users create lucy

# Generate a pre-auth key
headscale preauthkeys create --user lucy
```

Then point your Tailscale clients to your Headscale server instead of Tailscale's official servers.

**Trade-off**: You're now responsible for keeping the coordination server running. If it goes down, existing connections stay up, but new devices can't join and devices can't discover each other's new IPs if they change.

## Practical Use Cases

### Access Jellyfin from anywhere
No more wondering if you opened the right ports or worrying about exposed services. Just install Tailscale on your phone and laptop, connect to your Jellyfin server via Tailscale IP.

### Manage your homelab remotely
SSH to your servers, access web UIs, run commands - all over encrypted connections without exposing SSH to the internet.

### Share media with friends
Give trusted friends access to your Jellyfin/Plex server by sharing that specific device with them. They install Tailscale, you share the device, they stream from your server.

### Bypass restrictive networks
Use exit nodes to route traffic through your home connection when you're on networks that block services you need.

### Access home network devices
Use subnet routing to access smart home devices, printers, NAS boxes - anything on your LAN from anywhere.

### Secure public WiFi usage
Exit node through your home connection when on sketchy public WiFi instead of trusting a commercial VPN.

## The Bottom Line

Tailscale gives you secure remote access to your self-hosted services without:
- Buying domain names
- Configuring DNS
- Opening ports to the internet
- Managing SSL certificates for internal services
- Trusting Cloudflare or other MITM services
- Exposing your services to bots and scanners

It's free for personal use, actually respects privacy, uses battle-tested WireGuard encryption, and just fucking works.

Is it perfect? No. You're trusting Tailscale's coordination servers (unless you run Headscale). But compared to the alternatives - exposing services publicly, trusting commercial VPNs, or dealing with traditional VPN complexity - it's the best option for homelab remote access.

Install it. Configure it once. Forget about it. Access your services from anywhere without domain name bullshit.

---

*For more on my self-hosted stack and how I use Tailscale to access everything remotely, check out my other posts. Questions? Reach out via [email](mailto:lucyrandall@helltop.net).*
