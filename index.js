const discord = require ('discord.js');
const fs = require (`fs`);
const Jimp = require(`jimp`)
const ms = require (`ms`);
var client = new discord.Client(); 
const token = `NDYyODMwOTg1OTEwOTQzNzU0.Dh6rtg.qxaSS9B7CYOq6TJMwd4CdhMc_6o`;
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

client.on ("ready", () => {
    console.log ("Colonial smells")
    client.user.setActivity ("m!help")
    client.user.setAvatar("https://cdn.discordapp.com/attachments/459817725095575558/464146169409437696/mappersphere_2.png")
    client.user.setUsername("Mappersphere")

    answered = true;
    cAnswer = "";
    userAnswer = "";
    answered2 = true;
    answered3 = true;
    userResponse = ""; 
    nameAnswer = "";
    userResponse2 = ""; 
    cAnswer = "";
});

client.on(`guildMemberAdd`, member => {
    let jChannel = member.guild.channels.find(`name`, `conversation`)
    let mAvatar = member.user.avatarURL
    if (!jChannel) return;
    const gembed = new discord.RichEmbed()
    gembed.setTitle(`${member.user.username} has joined the server!`)
    gembed.setColor(`RANDOM`)
    gembed.setThumbnail(mAvatar)
    gembed.addField(`Name`, `${member.user.username}`)
    gembed.addField(`Member count`, member.guild.memberCount)
    gembed.setFooter(`${member.guild.name}` + `${member.user.displayAvatarURL}`)
    jChannel.sendEmbed(gembed)
    let jRole = message.guild.roles.find(`name`, `Student`)
    member.addRole(jRole)



})

client.on(`guildMemberRemove`, member => {
    let jChannel = member.guild.channels.find(`name`, `conversation`)
    let mAvatar = member.user.avatarURL
    if (!jChannel) return;
    const gembed = new discord.RichEmbed()
    gembed.setTitle(`${member.user.username} has left the server!`)
    gembed.setColor(`RANDOM`)
    gembed.setThumbnail(mAvatar)
    gembed.addField(`Name`, `${member.user.username}`)
    gembed.addField(`Member count`, member.guild.memberCount)
    gembed.setFooter(`${member.guild.name}` + `${member.user.displayAvatarURL}`)
    jChannel.sendEmbed(gembed)



})

const prefix = "colonial pls ";

client.on('message', async (message) => {
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1);

    if (message.author.bot) return;

    if (message.content.startsWith(`m!kick`)) {
        const args7 = cont.slice(1)
        const args8 = args7.join(" ")
        const kChannel = message.guild.channels.find(`name`, `logs`)
        if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.channelhannel.send(`You're not allowed to do that!`)
        var member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: :door: ");
        }).catch(() => {
            kChannel.send("Access Denied");
        })
        kChannel.send(`${member}, has been kicked`)
        const bembed = new discord.RichEmbed()
        bembed.setTitle(`Kicked user ${member}`)
        bembed.setThumbnail(`${message.guild.iconURL}`)
        bembed.addField(`Kicked by`, `${message.author.tag}`)
        bembed.setFooter(`Mappersphere`, message.author.displayAvatarURL)
        bembed.addField(`Reason`, `${args8}`)
        bembed.setTimestamp()
        kChannel.send(bembed)
    }
    
    if (message.content.startsWith(`m!fun`)) {
        const fuembed = new discord.RichEmbed
        fuembed.setThumbnail(message.guild.iconURL)
        fuembed.setTitle(`List of Fun Commands!`)
        fuembed.addField(`m!8ball`, `A simple 8ball command`)
        fuembed.addField(`m!safe`, `Your safe space.` )
        fuembed.addField(`m!kiss`, `Kiss command`)
        fuembed.addField(`m!weeb`, `You're a weeb`)
        fuembed.addField(`m!pride`, `Gay Pride`)
        fuembed.addField(`m!bully`, `Bully a user`)
        fuembed.addField(`m!shove`, `Shove a user into a locker`)
        fuembed.addField(`m!tranny`, `Makes u trans`)
        fuembed.addField(`m!gay`, `Makes u gay`)
        fuembed.addField(`m!commie`, `Makes you a commie`)
        fuembed.addField(`m!grey`, `makes u grey`)
        fuembed.addField(`m!jew`, `Image manipulation`)
        fuembed.addField(`m!wasted`, `Image manipulation`)
        fuembed.addField(`m!contrast`, `Image manipulation`)
        fuembed.addField(`m!dark`, `Image manipulation`)
        fuembed.addField(`m!light`, `Image manipulation`)
        fuembed.addField(`m!noncontrast`, `Image manipulation`)
        fuembed.addField(`m!dither`, `Image manipulation`)
        fuembed.addField(`m!invert`, `Image manipulation`)
        fuembed.addField(`m!thug`, `Image manipulation`)
        fuembed.addField(`m!say`, `Image manipulation`)
        fuembed.setColor(`RANDOM`)
        message.channel.send(fuembed)


    }
    
    if (message.content.startsWith(`m!safe`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/459815018230317059/463530972152070144/Screen_Shot_2018-07-02_at_11.32.36_AM.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(595, 594)
                      .write("queerkid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 1430, 0 )
                      .write("queer.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send(`Don't worry, you're safe now ;)`, {files: [{attachment: buf, name: 'queer.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`m!kiss`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463680991266078721/5aad662e87f5e18e_thumb_temp_facebook_post_image_file23875021420057644.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(275, 275)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(233, 233)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 260, 24 )
                      .composite( imagetouse2, 545, 87)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                }
            )})}
        )})
    }
    
    if (message.content.startsWith(`m!weeb`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463674453922938881/18mlqdeeco4jujpg.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(85, 85)
                      .write("weeb.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 127, 80 )
                      .write("weebs.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'weebs.jpg'}]})
                }
            )}
        )})
    }

    
    if (message.content.startsWith(`m!pride`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463672154546765824/4848922942_6a3b774167_z-e1333136836167.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(147, 147)
                      .write("gaykid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 314, 196 )
                      .write("gaykid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'gaykid.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`m!minecraft`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463677586992660480/maxresdefault_6.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(530, 530)
                      .write("kids.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 508, 0 )
                      .write("kid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'kid.jpg'}]})
                }
            )}
        )})
    }

    
    if (message.content.startsWith(`m!bully`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://media.discordapp.net/attachments/463426578135908352/463496757922234388/Being_Bullied.jpg?width=1725&height=1170`;
        Jimp.read(message.author.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(357, 357)
                      .write("bullier.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(594, 594)
                      .write("kidbeingbullied.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 0, 178 )
                      .composite( imagetouse2, 1027, 38)
                      .write("bully.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'bully.jpg'}]})
                }
            )})}
        )})
    }
    
    if (message.content.startsWith(`m!say`)) {
        const args25 = cont.slice()
        
        const sayMessage = args25.join(" ");
        message.channel.send(sayMessage)
    }
    
   
    
    if (message.content.startsWith(`m!shove`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last() 
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463503583539625984/shutterstock_127994624.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(655, 655)
                      .write("shove1.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
                if (err) throw err;
                imagetouse2.quality(60)
                           .resize(792, 792)
                           .write("shove2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 89, 220 )
                      .composite( imagetouse2, 1273, 256)
                      .write("shoved.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'shoved.jpg'}]})
                }
            )})}
        )})
    }
    
    if (message.content.startsWith ("m!8ball")) {
        ballMessage = message.content.slice (8); // n ! 8 b a l l [your message]
        number = 20;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("It is certain."); break;
            case 2: message.channel.send ("As I see it, yes."); break;
            case 3: message.channel.send ("Reply hazy, please try again."); break;
            case 4: message.channel.send ("Don't count on it."); break;
            case 5: message.channel.send ("It is decidedly so."); break;
            case 6: message.channel.send ("Yes, definitely."); break;
            case 7: message.channel.send ("Without a doubt."); break;
            case 8: message.channel.send ("Most likely."); break;
            case 9: message.channel.send ("Outlook is good."); break;
            case 10: message.channel.send ("Ask again later. (Watch Korean Rage)"); break;
            case 11: message.channel.send ("Better not tell you."); break;
            case 12: message.channel.send ("My reply is no."); break;
            case 13: message.channel.send ("My sources say no.."); break;
            case 14: message.channel.send ("You may rely on it."); break;
            case 15: message.channel.send ("Signs point to yes."); break;
            case 16: message.channel.send ("Concetrate and ask again."); break;
            case 17: message.channel.send ("Very doubtful."); break;
            case 18: message.channel.send ("Yes."); break;
            case 19: message.channel.send ("Cannot predict now."); break;
            case 20: message.channel.send ("Outlook is not so good."); break;
        }
    }
    
    if (message.content.startsWith(`m!tranny`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463673472846004235/5852d7ef120000c40beef7dd.jpeg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(185, 185)
                      .write("trannykid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 344, 205 )
                      .write("transkid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'transkid.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`m!thug`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/EgxsA9V.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 400, 212 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`m!grey`)) {
        let mUser = message.mentions.users.first()
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .greyscale()
                  .write("lena-small-bw.jpg")

            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'lena-small-bw.jpg'}]})
            })
        })
        

    }
    
    if (message.content.startsWith(`m!commie`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/358448632812535820/463432544831012864/image.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(176, 176)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(191, 169)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 473, 0 )
                      .composite( imagetouse2, 84, 23)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                }
            )})}
        )})
    }
    
    if (message.content.startsWith(`m!trans`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/YYgoI3H.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`m!gay`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/Wzlskgl.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`m!jew`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/6jBp4PD.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`m!wasted`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/iCaYtUo.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`m!modlist`)) {
        message.channel.send(`Colonial \n West \n Korean \n Sundal`)
    }

    if (message.content.startsWith(`m!ban`)) {
        const kChannel = message.guild.channels.find(`name`, `logs`)
        const args5 = cont.slice(1)
        const args6 = args5.join(" ")
        if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.channel.send(`You're not allowed to do that!`)
        var member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: :door: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        })
        kChannel.send(`${member}, has been banned`)
        const kembed = new discord.RichEmbed()
        kembed.addField(`Reason`, `${args6}`)
        kembed.setTitle(`Banned user: ${member}`)
        kembed.addField(`Ban length`, `Forever`)
        kembed.setThumbnail(`${message.guild.iconURL}`)
        kembed.addField(`Banned by`, `${message.author.tag}`)
        kembed.setFooter(`Mappersphere`, message.author.displayAvatarURL)
        kembed.setTimestamp()
        message.channel.send(kembed)
    }

    if (message.content.startsWith(`m!help`)) {
        if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.channel.send(`You can't do that!`)
        const hembed = new discord.RichEmbed()
        hembed.setThumbnail(message.guild.iconURL)
        hembed.setTimestamp()
        hembed.setColor(`BLUE`)
        hembed.addField(`m!kick`, `Kicks a user`)
        hembed.addField(`m!ban`, `Bans a user`)
        message.channel.send(hembed)
    }

    if (message.content.startsWith(`m!warn`)) {
        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`You do not have permission to do this!`)
        var wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!wUser) return message.channel.send("Please mention a user!");
        args13 = cont.slice(1)
        const reason = args13.join(" ") 
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send('**I do not have the correct permissions.**').catch(console.error)

        var warnEmbed = new discord.RichEmbed()
        warnEmbed.setTitle(`${message.author.username} has warned someone!`)
        warnEmbed.setColor("RED")
        warnEmbed.addField("Warned User", `${wUser} with ID: ${wUser.id}`)
        warnEmbed.addField("Warned By", `${message.author}`)
        warnEmbed.addField("Channel", message.channel)
        warnEmbed.addField("Time", message.createdAt)
        warnEmbed.addField("Reason", reason);
        warnEmbed.setThumbnail(message.guild.iconURL)

        var warnchannel = message.guild.channels.find(`name`, "logs");
        if (!warnchannel) return message.channel.send("**Can't find logs channel.**");


        warnchannel.send(warnEmbed);

    }

    if (message.content.startsWith(`m!report`)) {
        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`You do not have permission to do this!`)
        var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Please mention a user!");
        args13 = cont.slice(1)
        const reason = args13.join(" ")
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send('**I do not have the correct permissions.**').catch(console.error)

        var reportEmbed = new discord.RichEmbed()
        reportEmbed.setTitle(`${message.author.username} has reported someone!`)
        reportEmbed.setColor("RED")
        reportEmbed.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        reportEmbed.addField("Reported By", `${message.author}`)
        reportEmbed.addField("Channel", message.channel)
        reportEmbed.addField("Time", message.createdAt)
        reportEmbed.addField("Reason", reason);
        reportEmbed.setThumbnail(message.guild.iconURL)

        var reportschannel = message.guild.channels.find(`name`, "logs");
        if (!reportschannel) return message.channel.send("**Can't find logs channel.**");


        reportschannel.send(reportEmbed);
    }
    
    if (message.content.startsWith(`m!light`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("brightlmao.jpg")
                  .brightness(+0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'brightlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`m!dark`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("darklmao.jpg")
                  .brightness(-0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'darklmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`m!contrast`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("contrastlmao.jpg")
                  .contrast(+0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'contrastlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`m!nocontrast`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("nocontrastlmao.jpg")
                  .contrast(-0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'nocontrastlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`m!dither`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude3) {
            if (err) throw err;
            mydude3.quality(60)  
                  .write("dither565lmao.jpg")
                  .dither565()
            mydude3.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'dither565lmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`m!invert`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("invertlmao.jpg")
                  .invert()
                  .composite( src, x, y );   
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'invertlmao.jpg'}]})
            })
        })
    }

    ex1 = "./memes/ex1.png"; ex2 = "./memes/ex2.png"; ex3 = "./memes/ex3.png"; ex4 = "./memes/ex4.png"; ex5 = "./memes/ex5.png"; ex6 = "./memes/ex6.png"; ex7 = "./memes/ex7.png"; ex8 = "./memes/ex8.png"; ex9 = "./memes/ex9.png"; ex10 = "./memes/ex10.png"; ex11 = "./memes/ex11.png"; ex12 = "./memes/ex12.png"; ex13 = "./memes/ex13.png"; ex14 = "./memes/ex14.png"; ex15 = "./memes/ex15.png"; ex16 =  "./memes/ex16.png"; ex17 = "./memes/ex17.png"; ex18 = "./memes/ex18.png"; ex19 = "./memes/ex19.png"; ex20 = "./memes/ex20.jpg"; ex21 = "./memes/ex21.png"; ex22 = "./memes/ex22.png"; ex23 = "./memes/ex23.png"; ex24 = "./memes/ex24.png"; ex25 = "./memes/ex25.png"; ex26 = "./memes/ex26.png"; ex27 = "./memes/ex27.png"; ex28 = "./memes/ex28.png"; ex29 = "./memes/ex29.png";
    if (message.content.startsWith ("c!expose")) {
        number = 29;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;  
        switch (random) {
            case 1: message.channel.send ({ files: [ex1] }); break;
            case 2: message.channel.send ({ files: [ex2] }); break;
            case 3: message.channel.send ({ files: [ex3] }); break;
            case 4: message.channel.send ({ files: [ex4] }); break;
            case 5: message.channel.send ({ files: [ex5] }); break;
            case 6: message.channel.send ({ files: [ex6] }); break;
            case 7: message.channel.send ({ files: [ex7] }); break;
            case 8: message.channel.send ({ files: [ex8] }); break;
            case 9: message.channel.send ({ files: [ex9] }); break;
            case 10: message.channel.send ({ files: [ex10] }); break;
            case 11: message.channel.send ({ files: [ex11] }); break;
            case 12: message.channel.send ({ files: [ex12] }); break;
            case 13: message.channel.send ({ files: [ex13] }); break;
            case 14: message.channel.send ({ files: [ex14] }); break;
            case 15: message.channel.send ({ files: [ex15] }); break;
            case 16: message.channel.send ({ files: [ex16] }); break;
            case 17: message.channel.send ({ files: [ex17] }); break;
            case 18: message.channel.send ({ files: [ex18] }); break;
            case 19: message.channel.send ({ files: [ex19] }); break;
            case 20: message.channel.send ({ files: [ex20] }); break;
            case 21: message.channel.send ({ files: [ex21] }); break;
            case 22: message.channel.send ({ files: [ex22] }); break;
            case 23: message.channel.send ({ files: [ex23] }); break;
            case 24: message.channel.send ({ files: [ex24] }); break;
            case 25: message.channel.send ({ files: [ex25] }); break;
            case 26: message.channel.send ({ files: [ex26] }); break;
            case 27: message.channel.send ({ files: [ex27] }); break;
            case 28: message.channel.send ({ files: [ex28] }); break;
            case 29: message.channel.send ({ files: [ex29] }); break;
        }
    }

    


});
client.login (token);
