# Overview
This an code in react this uses adsterra to run ads on pterodactyl panel. Pterodactyl has no official way to ad ads

# How to use
1. Go to [Adsterra](https://beta.publishers.adsterra.com/)
2. Then sign up
3. Then click on add website and add your panel url without http protocols
4. Select Banner160x600
5. Wait for verification
6. Click on get code and copy it

Same as this
![plain](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRWxi64CByLfYk02QYJvKZ5ZYRiJ8czPfy4T5044qA6WJ0-gHN72z5NGktujGwNq-H1TWRbX7BZVwU1gWS_RNul2mIZRlm6etMu4KYoatNSqGovBxJYGJyrmywABxoj91g56DRBXqQal0ts2gt6LdYMMV3HClICkq4lwt9kzLzjbpPuAx8y3O-DHnneKoe/s1286/Screenshot_20240801-142815_YouTube.png)

*In this pic Social bar is selected but you need to select Banner160x600*

Then download Banner160x600 form this github repo then edit this

```
atoptions = {
           'key': 'your_key',
           'format': 'iframe',
           'height' : 600,
           'width': 160,
            params : {}
```
Add the key which is found in the code you got form adsterra

After you edit that then replace this script with yours

```
scriptSrc.src = '//www.withyours.test'
```

And then replace your dashboard,servers,admins and other .tsx files with ours

And then go to [this website](https://pterodactyl.io/community/customization/panel.html) and run all the commands to run ads

