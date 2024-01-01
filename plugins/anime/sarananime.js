var handler = async (m, { args, text, conn, usedPrefix, command }) => {
	if (!text)
		throw `Ketik : *${usedPrefix}${command} < genre >*
Contoh : *${usedPrefix}${command} action*

*「 Genre 」*
[≽️ Action
[≽️ Adventure 
[≽️ Avant Garde
[≽️ Comedy 
[≽️ Drama
[≽️ Ecchi
[≽️ Gore
[≽️ Game 
[≽️ Harem
[≽️ Horror
[≽️ Historical
[≽️ ~Josei~ (upcoming)
[≽️ Fantasy
[≽️ Isekai
[≽️ Loli
[≽️ Mahou Shoujo
[≽️ Martial Art
[≽️ Magic
[≽️ Mecha
[≽️ Military
[≽️ Music
[≽️ Police
[≽️ Psychological 
[≽️ Romance
[≽️ ~Survival~ (upcoming)
[≽️ School
[≽️ Sci-fi
[≽️ Seinen
[≽️ Shounen
[≽️ Shoujo
[≽️ Shoujo Ai
[≽️ Slice Of Life
[≽️ Super Power
[≽️ Suspense
[≽️ Sport
[≽️ Thriller
[≽️ Vampire

*「 Sub Genre 」*
[≽️ Bullying
[≽️ Dandere
[≽️ Disabilitas
[≽️ Gourmet
[≽️ Hikikomori
[≽️ Himedere
[≽️ Kuudere
[≽️ Movie
[≽️ Natore/NTR
[≽️ ~Organized crime~ (upcoming)
[≽️ Over Power
[≽️ ~Performing Arts~ (upcoming)
[≽️ Reverse Isekai
[≽️ Reinkarnasi
[≽️ Sad
[≽️ Time Travel
[≽️ Tsundere
[≽️ Yandere

*「 Studio 」*
[≽️ 8Bit
[≽️ A-1 Pictures
[≽️ A-CAT
[≽️ Ajia-do
[≽️ Asahi Production
[≽️ BN Pictures
[≽️ Bones
[≽️ Brain's Base
[≽️ C2C
[≽️ Comix Wave Films
[≽️ CloverWorks
[≽️ David Production
[≽️ Deen
[≽️ Diomedea
[≽️ Feel
[≽️ Gainax
[≽️ Ghibli
[≽️ GoHands
[≽️ Graphinica
[≽️ J.C Staff
[≽️ Kinema Citrus
[≽️ Kyoto Animation
[≽️ Lay-duce
[≽️ Lerche
[≽️ LIDENFILMS
[≽️ Mangalobe
[≽️ MAPPA
[≽️ Orange
[≽️ P.A Works
[≽️ Pierrot
[≽️ Prodoction Ig
[≽️ Revoroot
[≽️ Shaft
[≽️ Doga Kobo
[≽️ Studio Gonzo
[≽️ SILVER LINK
[≽️ TMS Intertainment
[≽️ Trigger
[≽️ Ufotable
[≽️ White Fox
[≽️ Wit Studio
[≽️ Zero-G
[≽️ Zexcs`;
	if (text === "action") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Action ࿐໋*

[≽️ 86 EIGHTY-SIX
[≽️ Accel World
[≽️ Arknights [Reimei Zensou]
[≽️ Absulote Duo
[≽️ Akiba Maid Sensou
[≽️ Ajin
[≽️ Arifureta Shokugyou de Sekai Saikyou
[≽️ Akame ga Kill
[≽️ Akudama Drive
[≽️ Angel Beats
[≽️ Ansatsu Kyoushitsu
[≽️ Ao No Exorcist
[≽️ Aoki Hagane Arpeggio
[≽️ Arifureta Shokugyou de Sekai Saikyou
[≽️ Back Arrow
[≽️ Banana Fish
[≽️ Bellzebub
[≽️ Bleach
[≽️ Black Bullet
[≽️ Black Clover
[≽️ Berserk
[≽️ Black Lagoon
[≽️ BNA
[≽️ Bastard!!: Ankoku no Hakaishin
[≽️ Bofuri
[≽️ Boku no Hero Academia
[≽️ Btoom
[≽️ Bungou Stray Dogs
[≽️ Buddy Daddies
[≽️ Code Geas
[≽️ Cardfight
[≽️ Chainsaw Man
[≽️ Cyberpunk: Edgerunners
[≽️ Eiyuuou, Bu wo Kiwameru Tame Tenseisu. Soshite, Sekai Saikyou no Minarai Kishi♀
[≽️ D.Gray-man
[≽️ Danganronpa
[≽️ Dungeon ni Deai wo Motomeru no wa Machigatteiru no Darou ka (Danmachi)
[≽️ Darkar Then Black
[≽️ Da Wang Rao Ming
[≽️ Darling In the Franxx
[≽️ Deca Dence
[≽️ Dororo
[≽️ Dragon Quest: Dai no Daibouken (2020)
[≽️ Fairy Tail
[≽️ Fuuto Tantei
[≽️ Fate Series
[≽️ Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu
[≽️ Gintama
[≽️ Goblin Slayer
[≽️ God Eater
[≽️ Golden Kamuy
[≽️ Great Pretender
[≽️ Hanma Baki
[≽️ HIGH CARD
[≽️ Hanyo no Yashahime
[≽️ High School Dxd
[≽️ High School Of The Death
[≽️ Inuyasha
[≽️ Inuyashiki
[≽️ Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu (Bofuri)
[≽️ Jigokuraku
[≽️ Jujutsu Kaisen
[≽️ K-project
[≽️ Kakumeiki Valvrave
[≽️ Katekyo Hitman Reborn!
[≽️ Kaze no Stigma
[≽️ Kekkai Sensen
[≽️ Kengan Ashura
[≽️ Koi wa Sekai Seifuku no Ato de
[≽️ Kill La Kill
[≽️ Kage no Jitsuryokusha ni Naritakute!
[≽️ Kami no Tou
[≽️ Koroshi Ai
[≽️ Kino No Tabi
[≽️ Kingdom
[≽️ Koroshitsuji
[≽️ Kuro no Shoukanshi
[≽️ Lycoris Recoil
[≽️ Magi
[≽️ Majutsushi Orphen Hagure Tabi
[≽️ Mahouka Koukou
[≽️ Mononogatari
[≽️ Maou Gakuin no Futekigousha
[≽️ Medaka Box
[≽️ Mob Psycho
[≽️ Musaigen no Phantom World
[≽️ NieR:Automata Ver1.1a
[≽️ Noblesse
[≽️ Noragami
[≽️ One Piece
[≽️ Overlord
[≽️ Owari no Seraph
[≽️ Oemojisangjuui (Lookism)
[≽️ Psycho-Pass
[≽️ Rokudenashi Majutsu Koushi to Akashic Records
[≽️ Princess Connect! Re:Dive
[≽️ Saijaku Muhai no Bahamut
[≽️ Saikyou Onmyouji no Isekai Tenseiki
[≽️ Super Crooks
[≽️ SABIKUI BISCO
[≽️ SPY x FAMILY
[≽️ Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru
[≽️ Shuumatsu no Walküre
[≽️ Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru
[≽️ Shingeki no Bahamut
[≽️ Shikkakumon no Saikyou Kenja
[≽️ Shingeki no Kyojin 
[≽️ Ssss. Gridman
[≽️ Strike the Blood
[≽️ SPRIGGAN (2022)
[≽️ Star Wars: Visions
[≽️ Tate no Yuusha
[≽️ Takt op.Destiny
[≽️ Tensei Shitara Ken Deshita
[≽️ Tensei Shitara Slime Datta Ken
[≽️ Tears to Tiara
[≽️ Tengan Toppa Gurren Lagann
[≽️ The God of High School
[≽️ Toaru Series
[≽️ REVENGER
[≽️ TRIGUN STAMPEDE
[≽️ Touken Ranbu
[≽️ Trigun
[≽️ Trinity Seven
[≽️ Uchun Senkan Yamato
[≽️ Utawarerumono
[≽️ UQ Holder
[≽️ Vinland Saga
[≽️ Vivid Strike
[≽️ World Trigger
[≽️ Yuusha, Yamemasu

⟨ 02|04|2023 ⟩`,
			},
			{ quoted: m },
		);
	} else if (text === "adventure") {
		conn.sendMessage(
			m.chat,
			{
				text: `Saran Anime Adventure ࿐໋

[≽️ 7 Seeds
[≽️ Ame wo Tsugeru Hyouryuu Danchi
[≽️ Arifureta Shokugyou de Sekai Saikyou
[≽️ Danmachi
[≽️ DECA-DENCE
[≽️ Dr. STONE
[≽️ Dororo
[≽️ Eizouken ni wa Te wo Dasu na!
[≽️ Fantasy Bishoujo Juniku Ojisan to
[≽️ Fumetsu no Anata e
[≽️ Great Pretender
[≽️ Golden Kamuy
[≽️ Heike Monogatari
[≽️ Heion Sedai no Idaten-tachi
[≽️ Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta
[≽️ Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.
[≽️ Jigokuraku
[≽️ Kaizoku Oujo
[≽️ Kaifuku Jutsushi no Yarinaoshi
[≽️ Kami no Tou
[≽️ Kenja no Deshi wo Nanoru Kenja
[≽️ Kuma Kuma Kuma Bear
[≽️ Kumo desu ga, Nani ka?
[≽️ Kuutei Dragons
[≽️ Leadale no Daichi nite
[≽️ Log Horizon
[≽️ Made in Abyss
[≽️ Majo no Tabitabi
[≽️ Meikyuu Black Company
[≽️ Mirai no Mirai
[≽️ Ni no Kuni
[≽️ ORIENT
[≽️ Ousama Ranking
[≽️ Princess Connect! Re:Dive
[≽️ Saihate no Paladin
[≽️ Somali to Mori no Kamisama
[≽️ SABIKUI BISCO
[≽️ Sugar Apple Fairy Tale
[≽️ Suzume no Tojimari
[≽️ Tate no Yuusha no Nariagari
[≽️ Tengoku Daimakyou
[≽️ Tsuki ga Michibiku Isekai Douchuu
[≽️ Tondemo Skill de Isekai Hourou Meshi
[≽️ Ura Sekai Picnic
[≽️ VINLAND SAGA
[≽️ Yama no Susume
[≽️ Yowai 5000-nen no Soushoku Dragon, Iwarenaki Jaryuu Nintei

⟨ 10|04|2023 ⟩`,
			},
			{ quoted: m },
		);
	} else if (text === "comedy") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Comedy ࿐໋*

[≽️ 4-nin wa Sorezore Uso wo Tsuku
[≽️ Akuyaku Reijou nano de Last Boss wo Kattemimashita
[≽️ Asobi Asobase
[≽️ Araburu Kisetsu no Otome-domo yo.
[≽️ Aharen-san wa Hakarenai
[≽️ BOCCHI THE ROCK!
[≽️ Buddy Daddies
[≽️ Bofuri
[≽️ Eromanga-sensei
[≽️ Danmachi
[≽️ Doukyonin wa Hiza, Tokidoki, Atama no Ue.
[≽️ Fruits basket
[≽️ Fuufu Ijou, Koibito Miman.
[≽️ Fugou Keiji: Balance:UNLIMITED
[≽️ Gal to Kyouryuu
[≽️ Gokushufudo
[≽️ Gintama
[≽️ Grand blue
[≽️ Gochuumon wa Usagi Desu ka??
[≽️ Haikyu!!
[≽️ High Score Girl
[≽️ Hitoribocchi no ○○ Seikatsu
[≽️ Houkago Teibou Nisshi
[≽️ Isekai Ojisan
[≽️ ISEKAI QUARTET
[≽️ Jashin-chan Dropkick X
[≽️ Jibaku Shounen Hanako-kun
[≽️ Jahy-sama wa Kujikenai!
[≽️ Kotarou wa Hitori Gurashi
[≽️ Kobayashi-san Chi no Maid Dragon
[≽️ Konosuba
[≽️ Karakai Jouzu no Takagi-san
[≽️ Kanojo mo Kanojo
[≽️ Kakushigoto
[≽️ Kaguya-sama wa Kokurasetai
[≽️ Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru
[≽️ Maoujou de Oyasumi
[≽️ Meikyuu Black Company
[≽️ Mob Psycho 100
[≽️ Monogatari series
[≽️ Nami yo Kiite Kure
[≽️ Nande Koko ni Sensei ga!?
[≽️ Non Non Biyori
[≽️ One Punch Man
[≽️ Oregairu
[≽️ Oresuki
[≽️ Paripi Koumei
[≽️ Rikei ga Koi ni Ochita no de Shoumei Shite Mita.
[≽️ Sentouin, Hakenshimasu!
[≽️ Seishun Buta Yarou
[≽️ Saiki Kusuo no Ψ-nan
[≽️ Rokudou no Onna-tachi
[≽️ Tsuki ga Michibiku Isekai Douchuu
[≽️ Tomo-chan wa Onnanoko!
[≽️ Uramichi Oniisan
[≽️ Yuru yuri

⟨ 10|04|2023 ⟩`,
			},
			{ quoted: m },
		);
	} else if (text === "drama") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Drama ࿐໋*

[≽️ 3-gatsu no Lion
[≽️ Ahiro no Sora
[≽️ Ai Yuri Aoshi
[≽️ Akame ga Kill
[≽️ Amagi Brilliant Park
[≽️ Angel Beats
[≽️ Anohana
[≽️ Ao Haru Ride
[≽️ Aoi Bungaku
[≽️ Aquarion Evol
[≽️ Araburu Kisetsu no Otome-domo yo
[≽️ Arte
[≽️ Assate no Houko
[≽️ Bakuman
[≽️ Banana Fish
[≽️ Beasters
[≽️ Bokura ga Ita
[≽️ Byoukosu 5 Centimeter
[≽️ Charlotte
[≽️ Chihayafuru
[≽️ Chuunibyou Demo koi ga Shitai
[≽️ Citrus
[≽️ Clannad
[≽️ Domestic na Kanojo
[≽️ Dororo
[≽️ Eromanga Sensei
[≽️ Free
[≽️ Fruit Basket
[≽️ Fuuka
[≽️ Gangsta
[≽️ Given
[≽️ Golden Time
[≽️ Gosick
[≽️ Grisaia no Kajitsu
[≽️ Great Teacher Onizuka
[≽️ Guilty Crown
[≽️ Hachimetsu to Clover
[≽️ Haibane Renmei
[≽️ Hamatora The Animation
[≽️ Hanasaku Iroha
[≽️ Happy Sugar Life
[≽️ Hibike! Euphonium
[≽️ Hoshiai no Sora
[≽️ Hotaru no Haka
[≽️ Hotaru no Mori e
[≽️ Houseki no Kuni (Tv)
[≽️ Initial D
[≽️ Inuyasha
[≽️ Inuyashiki
[≽️ Irazuki Sekai no Ashita Kara
[≽️ Kakegurui
[≽️ Kamisama ni Natta hi
[≽️ kamisama Kazoku
[≽️ Kimi ni Todoke
[≽️ Kimi to Boku
[≽️ Kimikiss Pure Rouge
[≽️ Kobato
[≽️ Koi to Uso
[≽️ Kokoro Connect
[≽️ Kotouru-san
[≽️ Kuzu no Honkai
[≽️ Little Busters
[≽️ Made in Abyss
[≽️ Mahou Shoujo Site
[≽️ Monster
[≽️ Mushoku Tensei
[≽️ Nagi no Asukara
[≽️ Natsumi Yuujinchou
[≽️ Netsuzou Trap
[≽️ NHK ni Youkoso
[≽️ Onegai Teacher
[≽️ Orange
[≽️ Oregairu
[≽️ Oresuki
[≽️ Owari no Seraph
[≽️ Paradise Kiss
[≽️ Piano no Mori (Tv)
[≽️ Planetes
[≽️ Plastic Memories
[≽️ Re: zero kara hajimeru
[≽️ ReLife
[≽️ Romeo X Juliet
[≽️ Runway de Waratte
[≽️ Sakurasou no Pet na Kanojo
[≽️ Servamp
[≽️ Shigatsu wa Kimi no Uso
[≽️ Shinsekai Yori
[≽️ Skip Beat
[≽️ Sora no Aosa wo Shiru Hito yo
[≽️ Sora no Method
[≽️ Tokyo Ghoul
[≽️ Tower of God
[≽️ Trigun
[≽️ Vinland Saga
[≽️ Violet Evergarden
[≽️ Winter Sonata
[≽️ Yasterday wo Utteta
[≽️ Youkosu Jitsuryoku Shijou Shugi
[≽️ Zetsuen no Tempest`,
			},
			{ quoted: m },
		);
	} else if (text === "ecchi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Ecchi ࿐໋*

[≽️ Absolute Duo
[≽️ Amaenaide yo!! Katsu!!
[≽️ Akaneiru ni Somaru Saka
[≽️ Asa Made Jugyou Chu
[≽️ Asobi ni Iku yo
[≽️ Bikini Warriors
[≽️ Boku no Kanojo ga Majimesugiru
[≽️ Boku wa Tomodachi ga Sakunai
[≽️ Dakara Boku wa, H ga Dekinai
[≽️ Domestic na Kanojo
[≽️ Dumbeel Nan Kilo Moteru
[≽️ Elfen Lied
[≽️ Eromanga Sensei
[≽️ Fuuka
[≽️ Getsuyoubi no Tawawa
[≽️ Girls Bravo
[≽️ Gokujo
[≽️ Green Green
[≽️ Hagure no Yuusha Aesthetica
[≽️ Hajimete no Gal
[≽️ High School Dxd
[≽️ Hyakka Ryouran
[≽️ Ikkitousen 
[≽️ IS : Infinity Stratos
[≽️ Isekai Maou to Shoukan Shoujo
[≽️ Issho ni Trainning Oforu
[≽️ Iya na Kao sare nagara Opantsu
[≽️ Kaifuku Jutsushi no Yarinaoshi
[≽️ Kandagawa Jet Girls
[≽️ Kawaikareba Hentai demo Suki ni Natte Kuremasu ka
[≽️ Keijo!!!!!
[≽️ Kenzen Robo Daimidaler
[≽️ Kiss x Sis
[≽️ Kodomo no Jikan (Tv)
[≽️ Koe no Oshigoto
[≽️ Koharu Biyori
[≽️ Kono Subarashii
[≽️ Koukaku no Pandora
[≽️ Ladies versus Butlers
[≽️ Love hina
[≽️ Mahoromatic
[≽️ Maken-ki
[≽️ Mangaka-san to Assistan-san to The Animation
[≽️ Medaka Box
[≽️ Miru Tights
[≽️ Momo Kyun Sword
[≽️ Monster Musume no Iru Nichijou
[≽️ Muzaki no Rakuen
[≽️ Mushoku Tensei
[≽️ Nanatsu no Bitoku
[≽️ Nande Koko ni Sensei ga
[≽️ Nazo no Kanojo X
[≽️ No Game No Life
[≽️ Nobunaga-sensei no Osanazuma
[≽️ Nora to Ouji to Noraneko Heart
[≽️ Nozoki Ana
[≽️ Ore Dake Haireiru Kakushi Dungeon
[≽️ Ore ga Oujosama Gakkou ni
[≽️ Otona Bouguya-san
[≽️ Photokano
[≽️ Princess Lover
[≽️ Prison School
[≽️ Rakudai Kishi no Cavalry
[≽️ Rio: Rainbow Gate
[≽️ Saenai Heroine no Sodatekata
[≽️ Senkarea
[≽️ Sekirei
[≽️ Senren Kagura
[≽️ Shokugeki no Souma
[≽️ Sin: Nanatsu no Taizai
[≽️ Strike the Blood
[≽️ Tejina-senpai
[≽️ To LOVE-Ru
[≽️ Tonagura
[≽️ Tsugomomo
[≽️ Uzaki-chan wa Asobitai!
[≽️ Yosuga no Sora
[≽️ Yuragi-sou no Yuuna-san
[≽️ Zero no Tsukaima

< 10|11|2021 >`,
			},
			{ quoted: m },
		);
	} else if (text === "sad") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Sad ࿐໋*

[≽️ Akame ga Kill
[≽️ Anohana
[≽️ Angel Beats
[≽️ Ansatsu Kyoushitsu
[≽️ Banana Fish
[≽️ Boku dake ga Inai Machi
[≽️ Byousoku 5 Centimeter
[≽️ Charlotte
[≽️ Clannad
[≽️ Code Geass
[≽️ Darling in The Franxx
[≽️ Domestic na Kanojo
[≽️ Death Parade
[≽️ Eve no Jikan
[≽️ Fruit Basket
[≽️ Golden Time
[≽️ Hal
[≽️ Hotarou bi no Mori e
[≽️ Issuukan Friends
[≽️ Kamisama ni Natta hi
[≽️ Kimi no Nawa
[≽️ Mahou Shoujo Madoka Magica
[≽️ Nakitai Watashi wa Neko wa Kaboru
[≽️ Nana
[≽️ Natsume Yuujinchou
[≽️ Orange
[≽️ Owari no Seraph
[≽️ Omoide no Marnie
[≽️ Plastic Memories
[≽️ Shigatsu wa Kimi no Uso
[≽️ Steins Gate
[≽️ Shinsekai Yori
[≽️ Shiki
[≽️ School Days
[≽️ Tenki no Ko
[≽️ Tokyou Magnitude 8.0
[≽️ Watashi no Motenai no wa Dou
[≽️ Zero no Tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "fantasy") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Fantasy ࿐໋*

[≽️ Akagami no Shirayuki-hime
[≽️ Akatsuki no Yona
[≽️ Angel Beats
[≽️ Amagi Brillian Park
[≽️ Amnesia
[≽️ Aquarion Evol
[≽️ Asssasins Pride
[≽️ Assault Lily: Bouquet
[≽️ Back Arrow
[≽️ Black Clover
[≽️ BNA: Brand New Animal
[≽️ Bofuri
[≽️ Busou Renkin
[≽️ Centaur no Nayami
[≽️ Carlotte
[≽️ Danmachi
[≽️ Demi-chan wa kataritai
[≽️ Densetsu no Yuusha no Densetsu
[≽️ Digimon
[≽️ Dorohedoro
[≽️ Egao no Daika
[≽️ Fairy Tail
[≽️ Fate
[≽️ Gate
[≽️ Goblin Slayer
[≽️ God Eater
[≽️ Granbelm
[≽️ Grancrest Senki
[≽️ Hai to Gensou no Grimgar
[≽️ Hakkenden
[≽️ Hakumei to Mikuchi
[≽️ Hayou no Yashahime
[≽️ Hitsuki no Chaika
[≽️ Hoozuki no Reitetsu
[≽️ Houseki no Kuni (Tv)
[≽️ Hunter X Hunter
[≽️ Kaifuku Jutsushi no Yarinaoshi
[≽️ Kamisama Hajimemashita
[≽️ Kamisama ni Natta hi
[≽️ Kimisen
[≽️ Kobayashi-san Chi no Maid Dragon
[≽️ Kyoukai no Kanata
[≽️ Kyoukaisenjou no Horizon
[≽️ Kyousou Giga (Tv)
[≽️ Little Witch Academia (Tv)
[≽️ Lock & Logic
[≽️ Magi
[≽️ Mahou Shoujo Ikusei Keikatu
[≽️ Mahou Shoujo Site
[≽️ Mahoutsukai no Yome
[≽️ Majo no Tabitabi
[≽️ Manaria Friends
[≽️ Maou Gakuen no Futekigousha
[≽️ Maoujo de Oyasumi
[≽️ Mahouka Koukou no Rettousei
[≽️ Monster Musume no Iru Nichijou
[≽️ Musaigen no Phantom World
[≽️ Nagi no Asukara
[≽️ Nanatsu no Taizai
[≽️ Natsume Yuujinchou
[≽️ Ore dake Haireiru Kakushi Dungeon
[≽️ Plunderer
[≽️ Princees Connect
[≽️ Radiant
[≽️ Rekudai Kishi no Cavalry
[≽️ Rental Magica
[≽️ Rokka no Yuusha
[≽️ Rekudenashi Majutsu Koushi to Akashic Records
[≽️ Romeo x Juliet
[≽️ Saijaku Muhai no Bahamut
[≽️ Shadowverse
[≽️ Shingeki no Kyojin
[≽️ Sora no Method
[≽️ Strike The Blood
[≽️ Sword Art Online
[≽️ Tatoeba Last Dungeon 
[≽️ Tensai Ouji no Akaji Kokka Saisei Jutsu
[≽️ The God Of High School
[≽️ Toaru 
[≽️ Tower of God : Kimi no Tou
[≽️ UQ: Holder
[≽️ Yuuki Yuuna wa Yuusha de Aru`,
			},
			{ quoted: m },
		);
	} else if (text === "harem") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Harem ࿐໋*

[≽️ 5-toubun no Hanayome
[≽️ Arifureta Shokugyou de Sekai Saikyou
[≽️ Ao no Kanata no Four Rhythm
[≽️ Bokutachi wa Benkyou ga Dekinai 
[≽️ Boku wa Tomodachi ga Sukunai
[≽️ Date A Live
[≽️ Diabolik Lovers
[≽️ Freezing
[≽️ Grisaia no Kajitsu
[≽️ Hentai Ouji to Warawanai Neko
[≽️ High School Dxd
[≽️ Hyakka Ryouran
[≽️ Isekai Maou to Shoukan Shoujo no Dorei Majutsu
[≽️ Isekai wa Smartphone to Tomo ni Natte Kuremasu ka
[≽️ Inou Battle wa Nichijou-kei no Naka de
[≽️ Kanojo ga Flag wo Oraretara
[≽️ Kawaikareba Hentai demo Suki ji
[≽️ Kami nomi zo Shiru Sekai
[≽️ Kore wa Zombie desu ka?
[≽️ Ladies versus Butlers!
[≽️ Love Hina
[≽️ Mangaka-san to Assistent-san to the Animation
[≽️ Maji de Watashi ni Koi Shinasai!
[≽️ Masamune-kun no Revenge
[≽️ Monster Musume no Iru Nichijou
[≽️ Nisekoi
[≽️ Nyan Koi!
[≽️ Ore no Kanojo to Osananajimi ga Shuraba Sugiru
[≽️ Osananajime ga Zettai ni Makenai Love Comedy
[≽️ Ouran Koukou Host Clup
[≽️ Rosaria to Vampire
[≽️ Rokujouma no Shinryakusha!
[≽️ Saijaku Muhai no Bahamut
[≽️ Saenai Heroine no Sodatekate
[≽️ Sword art Online
[≽️ Sekirei
[≽️ Strike The Blood
[≽️ Taimadou Gakuen 35 Shiken Shoutai
[≽️ To LOVE-Ru
[≽️ Trinity Seven
[≽️ Val x Love
[≽️ Watashi ga Motete Dousunda
[≽️ Yamada-kun to 7-nin no Majo
[≽️ Yosuga no Sora
[≽️ Yuragi-sou no Yuuna-san
[≽️ Zero no Tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "historical") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Historical ࿐໋*

[≽️ 91 Days
[≽️ Akagami no Shiruyaki-hime
[≽️ Arslan Senki (Tv)
[≽️ Appare-Ranman!
[≽️ Arte
[≽️ Azur Lane
[≽️ Baccano
[≽️ Brave 10
[≽️ Drifters
[≽️ Dororo
[≽️ Full Metal Alchemist
[≽️ Gintama
[≽️ Golden Kamuy
[≽️ Gosick
[≽️ Hanyo no Yashahime
[≽️ Hotaru no Haka
[≽️ Joker Game
[≽️ Jonketsu no Maria
[≽️ Kaze Tachinu
[≽️ Kimetsu no Yaiba
[≽️ Kuroshitsuji
[≽️ Kono Sekai no Katasumi ni
[≽️ InuYasha
[≽️ Mars Red
[≽️ Mushishi
[≽️ Mushibugyou
[≽️ Mo Dao Zu Shi
[≽️ Nijuuseiki Denki Mokuroku
[≽️ Oda Nobuna no Yabou
[≽️ Ookami to Koushinryou
[≽️ Princess Principal
[≽️ Ranbow
[≽️ Samurai Champloo
[≽️ Sirius the Jeager
[≽️ Touken Renbu
[≽️ Shuumatsu no Izetta
[≽️ Urara Meirochou
[≽️ Vanitas no Carte
[≽️ Vinland Saga
[≽️ Yuukoku no Moriarity`,
			},
			{ quoted: m },
		);
	} else if (text === "isekai") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Isekai ࿐໋*

[≽️ 100-man no Inochi no Ue ni Ore wa Tatteru 
[≽️ Arifureta Shokugyou de Sekai Saikyou
[≽️ Chuujin Koukousei-tachi wa Isekai demo Yoyuu
[≽️ Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore
[≽️ Death March kara Hajimaru Isekai Kyousoukyoku
[≽️ Deatte 5-byou de Battle
[≽️ Fantasy Bishoujo Juniku Ojisan to
[≽️ Genjitsu Shugi Yuusha no Oukoku Saikenki
[≽️ Isekai Cheat Magician
[≽️ Isekai Izakaya
[≽️ Isekai Maou to Shoukan Shoujo
[≽️ Isekai no Seikhishi Monogatari
[≽️ Isekai Shokudou
[≽️ Isekai wa Smartphone Tomo ni
[≽️ Kami-tachi ni Hirowareta Otoko
[≽️ Kenja no Mago
[≽️ Kimi no Tou
[≽️ Knight and Magic
[≽️ Kono Subarashii Sekai
[≽️ Kuma Kuma Kuma Bear
[≽️ Kumo desu ga, Nani ka?
[≽️ Kyuukyoku Shinka Shita Full Dive RPG ga Genjitsu Yori mo Kusoge Dattara
[≽️ Leadale no Daichi nite
[≽️ Log Horizon
[≽️ Maou Gakuin no Futekigousha
[≽️ Meikyuu Black Company
[≽️ Mushoku Tensei
[≽️ Mondaiji-tachi ga Isekai kara Kuru
[≽️ Musume Senki
[≽️ No Game No Life
[≽️ Overlord
[≽️ Outbreak Company
[≽️ Re: Zero kara Hajimeru Isekai Seikatsu Saikyou
[≽️ Sekai Saikou no Ansatsusha
[≽️ Seirei Gensouki
[≽️ Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita
[≽️ Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei
[≽️ Sonny Boy
[≽️ Sword Art Online
[≽️ Tate no Yuusha
[≽️ Tensei Shitara Slime Datta ken
[≽️ Tsuki ga Michibiku Isekai Douchuu
[≽️ Ura sekai Picnic
[≽️ Zero no Tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "horror") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Horror ࿐໋*

[≽️ 7 Seed
[≽️ Akira
[≽️ Ajin
[≽️ Another
[≽️ Boogiepop wa Warawanai
[≽️ Blood-C
[≽️ Berserk
[≽️ Elfen Lied
[≽️ Evil or Live
[≽️ Danganronpa
[≽️ Death Note
[≽️ Deadman Wonderland
[≽️ Devilman
[≽️ Dorohidoro
[≽️ Gakkougurashi!
[≽️ Ghost Hunt
[≽️ Gibiate
[≽️ Hellsing
[≽️ Higurashi no Naku koro ni
[≽️ High School The Death
[≽️ Happy Sugar Life
[≽️ Jigoku Shoujo
[≽️ Kiseijuu
[≽️ Killing Bites
[≽️ Koutetsujou no Kabaneri
[≽️ Kyochuu Rettou
[≽️ Monster
[≽️ Mayoiga
[≽️ Mieruko-chan
[≽️ Ninja Collection
[≽️ Ousama Game The Animation
[≽️ Ookamikakushi
[≽️ Paranoia Agent
[≽️ Pupa
[≽️ Sankarea
[≽️ Satsuriku no Tenshi
[≽️ Shiki
[≽️ Shinsekai Yori
[≽️ Shinrei Tankei Yakumo
[≽️ Tesugara Otome x Amnesia
[≽️ Tenkuu Shinpan
[≽️ Tokyo Ghoul
[≽️ The Future Diary
[≽️ Umineko no Naku koro ni
[≽️ Yami Shibai
[≽️ Yakusoku no Neverland
[≽️ Zombie-Loan`,
			},
			{ quoted: m },
		);
	} else if (text === "shoujo") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Shoujo ࿐໋*

[≽️ 3D Kanojo: Real Girl
[≽️ Arcana Famiglia
[≽️ Akuyaku Reijou ni Tensei shiteshimatta
[≽️ Akagami no Shirayuki-hime
[≽️ Ao Haru Ride
[≽️ Akatsuki no Yona
[≽️ Banana Fish
[≽️ Bokura ga Ita
[≽️ Brothers Conflict
[≽️ Cardcaptor Sakura
[≽️ Coquelicot-zaka kara
[≽️ Donten ni Warau
[≽️ Dance with Devils
[≽️ Diabolik Lovers
[≽️ Fruits Basket
[≽️ Gakuen Babysitters
[≽️ Ghost Hunt
[≽️ Hal
[≽️ Hotarubi no Mori e
[≽️ Itazura na Kiss
[≽️ Kamisama Hajimemashita
[≽️ Kimi ni Todoke
[≽️ Kaichou wa Maid-sama!
[≽️ Kamigami no Asobi
[≽️ Kyou kara Maou!
[≽️ Kareshi Kanojo no Jijou
[≽️ Kujira no Kora wa Sajou ni Utau
[≽️ Lovely★Complex
[≽️ Mimi wo Sumaseba
[≽️ Nijiiro Days
[≽️ Nana
[≽️ Natsume Yuujinchou Series
[≽️ Ookami Shoujo to Kuro Ouji
[≽️ Otome Game no Hametsu Flag shika Nai 
[≽️ Ouran Koukou Host Club
[≽️ Orange
[≽️ Ore Monogatari!!
[≽️ Skip Beat!
[≽️ Shugo Chara!
[≽️ Shoujo Kakumei Utena
[≽️ Sukitte Ii na yo.
[≽️ Special A
[≽️ Soredemo Sekai wa Utsukushii
[≽️ Tonari no Kaibutsu-kun
[≽️ Vampire Knight
[≽️ Watashi ga Motete Dousunda
[≽️ Yamato Nadeshiko Shichihenge♥`,
			},
			{ quoted: m },
		);
	} else if (text === "shounen") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Shounen ࿐໋*

[≽️ 5-toubun no Hanayome
[≽️ Akame ga Kill!
[≽️ Ao no Exorcist
[≽️ Ansatsu Kyoushitsu
[≽️ Aho Girl
[≽️ Arslan Senki
[≽️ Araburu Kisetsu no Otome-domo yo.
[≽️ Bokutachi wa Benkyou ga Dekinai
[≽️ Busou Shoujo Machiavellianism
[≽️ Beelzebub
[≽️ Bakuman.
[≽️ Beastars
[≽️ Bleach
[≽️ Black Clover
[≽️ Boku no Hero Academia
[≽️ Claymore
[≽️ Death Note
[≽️ Dororo
[≽️ Dragon Ball Z
[≽️ D.Gray-man
[≽️ Dagashi Kashi
[≽️ Darwin's Game
[≽️ Domestic na Kanojo
[≽️ Dr. Stone
[≽️ Deadman Wonderland
[≽️ Enen no Shouboutai
[≽️ Fumetsu no Anata e
[≽️ Fuuka
[≽️ Fullmetal Alchemist: Brotherhood
[≽️ Fairy Tail
[≽️ Great Teacher Onizuka
[≽️ Gintama Series
[≽️ Gin no Saji
[≽️ Gabriel DropOut
[≽️ Hataraku Saibou
[≽️ Horimiya
[≽️ Hajimete no Gal
[≽️ Haikyuu!!
[≽️ Hunter x Hunter
[≽️ Highschool of the Dead
[≽️ Inu x Boku SS
[≽️ Isshuukan Friends.
[≽️ Jujutsu Kaisen
JoJo no Kimyou na Bouken Series
[≽️ Jibaku Shounen Hanako-kun
[≽️ Keijo!!!!!!!!
[≽️ Karakai Jouzu no Takagi-san
[≽️ Kimetsu no Yaiba
[≽️ Kakegurui
[≽️ Koe no Katachi
[≽️ Kuroshitsuji
[≽️ Kami nomi zo Shiru Sekai
[≽️ Kekkai Sensen
[≽️ Kanojo, Okarishimasu
[≽️ Kakushigoto
[≽️ Kemono Jihen
[≽️ Kishuku Gakkou no Juliet
[≽️ Katekyo Hitman Reborn!
[≽️ Kuroko no Basket
[≽️ Love Hina
[≽️ Mirai Nikki
[≽️ Magi Series
[≽️ Mahoutsukai no Yome
[≽️ Masamune-kun no Revenge
[≽️ Mairimashita! Iruma-kun
[≽️ Nichijou
[≽️ Nanatsu no Taizai
[≽️ Noragami
[≽️ Naruto
[≽️ Nisekoi
[≽️ Owari no Seraph
[≽️ One Piece
[≽️ Pandora Hearts
[≽️ Plunderer
[≽️ Rosario to Vampire
[≽️ Shingeki no Kyojin
[≽️ Shigatsu wa Kimi no Uso
[≽️ Soul Eater
[≽️ Samurai Champloo
[≽️ Shokugeki no Souma
[≽️ Sayonara Zetsubou Sensei
[≽️ Sora no Otoshimono
[≽️ Sousei no Onmyouji
[≽️ Seitokai Yakuindomo
[≽️ Sankarea
[≽️ Saiki Kusuo no Ψ-nan
[≽️ School Rumble
[≽️ Seto no Hanayome
[≽️ Trigun
[≽️ Tsurezure Children
[≽️ To LOVE-Ru
[≽️ Tonikaku Kawaii
[≽️ Tokyo Revengers
[≽️ Tasogare Otome x Amnesia
[≽️ Trinity Seven
[≽️ World Trigger
[≽️ Yamada-kun to 7-nin no Majo
[≽️ Yakusoku no Neverland
[≽️ Zetsuen no Tempest`,
			},
			{ quoted: m },
		);
	} else if (text === "magic") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Magic ࿐໋*

[≽️ Cardcaptor sakura
[≽️ Fairy tail
[≽️ Fullmental Alchemist brotherhood
[≽️ Fate/zero
[≽️ Flip flappers
[≽️ Fushigi yuugi
[≽️ Heartcatch precure
[≽️ Inuyasha
[≽️ Juuni kokuki
[≽️ Konosuba
[≽️ Kore wa zombie desu ka
[≽️ Kiki's delivery service
[≽️ Log horizon
[≽️ Little witch academia
[≽️ Mahou shouju madoka magica
[≽️ Mahoutsukai no yome
[≽️ Mahou shoujo lyrical nanoha
[≽️ Mahouka koukou no rettousei
[≽️ Mahoujin guruguru
[≽️ Nanatsu no taizai
[≽️ Overlord
[≽️ Princess tutu
[≽️ Rozen maiden
[≽️ R.O.D: read or die
[≽️ Slayers
[≽️ Shingeki no bahamut
[≽️ Sailor moon
[≽️ Toaro majutsu no index
[≽️ Tokyo ravens
[≽️ Tales of vesperia
[≽️ Youju senki
[≽️ Zetsuen no tempat
[≽️ Zero no tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "shoujo ai") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Shoujo Ai ࿐໋*

[≽️ Adachi to Shimamura
[≽️ Aoi Hana
[≽️ Akuma no Riddle
[≽️ Blue Drop: Tenshi-tachi no Gikyoku
[≽️ Citrus
[≽️ Candy Boy
[≽️ Fragtime
[≽️ Happy Sugar Life
[≽️ Hidan no Aria AA
[≽️ Inugami-san to Nekoyama-san
[≽️ Kämpfer
[≽️ Konohana Kitan
[≽️ Kannazuki no Miko
[≽️ Kanamemo
[≽️ Kashimashi: Girl Meets Girl
[≽️ Mai-HiME
[≽️ Mokushiroku
[≽️ Maria†Holic Alive
[≽️ Maria-sama ga Miteru
[≽️ Mikagura Gakuen Kumikyoku (TV)
[≽️ Mnemosyne: Mnemosyne no Musume-tachi
[≽️ Maria†Holic
[≽️ Netsuzou TRap
[≽️ Oshi ga Budoukan Ittekuretara Shinu
[≽️ Sakura Trick
[≽️ Strawberry Panic
[≽️ Sasameki Koto
[≽️ Shoujo Kakumei Utena: Adolescence 
[≽️ Simoun
[≽️ Tonari no Kyuuketsuki-san
[≽️ Urasekai Picnic
[≽️ Uchi no Maid ga Uzasugiru!
[≽️ Valkyrie Drive: Mermaid
[≽️ Watashi ni Tenshi ga Maiorita!
[≽️ Yuri Kuma Arashi
[≽️ Yami to Boushi to Hon no Tabibito
[≽️ Yuru Yuri
[≽️ Yagate Kimi ni Naru`,
			},
			{ quoted: m },
		);
	} else if (text === "mecha") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Mecha ࿐໋*

[≽️ 86 eighty-six
[≽️ BACK ARROW
[≽️ Break Blade (TV)
[≽️ Code geass
[≽️ Darling in the franxx
[≽️ Date a live
[≽️ Godzilla S.P
[≽️ GRANBELM
[≽️ Hundred
[≽️ Is: infinity stratos
[≽️ Isekai no Seikishi Monogatari
[≽️ Knight's & magic
[≽️ Koukaku Kidoutai: Stand Alone Complex 2nd GIG
[≽️ Kuromukuro
[≽️ Kyoukai Senki
[≽️ Mahouka koukou
[≽️ Neon genesis evangelion
[≽️ SAKUGAN
[≽️ Schwarzesmarken
[≽️ Sidonia no Kishi
[≽️ Ssss.gridman
[≽️ Suisei no Gargantia
[≽️ Tengen Toppa Gurren Lagann`,
			},
			{ quoted: m },
		);
	} else if (text === "martial art") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Martial Art ࿐໋*

[≽️ Asu no Yoichi! 
[≽️ Baki
[≽️ Ben- To
[≽️ Blade and Soul
[≽️ Dragon Ball
[≽️ Freezing
[≽️ Fushigi Yuugi
[≽️ Hinamaru zumou
[≽️ Hitori no Shita
[≽️ Ikkitousen
[≽️ Katanagatari
[≽️ Kengan Ashura
[≽️ Ken En Ken
[≽️ Kurokami The Animation
[≽️ Koihime†Musou
[≽️ Levius
[≽️ Maken ki! 
[≽️ Maji de Watashi ni Koi Shinasai! 
[≽️ Medaka Box
[≽️ Mushibugyou
[≽️ Naruto
[≽️ Saint Seiya
[≽️ Sengoku Basara
[≽️ Shijou Saikyou no Deshi Kenichi
[≽️ Shikabane Hime
[≽️ Taboo- Tattoo
[≽️ Tenka Hyakken
[≽️ The God of High School
[≽️ Tokyo Majin Gakuen Kenpucho
[≽️ Vivid Strike
[≽️ Yuu☆Yuu☆Hakusho`,
			},
			{ quoted: m },
		);
	} else if (text === "military") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Military ࿐໋*

[≽️ 07-Ghost
[≽️ 86 EIGHTY-SIX
[≽️ Angolmois
[≽️ Akira
[≽️ Azur Lane
[≽️ Berserk
[≽️ Break Blade
[≽️ Blood +
[≽️ Break Blad (Tv)
[≽️ Code Geass
[≽️ Egao no Daika
[≽️ Fullmetal Alchemist
[≽️ Full Metal Panic!
[≽️ Gate
[≽️ Ghost in the Shell
[≽️ God Eater
[≽️ Gunslinger Girl
[≽️ Ginga Eiyuu Densetsu
[≽️ Girls und Panzer
[≽️ High School Fleet
[≽️ Heroic Age
[≽️ Hisone to Hasutan
[≽️ Hellsing Ultimate
[≽️ Heavy Object
[≽️ Joker Game
[≽️ Kantai Collection
[≽️ Kingdom
[≽️ Kidou Senshi Gundam 00
[≽️ Kurenai no Buta
[≽️ Kouya no Kotobuki Hikuotai
[≽️ Kimi no Boku no Saigo no Senjou
[≽️ Mars Red
[≽️ Macross ∆
[≽️ Military!
[≽️ Owari no Seraph
[≽️ Otome Youkai Zakuro
[≽️ Sabagebu!
[≽️ Schwarzesmarken
[≽️ Senjou no Valkyria
[≽️ Shouko Musume Senki
[≽️ Shingeki no Kyojin
[≽️ Shuumatsu no Izetta
[≽️ Senyoku no Sigrdrifa
[≽️ Strike Witches
[≽️ So Ra No Wo To
[≽️ Stella Jogakuin Koutou-ka C3-bu
[≽️ Senjuushi
[≽️ Taimadou Gakuen 35 Shiken Shoutai
[≽️ Toaru Hikuushi e no Tsuioka
[≽️ Toshokan Sensou
[≽️ Upotte!!
[≽️ Youjo Senki`,
			},
			{ quoted: m },
		);
	} else if (text === "music") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Music  ࿐໋*

[≽️ 22/7
[≽️ AKB0048: Next Stage
[≽️ Aggressive Retsuko
[≽️ Aikatsu Stars!
[≽️ BanG Dream!
[≽️ Beck
[≽️ Cider no You ni Kotoba ga Wakiagaru
[≽️ Carole & Tuesday
[≽️ D4DJ: First Mix
[≽️ Detroit Metal City
[≽️ Full Moon wo Sagashite
[≽️ Given
[≽️ Hibike! Euphonium
[≽️ Idoly Pride
[≽️ IDOLiSH7
[≽️ iDOLM@STER series
[≽️ K-On!
[≽️ Kono Oto Tomare!
[≽️ Liz to Aoi Tori
[≽️ Love Live! Series
[≽️ Mashiro no Oto
[≽️ Macross Series
[≽️ Nana
[≽️ Nodame Cantabile
[≽️ Piano no Mori
[≽️ Senki Zesshou Symphogear
[≽️ So Ra No Wo To
[≽️ Sora no Aosa wo Shiru Hito yo
[≽️ Sakamichi no Apollon
[≽️ Shelter
[≽️ Shoujo☆Kageki Revue Starlight
[≽️ Shigatsu wa Kimi no Uso
[≽️ Trapp Ikka Monogatari
[≽️ Tari Tari
[≽️ Vivy: Fluorite Eye's Song
[≽️ White Album
[≽️ White Album 2
[≽️ Zombieland Saga`,
			},
			{ quoted: m },
		);
	} else if (text === "gore") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Gore ࿐໋*

[≽️ Akira
[≽️ Another
[≽️ Aru Zombie Shoujo no Sainan
[≽️ Berserk
[≽️ Blood-c
[≽️ Claymore
[≽️ Corpse Party
[≽️ Elfen Lied
[≽️ Deadman Wonderland
[≽️ Devilman
[≽️ Dororo
[≽️ Gakkou Gurashi
[≽️ Gantz
[≽️ Genocyber
[≽️ Helsing
[≽️ Higurashi no Naku Koro ni
[≽️ High School of The Death
[≽️ Jigoku Shoujo
[≽️ Kara no Kyoukai
[≽️ Kagewani
[≽️ Kiseijuu
[≽️ Kurayami Santa
[≽️ Mahou Shoujo Site
[≽️ Mnemosyne no Musume-tachi
[≽️ Murder Princess
[≽️ Mirai Nikki
[≽️ Monster
[≽️ Ousama Game
[≽️ Perfect Blue
[≽️ Pupa
[≽️ Seriel Experiments Lain
[≽️ Shiki
[≽️ Shinsekai Yori
[≽️ Shingeki no Kyojin
[≽️ Shigurui
[≽️ Tasogare Otome X Amnesia
[≽️ Terra Formars
[≽️ Tokyo Ghoul
[≽️ Umineko no Naru koro ni`,
			},
			{ quoted: m },
		);
	} else if (text === "avant garde") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Avant Garde ࿐໋

[≽️ Boogiepop wa Warawanai
[≽️ Higurashi no Naku Koro ni
[≽️ Mousou Dairinin
[≽️ Neon Genesis Evangelion
[≽️ Ousama Game The Animation
[≽️ Paprika
[≽️ Perfect Blue
[≽️ Pop Team Epic
Poputepipikku
[≽️ Serial Experiments Lain
[≽️ Yami Shibai

⟨ 02|04|2022 ⟩`,
			},
			{ quoted: m },
		);
	} else if (text === "police") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Police ࿐໋*

[≽️ ACCA 13-ku Kansatsu-ka
[≽️ B: The Beginning
[≽️ Cop Craft
[≽️ Death Note
[≽️ Double Decker! Doug & Kirill
[≽️ Fugou Keiji: Balance:UNLIMITED
[≽️ Gyakuten Saiban: Sono "Shinjitsu," Igiari!
[≽️ Hakozume: Koban Joshi no Gyakushuu
[≽️ Koukaku Kidoutai
[≽️ Mousou Dairinin
[≽️ Meitantei Conan
[≽️ Monster
[≽️ PSYCHO-PASS`,
			},
			{ quoted: m },
		);
	} else if (text === "thriller") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Thriller ࿐໋*

[≽️ Another
[≽️ BABYLON
[≽️ B: The Beginning
[≽️ Bokura no Nanokakan Sensou
[≽️ C: The Money of Soul and Possibility Control
[≽️ Ga-Rei: Zero
[≽️ Higashi no Eden
[≽️ Higurashi no Naku Koro ni
[≽️ Kara no Kyoukai Series
[≽️ Mahou Shoujo Ikusei Keikaku
[≽️ Mahou Shoujo Madoka☆Magica
[≽️ Mirai Nikki (Tv)
[≽️ Monster
[≽️ Mousou Dairinin
[≽️ Munou na Nana
[≽️ Paprika
[≽️ Phantom: Requiem for the Phantom
[≽️ Re:Zero kara Hajimeru Isekai Seikatsu
[≽️ Satsuriku no Tenshi
[≽️ Steins;Gate
[≽️ Vivy -Fluorite Eye's Song-
[≽️ Yakusoku no Neverland
[≽️ Yuukoku no Moriarty
[≽️ Zankyou no Terror`,
			},
			{ quoted: m },
		);
	} else if (text === "romance") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Romance ࿐໋*

[≽️ 3D Kanojo
[≽️ Absolute Duo
[≽️ Angel Beats
[≽ Ao Haru Ride
[≽️ Boku wa Tomodachi ga Sakunai
[≽️ Bokutachi wa Bengkyou ga Dekinai
[≽️ Charlotte
[≽️ Chuunibyou demo Koi ga Shitai
[≽️ Danmachi
[≽️ Darling in The Franxx
[≽️ Date A Life
[≽️ Domestic na Kanojo
[≽️ Eromanga-sensei
[≽️ Fruit Basket!
[≽️ Gamers!
[≽️ Grisaia no Kaijitsu
[≽️ Gakusen Toshi Asterisk
[≽️ Gekkan Shoujo Nozaki-kun
[≽️ Go-toubun no Hanayome
[≽️ Golden Time
[≽️ Hataraku Maou-sama!
[≽️ Hajimete no Gal
[≽️ High School Dxd
[≽️ Hoshizora e kakaru hashi
[≽️ Horimiya
[≽️ Isekai wa Smartphone to Tomo ni
[≽️ Just Because
[≽️ Kaichou wa Maid-sama
[≽️ Kaguya-sama wa Kokurasetai
[≽️ Kamisama ni Natta hi
[≽️ Kangoku Gakuen
[≽️ Karakai Jouzo no Takagi-san
[≽️ Kanojo, Okarishimasu
[≽️ Kimi no Na wa
[≽️ Kimi to Boku no Saigo no Senjou
[≽️ Kimi ni Todoke
[≽️ Koe no Katachi
[≽️ Koroshi Ai
[≽️ Kyokou Suiri
[≽️ Log Horizon
[≽️ Mahou Koukou no Rettousei
[≽️ Masamune-kun no Ravange
[≽️ Monster Musume
[≽️ Netoge no Yome wa Onnanako ja Nai
[≽️ Net-juu no Susume
[≽️ Nisekoi
[≽️ Oregairu
[≽️ Oresuki
[≽️ Oreshura
[≽️ Otome Game no Hametsu Flag shika Nai
[≽️ Rakudai Kishi no Cavalry
[≽️ ReLife
[≽️ Sakurasou no Pet no Kanojo
[≽️ Saijaku Muhai no Bahamut
[≽️ Seishun buta Yarou wa Bunny Girl Senpai
[≽️ Senpai ga Uzai Kouhai no Hanashi
[≽️ Shigatsu wa Kimi no Uso
[≽️ Sousei no Omyouji
[≽️ Sono Bisque Doll wa Koi wo Suru
[≽️ Spirited Away
[≽️ Sword Art Online
[≽️ Tate no Yuusha no Nariagari
[≽️ Taishou Otome Otogibanashi
[≽️ Tenki no Ko
[≽️ Tonikaku Kawai
[≽️ Tonari no Kaibutsu-kun
[≽️ Toradora!
[≽️ Tsurezure Children
[≽️ Trinity Saven
[≽️ Tsuki ga Kirei
[≽️ Nakitai Watashi wa Neko wa Kaboru
[≽️ Wotaku ni Koi wa Muzukashii
[≽️ Yamada-kun to 7-nin no Majo (Tv)
[≽️ Zotto Mae kara Suki deshita
[≽️ Zero no Tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "psychological") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Psychological ࿐໋*

[≽️ BABYLON
[≽️ BEASTARS
[≽️ Boogiepop wa Warawanai
[≽️ Boku Dake ga Inai Machi
[≽️ BTOOOM!
[≽️ Danganronpa: The Animation
[≽️ Death Parade
[≽️ Death Note
[≽️ Elfen Lied
[≽️ Grisaia no Kajitsu
[≽️ Happy Sugar Life
[≽️ Higurashi no Naku Koro ni Kai
[≽️ Inuyashiki: Last Hero
[≽️ Jigoku Shoujo
[≽️ Kakegurui
[≽️ Kai Byoui Ramune
[≽️ Kaguya-sama wa Kokurasetai
[≽️ KIZNAIVER
[≽️ Kiseijuu: Sei no Kakuritsu
[≽️ Kotonoha no Niwa
[≽️ Kokkoku
[≽️ Mirai Nikki (TV)
[≽️ Mahou Shoujo Madoka☆Magica
[≽️ Mahou Shoujo Site
[≽️ Munou na Nana
[≽️ Neon Genesis Evangelion
[≽️ NHK ni Youkoso!
[≽️ Omoide no Marnie
[≽️ Re:Zero kara Hajimeru Isekai Seikatsu
[≽️ Satsuriku no Tenshi
[≽️ Perfect Blue
[≽️ PSYCHO-PASS
[≽️ Tokyo Ghoul
[≽️ Tomodachi Game
[≽️ WONDER EGG PRIORITY
[≽️ Yakusoku no Neverland
[≽️ Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e
[≽️ Yojouhan Shinwa Taikei
[≽️ Yuukoku no Moriarty
[≽️ Zankyou no Terror
[≽️ Zetsuen no Tempest`,
			},
			{ quoted: m },
		);
	} else if (text === "school") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime School ࿐໋*

[≽️ 3D Kanojo: Real Girl
[≽️ Absolute Dou
[≽️ Akebi-chan no Sailor-fuku
[≽️ Another
[≽️ Aho Girl
[≽️ Ansatsu Kyoushitsu
[≽️ Asobi Asobase
[≽️ Ao Haru Ride
[≽️ Angel Beats!
[≽️ Accel World
[≽️ Boku no Hero Academia
[≽️ Bakuman
[≽️ Boku wa Tomodachi ga Sakunai
[≽️ Bokutachi wa Bengkyou ga Dekinai
[≽️ Beelzebub
[≽️ Busou Shoujo Machiavellism
[≽️ Charlotte
[≽️ Clannad
[≽️ citrus
[≽️ Chuunibyou demo Koi ga Shitai!
[≽️ Code Geass
[≽️ Date A Live
[≽️ Danshi Koukousei no Nichijou
[≽️ Domestic na Kanojo
[≽️ Demi-chan wa Kataritai
[≽️ Fuuka
[≽️ Gakusen Toshi Asterisk
[≽️ Gabriel DropOut
[≽️ Gamers!
[≽️ Go-toubun no Hanayome
[≽️ Grisaia no Kajitsu
[≽️ Gekkan Shoujo Nozaki-kun
[≽️ Gakkougurashi!
[≽️ Haikyuu!!
[≽️ High School DxD
[≽️ Hajimete no Gal
[≽️ Handa-kun
[≽️ Hentai Ouji to Warawenai Neko
[≽️ Hyouka
[≽️ Hundred
[≽️ Horimiya
[≽️ Himoutu! Umaru-chan
[≽️ Ijiranaide, Nagatoro-san
[≽️ Inou Battle wa Nichijou-kei no Naka de
[≽️ Ichiban Ushiro no Daimaou
[≽️ Jaku-Chara no Tomozaki-kun
[≽️ Jibaku Shounen Hanako-kun
[≽️ Jujutsu Kaisen
[≽️ Kakegurui
[≽️ Kiss x Sis (Tv)
[≽️ Koi to Uso
[≽️ Kimi no Todoke
[≽️ K-On!
[≽️ Kokoro Connect
[≽️ Karakai Jouzu no Takagi-san
[≽️ Kaguya-sama wa Kokurasetai
[≽️ Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?
[≽️ Knight & Magic
[≽️ Kishuku Gakkou no Juliet
[≽️ Kuzu no Honkai
[≽️ Kuroko no Basket
[≽️ Kaichou wa Maid-sama!
[≽️ Kangoku Gakuen
[≽️ Kanojo, Okarishimasu
[≽️ Kill La Kill
[≽️ Kimi no Na Wa
[≽️ Koe no Katachi
[≽️ Maou Gakuin no Futekigousha
[≽️ Masamune-kun no Revenge
[≽️ Mairimashita! Iruma-kun!
[≽️ Mahouka Koukou to Rettousei
[≽️ Mayo Chiki!
[≽️ Noblesse
[≽️ Nande Koko ni Sensei ga?
[≽️ Nichijou 
[≽️ Netoge no Yome wa Onnanoko ja Nai to Omotto?
[≽️ Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei Shite Shimatta
[≽️ Oregairu/Yahari Ore no Seishun Love Comedy wa Machigatteiru
[≽️ Oreshura/Ore no Kanojo to Osananajimi ga Shuraba Sugiru
[≽️ Oresuki/Ore wa Suki Nano wa Omoe dake ka yo
[≽️ Orange
[≽️ Ouran Koukou Host Club
[≽️ Osananajimi ga Zettai Makenai Love Comedy
[≽️ Rakudai Kishi no Cavalry
[≽️ ReLIFE
[≽️ Rokudenashi Majutsu Koushi to Akashic Records
[≽️ Renai Boukun
[≽️ Rosario to Vampire
[≽️ Sakurasou no Pet no Kanojo
[≽️ Saenai Heroine no Sodatekata
[≽️ Seirei Tsukai no Blade Dance
[≽️ Sakamoto desu ga?
[≽️ Strike the Blood
[≽️ Shimoneta to lu Gainen ga Sonzai Shinai Taikutsu na Sekai
[≽️ Shigatsu wa Kimi no Uso
[≽️ Saijaku Muhai no Bahamut
[≽️ Senryuu Shoujo
[≽️ Suzumiya Haruhi no Yuuutsu
[≽️ Seishun buta Yarou wa Bunny Girl Senpai no Yume wo Minai
[≽️ Shokugeki no Souma
[≽️ Tanaka-kun wa Itsumo Kedaruga
[≽️ Tonari no Kaibutsu-kun
[≽️ To Love-ru
[≽️ Tejina Senpai
[≽️ Tsuki ga Kirei
[≽️ Tokyo Revengers
[≽️ Tokyo Ravens
[≽️ Tsuredure Children
[≽️ Toradora
[≽️ Trinity Seven
[≽️ World Trigger
[≽️ Yamada-kun to 7-nin no Majo (Tv)
[≽️ Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e
[≽️ Zero no Tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "reverse isekai") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Reverse Isekai ࿐໋*

[≽️ Amagi Brillian Park
[≽️ Ano Natsu de Matteru
[≽️ Bakemono no ko
[≽️ Beelzebub
[≽️ Bleach
[≽️ Cop Craft
[≽️ Digimon
[≽️ Dance in the Vampire Bund
[≽️ Date A Live
[≽️ Gabriel Dropout
[≽️ Gate
[≽️ Hataraku Maou-sama
[≽️ Heion Sedai no Idaten-tachi
[≽️ High School Dxd
[≽️ Jahy-sama wa Kujikenai!
[≽️ Kuromukuro
[≽️ Kobayashi-san Chi no Maid Dragon
[≽️ Kore wa Zombie desu ka
[≽️ Majokko Shimai no Yoyo to Nene
[≽️ Musaigen no Phantom World
[≽️ Noragami
[≽️ Re: Creators
[≽️ Sengoku Collection
[≽️ Seikaisuru Kado
[≽️ Suisei no Gargantia
[≽️ Tasogare Otome x Amnesia
[≽️ To Love-ru
[≽️ The World God Only Knows
[≽️ The God of High School`,
			},
			{ quoted: m },
		);
	} else if (text === "sci-fi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Sci-fi ࿐໋*

[≽️ Darling in the Franxx
[≽️ Code geass
[≽️ Steins;gate
[≽️ Tengen toppa gurren lagann
[≽️ Psycho-pass
[≽️ Neon genesis evangelion
[≽️ Cowboy bebob
[≽️ Trigun
[≽️ Touru kagaku no railgun
[≽️ Dimension w
[≽️ Aldnoah.zero
[≽️ Occultic;nine
[≽️ Brave witches
[≽️ World trigger
[≽️ Gakusen toshi asterisk
[≽️ Guilty crown
[≽️ Date a live
[≽️ Mahouka koukou no rettousei
[≽️ Persona 4 the animation
[≽️ Black bullet
[≽️ Kantai collection
[≽️ Re:creators
[≽️ Kujira no kara wa sajou ni utau
[≽️ Made in abyss
[≽️ Plastic memories`,
			},
			{ quoted: m },
		);
	} else if (text === "game") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Game ࿐໋*

[≽️ .hack//Series
[≽️ 100-man no Inochi no Ue ni Ore wa Tatteiru
[≽️ 3-gatsu no Lion
[≽️ Accel World
[≽️ Chihayafuru
[≽️ Darwin's Game
[≽️ Deatte 5-byou de Battle
[≽️ D-Frag!
[≽️ Death Parade
[≽️ Gamers!
[≽️ Gyakkyou Burai Kaiji: Ultimate Survivor
[≽️ High Score Girl
[≽️ Hikaru no Go
[≽️ Houkago Saikoro Club
[≽️ Infinite Dendrogram
[≽️ Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.
[≽️ Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara
[≽️ Kakegurui
[≽️ Log Horizon
[≽️ Mirai Nikki
[≽️ Netoge no Yome wa Onnanoko ja Nai to Omotta?
[≽️ Net-juu no Susume
[≽️ New Game!
[≽️ No Game No Life
[≽️ Overlord
[≽️ Phi Brain: Kami no Puzzle
[≽️ Pokemon Series
[≽️ Quanzhi Gaoshou
[≽️ Ryuuou no Oshigoto!
[≽️ Satsuriku no Tenshi
[≽️ Selector Infected WIXOSS
[≽️ Sword Art Online
[≽️ Yu☆Gi☆Oh! Series`,
			},
			{ quoted: m },
		);
	} else if (text === "seinen") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Seinen ࿐໋*

[≽️ 3-gatsu no Lion
[≽️ Asobi Asobase
[≽️ Ajin
[≽️ Akira
[≽️ Amaama to Inazuma
[≽️ Arakawa Under the Bridge
[≽️ Berserk
[≽️ Blood Lad
[≽️ Bokura wa Minna Kawai-sou
[≽️ Boku dake ga Inai Machi
[≽️ Black Lagoon
[≽️ Black Bullet
[≽️ Btooom!
[≽️ Bungou Stray Dogs
[≽️ B-gata H-kei
[≽️ Canaan
[≽️ Detroit Metal City
[≽️ Devils Line
[≽️ Dance in the Vampire Bund
[≽️ Danna ga Nani wo Itteiru ka Wakaranai Ken
[≽️ Dimension W
[≽️ Demi-chan wa Kataritai
[≽️ Drifters
[≽️ Dorohedoro
[≽️ D-Frag!
[≽️ Eizouken ni wa Te wo Dasu na!
[≽️ Elfen Lied
[≽️ Freezing
[≽️ Gyakkyou Burai Kaiji: Ultimate Survivor
[≽️ Gleipnir
[≽️ Golden Kamuy
[≽️ Grand Blue
[≽️ Gangsta.
[≽️ Hakozume: Koban Joshi no Gyakushuu
[≽️ Hellsing Ultimate
[≽️ Houseki no Kuni
[≽️ Himouto! Umaru-chan
[≽️ Hinamatsuri
[≽️ High Score Girl
[≽️ Inuyashiki
[≽️ Jormungand
[≽️ Kono Bijutsubu ni wa Mondai ga Aru!
[≽️ Koi wa Ameagari no You ni
[≽️ Kuzu no Honkai
[≽️ Koukaku Kidoutai
[≽️ Kiss x Sis
[≽️ Kaguya-sama wa Kokurasetai
[≽️ Kiseijuu: Sei no Kakuritsu
[≽️ Koukaku Kidoutai: Stand Alone Complex
[≽️ Monster
[≽️ Mushishi
[≽️ Monster Musume no Iru Nichijou
[≽️ Mononoke
[≽️ Mangaka-san to Assistant-san
[≽️ Nazo no Kanojo X
[≽️ Nande Koko ni Sensei ga!?
[≽️ Non Non Biyori
[≽️ One Outs
[≽️ Prison School
[≽️ Planetes
[≽️ Ping Pong the Animation
[≽️ Phantom: Requiem for the Phantom
[≽️ Rozen Maiden
[≽️ Sakamoto Desu ga?
[≽️ Seikon no Qwaser
[≽️ Shuffle!
[≽️ Sakura Trick
[≽️ Sidonia no Kishi
[≽️ Taboo Tattoo
[≽️ Tejina-senpai
[≽️ Terra Formars
[≽️ Tonari no Seki-kun
[≽️ Tokyo Ghoul
[≽️ Vinland Saga
[≽️ Working!!
[≽️ Yesterday wo Utatte`,
			},
			{ quoted: m },
		);
	} else if (text === "sport") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Sport ࿐໋*

[≽️ Air gear
[≽️ Ace of diamond
[≽️ Captai Tsubasa
[≽️ Capeta
[≽️ Cross game
[≽️ Days
[≽️ Eyeshield 21
[≽️ Free! Iternal summer
[≽️ Fruits Basket
[≽️ Girls & panzer
[≽️ Haikyuu!!
[≽️ Hajime no Oppo
[≽️ Hanebado!
[≽️ Initial D: final stage
[≽️ Inazuma eleven
[≽️ Kuroko no basket
[≽️ Keijo!!!
[≽️ Major
[≽️ One outs
[≽️ Ookiku furikabutte
[≽️ One Outs
[≽️ Ping Pong: The animation
[≽️ Prince of tennis
[≽️ Readline
[≽️ Slam dunk
[≽️ Tsuritama
[≽️ Vivid Strike
[≽️ Yowamushi pedal
[≽️ Yuri one ice`,
			},
			{ quoted: m },
		);
	} else if (text === "slice of life") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Slice of Life ࿐໋*

[≽️ 3-gatsu no Lion
[≽️ Akebi-chan no Sailor-fuku
[≽️ Ao Haru Ride
[≽️ Amagami SS
[≽️ Acchi Kocchi
[≽️ Air
[≽️ Amaama to Inazuma
[≽️ Azumanga Daioh
[≽️ Ano Natsu de Matteru
[≽️ Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.
[≽️ Barakamon
[≽️ Blend S
[≽️ Beck
[≽️ Beastars
[≽️ Boku wa Tomodachi ga Sukunai
[≽️ Byousoku 5 Centimeter
[≽️ Bokura wa Minna Kawai-sou
[≽️ Black★Rock Shooter
[≽️ Bokura ga Ita
[≽️ Clannad
[≽️ Chuunibyou demo Koi ga Shitai!
[≽️ Chihayafuru
[≽️ Dumbbell Nan Kilo Moteru?
[≽️ Danna ga Nani wo Itteiru ka Wakaranai Ken
[≽️ Danshi Koukousei no Nichijou
[≽️ Dagashi Kashi
[≽️ Denpa Onna to Seishun Otoko
[≽️ Doukyonin wa Hiza, Tokidoki, Atama no Ue.
[≽️ Eve no Jikan
[≽️ Free! Series
[≽️ Fruits Basket
[≽️ Great Teacher Onizuka
[≽️ Gakkougurashi!
[≽️ Gin no Saji
[≽️ Gokushufudou
[≽️ Gochuumon wa Usagi Desu ka?
[≽️ Grand Blue
[≽️ Gakuen Babysitters
[≽️ GJ-bu
[≽️ Hachimitsu to Clover
[≽️ Handa-kun
[≽️ Hitoribocchi no Marumaru Seikatsu
[≽️ Hinamatsuri
[≽️ Hyouka
[≽️ Horimiya
[≽️ Himouto! Umaru-chan
[≽️ Hanasaku Iroha
[≽️ Honzuki no Gekokujou
[≽️ Ijiranaide, Nagatoro-san
[≽️ Isekai Shokudou
[≽️ Inou-Battle wa Nichijou-kei no Naka de
[≽️ Isshuukan Friends.
[≽️ Just Because!
[≽️ Joukamachi no Dandelion
[≽️ Kimi to Boku.
[≽️ Kiniro Mosaic
[≽️ Kuragehime
[≽️ Kantai Collection: KanColle
[≽️ Kakushigoto
[≽️ Kino no Tabi
[≽️ Karakai Jouzu no Takagi-san
[≽️ Kotonoha no Niwa
[≽️ Kyoukai no Kanata
[≽️ Kobayashi-san Chi no Maid Dragon
[≽️ K-On!
[≽️ Kimi no Suizou wo Tabetai
[≽️ Kareshi Kanojo no Jijou
[≽️ Koi wa Ameagari no You ni
[≽️ Kanokon
[≽️ Love Hina
[≽️ Little Busters!
[≽️ Love Live! Series
[≽️ Kimi ni Todoke
[≽️ Kokoro Connect
[≽️ Mob Psycho 100
[≽️ Mahoutsukai no Yome
[≽️ Mushishi
[≽️ Musaigen no Phantom World
[≽️ Mangaka-san to Assistant-san to The Animation
[≽️ Mimi wo Sumaseba
[≽️ Mikakunin de Shinkoukei
[≽️ Non Non Biyori
[≽️ Nodame Cantabile
[≽️ Nijiiro Days
[≽️ Nana
[≽️ Natsume Yuujinchou
[≽️ Nichijou
[≽️ New Game!
[≽️ Ookami Kodomo no Ame to Yuki
[≽️ Ore no Imouto ga Konnani Kawaii Wake ga Nai
[≽️ Osake wa Fuufu ni Natte kara
[≽️ Oshiete! Galko-chan
[≽️ Papa no Iukoto wo Kikinasai!
[≽️ Paradise Kiss
[≽️ Ryuuou no Oshigoto!
[≽️ ReLIFE
[≽️ Ranma ½
[≽️ Sakura Trick
[≽️ Sewayaki Kitsune no Senko-san
[≽️ Shoujo Shuumatsu Ryokou
[≽️ Somali to Mori no Kamisama
[≽️ Senryuu Shoujo
[≽️ Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita
[≽️ Servant x Service
[≽️ Shinryaku! Ika Musume
[≽️ Shiroi Suna no Aquatope
[≽️ Suzumiya Haruhi no Yuuutsu
[≽️ Saiki Kusuo no Ψ-nan
[≽️ Sakura-sou no Pet na Kanojo
[≽️ Sakamoto Desu ga?
[≽️ Seitokai Yakuindomo
[≽️ Tada-kun wa Koi wo Shinai
[≽️ Tamako Market
[≽️ Tanaka-kun wa Itsumo Kedaruge
[≽️ Tenki no Ko
[≽️ Tonari no Kaibutsu-kun
[≽️ Toradora!
[≽️ Tsuritama
[≽️ Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.
[≽️ Uchouten Kazoku
[≽️ Uchuu Kyoudai
[≽️ Usagi Drop
[≽️ Uzaki-chan wa Asobitai!
[≽️ Violet Evergarden
[≽️ Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!
[≽️ Watashi ni Tenshi ga Maiorita!
[≽️ Working!!
[≽️ Wotaku ni Koi wa Muzukashii
[≽️ Yahari Ore no Seishun Love Comedy wa Machigatteiru.
[≽️ Yesterday wo Utatte
[≽️ Yuru Camp△
[≽️ Yuru Yuri`,
			},
			{ quoted: m },
		);
	} else if (text === "movie") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Movie ࿐໋*

[≽️ Bakemono no Ko
[≽️ Bokura Nanokakan Sensou
[≽️ Byousoku 5 Centimeter
[≽️ From Uo on Poppy Hill
[≽️ Gedo Senki
[≽️ Hakubo
[≽️ Hello World
[≽️ Horatu no Haka
[≽️ Hotarubi no Mori e
[≽️ Kaze Tachinu
[≽️ Kimi no Koe wa Todoketai
[≽️ Kimi no Na wa
[≽️ Kimi no Suizou wo Tabitai
[≽️ Kimi to, Nami ni Norenta
[≽️ Koe no Katachi
[≽️ Kokoro ga Sakebitagatterunda
[≽️ Kotonoha no niwa
[≽️ Kurenai no Buta
[≽️ Liz to Aoi Tori Movie
[≽️ Mirai no Mirai
[≽️ Nakitai Watashi wa Neko wa Kaburu
[≽️ Neko no Ongaeshi
[≽️ Nerawareta Gakuen
[≽️ Ookami Kodomo no Ame to Yuki
[≽️ Oushitsu Kyoushi Heini 
[≽️ Penguin Highway
[≽️ Rakuen Tsuihou
[≽️ Sayonara no Asa ni Yakusoku no Hana wo Kazarou
[≽️ Shikioriori
[≽️ Summer Wars`,
			},
			{ quoted: m },
		);
	} else if (text === "loli") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Loli ࿐໋*

[≽️ Azur Lane
[≽️ Aharen-san wa Hakarenai
[≽️ Fate/kaleid liner Prisma☆Illya Series 
[≽️ Kobayashi-san Chi no Maid Dragon
[≽️ Eromanga Sensei
[≽️ GJ-BU
[≽️ Gochuumon wa Usagi desu ka?
[≽️ Hataraku Saibou!!
[≽️ Himouto Umaru-chan
[≽️ Himegoto
[≽️ Houkago Teibou Nisshi
[≽️ Higurashi no Naku Koro ni
[≽️ Jahy-sama wa Kujikenai!
[≽️ K-on
[≽️ Kuma Kuma Kuma Bear
[≽️ Maoujou de Oyasumi
[≽️ No Game No Life
[≽️ Non Non Biyori
[≽️ Rail Romanesque
[≽️ Ryuuou no Oshigoto
[≽️ Shirobako
[≽️ Taishou Otome Otogibanashi
[≽️ Sora no Method
[≽️ SPY x FAMILY
[≽️ Watashi ni Tenshi ga Maiorita!
[≽️ Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!`,
			},
			{ quoted: m },
		);
	} else if (text === "super power") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Super Power ࿐໋*

[≽️ 11eyes
[≽️ Baka to Test to Shoukanjuu
[≽️ Bleach
[≽️ Bungou Stray Dog
[≽️ Boku no Hero Academia
[≽️ Big Order
[≽️ Black Cat
[≽️ Charlotte
[≽️ Code Geass
[≽️ Claymore
[≽️ Darker than Black
[≽️ Dies Irae
[≽️ D.Gray-man
[≽️ Dragon ball
[≽️ Gunjou no Magmel
[≽️ Guilty Crown
[≽️ Hagure Yuusha no Estetica
[≽️ Hamatora The Animation
[≽️ Hunter x Hunter
[≽️ Joukamachi no Dandelion
[≽️ Kill La Kill
[≽️ K Projects
[≽️ Kekkan Sensei
[≽️ Katekyo Hitman Reborn!
[≽️ Maken-Ki!
[≽️ Medaka Box
[≽️ Maji de Watashi ni Koi Shinasai!
[≽️ Mekakucity Actors
[≽️ Naruto
[≽️ One Punch Man
[≽️ One Piece
[≽️ Promare
[≽️ Persona 4 The Animation
[≽️ Sagrada Reset
[≽️ Shaman King (2021)
[≽️ Shuumatsu no Valkyrie
[≽️ Seikon no Qwaser
[≽️ Sekirei
[≽️ Shingeki no Kyojin
[≽️ Taboo-Tattoo
[≽️ Tokyo Ravens
[≽️ Tokyo ESP
[≽️ Toaru Series`,
			},
			{ quoted: m },
		);
	} else if (text === "supernatural") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Supernatural ࿐໋*

[≽️ Ansatsu Kyoushitsu
[≽️ Angel Beats
[≽️ Ao no Exorcist
[≽️ Boku Dake ga Inai Machi
[≽️ Boku no Hero Academia
[≽️ Blood Lad
[≽️ Bungou Stray Dogs
[≽️ Death Note
[≽️ Dororo
[≽️ Enn Enn no Shouboutai
[≽️ Fate
[≽️ Fruit Basket
[≽️ Fumetsu no Anata e
[≽️ Hataraku Maou-sama!
[≽️ Hentai Ouji to Warawanai Neko
[≽️ High School of The Death
[≽️ Hinamatsuri
[≽️ Jujutsu Kaisen
[≽️ Kokoro Connect
[≽️ Kemono Jihen
[≽️ Kekkai Sensen
[≽️ Kimetsu no Yaiba
[≽️ Kimi no Na Wa
[≽️ Konosuba
[≽️ Kore wa Zombie desu ka
[≽️ Kyoukai no Kanata
[≽️ Kyokou Suiri
[≽️ Nanatsu no Taizai
[≽️ No Game No Life
[≽️ Noragami
[≽️ Mahouka Koukou no Rettousei
[≽️ Mairimashita! Iruma-kun
[≽️ Mirai Nikki
[≽️ Musaigen no Phantom World
[≽️ Munou na Nana
[≽️ Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo
[≽️ Mob Psycho 100
[≽️ One Punch Man
[≽️ Owari no Seraph
[≽️ Overlord
[≽️ Renai Boukun
[≽️ Sankarea
[≽️ Saijaku Muhai no Bahamut
[≽️ Shaman king
[≽️ Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
[≽️ Soul Eater
[≽️ Strike the Blood
[≽️ Tokyo Ghoul
[≽️ Tokyo Ravens
[≽️ Tokyo Revengers
[≽️ The God of High School
[≽️ Trinity Seven
[≽️ Yamada-kun to 7-nin no Majo
[≽️ Zombieland Saga`,
			},
			{ quoted: m },
		);
	} else if (text === "kyoto animation") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Kyoto Animation ࿐໋*

[≽️ Amagi Brilliant Park
[≽️ Chuunibyou demo Koi ga Shitai!
[≽️ Clannad
[≽️ Free!
[≽️ Full Metal Panic
[≽️ Hibike! Euphonium
[≽️ Hyouka
[≽️ K-On!
[≽️ Kobayashi-san Chi no Maid Dragon
[≽️ Koe no Katachi
[≽️ Kyoukai no Kanata
[≽️ Liz to Aoi Tori
[≽️ Lucky☆Star
[≽️ Musaigen no Phantom World
[≽️ Nichijou
[≽️ Suzumiya Haruhi no Yuuutsu
[≽️ Tamako Market
[≽️ Tsurune
[≽️ Violet Evergarden`,
			},
			{ quoted: m },
		);
	} else if (text === "bones") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Bones ࿐໋*

[≽️ Akagami no Shirayuki-hime
[≽️ A.I.C.O Incarnation
[≽️ Boku no Hero Academia
[≽️ Bungou Stray Dogs
[≽️ Darker than Black
[≽️ Eureka Seven
[≽️ Full Metal Alchemist
[≽️ Godzilla S.P
[≽️ Gosick
[≽️ Hitsugi no Chaika
[≽️ Josee to Tora to Sakana-tachi
[≽️ Kekkan Sensei
[≽️ Mob Psycho 100
[≽️ No.6
[≽️ Noragami
[≽️ Ouran Koukou Host Club
[≽️ SK8 the Infinity
[≽️ Soul Eater
[≽️ Space☆Dandy
[≽️ Tokyo Magnitude 8.0
[≽️ Zetsuen no Tempest`,
			},
			{ quoted: m },
		);
	} else if (text === "bn pictures") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime BN Pictures ࿐໋*

[≽️ B-Project
[≽️ Cestvs
[≽️ Gintama
[≽️ Mairimashita! Iruma-kun`,
			},
			{ quoted: m },
		);
	} else if (text === "revoroot") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime REVOROOT ࿐໋

[≽️ Babylone
[≽️ FLCL Alternative
[≽️ Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita
[≽️ Tensei Kenja no Isekai Life`,
			},
			{ quoted: m },
		);
	} else if (text === "a-1 pictures") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime A-1 Pictures ࿐໋

[≽️ 22/7
[≽️ 86 EIGHTY-SIX
[≽️ Aldnoah.Zero
[≽️ Ano Hi Mita Han no Namae wo Bokutachi wa Mada Shiranai
[≽️ Ao no Exorcist
[≽️ Bland S
[≽️ Boku Dake ga Inai Machi
[≽️ Brotherhood
[≽️ Darling in the Franxx
[≽️ Demi-chan wa Kataritai
[≽️ Denpa Kiyoushi (Tv)
[≽️ Doukyuusei
[≽️ Eromanga Sensei
[≽️ Fairy Tail
[≽️ Gate
[≽️ Gakusen Toshi Asterisk
[≽️ Galilei Donna
[≽️ Gin no Saji
[≽️ Gunslinger Stratos
[≽️ Granblue
[≽️ Grancrest Senki
[≽️ Gyakuten Saiban
[≽️ Hai to Gensou no Grimgar
[≽️ Kannagi
[≽️ Kaguya-sama wa Kokurasetai
[≽️ Kokoro ga Sakebitagatterunda
[≽️ Kuroshitsuji
[≽️ Magi
[≽️ Magic Kaito 1412
[≽️ Nanatsu no Taizai
[≽️ Occultic
[≽️ Omoi, Omoware, Furi, Furare
[≽️ Ore no Kanojo to Osanajimi ga Shuraba Sugiru
[≽️ Ore no Imoutu ga Konnani Kawaii Wake ga Nai
[≽️ Persona 4 The Golden Animation
[≽️ Qualidea Code
[≽️ Ryuugajou Nanana no Maizoukin
[≽️ Saenai Heroine no Sodatekata
[≽️ Servent x Service
[≽️ Senyoku no Sigrdrifa
[≽️ Shigatsu wa Kimi no Uso
[≽️ Shinsekai yori
[≽️ Shelter
[≽️ Slow Start
[≽️ So Ra No Wo To
[≽️ Sekai Seifuku
[≽️ Senjou no Valkyria
[≽️ Subete ga F ni Naru
[≽️ Sword Art Online
[≽️ Tsuritama
[≽️ Uta no☆Prince-sama♪
[≽️ Wotaku ni Koi wa Muzukashii
[≽️ Working!`,
			},
			{ quoted: m },
		);
	} else if (text === "wit studio") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime WIT STUDIO ࿐໋*

[≽️ Great Pretender
[≽️ Hal
[≽️ Hoozuki no Reitetsu
[≽️ Koutetsujou no Kabaneri
[≽️ Koi wa Ameagari no You ni
[≽️ Mahou Tsukai no Yome
[≽️ Owari no Seraph
[≽️ Rolling☆Girls
[≽️ Shingeki no Kyoujin
[≽️ Shisha no Teikoku
[≽️ Totsukuni no Shoujo
[≽️ Vinland Saga
[≽️ Vivy -Fluorite Eye's Song-`,
			},
			{ quoted: m },
		);
	} else if (text === "pierrot") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Pierrot ࿐໋*

[≽️ Akatsuki no Yona
[≽️ Akudama Drive
[≽️ Beelzebub
[≽️ Bleach
[≽️ Black clove
[≽️ Great Teacher Onizuka
[≽️ Naruto series
[≽️ Sousei no Omyouji
[≽️ Tokyo Ghoul`,
			},
			{ quoted: m },
		);
	} else if (text === "j.c staff") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime J.C Staff ࿐໋*

[≽️ Ano Natsu de Matteru
[≽️ Azumanga daioh
[≽️ Bakuman
[≽️ Danmachi
[≽️ Golden Time
[≽️ Gokushufudo
[≽️ Hentai Puji to Warawanai neko
[≽️ Joshiraku
[≽️ Kaichou wa maid sama
[≽️ Little Busters
[≽️ Prison School
[≽️ Shakugan
[≽️ Shimoneta
[≽️ Shokugeki no Souma
[≽️ Sakurasou pet na kanojo
[≽️ Satsuriku no Tenshi
[≽️ Sentouin, Hakenshimasu!
[≽️ Saiki Kusuo
[≽️ Toaru Majutsu Series
[≽️ Taboo Tatoo
[≽️ Toradora
[≽️ UQ: Holder
[≽️ Zero to Tsukaima`,
			},
			{ quoted: m },
		);
	} else if (text === "production ig") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Production IG ࿐໋*

[≽️ Ao Haru Ride
[≽️ Blood C
[≽️ FLCL
[≽️ Great Pretender
[≽️ Guilty Crown
[≽️ Haikyuu!!
[≽️ Hal
[≽️ Higashi no Eden
[≽️ Joker Game
[≽️ Kaze ga Tsuyoku Fuiteru
[≽️ Kuroko no basket
[≽️ Kimi no Todoke
[≽️ Love Hina
[≽️ Noblesse
[≽️ Psycho Pass
[≽️ Shingeki no Kyojin
[≽️ Usagi Drop
[≽️ Vinland Saga
[≽️ xxxHOLIC
[≽️ Yuukoku no Moriarty`,
			},
			{ quoted: m },
		);
	} else if (text === "madhouse") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Madhouse ࿐໋*

[≽️ Black Lagoon
[≽️ Btooom!
[≽️ Chihayafuru
[≽️ Claymore
[≽️ Death Note
[≽️ Death Parade
[≽️ Devil May Cry
[≽️ Hellsing Ultimate
[≽️ Highshcool of the Death
[≽️ Hunter X Hunter
[≽️ Kiseiju
[≽️ One Punch Man
[≽️ Mahouka koukou no Rettousei
[≽️ Monster
[≽️ No Game No Life
[≽️ Nana
[≽️ No Guns Life
[≽️ Overlord
[≽️ Ookami no Kodomo
[≽️ Ore Monogatari
[≽️ Sora Yori mo Toori Basho
[≽️ Trigun`,
			},
			{ quoted: m },
		);
	} else if (text === "deen") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Deen ࿐໋*

[≽ Fruit Basket
[≽ Higurashi no Naku Koro ni
[≽ Itou junji colection
[≽ Konosuba
[≽ Kore wa Zombie Desu ka?
[≽ Log Horizon
[≽ Ranma ½
[≽ Sankarea
[≽ Sakura Trick
[≽ Umineko no Naku Koro ni
[≽ Vampire Knight`,
			},
			{ quoted: m },
		);
	} else if (text === "p.a works") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime P.A Works ࿐໋*

[≽ Angel Beats!
[≽ Another
[≽ Charlotte
[≽ Glasslip
[≽ Irozuku Sekai no Ashita kara
[≽ Kuromukuro
[≽ Kamisama ni Natta hi
[≽ Nagi no Asukara
[≽ Shirobako
[≽ Sayonara no Asa
[≽ Sakura Quest
[≽ Uma Musume`,
			},
			{ quoted: m },
		);
	} else if (text === "mappa") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime MAPPA ࿐໋*

[≽ Banana Fish
[≽ Dororo
[≽ Dorohedoro
[≽ Inuyashiki
[≽ Jujutsu Kaisen
[≽ Kakegurui
[≽ Shingeki no Bahamuth
[≽ The God of High School
[≽ Yuri on Ice
[≽ Zankyou no Teror
[≽ Zombieland Saga`,
			},
			{ quoted: m },
		);
	} else if (text === "doga kobo") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Doga Kobo ࿐໋*

[≽ Dumbell nan kilo wa moteru?
[≽ Gabriel Drop Out
[≽ Gekkan Shoujo Nozaki Kun
[≽ GJ-bu
[≽ Himouto Umaru Chan
[≽ Houkago Teibou Nisshi
[≽ Ikebukuro West Gate Park
[≽ Koisuru Asteroid
[≽ Love Lab
[≽ Maojou de Oyasumi
[≽ Mikakunin
[≽ Myself; Yourself
[≽ New Game
[≽ Osananajimi Zettai ni Makenai Love Comedy
[≽ Plastic Memories
[≽ Tada Kun koi wa shinai
[≽ Sewayaki Kitsune no Senko San
[≽ Uchi no Maid
[≽ Watashi ni Tenshi ga Mariorita
[≽ Yesterday wo Utatte
[≽ Yuru Yuri`,
			},
			{ quoted: m },
		);
	} else if (text === "silver link") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime SILVER LINK ࿐໋*

[≽ Baka to Test to Shoukanjuu
[≽ Busou Shoujo Machiavellianism
[≽ Bofuri
[≽ ChaoS; Child
[≽ C³
[≽ Death March kara Hajimeru
[≽ Hamefura
[≽ Imouto de Sae Ireba Ii
[≽ Isekai Shokudou
[≽ Kenja no Mago
[≽ Kokoro Connect
[≽ Masamune Kun no Revenge
[≽ Maou Gakuin no Futekihgousa
[≽ Non Non Biyori
[≽ Nourin
[≽ Rakudai Kishi no Cavalary
[≽ Strike the Blood
[≽ Tanaka Kun wa Itsumo Kedaruge
[≽ Tasogare Otome x Amnesia
[≽ Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!`,
			},
			{ quoted: m },
		);
	} else if (text === "shaft") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Shaft ࿐໋*

[≽ 3-Gatsu no Lion
[≽ Arakawa Under the Bridge
[≽ Assault Lily Bouquet
[≽ Denpa Onna to Seishun Otoko
[≽ Maria Holic
[≽ Magia Record
[≽ Mekakucity Actors
[≽ Mahou Shoujo Madoka
[≽ Monogatari series
[≽ Nisekoi
[≽ Rec
[≽ Sayonara Zetsubou Sensei
[≽ Uchiage Hanabi`,
			},
			{ quoted: m },
		);
	} else if (text === "trigger") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Trigger ࿐໋*

[≽ BNA
[≽ Darling in The Franxx
[≽ Inferno Cop
[≽ Inou-Battle wa Nichijou-kei no Naka de
[≽ Kill la kill
[≽ Kiznaiver
[≽ Little Witch Academia
[≽ SSSS.Gridman
[≽ SSSS.Dynazenon
[≽ Promare`,
			},
			{ quoted: m },
		);
	} else if (text === "white fox") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime White Fox࿐໋*

[≽️ Akame ga Kill!
[≽️ Arifureta Shokugyou de Sekai Saikyou
[≽️ Goblin Slayer
[≽️ Gochuumon wa Usagi Desu ka?
[≽️ Hataraku Maou-sama!
[≽️ Katanagatari
[≽️ Re:Zero kara Hajimeru Isekai Seikatsu
[≽️ SoniAni: Super Sonico The Animation
[≽️ Soushin Shoujo Matoi
[≽️ Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru
[≽️ Steins;Gate
[≽️ Shoujo Shuumatsu Ryokou
[≽️ Tears to Tiara
[≽️ Utawarerumono: Itsuwari no Kamen
[≽️ Zero kara Hajimeru Mahou no Sho`,
			},
			{ quoted: m },
		);
	} else if (text === "ufotable") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Ufotable ࿐໋*

[≽️ Coyote Ragtime Show
[≽️ Fate/Zero
[≽️ Fate/Stay Night Series
[≽️ Futakoi Alternative
[≽️ Gakuen Utopia Manabi Straight!
[≽️ God Eater
[≽️ Kara no Kyoukai Series
[≽️ Kimetsu no Yaiba
[≽️ Majokko Shimai no Yoyo to Nene
[≽️ Ninin ga Shinobuden
[≽️ Tales of Zestiria the Cross
[≽️ Tales of Symphonia: The Animation`,
			},
			{ quoted: m },
		);
	} else if (text === "tms entertainment") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime TMS Entertainmet ࿐໋*

[≽️ All Out!!
[≽️ Aishiteruze Baby★★
[≽️ Amaama to Inazuma
[≽️ Baki
[≽️ Bananya
[≽️ Bakuon!!
[≽️ Brave 10
[≽️ Detective Conan
[≽️ Dr. Stone
[≽️ D.Gray-man
[≽️ Fruits Basket
[≽️ Gugure! Kokkuri-san
[≽️ Itazura na Kiss
[≽️ Jitsu wa Watashi wa
[≽️ Kanojo, Okarishimasu
[≽️ Kamisama Hajimemashita
[≽️ Karakai Jouzu no Takagi-san
[≽️ Keppeki Danshi! Aoyama-kun
[≽️ Lupin III
[≽️ Magic Kaito
[≽️ Megalo Box
[≽️ Nana Maru San Batsu
[≽️ Orange
[≽️ ReLIFE
[≽️ Shijou Saikyou no Deshi Kenichi
[≽️ Shakunetsu Kabaddi
[≽️ Sonic X
[≽️ Saint Seiya
[≽️ Toaru Hikuushi e no Koiuta
[≽️ Trickster: Edogawa Ranpo "Shounen Tanteidan" yori
[≽️ Youkai Apartment no Yuuga na Nichijou
[≽️ Yowamushi Pedal
[≽️ Zetman`,
			},
			{ quoted: m },
		);
	} else if (text === "ghibli") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime  Ghibli ࿐໋*

[≽️ Coquelicot-zaka kara
[≽️ Ged Senki
[≽️ Gake no Ue no Ponyo
[≽️ Howl no Ugoku Shiro
[≽️ Hotaru no Haka
[≽️ Hoshi wo Katta Hi
[≽️ Heisei Tanuki Gassen Ponpoko
[≽️ Iblard Jikan
[≽️ Karigurashi no Arrietty
[≽️ Kaze Tachinu
[≽️ Kurenai no Buta
[≽️ Kaguya-hime no Monogatari
[≽️ Mei to Koneko Bus
[≽️ Mononoke Hime
[≽️ Majo no Takkyuubin
[≽️ Mimi wo Sumaseba
[≽️ Neko no Ongaeshi
[≽️ Omoide no Marnie
[≽️ Omoide Poroporo
[≽️ Sanzoku no Musume Ronja
[≽️ Sen to Chihiro no Kamikakushi
[≽️ Tonari no Yamada-kun
[≽️ Tonari no Totoro
[≽️ Tenkuu no Shiro Laputa
[≽️ Umi ga Kikoeru`,
			},
			{ quoted: m },
		);
	} else if (text === "orange") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Orange ࿐໋*

[≽️ Active Raid: Kidou Kyoushuushitsu Dai Hachi Gakari
[≽️ Black Bullet
[≽️ Beastars
[≽️ Dimension W
[≽️ Godzilla: S.P
[≽️ Ginga Kikoutai Majestic Prince
[≽️ Houseki no Kuni
[≽️ Norn9: Norn+Nonet
[≽️ Neppuu Kairiku Bushi Road
[≽️ Saijaku Muhai no Bahamut
[≽️ Under the Dog`,
			},
			{ quoted: m },
		);
	} else if (text === "lidenfilms") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime LIDENFILMS ࿐໋*

[≽️ Arslan Senki
[≽️ Aiura
[≽️ Beelzebub-jou no Okinimesu mama.
[≽️ Berserk
[≽️ Hanebado!
[≽️ Hataraku Saibou Black
[≽️ Hortensia Saga
[≽️ Houkago Saikoro Club
[≽️ Koi to Uso
[≽️ Kishuku Gakkou no Juliet
[≽️ Killing Bites
[≽️ Kanojo to Kanojo no Neko: Everything Flows
[≽️ Lost Song
[≽️ Layton Mystery Tanteisha: Katri no Nazotoki File
[≽️ Mahou Shoujo Tokushusen Asuka
[≽️ Mugen no Juunin: Immortal
[≽️ Mayonaka no Occult Koumuin
[≽️ Miss Monochrome The Animation
[≽️ Phantom in the Twilight
[≽️ Rokudenashi Majutsu Koushi to Akashic Records
[≽️ Sayonara Watashi no Cramer
[≽️ Seven Knights Revolution: Eiyuu no Keishousha
[≽️ Sekkou Boys
[≽️ Senyuu.
[≽️ Schwarzesmarken
[≽️ Terra Formars: Revenge
[≽️ Tokyo Revengers
[≽️ Tejina-senpai
[≽️ Terra Formars
[≽️ Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari
[≽️ Urasekai Picnic
[≽️ Udon no Kuni no Kiniro Kemari
[≽️ Yamada-kun to 7-nin no Majo`,
			},
			{ quoted: m },
		);
	} else if (text === "kinema citrus") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Kinema Citrus ࿐໋*

[≽️ .hack//Quantum
[≽️ Black Bullet
[≽️ Barakamon
[≽️ Code:Breaker
[≽️ Gochuumon wa Usagi Desu ka??
[≽️ Kuma Miko
[≽️ Koukyoushihen Eureka Seven: Pocket ga Niji de Ippai
[≽️ Made in Abyss
[≽️ Mijikamon
[≽️ Marulk-chan no Nichijou
[≽️ Nagareboshi Lens
[≽️ Norn9: Norn+Nonet
[≽️ Neppuu Kairiku Bushi Road
[≽️ Shakunetsu no Takkyuu Musume
[≽️ Show By Rock!!
[≽️ Shoujo☆Kageki Revue Starlight
[≽️ Tate no Yuusha no Nariagari
[≽️ Tokyo Magnitude 8.0
[≽️ Under the Dog
[≽️ Yuyushiki`,
			},
			{ quoted: m },
		);
	} else if (text === "lerche") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Lerche ࿐໋*

[≽️ Ansatsu Kyoushitsu
[≽️ Asobi Asobase
[≽️ Danganronpa Series
[≽️ Gakkougurashi
[≽️ Given
[≽️ Hakumei to Mikochi
[≽️ Idoly Pride
[≽️ Jibaku Shounen Hanako Kun
[≽️ Kino no Tabi
[≽️ Kuzu No Honkai
[≽️ Kanata no Astra
[≽️ Konohana Kitan
[≽️ Monster Musume no Iru Nichijou
[≽️ Machine-Doll wa Kizutsukanai
[≽️ Maji de Watashi ni Koi Shinasai
[≽️ Mahou Shoujo Ikusei Keikaku
[≽️ Ranpo Kitan: Game of Laplace
[≽️ Radiant
[≽️ Re: Hamatora
[≽️ Shichisei no Subaru
[≽️ Saijaku Muhai no Bahamuth
[≽️ Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e `,
			},
			{ quoted: m },
		);
	} else if (text === "graphinica") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Graphinica ࿐໋*

[≽️ Another World
[≽️ Arslan Senki
[≽️ Chain Chronicle: Haecceitas no Hikari
[≽️ Fractale
[≽️ Hello World
[≽️ Hellsing Ultimate
[≽️ High School Fleet
[≽️ Juuni Taisen
[≽️ Nihon Animator Mihonichi
[≽️ Rakuen Tsuihou
[≽️ SSSS.Gridman
[≽️ Shuumatsu no Walküre`,
			},
			{ quoted: m },
		);
	} else if (text === "gainax") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Gainax ࿐໋*

[≽️ Abenobashi Mahou☆Shoutengai
[≽️ Dantalian no Shoka
[≽️ FLCL
[≽️ Fushigi no Umi no Nadia
[≽️ Hanamaru Youchien
[≽️ Houkago no Pleiades
[≽️ Kareshi Kanojo no Jijou
[≽️ Kore ga Watashi no Goshujinsama
[≽️ Kono Minikuku mo Utsukushii Sekai
[≽️ Mahoromatic: Automatic Maiden
[≽️ Medaka Box
[≽️ Neon Genesis Evangelion
[≽️ Oruchuban Ebichu
[≽️ Ouritsu Uchuugun: Honneamise no Tsubasa
[≽️ Panty & Stocking
[≽️ Shikabane Hime
[≽️ Stella Jogakuin Koutou-ka C³-bu
[≽️ Tengen Toppa Gurren Lagann`,
			},
			{ quoted: m },
		);
	} else if (text === "feel") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Feel  ࿐໋*

[≽️ Basho
[≽️ Bokutachi no Remake
[≽️ Bikini Warriors
[≽️ D.C.: Da Capo
[≽️ Dagashi Kashi
[≽️ Dakara Boku wa, H ga Dekinai.
[≽️ Fortune Arterial: Akai Yakusoku
[≽️ Futsuu no Joshikousei ga [Locodol] Yattemita.
[≽️ Futakoi Alternative
[≽️ Galaxy Angel 4
[≽️ Hinamatsuri
[≽️ Island
[≽️ Jinki:Extend
[≽️ Jinsei
[≽️ Kakuchou Shoujo-kei Trinary
[≽️ Ketsuekigata-kun!
[≽️ Kono Yo no Hate de Koi wo Utau Shoujo YU-NO
[≽️ Kiss x Sis
[≽️ Kono Bijutsubu ni wa Mondai ga Aru!
[≽️ Mayo Chiki!
[≽️ Minami-ke Tadaima
[≽️ Nagasarete Airantou
[≽️ Outbreak Company
[≽️ Oshiete! Galko-chan
[≽️ Ochikobore Fruit Tart
[≽️ Otome wa Boku ni Koishiteru
[≽️ Papa no Iukoto wo Kikinasai!
[≽️ Shikabane Hime
[≽️ Tsuki ga Kirei
[≽️ Ushinawareta Mirai wo Motomete
[≽️ Yahari Ore no Seishun Love Comedy wa Machigatteiru
[≽️ Yosuga no Sora`,
			},
			{ quoted: m },
		);
	} else if (text === "diomedea") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Diomedea ࿐໋*

[≽️ Akuma no Riddle
[≽️ Aho Girl
[≽️ Ahiru no Sora
[≽️ Astarotte no Omocha
[≽️ Binan Koukou Chikyuu Boueibu LOVE!
[≽️ Beatless
[≽️ Boku no Kanojo ga Majimesugiru Sho-bitch na Ken
[≽️ Champione
[≽️ Chio Chan no Tsuugakuro
[≽️ Domestic na Kanojo
[≽️ Gi(a)rlish Number
[≽️ Gingitsune
[≽️ Fuuka
[≽️ Handa Kun
[≽️ Juuou Mujin no Fafnir
[≽️ Kodomo no Jikan
[≽️ Kuusen Madoushi Kouhosei no Kyouka
[≽️ Kantai Colection: CanColle
[≽️ Mondaiji Tachi
[≽️ Nogizaka Haruka no Himitsu
[≽️ Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru
[≽️ Seijo no Maryoku wa Bannou desu
[≽️ Seiken Tsukai no World Break
[≽️ Shinryaku! Ika Musume`,
			},
			{ quoted: m },
		);
	} else if (text === "david production") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime David Production ࿐໋*

[≽️ 2.43: Seiin Koukou Danshi Volley-bu
[≽️ Ben-To
[≽️ Choujigen Game Neptune The Animation
[≽️ Captain Tsubasa (2018)
[≽️ Dogs: Bullets & Carnage
[≽️ Ensemble Stars!
[≽️ Enen no Shouboutai
[≽️ Hataraku Saibou
[≽️ Inu x Boku SS
[≽️ JoJo no Kimyou na Bouken
[≽️ Kishibe Rohan wa Ugokanai
[≽️ Level E
[≽️ Planetarian
[≽️ Ristorante Paradiso
[≽️ Sakurada Reset
[≽️ Strike Witches: Road to Berlin
[≽️ Tatakau Shisho: The Book of Bantorra
[≽️ Yakusoku no Eien - True End`,
			},
			{ quoted: m },
		);
	} else if (text === "comix wave films") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime CoMix Wave Films ࿐໋*

[≽️ Byousoku 5 Centimeter
[≽️ Cross Road
[≽️ Dareka no Manazashi
[≽️ Hoshi wo Ou Kodomo
[≽️ Hoshi no Koe
[≽️ Inferno Cop
[≽️ Kanojo to Kanojo no Neko: Everything Flows
[≽️ Kotonoha no Niwa
[≽️ Kimi no Na wa.
[≽️ Kumo no Mukou, Yakusoku no Basho
[≽️ Shikioriori
[≽️ Tenki no Ko
[≽️ Taisei Corp Comersial Message`,
			},
			{ quoted: m },
		);
	} else if (text === "cloverworks") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime CloverWorks࿐໋*

[≽️ Dakaretai Otoko 1-i ni Odosarete Imasu.
[≽️ Darling in the FranXX
[≽️ Fairy Tail
[≽️ Fugou Keiji: Balance:Unlimited
[≽️ Fate/Grand Order Series
[≽️ Gyakuten Saiban: Sono "Shinjitsu", Igi Ari!
[≽️ Horimiya
[≽️ Persona 5 the Animation
[≽️ Saenai Heroine no Sodatekata
[≽️ Shadows House
[≽️ Slow Start
[≽️ Sora no Aosa wo Shiru Hito yo
[≽️ Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
[≽️ Wonder Egg Priority
[≽️ Yakusoku no Neverland`,
			},
			{ quoted: m },
		);
	} else if (text === "brain's base") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Brain's Base  ࿐໋*

[≽️ Amnesia
[≽️ Aoharu x Kikanjuu
[≽️ Brothers Conflict
[≽️ Bokura wa Minna Kawai-sou
[≽️ Blood Lad
[≽️ Baccano!
[≽️ Cheer Danshi!!
[≽️ Cyborg 009: The Cyborg Soldier
[≽️ Dance with Devils
[≽️ D-Frag!
[≽️ Durarara!!
[≽️ Endride
[≽️ Fumetsu no Anata e
[≽️ Fukumenkei Noise
[≽️ Gakuen Basara
[≽️ Gakuen Babysitters
[≽️ Hotarubi no Mori e
[≽️ Isshuukan Friends.
[≽️ Ixion Saga DT
[≽️ Innocent Venus
[≽️ Kyokou Suiri
[≽️ Kuragehime
[≽️ Kamigami no Asobi
[≽️ Kure-nai
[≽️ Kyoukai no Rinne
[≽️ Kamisama Dolls
[≽️ Kamichu!
[≽️ Kishin Taisen Gigantic Formula
[≽️ Mawaru Penguindrum
[≽️ Natsume Yuujinchou
[≽️ Ookami to Koushinryou
[≽️ Servamp
[≽️ Tonari no Kaibutsu-kun
[≽️ Yahari Ore no Seishun Love Comedy wa Machigatteiru
[≽️ Watashi ga Motete Dousunda`,
			},
			{ quoted: m },
		);
	} else if (text === "ajia-do") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Ajia-do ࿐໋*

[≽️ Bokura no Nanokakan Sensou
[≽️ Eikoku Koi Monogatari Emma: Molders-hen
[≽️ Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen
[≽️ Isekai Maou to Shoukan Shoujo no Dorei Majutsu
[≽️ Kakushigoto
[≽️ Kemono Jihen
[≽️ Kujibiki♥Unbalance
[≽️ Koko wa Green Wood
[≽️ Magic Tree House
[≽️ Omae Umasou da na
[≽️ Shuumatsu no Izetta
[≽️ Vampire Hunter D
[≽️ Zettai Shounen`,
			},
			{ quoted: m },
		);
	} else if (text === "8bit") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime 8Bit ࿐໋*

[≽️ Absolute Duo
[≽️ Aquarion Evol
[≽️ Busou Shinki
[≽️ Comet Lucifer
[≽️ Grisaia Series
[≽️ Hoshiai no Sora
[≽️ IS: Infinite Stratos
[≽️ Knight's & Magic
[≽️ Mahouka Koukou no Rettousei
[≽️ Macross F 
[≽️ Miira no Kaikata
[≽️ Oshi ga Budoukan Ittekuretara Shinu
[≽️ Rewrite
[≽️ Shounen Maid
[≽️ Tensei shitara Slime Datta Ken
[≽️ Tokyo Ravens
[≽️ Walkure Romanze
[≽️ Yama no Susume`,
			},
			{ quoted: m },
		);
	} else if (text === "over power") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Over Power ࿐໋*

[≽️ One Punch Man
[≽️ Overlord
[≽️ Nantsu no Taizai
[≽️ Mahouka koukou no rettousei
[≽️ Mob psycho 100
[≽️ Blood lad
[≽️ No game no life
[≽️ Assasination classroom
[≽️ Isekai maou to shoukan Shoujo
[≽️ Medaka box
[≽️ Isekai wa smartphone Tomo ni
[≽️ Maou gakuin no futekigousha
[≽️ Tensei Shitara Slime Datta Ken
[≽️ Gunjou no Magmel
[≽️ K-Project
[≽️ Mekakucity Actors
[≽️ Ichiban Ushiro no Daimou
[≽️ Yozakura Quartet
[≽️ Noblesse
[≽️ Hataraku Maou-sama!`,
			},
			{ quoted: m },
		);
	} else if (text === "suspense") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Suspense ࿐*

[≽️ Another
[≽️ Aoi Bungaku Series
[≽️ Arve Rezzle: Kikaijikake no Yousei-tachi
[≽️ B: The Beginning
[≽️ Black Jack
[≽️ C: The Money of Soul and Possibility Control
[≽️ Death Note
[≽️ Death Parade
[≽️ Denpa-teki na Kanojo
[≽️ Fantastic Children
[≽️ Ga-Rei: Zero
[≽️ Gankutsuou
[≽️ Gyakkyou Burai Kaiji
[≽️ Higashi no Eden
[≽️ Higurashi no Naku Koro ni
[≽️ Ibara no Ou
[≽️ Imawa no Kuni no Alice
[≽️ Kagewani: Shou
[≽️ Kara no Kyoukai Series
[≽️ Magia Record: Mahou Shoujo Madoka☆Magica Gaiden
[≽️ Mahou Shoujo Ikusei Keikaku
[≽️ Mahou Shoujo Madoka★Magica
[≽️ Mirai Nikki
[≽️ Monster
[≽️ Mouryou no Hako
[≽️ Mousou Dairinin
[≽️ Munou na Nana
[≽️ Paprika
[≽️ Phantom: Requiem for the Phantom
[≽️ Psycho-Pass series
[≽️ Rainbow: Nisha Rokubou no Shichinin
[≽️ Re:Zero kara Hajimeru Isekai Seikatsu
[≽️ Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru
[≽️ Satsuriku no Tenshi
[≽️ Shigofumi
[≽️ Shiki
[≽️ Shion no Ou
[≽️ Steins;Gate
[≽️ Touhai Densetsu Akagi: Yami ni Maiorita Tensai
[≽️ Vivy: Fluorite Eye's Song
[≽️ Yakusoku no Neverland
[≽️ Yuukoku no Moriarty
[≽️ Zankyou no Terror`,
			},
			{ quoted: m },
		);
	} else if (text === "gourmet") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Gourmet ࿐໋*

[≽️ Amaama to Inazuma
[≽️ Bartender
[≽️ Ben-To
[≽️ Bonjour♪Koiaji Pâtisserie
[≽️ Chuuka Ichiban!
[≽️ Dae Jang Geum
[≽️ Dagashi Kashi
[≽️ Eikoku Ikka, Nihon wo Taberu
[≽️ Emiya-san Chi no Kyou no Gohan
[≽️ Hitorigurashi no Shougakusei
[≽️ Ippon Bouchou Mantarou
[≽️ Isekai Izakaya: Koto Aitheria no Izakaya Nobu
[≽️ Isekai Shokudou
[≽️ Kakuriyo no Yadomeshi
[≽️ Kakutou Ryouri Densetsu Bistro Recipe Kogepan
[≽️ Koufuku Graffiti
[≽️ Meng Qi Shi Shen
[≽️ Moyashimon
[≽️ Neko Ramen
[≽️ Nu Wushen de Canzhuo
[≽️ Osake wa Fuufu ni Natte kara
[≽️ Ramen Daisuki Koizumi-san
[≽️ Ristorante Paradiso
[≽️ Rokuhoudou Yotsuiro Biyori
[≽️ Seiyou Kottou Yougashiten: Antique
[≽️ Shin Chuuka Ichiban!
[≽️ Shokugeki no Souma Series
[≽️ Takunomi.
[≽️ Toradora!
[≽️ Toriko
[≽️ Wakako-zake
[≽️ Yume-iro Pâtissière`,
			},
			{ quoted: m },
		);
	} else if (text === "ntr") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Natorare ࿐໋*

[≽ Aldoah Zero
[≽ Ao Haru Ride
[≽ Akatsuki no Yona
[≽ Ano Natsu de Matteru
[≽ Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai
[≽ Boku Dake ga Inai Machi
[≽ Byousoku 5 Centimeter
[≽ Clannad
[≽ Domestic na Kanojo
[≽ Darling in The Franxx
[≽ Gamers
[≽ Gasslip
[≽ Golden Time
[≽ Hachimitsu to Clover
[≽ Island
[≽ Just Because!
[≽ Kuzu no Honkai
[≽ Kimi no Iru Machi
[≽ Kokoro ga Sakebitagatterunda
[≽ Kokoro Connect
[≽ Koi to Uso
[≽ Nana
[≽ Nijiro Days
[≽ Nisekoi
[≽ Nagi no Asukara
Orange
[≽ Oregairu
[≽ Ousama Game
[≽ Ouran Koukou Host Club
[≽ Ookami Shoujo to Kuro Ouji
[≽ Peach Girl
[≽ Re: Zero Kara Hajimeru Isekai Seikatsu
[≽ Shakugan no Shana
[≽ Sennen Joyuu
[≽ Sukitte Ii na Yo
[≽ Skip Beat!
[≽ School Days
[≽ School Rumble
[≽ Shigatsu wa Kimi no Uso
[≽ Sakurasou no Pet no Kanojo
[≽ Tada-kun wa Koi wo Shinai
[≽ Tsuki ga Kirei
[≽ True Tears
[≽ Toradora
[≽ White Album 2`,
			},
			{ quoted: m },
		);
	} else if (text === "bullying") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Bullying ࿐໋*

[≽️ 3D Kanojo Real Girl
[≽️ 3-gatsu no Lion
[≽️ Accel World
[≽️ Another
[≽️ Boku no Hero Academia
[≽️ Kageki Shoujo
[≽️ Karakuri Circus
[≽️ Kemono Jihen
[≽️ Koe no Katachi
[≽️ Kotoura-san
[≽️ Mahou Shoujo Site
[≽️ Mushoku Tensei
[≽️ Munou na Nana
[≽️ Masamune-kun no Revenge
[≽️ Ousama Rangking
[≽️ Shinigami Bocchan no Kuro Maid
[≽️ Taishou Otome Otogibanashi
[≽️ Tate no Yuusha
[≽️ Tokyo Revengers
[≽️ Vivid Strike`,
			},
			{ quoted: m },
		);
	} else if (text === "hikikomori") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Hikikomori ࿐໋*

[≽️ Btooom
[≽️ Danna ga Nani wo Itteiru ka Wakaranai Ken
[≽️ Kamisama no Memochou
[≽️ NHK ni Youkoso
[≽️ Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!`,
			},
			{ quoted: m },
		);
	} else if (text === "tsundere") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Tsundere ࿐໋*

[≽️ Croos Game
[≽️ Code Geass
[≽️ Dragonball Z
[≽️ Fate/Stay Night
[≽️ Full Metal Panic
[≽️ Fruits Basket
[≽️ Genshiken
[≽️ Hetalia Axis Power
[≽️ Kannagi
[≽️ Love Hina
[≽️ Neon Genesis Evangelion
[≽️ Nodame Cantabile
[≽️ Nisekoi
[≽️ Suzumiya Haruhi no Yuuutsu
[≽️ School Rumble
[≽️ Steins Gate
[≽️ Toradora`,
			},
			{ quoted: m },
		);
	} else if (text === "yandere") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Yandere ࿐໋*

[≽️ Kenpuu Denki Berserk
[≽️ Shuffle!
[≽️ Elfen Lied
[≽️ Higurashi no Naku Koro ni
[≽️ Higurashi no Naku Koro ni Kai
[≽️ School Days
[≽️ Code Geass: Hangyaku no Lelouch R2
[≽️ Hetalia Axis Powers
[≽️ Bakemonogatari
[≽️ Durarara!!
[≽️ Hetalia World Series
[≽️ Kamisama Dolls
[≽️ Mirai Nikki (TV)
[≽️ Mawaru Penguindrum
[≽️ Nisemonogatari
[≽️ Shingeki no Kyojin
[≽️ Monogatari Series: Second Season
[≽️ Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai
[≽️ Dance with Devils
[≽️ Owarimonogatari`,
			},
			{ quoted: m },
		);
	} else if (text === "dandere") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Dandere ࿐໋*

[≽️ Clannad
[≽️ Hai to Gensou no Grimgar
[≽️ Hetalia Axis Power
[≽️ K-on
[≽️ Kimi ni Todoke
[≽️ Kuroko no Basuket
[≽️ Kuragehime
[≽️ Love Live! School Idol Project
[≽️ Lucky Star
[≽️ Mahou Sensei Negima!
[≽️ Naruto
[≽️ Non Non Biyori
[≽️ Punch Line
[≽️ Suzumiya Haruhi no Yuuutsu`,
			},
			{ quoted: m },
		);
	} else if (text === "himedere") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Himedere ࿐໋*

[≽️ Boku wa Tomodachi ga Sukunai
[≽️ Hayate no Gotoku
[≽️ Kami nomi zo Shiru Sekai
[≽️ School Rumble
[≽️ Ouran Koukou Host Club
[≽️ Code Geass: Hangyaku no Lelouch
[≽️ Hayate no Gotoku!
[≽️ Pretty Rhythm: Aurora Dream
[≽️ Walkure Romanze
[≽️ Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru
[≽️ Absolute Duo
[≽️ Shokugeki no Souma`,
			},
			{ quoted: m },
		);
	} else if (text === "c2c") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime C2C ࿐໋*

[≽️ Harukana Receive
[≽️ Hitoribocchi no Marumaru Seikatsu
[≽️ M3: Sono Kuroki Hagane
[≽️ Majo no Tabitabi
[≽️ Oneechan ga Kita
[≽️ Puraore! Pride of Orange
[≽️ Shachou, Battle no Jikan desu!
[≽️ Shuumatsu Nani Shitemasu ka? Isogashii Desu ka? Sukutte Moratte Ii Desu ka?
[≽️ Tsuki ga Michibiku Isekai Douchuu`,
			},
			{ quoted: m },
		);
	} else if (text === "gohands") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime GoHands ࿐໋*

[≽ Asa made Jugyou Chu!
[≽ Coppelion
[≽ Hand Shakers
[≽ K
[≽ Mardock Scramble
[≽ Praeter no Kizu
[≽ Princess Lover!
[≽ Seitokai Yakuindomo
[≽ W'z`,
			},
			{ quoted: m },
		);
	} else if (text === "asahi production") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime ASAHI Production ࿐໋*

[≽ Dolls' Frontline
[≽ Heart no Kuni no Alice: Wonderful Wonder World
[≽ Himegoto
[≽ Medaka Box
[≽ Million Doll
[≽ Namu Amida Butsu!: Rendai Utena
[≽ Omae wa Mada Gunma wo Shiranai
[≽ Onsen Yousei Hakone-chan
[≽ Orenchi no Furo Jijou
[≽ Pan de Peace!
[≽ Peach Boy Riverside
[≽ Tenchi Souzou Design-bu
[≽ Wave!! Surfing Yappe!!`,
			},
			{ quoted: m },
		);
	} else if (text === "studio gonzo") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Studio Gonzo ࿐໋*

[≽️ 7 Seeds 
[≽️ 18 if                                                                                                                                                                                                
[≽️ Akiba's Trip The Animation 
[≽️Ao no Kanata no Four Rhythm
[≽️ Arad Senki: Slap Up Party
[≽️ Black Cat
[≽️ Blade & Soul
[≽️ Chrno Crusade
[≽️ Full Metal Panic!
[≽️ Gantz
[≽️ Hinomaruzumou
[≽️ Hellsing
[≽️ Inu to Hasami wa Tsukaiyou
[≽️ Kakuriyo no Yadomeshi
[≽️ Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?
[≽️ Kaze no Stigma
[≽️ NHK ni Youkoso
[≽️ Romeo x Juliet
[≽️ Rosaino to Vampire
[≽️ Saki
[≽️ Sore ga Seiyuu!
[≽️ Special A
[≽️ Strike Witches
[≽️ Witchblade`,
			},
			{ quoted: m },
		);
	} else if (text === "mangalobe") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Mangalobe ࿐໋*

[≽️ Deadman Wonderland
[≽️ Ergo Proxy 
[≽️ Gangsta.
[≽️ Kami nomi zo Shiru Sekai
[≽️ Karneval (TV)
[≽️ Magical☆Star Kanon 100%
[≽️ Mashiro-iro Symphony: The Color of Lovers
[≽️ Samurai Champloo
[≽️ Seiken no Blacksmith
[≽️ Zettai Karen Children: The Unlimited - Hyoubu Kyousuke`,
			},
			{ quoted: m },
		);
	} else if (text === "zero-g") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Zero-G ࿐໋*

[≽ Battery
[≽ DIVE!!
[≽ Dorei-ku the Animation
[≽ Doukyonin wa Hiza, Tokidoki, Atama no Ue.
[≽ Grand Blue
[≽ Nil Admirari no Tenbin
[≽ One Room
[≽ Piace: Watashi no Italian
[≽ Rikei ga Koi ni Ochita no de Shoumei Shite Mita.
[≽ Sankaku Mado no Sotogawa wa Yoru
[≽ Tenkuu Shinpan
[≽ Tsugumomo
[≽ Zashiki-Warashi no Tatami-chan`,
			},
			{ quoted: m },
		);
	} else if (text === "zexcs") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Zexcs ࿐໋*

[≽️ Asagao to Kase-san
[≽️ Bakuten
[≽️ Cuticle Tantei Inaba
[≽️ Diabolik Lovers
[≽️ Densetsu no Yuusha no Densetsu
[≽️ Frame Arms Girl
[≽️ Fune no Amu
[≽️ Kimi no Hikari: Asagao to Kase-san.
[≽️ Ketsuekigata-kun! 3️
[≽️ Mamoru-kun ni Megani no Shukufuku wo!
[≽️ Mangaka-san to Assistant-san to The Animation
[≽️ Nozo x Kimi
[≽️ Sukitte li na yo.
[≽️ Shadowverse (TV)`,
			},
			{ quoted: m },
		);
	} else if (text === "studio a-cat") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Studio A-CAT ࿐໋*

[≽️ Choukadou Girl ⅙
[≽️ Deatte 5-byou de Battle
[≽️ Frame Arms Girl
[≽️ Pastel.Life
[≽️ Soukou Musume Senki
[≽️Tamayomi`,
			},
			{ quoted: m },
		);
	} else if (text === "lay-duce") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Lay-duce ࿐໋*

[≽️ Araburu Kisetsu no Otome-domo yo
[≽️ Classroom☆Crisis
[≽️ Fate/Grand Order
[≽️ Fate/Grand Order: First Order
[≽️ Fate/Grand Order: Moonlight/Lostroom
[≽️ Go! Go! 575
[≽️ I★Chu: Halfway Through the Idol
[≽️ Itsudatte Bokura no Koi wa 10 cm Datta.
[≽️ Magi: Shinbad no Bouken (TV)
[≽️ Release the Spyce
[≽️ Yuru Yuri`,
			},
			{ quoted: m },
		);
	} else if (text === "reinkarnasi") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Reinkarnasi*

[≽️ Akatsuki no Yona
[≽️ Aquarion Evol
[≽️ Eiyuuou, Bu wo Kiwameru Tame Tenseisu. Soshite, Sekai Saikyou no Minarai Kishi♀
[≽️ Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen
[≽️ Isekai Nonbiri Nouka
[≽️ Isekai wa Smartphone to Tomo ni
[≽️ Kage no Jitsuryokusha ni Naritakute!
[≽️ Kami-tachi ni Hirowareta Otoko
[≽️ Knight's & Magic
[≽️ Kenja no Mago
[≽️ Kumo desu ga, Nani ka?
[≽️ Kono Subarashii Sekai ni Shukufuku wo!
[≽️ Leadale no Daichi nite
[≽️ Maou Gakuin no Futekigousha
[≽️ Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo?
[≽️ Mushoku Tensei
[≽️ Nanatsu no Taizai
[≽️ Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shite Shimatta…
[≽️ Paripi Koumei
[≽️ Saikyou Onmyouji no Isekai Tenseiki
[≽️ Seiken Tsukai no World Break
[≽️ Seirei Gensouki
[≽️ Shijou Saikyou no Daimaou, Murabito A ni Tensei suru
[≽️ Shikkakumon no Saikyou Kenja
[≽️ Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita
[≽️ Tensei Shitara Ken Deshita
[≽️ Tensei Oujo to Tensai Reijou no Mahou Kakumei
[≽️ Tensei Shitara Slime Datta Ken
[≽️ Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!
[≽️ Youjo Senki`,
			},
			{ quoted: m },
		);
	} else if (text === "time travel") {
		conn.sendMessage(
			m.chat,
			{
				text: `*Saran Anime Time Travel*

[≽️ Boku Dake ga Inai Machi
[≽️ Charlotte
[≽️ Dragon Ball Z
[≽️ Doraemon
[≽️ Inuyasha
[≽️ ISLAND
[≽️ Ima, Soko ni Iru Boku
[≽️ Kimi no Na Wa
[≽️ Kabukimonogatari 
[≽️ Mahou Shoujo Madoka☆Magica
[≽️ Mirai Nikki (TV)
[≽️ Nerawareta Gakuen
[≽️ Nobunaga Concerto
[≽️ Noein: Mou Hitori no Kimi e
[≽️ Oda Nobuna no Yabou
[≽️ Orange
[≽️ Re:Zero kara Hajimeru Isekai Seikatsu
[≽️ Sagrada Reset
[≽️ Suzumiya Haruhi no Yuuutsu
[≽️ Steins;Gate
[≽️ Toki wo Kakeru Shoujo
[≽️ Thermae Romae
[≽️ Tokyo Revengers
[≽️ Ushinawareta Mirai wo Motomete
[≽️ Yojouhan Shinwa Taikei`,
			},
			{ quoted: m },
		);
	} else if (text === "disabilitas") {
		conn.sendMessage(m.chat, { text: `*Saran Anime Disabilitas ࿐໋*

[≽️ Arknights : Reimei Zenshou
[≽️ Breakers
[≽️ Cider no You ni Kotoba ga Wakiagaru
[≽️ Deca Dence
[≽️ Dororo
[≽️ Fullmetal Alchemist
[≽️ Gangsta
[≽️ God Eater
[≽️ H2O: Footprints in the Sand
[≽️ Irozhoku Sekai Ashita Kara
[≽️ Ishuukan Friends
[≽️ Josee to Tora to Sakana-tachi
[≽️ Kokoro ga Sakebitagatterunda
[≽️ Koe no Katachi
[≽️ Kyokou Suiri
[≽️ Kami sama ni Natta Hi
[≽️ Komi san Wa Comyushou Desu
[≽️ Lycoris Recoil
[≽️ Mushishi
[≽️ Machikado Mazoku
[≽️ Ousama Ranking
[≽️ Taisho Otome Otogibanashi
[≽️ Takt op.Destiny
[≽️ Violet Evergarden
[≽️ Watashi ga Motenai no wa Dou Kangaete mo Omaera ga Warui!`,
			},
			{ quoted: m },
		);
	} else throw "Genres Not Found"
};
handler.menuanime = ["recommendanime"];
handler.tagsanime = ["search"];
handler.command = /^(recommendanime|animesaran)$/i;
 
export default handler;