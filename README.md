# docker-mc-client

A hilariously stupid and overkill way to make a Minecraft account load chunks on a server. Supports whatever [mineflayer](https://github.com/PrismarineJS/mineflayer) supports. If you want to use this on newer servers such as 1.15.2, use ViaVersion and ViaBackwards.

```
    docker run --restart=unless-stopped --name mc-client sylver/docker-mc-client \
     --ip mc.domain.tld:25565
     --username user@domain.tld \
     --password passw0rd \
     --version 1.12.2 \
     --join-message=true
```

You'll want to login with the account on the target server and move to a desirable location where nothing will attack the player before setting it up like this. Once you run the container it'll join and sit there... menacingly... forever. "forever" being until you stop it or the connection is interrupted.
