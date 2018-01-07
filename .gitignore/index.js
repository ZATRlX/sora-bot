const config = require('./config.json');
const ytdl = require('ytdl-core');
const request = require('request');
const getYouTubeID = require('get-youtube-id');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = config.token;
const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
const prefix = config.prefix;
const async = require('asyncawait');
const await = require('asyncawait');

var TirageON = false;

var TiragePersonne = [];

// VOTES

var TicketVote = 0;
	
var TableVote = [];

var TableVoteAll = [];
	
var TableVoteValeur = [];
	
var TableVoteTicket = [];
	
var TableVoteTicketUser = [];
	
var TableVoteUser = [];

var TableVoteTemps = [];

var TableVoteTempsNotChange = [];

//if(

// VOTES

let music = {};
bot.login(token);

bot.on("ready", () => {
  console.log("Ready")
  bot.user.setGame("!help", 'https://go.twitch.tv/zatrix15')
});

bot.on("guildMemberAdd", function(member) {
	member.guild.channels.find("name", "accueil").sendMessage("Bienvenue à toi " + member.toString());
	
	/* Ajoute dans le channel "accueil" (changer par le nom du channel souhaité) la bienvenu aux nouveaux venus */
});

bot.on('message', message => {
	
	//let userName = message.member.user.username;
	
	//let messageArray = message.content.split(" ");
	//let command = messageArray[0];
	//let args = messageArray.slice(1);
	
	//if(!command.startsWith(prefix)) return;
	
	var args2 = message.content.substring(config.prefix.length).split(" ");
	const command2 = args2.shift().toLowerCase();
	
	var args3 = message.content.substring(config.prefix.length).split(", ");
	const command3 = args3.shift().toLowerCase();
	
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	//let messageArray = message.content.split(" ");
	//let command2 = messageArray[0];
	//let split = split.slice(1);
	
	//message.channel.sendMessage(messageArray);
	//message.channel.sendMessage(command);
	//message.channel.sendMessage(args);
	
	noMoreMusic = 0;
	
	notagif = 0;

    let song = args.join(' ')
	
	//if (message.author.equals(bot.user)) return;
	
	if (!message.content.startsWith(prefix)) return;
	/* si le message ne commance par le prefix le reste du code ne s'execute pas*/
	
	if(command === "oniisan")
	{
		
		if(message.author.id === "180703627504123904")
				{
					message.channel.sendMessage("yes imoutosan ?");
				}
			else
				{
					message.channel.sendMessage("You're not my sister >:(");
				}
	}
	
	if(command === "id")
	{
		console.log(message.author.id);
	}
	
	if(command === "info")
	{
		message.channel.sendMessage("Je suis Sora, le grand frère de Shiro. Envoyez !help pour voir les commandes");
		
	}
	
	if(command === "herehelp")
	{
		var Commandes = new Discord.RichEmbed()
				.setTitle("Liste des commandes\n", " \n")
				.addField("[!help]", " - Afficher toutes les commandes")
				.addField("[!herehelp]", " - Afficher toutes les commandes dans le channel")
				.addField("[!info]", " - Afficher les informations du bot")
				.addField("[!dev]", " - Afficher les informations du développeur")
				.addField("[!play ]+[url]", " - Joue une vidéo Youtube")
				.addField("[!skip]", " - Passe à la prochaine musique")
				.addField("[!stop]", " - Le bot arrête de jouer et quitte le salon vocal (Ne fonctionne pas correctement, car le bot ne pourra plus jouer de musique, attendez que la musique finisse, ou faîtes un !skip pour l'arrêter")
			message.channel.sendEmbed(Commandes);
			
	}
	
	if(command === "help")
	{
		var privatCommandes = new Discord.RichEmbed()
				.setTitle("Liste des commandes\n", " \n")
				.addField("[!help]", " - Afficher toutes les commandes")
				.addField("[!herehelp]", " - Afficher toutes les commandes dans le channel")
				.addField("[!info]", " - Afficher les informations du bot")
				.addField("[!dev]", " - Afficher les informations du développeur")
				.addField("[!play ]+[url]", " - Joue une vidéo Youtube")
				.addField("[!skip]", " - Passe à la prochaine musique")
				.addField("[!stop]", " - Le bot arrête de jouer et quitte le salon vocal (Ne fonctionne pas correctement, car le bot ne pourra plus jouer de musique, attendez que la musique finisse, ou faîtes un !skip pour l'arrêter")
			message.author.sendEmbed(privatCommandes);
	}
	
	if(command === "dev")
	{
		var dev = new Discord.RichEmbed()
				.addField("Zatrix", "\n\nJoueur Rocket league dans la IcePepper\n\nDébutant de le développement de site web (HTML5, CSS3, PHP)\n\nTwitter: https://twitter.com/_Zatrix_ \nWeb : http://futursmusic.ch", true)
				.setThumbnail("https://image.noelshack.com/fichiers/2017/29/4/1500585525-zatrix.jpg", true)
				.setColor(0xE12B83)
				// pour choisir le code couleur il faut mettre (0x+le code Hex sans le #)
			message.channel.sendEmbed(dev);
	}
	
	if(command2 === "8ball" && args2[0])
	{
		var possibilite = ["Oui","Non","Peut-être","Je ne sais pas","Je n'ai pas le temps pour ces conneries !"];
		
		message.channel.sendMessage(possibilite[Math.floor(Math.random() * possibilite.length)]);
	}
	
	if(command === "randomgif")
	{
		notagif = 1;
		randomgif = Math.floor((Math.random() * 7) + 1)
		message.channel.sendMessage("",{ file: "gifs/gif" + randomgif + ".gif"})
	}
	
	if(command2 === "clearmessage" && message.author.id === "180703627504123904")
	{
		
		if (!message.member.roles.find("name", "bot commande"))
			{
				
				message.channel.send('Vous n\'avez pas accès à cette commande');
				
				setTimeout(() => {
					
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 3000);
				
				return;
			}

			if(!args2[0])
			{
				
				message.channel.send('Précisez le nombre de message que vous voulez supprimer');
				
				setTimeout(() => {
					
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				return;
			}
					
		
		nbrMessageDelete = args2[0]
		
		message.delete();
		
		message.channel.fetchMessages({limit: nbrMessageDelete}).then(messages => {
			message.channel.bulkDelete(messages);
		}).catch(console.error);
		
	}
	
	if(command2 === "role")
        {
            var help = new Discord.RichEmbed()
                .addField("Role", "\n\nListe des commandes d'ajout de role \n\n!addrole + role : Ajoute le role choisi\n!removerole : Enlève le role choisi\n\n**ROLES DISPONIBLES**\nAttente Responsable /\nClash Royale / CR\nCounter-Strike / Counter Strike / CSGO\nHearthstone\nLeague of Legends / LOL\nOverwatch / OW\nPUBG\nRainbow 6 Siege / R6\nRocket league / RL\nTrackmania / tm\nWeekly")
            message.channel.sendEmbed(help);
        }
	
	if(command2 === "addrole")
	{
		
		if(!args2[0])
		{
				message.channel.sendMessage('Précisez le rôle que vous voulez obtenir');
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				return;
		}
		
		let addMember = message.guild.member(message.author);			
		
		// Roles que les gens peuvent s'attribuer
		var ArrayRoles = ["Attente Responsable","StatsRoyale","Counter Strike","League of Legends","TrackMania","PUBG","Rocket league","Rainbow 6 Siege","Hearthstone","Clash Royale","Weekly","Boss du serveur","Admin"];
		
		// Roles que les gens ne peuvent pas s'attribuer
		var ArrayNotAddRolesSora = ["Sora"];
		
		var ArrayRolesToLowerCase = ["attente responsable","statsroyale","counter strike","league of legends","trackmania","pubg","rocket league","rainbow 6 siege","hearthstone","clash royale","weekly","boss du serveur","admin"];
		
		// Roles que les gens ne peuvent pas s'attribuer
		var ArrayNotAddRoles = ["President","Vice President","Developpeur","IcePepper","▶ Responsable Commercial","▶ Responsable Communication","▶ Responsable Community","▶ Responsable eSport","▶ Responsable Graphique","▶ Responsable Recrutement","▶ Responsable Technique","▶ Responsable WebTV","Bureau","Fondateurs","Responsables 💡","Modérateur 🔧","Community Managers 📗","▶ RolePlay","Streameurs 🎥","Partenaire 📣","▶ Team Leader","IcePepper.Red","IcePepper.Blue","▶ Clash Royal","Test","Counter-Strike 🔪","League Of Legends 💥","Overwatch 🔥","Rocket League ⚽","TrackMania ZrT 🏁","TrackMania Tech 🏁","Trackmania Dirt 🏁","TrackMania FS 🏁","H1Z1 💯","Weekly 🚗","#WeAreIcePepper"];
		
		var ArrayNotAddRolesToLowerCase = ["president","vice president","developpeur","icePepper","▶ responsable commercial","▶ responsable communication","▶ responsable community","▶ responsable esport","▶ responsable graphique","▶ responsable recrutement","▶ responsable technique","▶ responsable webtv","bureau","fondateurs","responsables 💡","modérateur 🔧","community managers 📗","▶ roleplay","streameurs 🎥","partenaire 📣","▶ team leader","icepepper.red","icepepper.blue","▶ clash royal","test","counter-strike 🔪","league of legends 💥","overwatch 🔥","rocket league ⚽","trackmania zrt 🏁","trackmania tech 🏁","trackmania dirt 🏁","trackmania fs 🏁","h1z1 💯","weekly 🚗","#weareicepepper"];
		
		
		// EN CONSTRUCTION
		
		/*for(i = 0; i < ArrayRoles.length; i++)
		{	
			let role = message.guild.roles.find("name", ArrayRoles[i]);
			
			console.log(message.guild.member(message.author).roles.find("name", ArrayRoles[i]));
			
			return;
			
			for(j = 0; j < ArrayNotAddRoles.length; j++)
			{
				if(message.guild.member(message.author).roles.find("name", ArrayRoles[j]) === role)
				{
					message.reply("vous possedez déjà ce rôle");
					
					setTimeout(() => {
					
						message.channel.fetchMessages({limit: 2}).then(messagesnop => {
					message.channel.bulkDelete(messagesnop);
					});
									
								}, 4000);
					
					
					return;
				}
			}
		}*/
		
		if(args2[0].toLowerCase() === "boss" && args2[1].toLowerCase() === "du" && args2[2].toLowerCase() === "serveur")
		{
			addMember.addRole(message.guild.roles.find("name", "Boss du serveur"));
				
				message.reply("le rôle \"Boss du serveur\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		
		
		if(args2[0].toLowerCase() === "attente" && args2[1].toLowerCase() === "responsable")
		{
			addMember.addRole(message.guild.roles.find("name", "Attente Responsable"));
				
				message.reply("le rôle \"Attente Responsable\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if(args2[0].toLowerCase() === "tm")
		{
			addMember.addRole(message.guild.roles.find("name", "TrackMania"));
				
				message.reply("le rôle \"TrackMania\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "counter" && args2[1].toLowerCase() === "strike") || (args2[0].toLowerCase() === "csgo") || (args2[0].toLowerCase() === "counter-strike"))
		{
			addMember.addRole(message.guild.roles.find("name", "Counter Strike"));
				
				message.reply("le rôle \"Counter-Strike\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "league" && args2[1].toLowerCase() === "of" && args2[2].toLowerCase() === "legends") || args2[0].toLowerCase() === "lol")
		{
			addMember.addRole(message.guild.roles.find("name", "League of Legends"));
				
				message.reply("le rôle \"League of Legends\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if(args2[0].toLowerCase() === "ow")
		{
			addMember.addRole(message.guild.roles.find("name", "Overwatch"));
				
				message.reply("le rôle \"Overwatch\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "rocket" && args2[1].toLowerCase() === "league") || args2[0].toLowerCase() === "rl")
		{
			addMember.addRole(message.guild.roles.find("name", "Rocket League"));
				
				message.reply("le rôle \"Rocket League\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "rainbow" && args2[1].toLowerCase() === "6" && args2[2].toLowerCase() === "siege") || args2[0].toLowerCase() === "r6")
		{
			addMember.addRole(message.guild.roles.find("name", "Rainbow 6 Siege"));
				
				message.reply("le rôle \"Rainbow 6 Siege\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "clash" && args2[1].toLowerCase() === "royale") || args2[0].toLowerCase() === "cr")
		{
			addMember.addRole(message.guild.roles.find("name", "Clash Royale"));
				
				message.reply("le rôle \"Clash Royale\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		for(i = 0; i < ArrayRoles.length; i++)
		{	
			let role = message.guild.roles.find("name", ArrayRoles[i]);
	
			if(args2[0].toLowerCase() === ArrayRolesToLowerCase[i])
			{
				addMember.addRole(role);
				
				message.reply("le rôle \"" + args2[0] + "\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
			}
		}
		
		for(j = 0; j < ArrayNotAddRoles.length; j++)
		{	
			
			if(args2[0] === ArrayNotAddRoles[j])
			{
				message.reply("Vous n'avez pas le droit de vous attribuer ce rôle");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
			}
			
		}
			
			for(j = 0; j < ArrayNotAddRoles.length; j++)
			{
				if(args2[0].toLowerCase() === ArrayNotAddRolesToLowerCase[j])
				{
					message.reply("Vous n'avez pas le droit de vous attribuer ce rôle");
					
					setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
					
					return;
				}
			}
			
			for(j = 0; j < ArrayNotAddRoles.length; j++)
			{
				if(args2[0].toLowerCase() != ArrayRolesToLowerCase[j] && args2[0].toLowerCase != ArrayNotAddRolesToLowerCase[j])
				{
					message.reply("Ce role n'existe pas");
					
					setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
					return;
				}		
			}	
	}
	
	if(command2 === "removerole")
	{
		
		if(!args2[0])
		{
				message.reply('Précisez le rôle que vous voulez supprimer');
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				return;
		}
		
		let addMember = message.guild.member(message.author);			
		
		// Roles que les gens peuvent s'attribuer
		var ArrayRoles = ["Attente Responsable","StatsRoyale","Counter Strike","League of Legends","TrackMania","PUBG","Rocket league","Rainbow 6 Siege","Hearthstone","Clash Royale","Weekly"];
		
		// Roles que les gens ne peuvent pas s'attribuer
		var ArrayNotAddRolesSora = ["Sora"];
		
		var ArrayRolesToLowerCase = ["attente responsable","statsroyale","counter strike","league of legends","trackmania","pubg","rocket league","rainbow 6 siege","hearthstone","clash royale","weekly"];
		
		// Roles que les gens ne peuvent pas s'attribuer
		var ArrayNotAddRoles = ["President","Vice President","Developpeur","IcePepper","▶ Responsable Commercial","▶ Responsable Communication","▶ Responsable Community","▶ Responsable eSport","▶ Responsable Graphique","▶ Responsable Recrutement","▶ Responsable Technique","▶ Responsable WebTV","Bureau","Fondateurs","Responsables 💡","Modérateur 🔧","Community Managers 📗","▶ RolePlay","Streameurs 🎥","Partenaire 📣","▶ Team Leader","IcePepper.Red","IcePepper.Blue","▶ Clash Royal","Test","Counter-Strike 🔪","League Of Legends 💥","Overwatch 🔥","Rocket League ⚽","TrackMania ZrT 🏁","TrackMania Tech 🏁","Trackmania Dirt 🏁","TrackMania FS 🏁","H1Z1 💯","Weekly 🚗","#WeAreIcePepper"];
		
		var ArrayNotAddRolesToLowerCase = ["president","vice president","developpeur","icePepper","▶ responsable commercial","▶ responsable communication","▶ responsable community","▶ responsable esport","▶ responsable graphique","▶ responsable recrutement","▶ responsable technique","▶ responsable webtv","bureau","fondateurs","responsables 💡","modérateur 🔧","community managers 📗","▶ roleplay","streameurs 🎥","partenaire 📣","▶ team leader","icepepper.red","icepepper.blue","▶ clash royal","test","counter-strike 🔪","league of legends 💥","overwatch 🔥","rocket league ⚽","trackmania zrt 🏁","trackmania tech 🏁","trackmania dirt 🏁","trackmania fs 🏁","h1z1 💯","weekly 🚗","#weareicepepper"];
		
		
		// EN CONSTRUCTION
		
		/*for(i = 0; i < ArrayRoles.length; i++)
		{	
			let role = message.guild.roles.find("name", ArrayRoles[i]);
			
			console.log(message.guild.member(message.author).roles.find("name", ArrayRoles[i]));
			
			return;
			
			for(j = 0; j < ArrayNotAddRoles.length; j++)
			{
				if(message.guild.member(message.author).roles.find("name", ArrayRoles[j]) === role)
				{
					message.reply("vous possedez déjà ce rôle");
					
					setTimeout(() => {
					
						message.channel.fetchMessages({limit: 2}).then(messagesnop => {
					message.channel.bulkDelete(messagesnop);
					});
									
								}, 4000);
					
					
					return;
				}
			}
		}*/
		
		if(args2[0].toLowerCase() === "attente" && args2[1].toLowerCase() === "responsable")
		{
			addMember.removeRole(message.guild.roles.find("name", "Attente Responsable"));
				
				message.reply("le rôle \"Attente Responsable\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if(args2[0].toLowerCase() === "tm")
		{
			addMember.removeRole(message.guild.roles.find("name", "TrackMania"));
				
				message.reply("le rôle \"TrackMania\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "counter" && args2[1].toLowerCase() === "strike") || (args2[0].toLowerCase() === "csgo") || (args2[0].toLowerCase() === "counter-strike"))
		{
			addMember.removeRole(message.guild.roles.find("name", "Counter Strike"));
				
				message.reply("le rôle \"Counter-Strike\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "league" && args2[1].toLowerCase() === "of" && args2[2].toLowerCase() === "legends") || args2[0].toLowerCase() === "lol")
		{
			addMember.removeRole(message.guild.roles.find("name", "League of Legends"));
				
				message.reply("le rôle \"League of Legends\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if(args2[0].toLowerCase() === "ow")
		{
			addMember.removeRole(message.guild.roles.find("name", "Overwatch"));
				
				message.reply("le rôle \"Overwatch\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "rocket" && args2[1].toLowerCase() === "league") || args2[0].toLowerCase() === "rl")
		{
			addMember.removeRole(message.guild.roles.find("name", "Rocket League"));
				
				message.reply("le rôle \"Rocket League\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "rainbow" && args2[1].toLowerCase() === "6" && args2[2].toLowerCase() === "siege") || args2[0].toLowerCase() === "r6")
		{
			addMember.removeRole(message.guild.roles.find("name", "Rainbow 6 Siege"));
				
				message.reply("le rôle \"Rainbow 6 Siege\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		if((args2[0].toLowerCase() === "clash" && args2[1].toLowerCase() === "royale") || args2[0].toLowerCase() === "cr")
		{
			addMember.removeRole(message.guild.roles.find("name", "Clash Royale"));
				
				message.reply("le rôle \"Clash Royale\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
		}
		
		for(i = 0; i < ArrayRoles.length; i++)
		{	
			let role = message.guild.roles.find("name", ArrayRoles[i]);
	
			if(args2[0].toLowerCase() === ArrayRolesToLowerCase[i])
			{
				addMember.removeRole(role);
				
				message.reply("le rôle \"" + args2[0] + "\" à bien été supprimé ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
			}
		}
			
			for(j = 0; j < ArrayNotAddRoles.length; j++)
			{
				if(args2[0].toLowerCase() != ArrayRolesToLowerCase[j] && args2[0].toLowerCase != ArrayNotAddRolesToLowerCase[j])
				{
					message.reply("Ce role n'existe pas");
					
					setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
					return;
				}		
			}	
	}	

	if(command2 === "clearmessageuser")
	{
		
		if (!message.member.roles.find("name", "President") && !message.member.roles.find("name", "Vice President") && !message.member.roles.find("name", "Bureau") && !message.author.id === "180703627504123904")
		{
			message.reply('Vous n\'avez pas accès à cette commande');
				
				setTimeout(() => {
					
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 3000);
				
				return;
		}
		
		
		const user = message.mentions.users.first();
		
		const amount = args2[1];
		//const amount = !!parseInt(message.content.split(' ')[0]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[0])
		
		//message.reply(amount);
		
		if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
		
		if (!amount) return message.reply('Must specify an amount to delete!');
		
		message.channel.fetchMessages({
			
			limit: amount,
			
		}).then((messages) => {
				if (user)
				{
					const filterBy = user ? user.id : Client.user.id;
					
					//message.reply(filterBy);
					
					messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
					
					//message.reply(messages);
				}
				message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
		});
	}
	
	if(command2 === "test2")
	{
		
		
		message.reply("Salut " + message.mentions.users.find("username","Zatrix"))
		
		//message.channel.sendMessage("Salut " + message.mentions.users.find("username","Prower"));
	}
		
	if(command2 === "createvote")
	{
		
		if(!args2[0])
		{
			message.reply("Veuillez spécifier en heure la durée du vote, l'énoncé du vote, ainsi que 2 propositions au minimum");
			
			setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(!args3[0])
		{
			message.reply("Veuillez spécifier l'énoncé du vote, ainsi que 2 propositions au minimum");
			
			setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(!args3[2])
		{
			message.reply("Veuillez proposer au moins 2 propositions pour créer un vote")
			
			setTimeout(() => {
				
			message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(args2[0] && args3[0] && args3[1] && args3[2])
		{
			TicketVote++;
		}
		
		var TimeNow = 0;
		
		args2[0] = args2[0].replace(",","");
		
		var TimeWant = ((args2[0] * 60) /** 60*/);
		
		var TimeWantNotChange = ((args2[0] * 60)/* * 60*/);
		
		var MessageVote = args3[0];
		
		if(args3[1])
		{	
			var nbrChoiceVote = 1;
			
			if(args3[2])
			{
				var nbrChoiceVote = 2;
				
				if(args3[3])
				{
					var nbrChoiceVote = 3;
					
					if(args3[4])
					{
						var nbrChoiceVote = 4;
						
						if(args3[5])
						{
							var nbrChoiceVote = 5;
							
							if(args3[6])
							{
								var nbrChoiceVote = 6;
								
								if(args3[7])
								{
									var nbrChoiceVote = 7;
									
									if(args3[8])
									{
										var nbrChoiceVote = 8;
										
										if(args3[9])
										{
											var nbrChoiceVote = 9;
											
											if(args3[10])
											{
												var nbrChoiceVote = 10;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		var messageVote = "";
		
		TableVoteTicket.push(TicketVote);
		
		TableVoteTemps.push(TimeWant);
		
		for(i = 1; i <=  nbrChoiceVote + 1; i++)
		{

			TableVote.push(args3[i]);
			
		}
		
		TableVoteAll.push(TableVote);
		
		TableVoteTemps.push((args2[0] * 60)/* * 60*/);
		
		TableVoteTempsNotChange.push((args2[0] * 60)/* * 60*/);
		
		for(i = 0; i < nbrChoiceVote; i++)
		{			
			TableVoteValeur.push("0");
		}	
		
		for(i = 0; i <= nbrChoiceVote - 1; i++)
		{
			messageVote += ("		" + (i + 1) + " - " + TableVote[i] + "\n\n");
		}
		
		message.channel.sendMessage("Nouveau vote !\nTicket de vote : **#" + TicketVote + "**\n\nVote proposé par " + message.author + "\nDurée du vote : **" + ((TimeWant / 60)/* / 60*/) + " minute(s)**\nÉnoncé : **" + MessageVote + "**\n\n" + messageVote + "Votez maintenant avec la commande \"**!vote**\" + le nombre souhaité");
		
			var x = setInterval(function() {
				
				for(i = 0; i < TableVoteTemps.length; i++);
				{
					
					TableVoteTemps[i] = TableVoteTemps[i] - 1;
					
					if(TableVoteTemps[i] === 0)
					{
						message.channel.sendMessage("Le vote est fini");
						
						TableVote[i].pop();
						
						return;
					}
					
					if(TableVoteTemps[i] === (TableVoteTempsNotChange[i] / 2))
					{
						message.channel.sendMessage("Il ne vous reste plus que " + ((TableVoteTemps[i] / 60)) + " minutes avant la fin du vote. N'oubliez pas de voter :)\n\nVote proposé par " + message.author + "\n\nDurée du vote : " + ((TableVoteTemps[i] / 60)/* / 60*/) + " minute(s)\n\n" + messageVote + "");
					
						message.channel.sendMessage(TableVoteTemps);
					}
				}
			}, 1000);
	}
	
	if(command2 === "tablevotetemps")
	{
		for(i = 0; i <= TableVoteTemps.length; i++);
		{
			message.reply(TableVoteTemps);
		}
	}
	
	if(command2 === "vote")
	{
		if(!args2[0] && !args2[1])
		{
			messgage.reply("Vous devez spécifier un ticket de vote valide pour voter, ainsi que votre choix de vote");
			
			setTimeout(() => {
				
			message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(args2[0] < TicketVote || args2[0] > TicketVote || !args2[0])
		{
			message.reply("Veuillez spécifier un numéro de ticket valide");
			
			setTimeout(() => {
				
			message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(!args2[1])
		{
			message.reply("Vous devez spécifier votre choix de vote pour voter");
			
			setTimeout(() => {
				
			message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(args2[0] && args2[1])
		{
			
		}
	}
	
	if(command2 === "creetirage")
	{
		if(!args2[0])
		{
			message.reply("Veuillez spécifier en heure la durée du tirage au sort");
			
			setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(!args3[0])
		{
			message.reply("Veuillez spécifier au moins un lot");
			
			setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 6000);
							
			return;
		}
		
		if(TirageON === true)
		{
			message.reply("Un vote est déjà en cours");
			
			return;
		}
		
		TirageON = true;
		
		args2[0] = args2[0].replace(",","");
		
		var TirageTemps = (args2[0] * 60 /*)* 60 )* 24*/);
		
		var TitageTempsNot = (args2[0] * 60 /*)* 60 )* 24*/);
		
		var TirageLot = [];
		
		if(args3[0])
		{	
			var nbrChoiceTirage = 1;
			
			if(args3[1])
			{
				var nbrChoiceTirage = 2;
				
				if(args3[2])
				{
					var nbrChoiceTirage = 3;
					
					if(args3[3])
					{
						var nbrChoiceTirage = 4;
						
						if(args3[4])
						{
							var nbrChoiceTirage = 5;
							
							if(args3[5])
							{
								var nbrChoiceTirage = 6;
								
								if(args3[6])
								{
									var nbrChoiceTirage = 7;
									
									if(args3[7])
									{
										var nbrChoiceTirage = 8;
										
										if(args3[8])
										{
											var nbrChoiceTirage = 9;
											
											if(args3[9])
											{
												var nbrChoiceTirage = 10;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		for(i = 0; i < nbrChoiceTirage; i++)
		{

			TirageLot.push(" " + args3[i]);
			
		}
		
		message.channel.sendMessage("**Tirage au sort**\n\nTirage au sort proposé par " + message.author + "\n\nLot(s) à gagner : " + TirageLot +  "\n\nVous avez " + (TirageTemps / 60/*)/ 60)/ 24*/) + " minutes(s) pour participer avec la commande \".participe\"");
		
		var x = setInterval(function() {
			
					TirageTemps--;
					
					if(TirageTemps === 0)
					{
						message.channel.sendMessage("Le tirage au sort est fini");
						
						var resultat = Math.floor((Math.random() * TiragePersonne.length));
						
						message.channel.sendMessage("Le/la gagnant(e) est " + TiragePersonne[resultat] + ". Félicitation !!!\n\nIl/Elle repart avec le(s) lot(s) suivant(s) : " + TirageLot);
						
						for(i = 0; i < TiragePersonne.length; i++)
						{
							TiragePersonne.pop();
						}
						
						TirageON = false;
						
						return;
					}
					
					if(TirageTemps === TitageTempsNot / 2)
					{
						message.channel.sendMessage("Il ne vous reste plus que " + (TirageTemps / 60) + " minute(s) avant le tirage du gagnant\n\nTirage au sort proposé par " + message.author + "\n\nDurée du vote : " + (TirageTemps / 60/* / 60*/) + " minute(s)\n\nLot(s) : " + TirageLot + "\n\nNoubliez pas de participé au tirage au sort avec la commande \".participe\"");
					}
			}, 1000);
	}
	
	if(command2 === "participe")
	{
		if(TirageON === false)
		{
			message.reply("Aucun tirage au sort n'est en cours. Vous pouvez en créer un avec la commande \".creetirage\"");
			
			return;
		}
		
		for(i = 0; i < TiragePersonne.length; i++)
		{
			if(message.author = TiragePersonne[i])
			{
				message.reply("désolé, mais vous avez déjà participer à ce tirage au sort");
				
				return;
			}
		}
			
		TiragePersonne.push(message.author);
			
		message.reply("Merci d'avoir participé");
	}

	
	
	
	
	
	
	/*if(command2 === "addrole")
	{
		
		if(!args2[0])
		{
				message.channel.sendMessage('Précisez le rôle que vous voulez obtenir');
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				return;
		}
		
		let userName = message.member.user.username;
		
		let role = message.guild.roles.find("name", args2[0]);
		
		let addMember = message.guild.member(message.author);			
		
		// Roles que les gens peuvent s'attribuer
		var ArrayRoles = ["Test"];
		
		// Roles que les gens ne peuvent pas s'attribuer
		var ArrayNotAddRoles = ["Sora"];
		
		for(i = 0; i < ArrayRoles.length; i++)
		{	
			
			if(args2[0].toLowerCase === ArrayRoles[i].toLowerCase)
			{
				addMember.addRole(role);
				
				message.channel.sendMessage("le rôle \"" + args2[0] + "\" à bien été ajouté ");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
			}
			
		}
		
		for(j = 0; j < ArrayNotAddRoles.length; j++)
		{	
			
			if(args2[0] === ArrayNotAddRoles[j])
			{
				message.channel.sendMessage("Vous n'avez pas le droit de vous attribuer ce rôle");
				
				setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
				
				return;
			}
			
		}
			
			for(j = 0; j < ArrayNotAddRoles.length; j++)
			{
				if(args2[0] === ArrayNotAddRoles[j])
				{
					message.channel.sendMessage("Vous n'avez pas le droit de vous attribuer ce rôle");
					
					setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
					
					return;
				}
				
				if(args2[0] != ArrayRoles[j] && args2[0] != ArrayNotAddRoles[j])
				{
					message.channel.sendMessage("Ce role n'existe pas");
					
					setTimeout(() => {
				
					message.channel.fetchMessages({limit: 2}).then(messagesnop => {
				message.channel.bulkDelete(messagesnop);
				});
								
							}, 4000);
				
					return;
				}		
			}		
	}*/
	
	
	
	
	
	
	
	
	
	

	/*
	switch (args[0].command()) {
		case "oniisan":
			//if(message.author.username === "Zatrix")
			//	{
					message.channel.sendMessage("yes imoutosan ?");
			//	}
			//else
			//	{
			//		message.channel.sendMessage("You're not my sister >:(");
			//	}
			break;
		case "info":
			message.channel.sendMessage("Je suis Sora, le grand frère de Shiro. Envoyez !help pour voir les commandes");
			break;
		case "FoxZee_ ban ?":
			message.channel.sendMessage("Je voudrais bien, mais je sais pas si je peux :kappa:");
			break;
		case "dev":
			var dev = new Discord.RichEmbed()
				.addField("Zatrix", "\n\nJoueur Rocket league dans la IcePepper\n\nDébutant de le développement de site web (HTML5, CSS3, PHP)\n\nTwitter: https://twitter.com/_Zatrix_ \nWeb : http://futursmusic.ch", true)
				.setThumbnail("https://image.noelshack.com/fichiers/2017/29/4/1500585525-zatrix.jpg", true)
				.setColor(0xE12B83)
				// pour choisir le code couleur il faut mettre (0x+le code Hex sans le #)
			message.channel.sendEmbed(dev);
			break;
		case "herehelp":
		
		
		
			var Commandes = new Discord.RichEmbed()
				.setTitle("Liste des commandes\n", " \n")
				.addField("[!help]", " - Afficher toutes les commandes")
				.addField("[!herehelp]", " - Afficher toutes les commandes dans le channel")
				.addField("[!info]", " - Afficher les informations du bot")
				.addField("[!dev]", " - Afficher les informations du développeur")
				.addField("[!play ]+[url]", " - Joue une vidéo Youtube")
				.addField("[!next]", " - Passe à la prochaine musique")
				.addField("[!stop]", " - Le bot arrête de jouer et quitte le salon vocal (Ne fonctionne pas correctement, car le bot ne pourra plus jouer de musique, attendez que la musique finisse, ou faîtes un !skip pour l'arrêter")
			message.channel.sendEmbed(Commandes);
			break;
		case "help":
			var privatCommandes = new Discord.RichEmbed()
				.setTitle("Liste des commandes\n", " \n")
				.addField("[!help]", " - Afficher toutes les commandes")
				.addField("[!herehelp]", " - Afficher toutes les commandes dans le channel")
				.addField("[!info]", " - Afficher les informations du bot")
				.addField("[!dev]", " - Afficher les informations du développeur")
				.addField("[!play ]+[url]", " - Joue une vidéo Youtube")
				.addField("[!next]", " - Passe à la prochaine musique")
				.addField("[!stop]", " - Le bot arrête de jouer et quitte le salon vocal (Ne fonctionne pas correctement, car le bot ne pourra plus jouer de musique, attendez que la musique finisse, ou faîtes un !skip pour l'arrêter")
			message.author.sendEmbed(privatCommandes);
			break;
		case "clearmessage":
			nbrMessageDelete = args[1];
			if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES"))
			{
				message.channel.sendMessage("Désolé, vous n'avez pas accès à cette commande");
				return;
			}
			
			else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES"))
				
			{
				message.channel.sendMessage("Désolé, je n'ai pas executer cette commande car je ne dispose pas des droits de gérer les messages");
				return;
			}
				
			if (message.channel.type == 'text')
			{
				message.channel.fetchMessages()
				.then(messages => {
					
				//for (var i = 0; 0 < nbrMessageDelete; i++)
				//{
				//	message.channel.sendMessage(i);
					message.delete();
				//}

				console.log("Messages supprimés avec succès")
				//console.log(nbrMessageDelete)
				})
			};
			break;
	}
});
*/	
	
	


// -----  BOT MUSIC  ----- //

 let guild = music[message.guild.id];
        if (!guild) guild = music[message.guild.id] = {
            queue: [],
            skippers: [],
            skipReq: 0,
            isPlaying: false
 };
		if (command === 'play') {
	if (!message.member.voiceChannel) return message.reply('Err...No voicechannel?');
	if (guild.isPlaying) {
	   getID(song, id => {
		 if (!id) return message.reply('Unable to extract video.');
		  ytdl.getInfo(id, (err, info) => {
			 if (err) return message.reply('Hmm..there was an error extracting that video.');
			 if (info.formats.some(format => format.live)) return message.reply('Not supporting live stream at this time.');
			 message.delete();
				guild.queue.push({
				   info, requester: message.member
			 });
			 message.reply(`The song: ***${info.title}*** has been added to the queue list.`);

		  });
	   });

	} else {
	  guild.isPlaying = true;
	   getID(song, id => {
	   if (!id) return message.reply(' unable to extract video');
		  ytdl.getInfo(id, (err, info) => {
		  if (err) return message.reply('Hmm..there was an error extracting that video.');
		  if (info.formats.some(format => format.live)) return message.reply('Not supporting live stream at this time.');
			 message.delete();
				  guild.queue.push({
				   info, requester: message.member
			 });
			 playMusic(guild, message);
		  });
	   });
	 }
	}

    if (command === 'skip') {
  if (!guild || !guild.isPlaying || !message.guild.voiceConnection) return message.reply('No songs are in the queue. Welp.');
  if (!message.member.voiceChannel || message.member.voiceChannel.id !== message.guild.voiceConnection.channel.id) return message.reply('Eh, you need to be in the bot\'s voiceChannel to skip.');
  if (guild.skippers.includes(message.author.id)) return message.reply(' You\'ve already voted to skip!');
  guild.skippers.push(message.author.id)

  if (guild.skippers.length >= Math.floor(message.member.voiceChannel.members.size - 1) / 2) {
      skip_song(message);
      message.reply('Skipped');
   } else {
   message.reply(` Your skip has been added. You need ${Math.ceil((message.member.voiceChannel.members.size - 1) / 2) - guild.skippers.length} more votes to skip.`);
   }
}

if (command === 'queue') {
  if (!guild) return message.reply('No songs in queue.');
  message.channel.send(`\`\`\`Queue:\n${guild.queue.map(a => `**${a.info.title}** as requested by **${a.requester.user.username}**`).join('\n\n') || 'No songs currently, welp.'}\`\`\``)
}

if (command === 'pause') {
    let voiceChannel = message.member.voiceChannel
    if (!voiceChannel || voiceChannel.id !== message.guild.voiceConnection.channel.id) return message.reply('You must be in a voice channel to pause music.');
try {
 message.guild.voiceConnection.dispatcher.pause();
return message.reply('Successfully paused to current song.')
} catch (err) {
 console.error(err)
 return message.reply('Sorry, there was an error pausing that song.')
    }
}

if (command === 'resume') {
    let voiceChannel = message.member.voiceChannel
    if (!voiceChannel || voiceChannel.id !== message.guild.voiceConnection.channel.id) return message.reply('You must be in a voice channel to resume music.');
try {
 message.guild.voiceConnection.dispatcher.resume();
return message.reply('Successfully resumed playing.')
} catch (err) {
 console.error(err)
 return message.reply('Sorry, there was an error resuming that song.')
    }
}

if (command === 'stop') {
	const voiceChannel2 = message.member.voiceChannel;
	noMoreMusic = 1
	
	guild.skippers = [];
	guild.skippers = 0;
	guild.queue.length = 0;
                    guild.queue.shift();
                    if (guild.queue.length === 0) {
                        guild.isPlaying = false;
                        setTimeout(() => {
                            voiceChannel2.leave();
                            return message.reply('Stop playing');
                        }, 0);
                    }
}
/*if (!message.member.voiceChannel) return message.reply('Err...No voicechannel?')
{
	try
	{	
		message.guild.voiceChannel.stop();
		return message.reply('Stop playing')
	} catch (err) {
		console.error(err);
	}
}
*/
});







function getID(str, callback) {
            if (str.includes('youtube.com')) {
                callback(getYouTubeID(str));
            } else {
                search_video(str, (id) => {
                    callback(id);
                });
            }
}

function search_video(query, callback) {
            request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + config.yt_api_key, (error, response, body) => {
                if (error) return message.reply('There was an error finding that song');
                try {
                    const json = JSON.parse(body);
                    callback(json.items[0].id.videoId);
                } catch (e) {
                    callback(null);
                }
            });
}

       function playMusic(guild, message) {
		   const voiceChannel = message.member.voiceChannel;

            voiceChannel.join().then(connection => {
                guild.skippers = [];
                const stream = ytdl.downloadFromInfo(guild.queue[0].info, {
                    filter: 'audioonly'
                });
                message.channel.send(`Now playing: **${guild.queue[0].info.title}** as requested by ${guild.queue[0].requester.displayName}`);

                const dispatcher = connection.playStream(stream);
                dispatcher.on('error', console.log);
                dispatcher.on('debug', console.log);
                dispatcher.on('end', () => {
                    guild.queue.shift();
					if(noMoreMusic === 0)
					{
						if (guild.queue.length === 0) {
							guild.isPlaying = false;
							setTimeout(() => {
								voiceChannel.leave();
								return message.channel.send('Queue is empty. Queue up some more tunes!');
							}, 2500);
						} else {
							setTimeout(() => {
								playMusic(guild, message);
							}, 500);
						}
					}
                });
            });
}

function skip_song(message) {
  message.guild.voiceConnection.dispatcher.end()
}





// -----  FIN BOT MUSIC  ----- //
