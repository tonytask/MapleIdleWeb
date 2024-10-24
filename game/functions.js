clocker = 0;
sell = false;

monster_list = ['Snail', 'Blue Snail', 'Shroom', 'Red Snail', 'Slime', 'Orange Mushroom',
                'Ribbon Pig', 'Octopus', 'Bubbling', 'Green Mushroom', 'Horny Mushroom',
                'Cactus','Evil Eye', 'Bubble Fish', 'Brown Teddy',
                'Ligator','Star Pixie','Panda Teddy','Chronos'];

boss_list = ['Mano','Stumpy','Deo','Prime Minister', 'Faust','King Clang'];

special_list = ['Yellow Eggy Poop'];

monster_table = {
                'Yellow Eggy Poop': [1,25,5,200,500,0,0],
    
                'Snail': [1,8,12,3,6,0,0],
                 'Blue Snail': [2,15,18,4,12,0,0],
                 'Shroom': [2,20,24,5,12,0,0],
                 'Red Snail': [5,40,35,8,18,0,0],
                 'Slime': [6,50,42,10,20,0,1],
                 'Orange Mushroom': [8,80,52,15,24,0,1],
                 'Ribbon Pig': [10,120,66,20,30,0,2],
                 'Octopus': [12,200,76,24,36,0,4],
                 'Bubbling': [15,240,80,26,36,0,10],
                 'Green Mushroom': [15,250,82,26,42,0,5],
                 'Horny Mushroom': [22,300,90,35,54,0,7],
                 'Cactus':[25,550,95,47,58,0,9],
                 'Evil Eye': [27,720,100,50,72,0,10],
                 'Bubble Fish':[28,740,100,52,78,0,10],
                 'Brown Teddy':[30,950,100,60,85,0,12],
                 'Ligator': [32,1200,110,60,114,0,12],
                 'Star Pixie':[35,1300,130,72,84,0,21],
                 'Panda Teddy':[36,1400,120,77,114,0,16],
                 'Chronos':[37,1750,117,82,144,0,20],
                 
                 //bosses
                'Mano': [20,2000,125,200,400,0,8],
                'Stumpy': [35,3500,175,350,725,0,12],
                'Deo': [38, 7700, 225, 770, 1550,0,18],
                'Prime Minister':[38,12500,255,1200,2500,0,10],
                'Faust':[50,9800,300,1100,2200,0,20],
                'King Clang':[55,25000,355,2400,5000,0,20]
                 };

boss_timer = {'Mano': 0, 'Stumpy': 0, 'Deo': 0};


drop_table = {'Yellow Eggy Poop': {1500: 'Glove Scroll ATT 60%',2500: 'Maple Cape',4500: 'Weapon Scroll ATT 60%'},
    
               'Snail': {10:'Cape Scroll DEF 60%',25: 'Hat Scroll DEF 10%',125: 'Green Headband',},
               'Blue Snail': {10: 'Cape Scroll DEF 60%',30: 'Grey Thick Sweat Pants',50: 'Field Dagger',75: 'Blue One-Lined T-Shirt'},
               'Shroom': {25: 'Ice Jeans',40:'Hat Scroll DEF 100%', 125: 'Jean Capris'},
               'Red Snail': {10: 'Top Scroll DEX 10%',25: 'Leather Purse',80: 'Wooden Sword'},
               'Slime': {10: 'Bottom Scroll DEF 100%',20: 'Cape Scroll DEX 100%',35: 'Fork on a Stick', 60: 'Bronze Aroa Boots', 100: 'White Bandana'},
               'Orange Mushroom': {10: 'Hat Scroll DEF 60%',40: 'Bronze Koif', 80: 'White Gomushin', 125: 'Spear'},
               'Ribbon Pig': {25: 'Orange Sporty T-Shirt +2', 110: 'Orange Sporty T-Shirt', 200: 'Work Gloves'},
               'Octopus': {10: 'Weapon Scroll ATT 10%',40: 'Brown Corporal',70: 'Brown Corporal Pants', 125: 'Aqua Snowboard'},
               'Bubbling': {10:'Cape Scroll DEF 60%',25: 'Fish Spear +1', 75: 'Fish Spear'},
               'Green Mushroom': {10: 'Maple Sword',20: 'Weapon Scroll ATT 10%',30:'Cape Scroll DEX 10%',70: 'Warfare Pants'},
               'Horny Mushroom': {10: 'Weapon Scroll ATT 10%',20: 'Weapon Scroll ATT 60%',40: 'Iron Burgernet Helm',100:'Steel Fingerless Gloves'},
               'Cactus':{10:'Top Scroll DEX 60%',25:'Plunger',65: 'Orange Whitebottom Shoes',100: 'Sky Blue Starry Bandana'},
               'Evil Eye': {12: 'Maple Sword',25:'Weapon Scroll ATT 10%', 40: 'Great Red Helmet'},
               'Bubble Fish':{10: 'Glove Scroll DEX 60%', 25:'Dark Master Sergeant',40: 'Dark Master Sergeant Kilt', 70: 'Brown Jack Boots'},
               'Brown Teddy':{10: 'Shoe Scroll DEX 60%', 15: 'Maple Doom Singer',50: 'Bronze Missel'},
               'Ligator':{5: 'Maple Scorpio',25: 'Black Surfboard',45:'Mithril Trigger'},
               'Star Pixie': {15: 'Cape Scroll STR 100%',50: 'Steel Missel'},
               'Panda Teddy':{10:'Red Hwarang Shirt',20:'Maroon Jangoon Boots',30:'Blue Counter',40:'Red Martial Arts Pants'},
               'Chronos':{10: 'Weapon Scroll ATT 60%',20: 'Red Duke',30:'White Jangoon Pants',35:'Maroon Jangoon Armor',45:'Blood Battle Grieves'},

               'Mano': {500: 'Top Scroll DEF 60%',1000:'Top Scroll DEX 60%',1500: 'Hat Scroll DEF 60%',2000: 'Hat Scroll DEF 10%',2500: 'Cape Scroll DEX 60%',3000: 'Weapon Scroll ATT 10%',3500: 'Weapon Scroll ATT 60%',4000: 'Gold Burgernet Helm'},
               'Stumpy': {600: 'Dark Knuckle',1200: 'Cape Scroll DEF 60%',1800:'Glove Scroll DEX 60%',2400: 'Weapon Scroll ATT 60%',3000:'Top Scroll DEX 10%', 3600: "Shoe Scroll DEX 60%",4200: 'Weapon Scroll ATT 10%'},
               'Deo':{700: 'Dark Knuckle',1400:'Flaming Katana',2100:'Cape Scroll DEF 60%',2800:'Weapon Scroll ATT 60%',3500:'Top Scroll DEX 60%',4200:'Glove Scroll DEX 60%'},
               'Prime Minister':{800: 'Glove Scroll DEX 60%',1600:'Weapon Scroll ATT 60%', 2400: 'Weapon Scroll ATT 10%', 3200: 'Lions Fang',4000:'Serpents Tongue'},
               'Faust':{800: 'Glove Scroll DEX 60%',1600:'Weapon Scroll ATT 60%', 2400: 'Weapon Scroll ATT 10%', 3200: 'Lions Fang',4000:'Serpents Tongue'},
               'King Clang':{600: 'Glove Scroll ATT 60%',1200:'Shoe Scroll DEX 10%',1800: 'Cape Scroll STR 60%',2400:'Weapon Scroll ATT 10%',3000:'Red Oriental Helmet',3600: 'Dark Clench',4200: 'Blood Camel Boots',4800:'Dark Orientician'}
                };

exp_to_next_level = {1: 15, 2:34, 3:57, 4:92, 5:135, 6:372, 7:560, 8:840, 9:1242, 10:1144,
                    11:1573,12:2144,13:2800,14:3640,15:4700,16:5893,17:7360,18:9144, 
                    19:11120,20:13477,21:16268,22:19320,23:22880,24:27008,25:31477,
                    26:36600,27:42444,28:48720,29:55813,30:63800,31:86784,32:98208,
                    33:110932,34:124432,35:139372,36:155865,37:173280,38:192400,
                    39:213345,40:235372,41:259392,42:285532,43:312928,44:342624,
                    45:374760,46:408336,47:445544,38:483532,49:524160,50:567772};

drop_list = {'Empty': ['Hat', 0,0,0,0,0,0],
                    'Green Headband': ['Hat',0,0,5,7,0,0],
                    'White Bandana': ['Hat',0,0,8,7,0,0],
                    'Bronze Koif': ['Hat',0,0,10,7,0,0],
                    'White Starry Bandana': ['Hat',0,0,15,7,0,0],
                    'Sky Blue Starry Bandana':['Hat',0,0,18,7,0,0],
                    'Iron Burgernet Helm': ['Hat',0,0,25,7,0,0],
                    'Gold Burgernet Helm':['Hat',0,0,27,7,0,0],
                    'Great Red Helmet': ['Hat',0,0,38,7,0,0],
                    'Red Duke':['Hat',0,0,40,7,0,0],
                    'Red Oriental Helmet':['Hat',1,0,60,7,0,0],
      

                      'White Undershirt': ['Top',0,0,3,7,0,0], 
                      'Blue One-Lined T-Shirt': ['Top',0,0,11,7,0,0],
                      'White Undershirt +1': ['Top',0,0,5,0,0,0], 
                      'Orange Sporty T-Shirt': ['Top',0,0,11,7,0,0], 
                      'Orange Sporty T-Shirt +2': ['Top',4,0,11,0,0,0],
                      'Brown Corporal': ['Top',0,0,20,7,0,0],
                      'Dark Master Sergeant': ['Top',2,0,30,7,0,0],
                      'Red Hwarang Shirt':['Top',0,0,35,7,0,0],
                      'Maroon Jangoon Armor':['Top',3,0,45,7,0,0],
                      'Dark Orientician':['Top',4,0,65,7,0,1],
      

                      'Blue Jean Shorts': ['Bottom',0,0,2,7,0,0], 
                      'Jean Capris': ['Bottom',0,0,5,7,0,0],
                      'Grey Thick Sweat Pants': ['Bottom',0,0,10,7,0,0], 
                      'Ice Jeans': ['Bottom',0,0,13,7,0,0], 
                      'Brown Corporal Pants': ['Bottom',0,0,16,7,0,0], 
                      'Warfare Pants': ['Bottom',0,0,19,7,0,0],
                      'Dark Master Sergeant Kilt': ['Bottom',1,0,24,7,0,0],
                      'Red Martial Arts Pants':['Bottom',0,0,28,7,0,0],
                      'White Jangoon Pants':['Bottom',1,0,36,7,0,0],
      

                      'Work Gloves': ['Gloves',0,0,2,5,0,0],
                      'Work Gloves +1': ['Gloves',0,2,2,0,0,0], 
                      'Work Gloves +2': ['Gloves',0,4,2,0,0,0],
                      'Work Gloves +3': ['Gloves',0,6,2,0,0,0],
                      'Steel Fingerless Gloves': ['Gloves',0,0,5,5,0,0],
                      'Dark Knuckle': ['Gloves',3,0,17,5,0,0],
                      'Bronze Missel':['Gloves',0,0,11,5,0,0],
                      'Steel Missel': ['Gloves',1,0,12,5,0,0],
                      'Dark Clench':['Gloves',3,0,25,5,0,1],
      

                      'Leather Sandals': ['Shoes',0,0,2,5,0,0], 
                      'White Gomushin': ['Shoes',0,0,4,5,0,0], 
                      'Bronze Aroa Boots': ['Shoes',0,0,7,5,0,0], 
                      'Red Whitebottom Shoes': ['Shoes',0,0,13,5,0,0],
                      'Orange Whitebottom Shoes': ['Shoes',0,0,13,5,0,0],
                      'Brown Jack Boots':['Shoes',0,0,13,5,0,1],
                      'Mithril Trigger': ['Shoes',0,0,21,5,0,1],
                      'Blood Battle Grieves':['Shoes',0,0,18,5,0,1],
                      'Maroon Jangoon Boots':['Shoes',1,0,24,5,0,1],
                      'Blood Camel Boots':['Shoes',3,0,36,5,0,1],
      

                      'Maple Cape': ['Cape',0,0,5,5,0,0],
      

                      'Sword': ['Weapon',0,17,0,7,0,0], 
                      'Wooden Sword': ['Weapon',0,30,0,7,0,0], 
                      'Field Dagger': ['Weapon',0,30,0,7,0,0],
                      'Leather Purse': ['Weapon',0,34,0,7,0,0],
                      'Wooden Sword +3': ['Weapon',3,36,0,0,0,0],
                      'Aqua Snowboard': ['Weapon',0,30,0,7,0,0], 
                      'Spear': ['Weapon',0,32,0,7,0,0], 
                      'Fork on a Stick': ['Weapon',0,37,0,7,0,0],
                      'Iron Axe': ['Weapon',0,37,0,7,0,0], 
                      'Fish Spear': ['Weapon',0,40,0,7,0,2],
                      'Fish Spear +1': ['Weapon',1,42,0,0,0,2], 
                      'Plunger':['Weapon',0,44,0,7,0,0],
                      'Maple Sword': ['Weapon',0,48,0,7,0,15],
                      'Cutlus': ['Weapon',0,52,0,7,0,0],
                      'Blue Counter':['Weapon',0,57,0,7,0,0],
                      'Black Surfboard': ['Weapon',2,64,0,7,0,0],
                      'Flaming Katana':['Weapon',0,65,0,7,0,0],
                      'Maple Scorpio': ['Weapon',2,68,0,7,0,15],
                      'Maple Doom Singer':['Weapon',5,68,0,7,0,15],
                      'Lions Fang':['Weapon',0,70,0,7,0,0],
                      'Serpents Tongue':['Weapon',0,72,0,7,0,0],
      

                      'Glove Scroll ATT 100%': ['Scroll',0,1,0,100,'Gloves',0],
                      'Glove Scroll ATT 60%': ['Scroll',0,2,0,60,'Gloves',0],
                      'Glove Scroll ATT 10%': ['Scroll',0,3,0,10,'Gloves',0],
                      'Glove Scroll ATT 70%': ['Scroll',0,2,0,70,'Gloves',0],
                      'Glove Scroll ATT 30%': ['Scroll',0,3,0,30,'Gloves',0],
                      'Glove Scroll DEX 60%': ['Scroll',0,0,0,60,'Gloves',2],
                      'Hat Scroll DEF 100%': ['Scroll',0,0,1,100,'Hat',0],
                      'Hat Scroll DEF 60%': ['Scroll',0,0,2,60,'Hat',0],
                      'Hat Scroll DEF 10%': ['Scroll',0,0,5,10,'Hat',1],
                      'Cape Scroll DEF 60%':['Scroll',0,0,3,60,'Cape',0],
                      'Cape Scroll DEX 100%':['Scroll',0,0,0,100,'Cape',1],
                      'Cape Scroll DEX 60%':['Scroll',0,0,0,60,'Cape',2],
                      'Cape Scroll DEX 10%':['Scroll',0,0,0,10,'Cape',3],
                      'Cape Scroll STR 100%':['Scroll',1,0,0,100,'Cape',0],
                      'Cape Scroll STR 60%':['Scroll',2,0,0,60,'Cape',0],
                      'Top Scroll DEX 10%':['Scroll',0,0,0,10,'Top',5],
                      'Top Scroll DEX 60%':['Scroll',0,0,0,60,'Top',2],
                      'Top Scroll DEF 60%':['Scroll',0,0,2,60,'Top',0],
                      'Bottom Scroll DEF 100%': ['Scroll',0,0,1,100,'Bottom',0],
                      'Weapon Scroll ATT 10%': ['Scroll',3,5,1,10,'Weapon',0],
                      'Weapon Scroll ATT 60%': ['Scroll',1,2,0,60,'Weapon',0],
                      'Shoe Scroll DEX 60%': ['Scroll',0,0,0,60,'Shoes',1],
                      'Shoe Scroll DEX 10%': ['Scroll',0,0,0,10,'Shoes',3]

                    };

mobCounter = 0;
bossCounter = 0;
isBoss = false;
currentEnemy = 'Snail';
monsterLevel = monster_table[currentEnemy][0];
monsterCurrentHP = monster_table[currentEnemy][1];
monsterAttack = monster_table[currentEnemy][2];
monsterMeso = monster_table[currentEnemy][4];
currentEXP = 0;
playerStrength = 12;
playerTotalStrength = 12;
playerDexterity = 4;
playerTotalDexterity = 4;
statPoints = 0;
var playerLevel = 1;
playerCurrentHP = 50;
playerMaxHP = 50;
playerCurrentMP = 5;
playerMaxMP = 5;
playerSP = 0;
playerHPRecovery = 1;
playerDamageTaken = 1;
playerNextDamage = 0;
playerIsDead = false;
playerMeso = 50;
playerInventorySize = 20;
playerInventoryCount = 0;
inventoryR = [];
expCount = [0]*60;
expMin = 0;
isSpecialMob = false;
chanceToHit = 100;

rageLevel = 0;

playerEquips = {'Weapon':['Sword', 'Weapon', 0, 17, 0, 7,0,0],'Top':['White Undershirt', 'Top', 0, 0, 3, 7,0,0],'Bottom':['Blue Jean Shorts','Bottom',0,0,2,7,0,0],
                             'Gloves':['Empty', 'Gloves',0,0,0,0,0,0],'Hat':['Empty', 'Hat', 0,0,0,0,0,0],
                             'Shoes':['Leather Sandals', 'Shoes',0,0,2,5,0,0], 'Cape':['Empty','Cape',0,0,0,0,0,0]};

playerArmor = playerEquips['Hat'][4] + playerEquips['Top'][4] + playerEquips['Bottom'][4] + playerEquips['Shoes'][4] + playerEquips['Weapon'][4] + playerEquips['Gloves'][4] + playerEquips['Cape'][4];
playerWA = playerEquips['Hat'][3] + playerEquips['Top'][3] + playerEquips['Bottom'][3] + playerEquips['Shoes'][3] + playerEquips['Weapon'][3] + playerEquips['Gloves'][3] + playerEquips['Cape'][3] + rageLevel;
playerMaxDamage = ~~((4*playerTotalStrength+playerTotalDexterity)*playerWA/100);


powerStrikeCost = 9999;
powerStrikeMultiplier = 200
powerStrikeCooldown = 5;

running = false;

gameSpeed = 500;
boosterCost = 500;

mastery = 10;
masteryCost = 500;

mesoMultiplier = 100;
mesoCost = 500;

expMultiplier = 100;
expCost = 500;

criticalChance = 0;
criticalDamage = 150;

criticalChanceLevel = 0;
powerStrikeLevel = 0;
hasteLevel = 0;
holySymbolLevel = 0;





playerMinDamage = ~~(playerMaxDamage*mastery/100);

function skillRage()
{
    if(rageLevel<20 && playerSP >0)
    {
        rageLevel++;
        playerSP--;
    }
    document.getElementById("ATT").innerHTML = playerWA;
    document.getElementById("playerSP").innerHTML = playerSP;
};


function skillCritical()
{
    if(criticalChanceLevel <30 && playerSP >0)
    {
        criticalChanceLevel++;
        criticalChance = criticalChanceLevel *1;
        playerSP--;
    }
    document.getElementById("playerSP").innerHTML = playerSP;
    document.getElementById("criticalChance").innerHTML = criticalChance;
};

function skillStrike()
{
    if(powerStrikeLevel<20 && playerSP > 0)
    {
        powerStrikeLevel++;
        playerSP--;
        if(powerStrikeLevel ==1)
        {
            powerStrikeCost = 25;
        }
        powerStrikeMultiplier = 200 + (10)*powerStrikeLevel;
    }
    document.getElementById("playerSP").innerHTML = playerSP;
};

function skillHaste()
{
    if(hasteLevel<20 && playerSP > 0)
    {
        hasteLevel++;
        playerSP--;
        gameSpeed -= 2;
    }
    document.getElementById("playerSP").innerHTML = playerSP;
};

function skillSymbol()
{
    if(holySymbolLevel<30 && playerSP > 0)
    {
        holySymbolLevel++;
        playerSP--;
        expMultiplier += 2;
    }
    document.getElementById("expMultiplier").innerHTML = expMultiplier;
            document.getElementById("mesoMultiplier").innerHTML = mesoMultiplier;
    document.getElementById("playerSP").innerHTML = playerSP;
};

function expUpgrade()
{
    if(playerMeso>=expCost)
    {
        playerMeso-=expCost;
        expMultiplier +=10;
        expCost*=2;
        document.getElementById("expMultiplier").innerHTML = expMultiplier;
            document.getElementById("mesoMultiplier").innerHTML = mesoMultiplier;
    }
    else
    {
        console.log("Not enough mesos");
    }
};

function mesoUpgrade()
{
    if(playerMeso>=mesoCost)
    {
        playerMeso-=mesoCost;
        mesoMultiplier +=10;
        mesoCost*=2;
        document.getElementById("expMultiplier").innerHTML = expMultiplier;
            document.getElementById("mesoMultiplier").innerHTML = mesoMultiplier;
    }
    else
    {
        console.log("Not enough mesos");
    }
};

function boosterUpgrade()
{
    if(playerMeso>=boosterCost && gameSpeed>100)
    {
        playerMeso-=boosterCost;
        gameSpeed = Math.floor(gameSpeed*0.99);
        boosterCost*=2;
    }
    else
    {
        console.log("Not enough mesos");
    }
};

function masteryUpgrade()
{
    if(playerMeso>=masteryCost&& mastery<50)
    {
        playerMeso-=masteryCost;
        mastery+=1;
        masteryCost*=2;
    }
    else
    {
        console.log("Not enough mesos");
    }
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


function play()
{
    running = true;
};

function selectRightMob()
{
    if(isBoss == true)
    {
        if(boss_list.length>bossCounter+1)
        {
            bossCounter++;
        }
        currentEnemy = boss_list[bossCounter];
        if(boss_timer[bossCounter]>0)
        {
            showTimer();
        }
        monsterCurrentHP = monster_table[currentEnemy][1];
        monsterAttack = monster_table[currentEnemy][2];
        monsterLevel = monster_table[currentEnemy][0];
        document.getElementById("currentEnemy").innerHTML = currentEnemy;
        document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
        document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
        document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
        document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
        document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
            document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];

    }
    else
    {
        if(monster_list.length>mobCounter+1)
        {
            mobCounter++;
        }
        currentEnemy = monster_list[mobCounter];
        monsterCurrentHP = monster_table[currentEnemy][1];
        monsterAttack = monster_table[currentEnemy][2];
        monsterLevel = monster_table[currentEnemy][0];
        document.getElementById("currentEnemy").innerHTML = currentEnemy;
        document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
        document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
        document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
        document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
        document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
            document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    }
    document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";
};

function selectLeftMob()
{
    if(isBoss == true)
    {
        bossCounter--;
        if(bossCounter<0)
        {
            bossCounter = 0;
        }
        currentEnemy = boss_list[bossCounter];
        if(boss_timer[bossCounter]>0)
        {
            showTimer();
        }
        monsterCurrentHP = monster_table[currentEnemy][1];
        monsterAttack = monster_table[currentEnemy][2];
        monsterLevel = monster_table[currentEnemy][0];
        document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
        document.getElementById("currentEnemy").innerHTML = currentEnemy;
        document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
        document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
        document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
        document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
        document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    }   
    else
    {
        mobCounter--;
        if(mobCounter<0)
        {
            mobCounter = 0;
        }
        currentEnemy = monster_list[mobCounter];
        monsterCurrentHP = monster_table[currentEnemy][1];
        monsterAttack = monster_table[currentEnemy][2];
        monsterLevel = monster_table[currentEnemy][0];
        document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
        document.getElementById("currentEnemy").innerHTML = currentEnemy;
        document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
        document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
        document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
        document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
            document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    }
    document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";
};

function selectBossMob()
{
    if(isBoss == true)
    {
        isBoss=false;
        currentEnemy = monster_list[mobCounter];
    monsterCurrentHP = monster_table[currentEnemy][1];
    monsterAttack = monster_table[currentEnemy][2];
    monsterLevel = monster_table[currentEnemy][0];
    document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
    document.getElementById("currentEnemy").innerHTML = currentEnemy;
    document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
    document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
    document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
    document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
    document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";
    document.getElementById("buttonBoss").innerHTML = "Boss";

        return;
    }
    isBoss = true;
    currentEnemy = boss_list[bossCounter];
    monsterCurrentHP = monster_table[currentEnemy][1];
    monsterAttack = monster_table[currentEnemy][2];
    monsterLevel = monster_table[currentEnemy][0];
    document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
    document.getElementById("currentEnemy").innerHTML = currentEnemy;
    document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
    document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
    document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
    document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
    document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";
    document.getElementById("buttonBoss").innerHTML = "Mob";
};

function specialMob()
{
    isSpecialMob = true;
    currentEnemy = special_list[0];
    monsterCurrentHP = monster_table[currentEnemy][1];
    monsterAttack = monster_table[currentEnemy][2];
    monsterLevel = monster_table[currentEnemy][0];
    document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
    document.getElementById("currentEnemy").innerHTML = currentEnemy;
    document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
    document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
    document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
    document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
    document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";
    
};

function levelUp()
{
    currentEXP -= exp_to_next_level[playerLevel];
    playerLevel++;
    statPoints+=5;
    playerSP+=3;
    playerMaxMP += (5 + ~~(playerLevel/3));
    playerMaxHP += (14+ ~~(playerTotalStrength/9));
    playerHPRecovery = ~~(playerTotalStrength/10);
    document.getElementById("playerMaxHP").innerHTML = playerMaxHP;
    document.getElementById("playerMaxMP").innerHTML = playerMaxMP;
}

function updateStats()
{
    playerTotalStrength = playerEquips['Hat'][2] + playerEquips['Top'][2] + playerEquips['Bottom'][2] + playerEquips['Shoes'][2] + playerEquips['Weapon'][2] + playerEquips['Gloves'][2] + playerEquips['Cape'][2] + playerStrength;
        playerTotalDexterity = playerEquips['Hat'][7] + playerEquips['Top'][7] + playerEquips['Bottom'][7] + playerEquips['Shoes'][7] + playerEquips['Weapon'][7] + playerEquips['Gloves'][7] + playerEquips['Cape'][7] + playerDexterity;
        playerArmor = playerEquips['Hat'][4] + playerEquips['Top'][4] + playerEquips['Bottom'][4] + playerEquips['Shoes'][4] + playerEquips['Weapon'][4] + playerEquips['Gloves'][4] + playerEquips['Cape'][4];
        playerWA = playerEquips['Hat'][3] + playerEquips['Top'][3] + playerEquips['Bottom'][3] + playerEquips['Shoes'][3] + playerEquips['Weapon'][3] + playerEquips['Gloves'][3] + playerEquips['Cape'][3] + rageLevel;
        playerMaxDamage = ~~((4*playerTotalStrength+playerTotalDexterity)*playerWA/100);
}


function updateStatsHTML()
{
    document.getElementById("level").innerHTML = playerLevel;
    document.getElementById("STR").innerHTML = playerTotalStrength;
    document.getElementById("DEX").innerHTML = playerTotalDexterity;
    document.getElementById("ATT").innerHTML = playerWA;
    document.getElementById("minDamage").innerHTML = playerMinDamage;
    document.getElementById("maxDamage").innerHTML = playerMaxDamage;
    document.getElementById("armor").innerHTML = playerArmor;
    document.getElementById("statPoints").innerHTML = statPoints;
    document.getElementById("currentEXP").innerHTML = currentEXP;
    document.getElementById("expToLevel").innerHTML = exp_to_next_level[playerLevel];
    document.getElementById("mesos").innerHTML = numberWithCommas(playerMeso);
};

function monsterDie()
{
    if(isSpecialMob==true || special_list.includes(currentEnemy))
    {
        isSpecialMob = false;
        currentEXP += Math.floor(monster_table[currentEnemy][3]*expMultiplier/100);
        monster_table[currentEnemy][5]+=1;
        if(isBoss==true)
        {
            currentEnemy = boss_list[bossCounter];
        }
        else
        {
            currentEnemy = monster_list[mobCounter];
        }
        document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
    document.getElementById("currentEnemy").innerHTML = currentEnemy;
    document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
    document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
    document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
    document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
    document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
    document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";
    }
    else if(isBoss==false)
    {
        chance = Math.floor(Math.random()*100)+1;
        if(chance==1&&isSpecialMob == false)
        {
            specialMob();
        }
        else
        {
            monsterCurrentHP = monster_table[currentEnemy][1];
        currentEXP += Math.floor(monster_table[currentEnemy][3]*expMultiplier/100);
        monster_table[currentEnemy][5]+=1;
        expCount[expMin]=monster_table[currentEnemy][3];
        }
        document.getElementById("monsterCurrentHP").innerHTML = monsterCurrentHP;
    document.getElementById("monsterHPBar").value = ~~(monsterCurrentHP/monster_table[currentEnemy][1]*100);
        
        if(currentEXP>=exp_to_next_level[playerLevel])
        {
            levelUp();
        }
        
    }
    else
    {
        boss_timer[currentEnemy] += 600;
        chance = Math.floor(Math.random()*100)+1;
        if(chance==1&&isSpecialMob == false)
        {
            specialMob();
        }
        else
        {
            monsterCurrentHP = monster_table[currentEnemy][1];
        currentEXP += Math.floor(monster_table[currentEnemy][3]*expMultiplier/100);
        monster_table[currentEnemy][5]+=1;
        expCount[expMin]=monster_table[currentEnemy][3];
        }
        
        
        if(currentEXP>=exp_to_next_level[playerLevel])
        {
            levelUp();
        }
        document.getElementById("monsterCurrentHP").innerHTML = monsterCurrentHP;
    document.getElementById("monsterHPBar").value = ~~(monsterCurrentHP/monster_table[currentEnemy][1]*100);
    }

    document.getElementById("EXPBar").value = ~~(currentEXP/exp_to_next_level[playerLevel]*100);

};

function loot()
{
            playerMeso += Math.floor((Math.floor(Math.random()*(~~(monster_table[currentEnemy][4]*1/3))+1)+~~(monster_table[currentEnemy][4]*2/3))*mesoMultiplier/100);
            lootRoll = Math.floor(Math.random()*10000+1);
            for (key of Object.keys(drop_table[currentEnemy]))
            {
                if(key>lootRoll)
                {
                    if(playerInventoryCount < playerInventorySize)
                    {
                        console.log('You looted',drop_table[currentEnemy][key]);
                        //Item name, Item Type, Strength, WA, Armor, Upgrade Slots, Scroll Detect,Dexterity
                        itemObj = ['Empty','Hat',0,0,0,0,0,0];
                        itemObj[0] = drop_table[currentEnemy][key];
                        itemObj[1] = drop_list[drop_table[currentEnemy][key]][0];
                        itemObj[2] = drop_list[drop_table[currentEnemy][key]][1];
                        itemObj[3] = drop_list[drop_table[currentEnemy][key]][2];
                        itemObj[4] = drop_list[drop_table[currentEnemy][key]][3];
                        itemObj[5] = drop_list[drop_table[currentEnemy][key]][4];
                        itemObj[6] = drop_list[drop_table[currentEnemy][key]][5];
                        itemObj[7] = drop_list[drop_table[currentEnemy][key]][6];
                        inventoryR.push(itemObj);
                        
                        playerInventoryCount +=1;
                        updateInventory();
                        break;
                    }
                    else
                    {
                        console.log('Your inventory is full. Please remove an item');
                    }
                }
            }
};

function damageRoll()
{
    playerMaxDamage = ~~((4*playerTotalStrength+playerTotalDexterity)*playerWA/100);
    playerMinDamage = ~~(playerMaxDamage*mastery/100);
    playerNextDamage = Math.floor(Math.random()*playerMaxDamage)+1;
    if(playerNextDamage<playerMinDamage)
    {
        playerNextDamage = playerMinDamage;
    }
};

function hitMonster()
{
    if(isBoss==true && boss_timer[currentEnemy]>0)
    {
        return;
    }
    else
    {
        if(monster_table[currentEnemy][6]==0)
        {
            if(special_list.includes(currentEnemy))
            {
                monsterCurrentHP -=1;
                document.getElementById("monsterCurrentHP").innerHTML = monsterCurrentHP;
    document.getElementById("monsterHPBar").value = ~~(monsterCurrentHP/monster_table[currentEnemy][1]*100);
                return;
            }
            document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
            monsterCurrentHP -=playerNextDamage;
            document.getElementById("monsterCurrentHP").innerHTML = monsterCurrentHP;
    document.getElementById("monsterHPBar").value = ~~(monsterCurrentHP/monster_table[currentEnemy][1]*100);
            return;
        }
        lvlDiff = playerLevel - monster_table[currentEnemy][0];
        if(lvlDiff<0)
        {
            lvlDiff = 0;
        }
        chanceToHit = playerTotalDexterity*1.25/((1.84+0.07*lvlDiff)*monster_table[currentEnemy][6])-1;
        chanceToHit = ~~(chanceToHit*100);
        if(chanceToHit>100)
        {
            chanceToHit = 100;
        }
        document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
        if(chanceToHit<1)
        {
            playerNextDamage = 0;
        }
        else if(Math.floor(Math.random()*100)+1>chanceToHit)
        {
            playerNextDamage = 0;
        }
        if(special_list.includes(currentEnemy))
        {
            playerNextDamage = 1;
        }
        if(Math.floor(Math.random()*100)+1<criticalChance)
        {
            playerNextDamage = ~~(playerNextDamage*criticalDamage/100);
        }
        monsterCurrentHP -= playerNextDamage;
    }
    if(monsterCurrentHP<0)
    {
        monsterCurrentHP = 0;
    }
    document.getElementById("monsterCurrentHP").innerHTML = monsterCurrentHP;
    document.getElementById("monsterHPBar").value = ~~(monsterCurrentHP/monster_table[currentEnemy][1]*100);
};

function recoverHP()
{
    playerHPRecovery = ~~(playerTotalStrength/10);
    if(playerCurrentHP<playerMaxHP)
    {
        playerCurrentHP+=playerHPRecovery;
        if(playerCurrentHP>playerMaxHP)
        {
            playerCurrentHP=playerMaxHP;
        }
    }
    if(playerCurrentMP<playerMaxMP)
    {
        playerCurrentMP+=1;
    }
    document.getElementById("playerCurrentHP").innerHTML = playerCurrentHP;
    document.getElementById("playerHPBar").value = ~~(playerCurrentHP/playerMaxHP*100);
    document.getElementById("playerCurrentMP").innerHTML = playerCurrentMP;
    document.getElementById("playerMPBar").value = ~~(playerCurrentMP/playerMaxMP*100);
};

function takeDamage()
{
    if(isBoss == true && boss_timer[currentEnemy]>0)
    {
        return;
    }
    playerDamageTaken = Math.floor(Math.random()*monsterAttack/2+monsterAttack/2)-playerArmor-playerLevel+monsterLevel- ~~(playerTotalStrength/10);
    if(playerDamageTaken<=0)
    {
        playerDamageTaken = 1;
        
    }
    if(isSpecialMob == true)
    {
        playerDamageTaken = 1;
    }
    playerCurrentHP -= playerDamageTaken;
    document.getElementById("playerCurrentHP").innerHTML = playerCurrentHP;
}

function playerDie()
{
    playerCurrentHP = 0;
    playerIsDead = true;
    monsterCurrentHP = monster_table[currentEnemy][1];
}

function addSTR()
{
    if(statPoints>0)
    {
        playerStrength++;
        statPoints--;
        document.getElementById("STR").innerHTML = playerTotalStrength;
    }
    else
    {
        console.log("You don't have any stat points.");
    }
   
}

function addDEX()
{
    if(statPoints>0)
    {
        playerDexterity++;
        statPoints--;
        document.getElementById("DEX").innerHTML = playerTotalDexterity;
    }
    else
    {
        console.log("You don't have any stat points.");
    }
   
}


function saveGame()
{
    localStorage.setItem("mobCounter",mobCounter);
    localStorage.setItem("bossCounter",bossCounter);
    localStorage.setItem("isBoss",isBoss);
    localStorage.setItem("currentEnemy",currentEnemy);
    localStorage.setItem("monsterLevel",monsterLevel);
    localStorage.setItem("monsterCurrentHP",monsterCurrentHP);
    localStorage.setItem("monsterAttack",monsterAttack);
    localStorage.setItem("monsterMeso",monsterMeso);
    localStorage.setItem("currentEXP",currentEXP);
    localStorage.setItem("playerStrength", playerStrength);
localStorage.setItem("playerTotalStrength", playerTotalStrength);
localStorage.setItem("playerDexterity", playerDexterity);
localStorage.setItem("playerTotalDexterity", playerTotalDexterity);
localStorage.setItem("statPoints", statPoints);
localStorage.setItem("playerLevel", playerLevel);
localStorage.setItem("playerCurrentHP", playerCurrentHP);
localStorage.setItem("playerMaxHP", playerMaxHP);
localStorage.setItem("playerCurrentMP", playerCurrentMP);
localStorage.setItem("playerMaxMP", playerMaxMP);
localStorage.setItem("playerSP", playerSP);
localStorage.setItem("playerHPRecovery", playerHPRecovery);
localStorage.setItem("playerDamageTaken", playerDamageTaken);
localStorage.setItem("playerNextDamage", playerNextDamage);
localStorage.setItem("playerIsDead", playerIsDead);
localStorage.setItem("playerMeso", playerMeso);
localStorage.setItem("playerInventorySize", playerInventorySize);
localStorage.setItem("playerInventoryCount", playerInventoryCount);
localStorage.setItem("playerEquips",JSON.stringify(playerEquips));
localStorage.setItem("inventoryR",JSON.stringify(inventoryR));
localStorage.setItem("gameSpeed",gameSpeed);
localStorage.setItem("boosterCost",boosterCost);
localStorage.setItem("mastery",mastery);
localStorage.setItem("masteryCost",masteryCost);
localStorage.setItem("mesoMultiplier",mesoMultiplier);
localStorage.setItem("mesoCost",mesoCost);
localStorage.setItem("expMultiplier",expMultiplier);
localStorage.setItem("expCost",expCost);

localStorage.setItem("criticalChance",criticalChance);
localStorage.setItem("criticalDamage",criticalDamage);
localStorage.setItem("criticalChanceLevel",criticalChanceLevel);
localStorage.setItem("powerStrikeLevel",powerStrikeLevel);
localStorage.setItem("hasteLevel",hasteLevel);
localStorage.setItem("holySymbolLevel",holySymbolLevel);
localStorage.setItem("rageLevel",rageLevel);
localStorage.setItem("boss_timer",JSON.stringify(boss_timer));

};

function loadGame()
{
    if(localStorage.playerLevel)
    {

    }
    else
    {
        return;
    }
    playerLevel = parseInt(localStorage.getItem("playerLevel"), 10);
    mobCounter = parseInt(localStorage.getItem("mobCounter"), 10);
    bossCounter = parseInt(localStorage.getItem("bossCounter"), 10);
    isBoss = localStorage.getItem("isBoss") === 'true';
    currentEnemy = localStorage.getItem("currentEnemy");
    monsterLevel = parseInt(localStorage.getItem("monsterLevel"), 10);
    monsterCurrentHP = parseInt(localStorage.getItem("monsterCurrentHP"), 10);
    monsterAttack = parseInt(localStorage.getItem("monsterAttack"), 10);
    monsterMeso = parseInt(localStorage.getItem("monsterMeso"), 10);
    currentEXP = parseInt(localStorage.getItem("currentEXP"), 10);
    playerStrength = parseInt(localStorage.getItem("playerStrength"), 10);
    playerTotalStrength = parseInt(localStorage.getItem("playerTotalStrength"), 10);
    playerDexterity = parseInt(localStorage.getItem("playerDexterity"), 10);
    playerTotalDexterity = parseInt(localStorage.getItem("playerTotalDexterity"), 10);
    statPoints = parseInt(localStorage.getItem("statPoints"), 10);
    playerLevel = parseInt(localStorage.getItem("playerLevel"), 10);
    playerCurrentHP = parseInt(localStorage.getItem("playerCurrentHP"), 10);
    playerMaxHP = parseInt(localStorage.getItem("playerMaxHP"), 10);
    playerCurrentMP = parseInt(localStorage.getItem("playerCurrentMP"), 10);
    playerMaxMP = parseInt(localStorage.getItem("playerMaxMP"), 10);
    playerSP = parseInt(localStorage.getItem("playerSP"), 10);
    playerHPRecovery = parseInt(localStorage.getItem("playerHPRecovery"), 10);
    playerDamageTaken = parseInt(localStorage.getItem("playerDamageTaken"), 10);
    playerNextDamage = parseInt(localStorage.getItem("playerNextDamage"), 10);
    playerIsDead = localStorage.getItem("playerIsDead") === 'true';
    playerMeso = parseInt(localStorage.getItem("playerMeso"), 10);
    playerInventorySize = parseInt(localStorage.getItem("playerInventorySize"), 10);
    playerInventoryCount = parseInt(localStorage.getItem("playerInventoryCount"), 10);
    playerEquips = JSON.parse(localStorage.getItem("playerEquips"));
    inventoryR = JSON.parse(localStorage.getItem("inventoryR"));
    boss_timer = JSON.parse(localStorage.getItem("boss_timer"),10);

    gameSpeed = parseInt(localStorage.getItem("gameSpeed"), 10);
    boosterCost = parseInt(localStorage.getItem("boosterCost"),10);
    mastery = parseInt(localStorage.getItem("mastery"),10);
    masteryCost = parseInt(localStorage.getItem("masteryCost"),10);
    mesoMultiplier = parseInt(localStorage.getItem("mesoMultiplier"),10);
    mesoCost = parseInt(localStorage.getItem("mesoCost"),10);
    expMultiplier = parseInt(localStorage.getItem("expMultiplier"),10);
    expCost = parseInt(localStorage.getItem("expCost"),10);

    criticalChance = parseInt(localStorage.getItem("criticalChance"),10);
    criticalDamage = parseInt(localStorage.getItem("criticalDamage"),10);
    criticalChanceLevel = parseInt(localStorage.getItem("criticalChanceLevel"),10);
    powerStrikeLevel = parseInt(localStorage.getItem("powerStrikeLevel"),10);
    hasteLevel = parseInt(localStorage.getItem("hasteLevel"),10);
    holySymbolLevel = parseInt(localStorage.getItem("holySymbolLevel"),10);
    rageLevel = parseInt(localStorage.getItem("rageLevel"),10);

    document.getElementById("monsterCurrentHP").innerHTML = monsterCurrentHP;
            document.getElementById("monsterMaxHP").innerHTML = monster_table[currentEnemy][1];
            document.getElementById("playerCurrentHP").innerHTML = playerCurrentHP;
            document.getElementById("playerMaxHP").innerHTML = playerMaxHP;
            document.getElementById("playerCurrentMP").innerHTML = playerCurrentMP;
            document.getElementById("playerMaxMP").innerHTML = playerMaxMP;
            document.getElementById("currentEnemy").innerHTML = currentEnemy;
            document.getElementById("enemyAttack").innerHTML = monster_table[currentEnemy][2];
            document.getElementById("hitRate").innerHTML = (chanceToHit).toString()+"%";
            document.getElementById("enemyAvoid").innerHTML = monster_table[currentEnemy][6];
            document.getElementById("enemyLevel").innerHTML = monster_table[currentEnemy][0];
            document.getElementById("enemyEXP").innerHTML = monster_table[currentEnemy][3];
            document.getElementById("monsterPic").src = "./images/"+currentEnemy+".png";

            document.getElementById("hat").src = "./images/"+playerEquips['Hat'][0]+".png";
            document.getElementById("top").src = "./images/"+playerEquips['Top'][0]+".png";
            document.getElementById("bottom").src = "./images/"+playerEquips['Bottom'][0]+".png";
            document.getElementById("gloves").src = "./images/"+playerEquips['Gloves'][0]+".png";
            document.getElementById("shoes").src = "./images/"+playerEquips['Shoes'][0]+".png";
            document.getElementById("cape").src = "./images/"+playerEquips['Cape'][0]+".png";
            document.getElementById("weapon").src = "./images/"+playerEquips['Weapon'][0]+".png";
            document.getElementById("criticalChance").innerHTML = criticalChance;
            document.getElementById("expMultiplier").innerHTML = expMultiplier;
            document.getElementById("mesoMultiplier").innerHTML = mesoMultiplier;


};

function updateInventory()
{
    i = 1;
    for (key of Object.keys(inventoryR))
    {
        if(inventoryR[i-1][0][inventoryR[i-1][0].length-1]=='%')
        {
            document.getElementById("inv"+i).src = "./images/"+inventoryR[i-1][0]+"25.png";
            updateItemAttributes("inv"+i,inventoryR[i-1][2],inventoryR[i-1][7],inventoryR[i-1][3],inventoryR[i-1][4],inventoryR[i-1][5]);
        }
        else
        {
            document.getElementById("inv"+i).src = "./images/"+inventoryR[i-1][0]+".png";
            updateItemAttributes("inv"+i,inventoryR[i-1][2],inventoryR[i-1][7],inventoryR[i-1][3],inventoryR[i-1][4],inventoryR[i-1][5]);
        }
        
        i++;
    }
    for(i;i<=playerInventorySize;i++)
    {
        document.getElementById("inv"+i).src = "./images/empty.png";
        updateItemAttributes("inv"+i,0,0,0,0,0);
    }
};

function updateItemAttributes(slotId, str, dex, att,armor,upgrades) {
    const itemSlot = document.getElementById(slotId);
    itemSlot.setAttribute('data-str', str);
    itemSlot.setAttribute('data-dex', dex);
    itemSlot.setAttribute('data-att', att);
    itemSlot.setAttribute('data-armor',armor);
    itemSlot.setAttribute('data-upgrades',upgrades);
};



function equipItem(itemID)
{
    slot = Number(itemID.substring(3))-1;
    itemSlot = document.getElementById(itemID);
    if(itemSlot)
    {
        if(itemSlot.src.includes('empty.png'))
        {
            console.log("That is an empty inventory space.")
            return;
        }
        else if(sell==true)
        {
            console.log("You deleted"+inventoryR[slot][0]);
            inventoryR.splice(slot,1);
            playerInventoryCount-=1;
            updateInventory();
        }
        else if(inventoryR[slot][1]=='Hat')
        {
            document.getElementById("hat").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Hat'][0] == 'Empty')
            {
                playerEquips['Hat'] = inventoryR[slot];
                updateItemAttributes('hat',playerEquips['Hat'][2],playerEquips['Hat'][7],playerEquips['Hat'][3],playerEquips['Hat'][4],playerEquips['Hat'][5]);
                inventoryR.splice(slot,1);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Hat'];
                playerEquips['Hat'] = inventoryR[slot];
                inventoryR[slot] = temp;
                console.log(playerEquips['Hat']);
                updateItemAttributes('hat',playerEquips['Hat'][2],playerEquips['Hat'][7],playerEquips['Hat'][3],playerEquips['Hat'][4],playerEquips['Hat'][5]);
                updateInventory();
                return;
            }
            
        }
        else if(inventoryR[slot][1]=='Top')
        {
            document.getElementById("top").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Top'][0] == 'Empty')
            {
                playerEquips['Top'] = inventoryR[slot];
                updateItemAttributes('top',playerEquips['Top'][2],playerEquips['Top'][7],playerEquips['Top'][3],playerEquips['Top'][4],playerEquips['Top'][5]);
                inventoryR.splice(slot,1);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Top'];
                playerEquips['Top'] = inventoryR[slot];
                inventoryR[slot] = temp;
                updateItemAttributes('top',playerEquips['Top'][2],playerEquips['Top'][7],playerEquips['Top'][3],playerEquips['Top'][4],playerEquips['Top'][5]);
                updateInventory();
                return;
            }
        }
        else if(inventoryR[slot][1]=='Bottom')
        {
            document.getElementById("bottom").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Bottom'][0] == 'Empty')
            {
                playerEquips['Bottom'] = inventoryR[slot];
                updateItemAttributes('bottom',playerEquips['Bottom'][2],playerEquips['Bottom'][7],playerEquips['Bottom'][3],playerEquips['Bottom'][4],playerEquips['Bottom'][5]);
                inventoryR.splice(slot,1);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Bottom'];
                playerEquips['Bottom'] = inventoryR[slot];
                inventoryR[slot] = temp;
                updateItemAttributes('bottom',playerEquips['Bottom'][2],playerEquips['Bottom'][7],playerEquips['Bottom'][3],playerEquips['Bottom'][4],playerEquips['Bottom'][5]);
                updateInventory();
                return;
            }
        }
        else if(inventoryR[slot][1]=='Gloves')
        {
            document.getElementById("gloves").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Gloves'][0] == 'Empty')
            {
                playerEquips['Gloves'] = inventoryR[slot];
                updateItemAttributes('gloves',playerEquips['Gloves'][2],playerEquips['Gloves'][7],playerEquips['Gloves'][3],playerEquips['Gloves'][4],playerEquips['Gloves'][5]);
                inventoryR.splice(slot,1);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Gloves'];
                playerEquips['Gloves'] = inventoryR[slot];
                inventoryR[slot] = temp;
                updateItemAttributes('gloves',playerEquips['Gloves'][2],playerEquips['Gloves'][7],playerEquips['Gloves'][3],playerEquips['Gloves'][4],playerEquips['Gloves'][5]);
                updateInventory();
                return;
            }
        }
        else if(inventoryR[slot][1]=='Shoes')
        {
            document.getElementById("shoes").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Shoes'][0] == 'Empty')
            {
                playerEquips['Shoes'] = inventoryR[slot];
                updateItemAttributes('shoes',playerEquips['Shoes'][2],playerEquips['Shoes'][7],playerEquips['Shoes'][3],playerEquips['Shoes'][4],playerEquips['Shoes'][5]);
                inventoryR.splice(slot,1);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Shoes'];
                playerEquips['Shoes'] = inventoryR[slot];
                inventoryR[slot] = temp;
                updateItemAttributes('shoes',playerEquips['Shoes'][2],playerEquips['Shoes'][7],playerEquips['Shoes'][3],playerEquips['Shoes'][4],playerEquips['Shoes'][5]);
                updateInventory();
                return;
            }
        }
        else if(inventoryR[slot][1]=='Cape')
        {
            document.getElementById("cape").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Cape'][0] == 'Empty')
            {
                playerEquips['Cape'] = inventoryR[slot];
                updateItemAttributes('cape',playerEquips['Cape'][2],playerEquips['Cape'][7],playerEquips['Cape'][3],playerEquips['Cape'][4],playerEquips['Cape'][5]);
                inventoryR.splice(slot,1);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Cape'];
                playerEquips['Cape'] = inventoryR[slot];
                inventoryR[slot] = temp;
                updateItemAttributes('cape',playerEquips['Cape'][2],playerEquips['Cape'][7],playerEquips['Cape'][3],playerEquips['Cape'][4],playerEquips['Cape'][5]);
                updateInventory();
                return;
            }
        }
        else if(inventoryR[slot][1]=='Weapon')
        {
            document.getElementById("weapon").src = "./images/"+inventoryR[slot][0]+".png";
            if(playerEquips['Weapon'][0] == 'Empty')
            {
                playerEquips['Weapon'] = inventoryR[slot];
                inventoryR.splice(slot,1);
                updateItemAttributes('weapon',playerEquips['Weapon'][2],playerEquips['Weapon'][7],playerEquips['Weapon'][3],playerEquips['Weapon'][4],playerEquips['Weapon'][5]);
                playerInventoryCount-=1;
                updateInventory();
                return;
            }
            else
            {
                temp = playerEquips['Weapon'];
                playerEquips['Weapon'] = inventoryR[slot];
                inventoryR[slot] = temp;
                updateItemAttributes('weapon',playerEquips['Weapon'][2],playerEquips['Weapon'][7],playerEquips['Weapon'][3],playerEquips['Weapon'][4],playerEquips['Weapon'][5]);
                updateInventory();
                return;
            }
        }
        else if(inventoryR[slot][1]=='Scroll')
        {
            if(playerEquips[inventoryR[slot][6]][0]=='Empty')
            {
                console.log("No "+playerEquips[inventoryR[slot][6]][1]+" Equipped");

            }
            else if(playerEquips[inventoryR[slot][6]][5]==0)
            {
                console.log("No Upgrade Slots Available");
            }
            else
            {
                b = Math.random()*100+1;
                if(b<=inventoryR[slot][5])
                {
                    console.log("Scroll succeeded");
                    playerEquips[inventoryR[slot][6]][2] += inventoryR[slot][2];
                    playerEquips[inventoryR[slot][6]][3] += inventoryR[slot][3];
                    playerEquips[inventoryR[slot][6]][4] += inventoryR[slot][4];
                    playerEquips[inventoryR[slot][6]][5] -= 1;
                    playerEquips[inventoryR[slot][6]][7] += inventoryR[slot][7];

                    
                }
                else{
                    if(inventoryR[slot][5]==70 || inventoryR[slot][5]==30)
                    {
                        boom = Math.random*2+1;
                        if(boom==1)
                        {
                            playerEquips[inventoryR[slot][6]] = ['Empty', inventoryR[slot][6],0,0,0,0,0];
                            console.log("The scrolls' power destroyed the item.");

                        }
                        else
                        {
                            console.log("The scroll failed.");
                            playerEquips[inventoryR[slot][6]][5] -=1;

                        }
                    }
                    else
                    {
                        console.log("The scroll failed.");
                            playerEquips[inventoryR[slot][6]][5] -=1;
                    }
                }
                inventoryR.splice(slot,1);
            playerInventoryCount-=1;
                
            }
        }
        
    }
    updateInventory();
    updateEquipAttributes();
};

function enableSell()
{
    booton = document.getElementById("buttonSell");
    if(sell == false)
    {
        sell = true;
        booton.style = "background-color:red";
    }
    else
    {
        sell = false;
        booton.style = "background-color:clear";
    }
};

function showPanel(panelClass)
{
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel =>panel.classList.add('hidden'));
    document.querySelector(panelClass).classList.remove('hidden');
};

function showEquipment() {
    showPanel('.equipment-panel');
};

function showTimer()
{
    document.querySelector('timer').classList.remove('hidden');
};

function hideTimer()
{
    document.querySelector('timer').classList.add('hidden');
};

function showShop() {
    showPanel('.shop-panel');
};

function showSkills()
{
    showPanel('.skill-panel');
    document.getElementById("playerSP").innerHTML = playerSP;
};

function showAchievements()
{
    showPanel('.achievement-panel');
};

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".equipment-grid img, .inventory-grid img, .shop-grid img, .skill-grid img, .achievement-grid img");

    items.forEach(item => {
        item.addEventListener("mouseover", function() {
            const imgSrc = item.getAttribute("src");
            if(item.getAttribute("id")=='a1')
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Snail Slayer <br> Snail: ${monster_table['Snail'][5]}/100`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/booster.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Cost: ${boosterCost}<br>Game Speed: <br>${gameSpeed}->${Math.floor(gameSpeed*0.99)}`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/mastery.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Cost: ${masteryCost}<br>Mastery: <br>${mastery}%->${mastery+1}%`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/mesoup.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Cost: ${mesoCost}<br>Meso Multiplier: <br>${mesoMultiplier}%->${mesoMultiplier+10}%`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/expup.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Cost: ${expCost}<br>EXP Multiplier: <br>${expMultiplier}%->${expMultiplier+10}%`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/criticalchance.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Level: ${criticalChanceLevel}/30<br>Critical Chance: <br>${(criticalChanceLevel)}%->${criticalChanceLevel+1}%`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/powerstrike.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Level: ${powerStrikeLevel}/20<br>Damage: <br>${powerStrikeMultiplier}%->${powerStrikeMultiplier+10}%`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/haste.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Level: ${hasteLevel}/20<br>Game Speed: <br>${-hasteLevel*2}->${-((hasteLevel+1)*2)}`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/holysymbol.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Level: ${holySymbolLevel}/30<br>EXP: <br>${holySymbolLevel*2}%->${(holySymbolLevel+1)*2}%`;
                item.parentElement.appendChild(tooltipText);
            }
            else if(imgSrc == "./images/rage.png")
            {
                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                tooltipText.innerHTML = `Level: ${rageLevel}/20<br>ATT: <br>+${rageLevel}->+${rageLevel+1}`;
                item.parentElement.appendChild(tooltipText);
            }
            else if (imgSrc !== "./images/empty.png") {
                const str = item.getAttribute("data-str");
                const dex = item.getAttribute("data-dex");
                const att = item.getAttribute("data-att");
                const armor = item.getAttribute("data-armor");
                const upgrades = item.getAttribute("data-upgrades");
            

                const tooltipText = document.createElement("span");
                tooltipText.className = "tooltiptext";
                if(upgrades>9)
                {
                    tempText = imgSrc.substring(9);

                    tooltipText.innerHTML = `${tempText.substring(0,tempText.length-6)}<br>STR: ${str}<br>DEX: ${dex}<br>ATT: ${att}<br>Armor: ${armor}`;
                }
                else
                {
                    tooltipText.innerHTML = `STR: ${str}<br>DEX: ${dex}<br>ATT: ${att}<br>Armor: ${armor}<br>Upgrade Slots: ${upgrades}`;
                }
                

                item.parentElement.appendChild(tooltipText);
            }
        });

        item.addEventListener("mouseout", function() {
            const tooltip = item.parentElement.querySelector(".tooltiptext");
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

function updateEquipAttributes()
{
    updateItemAttributes('hat',playerEquips['Hat'][2],playerEquips['Hat'][7],playerEquips['Hat'][3],playerEquips['Hat'][4],playerEquips['Hat'][5]);
    updateItemAttributes('top',playerEquips['Top'][2],playerEquips['Top'][7],playerEquips['Top'][3],playerEquips['Top'][4],playerEquips['Top'][5]);
    updateItemAttributes('bottom',playerEquips['Bottom'][2],playerEquips['Bottom'][7],playerEquips['Bottom'][3],playerEquips['Bottom'][4],playerEquips['Bottom'][5]);
    updateItemAttributes('gloves',playerEquips['Gloves'][2],playerEquips['Gloves'][7],playerEquips['Gloves'][3],playerEquips['Gloves'][4],playerEquips['Gloves'][5]);
    updateItemAttributes('shoes',playerEquips['Shoes'][2],playerEquips['Shoes'][7],playerEquips['Shoes'][3],playerEquips['Shoes'][4],playerEquips['Shoes'][5]);
    updateItemAttributes('cape',playerEquips['Cape'][2],playerEquips['Cape'][7],playerEquips['Cape'][3],playerEquips['Cape'][4],playerEquips['Cape'][5]);
    updateItemAttributes('weapon',playerEquips['Weapon'][2],playerEquips['Weapon'][7],playerEquips['Weapon'][3],playerEquips['Weapon'][4],playerEquips['Weapon'][5]);
};

///////
window.setInterval(function(){
    if(running = true)
    {
        clocker++;
        if(clocker==1)
        {
            loadGame();
            updateInventory();
            updateEquipAttributes();
        }
        for (item of boss_list)
        {
            if(boss_timer[item]>0)
            {
                boss_timer[item] -=1;
            }
        }
        expCount[expMin] = 0;
        recoverHP();
        updateStats();
        updateStatsHTML();
        if(playerIsDead == true)
        {
            if(playerCurrentHP>=playerMaxHP)
            {
                playerIsDead = false;
            }
        }
        else
        {
            damageRoll();
            hitMonster();
            if(monsterCurrentHP<=0)
            {
                monsterDie();
                loot();
            }
            else
            {
                takeDamage();
                if(playerCurrentHP<=0)
                {
                    playerDie();
                }
            }
        }
        clocker++;
        if(clocker%30==0)
        {
            saveGame();
            console.log("Game saved.");
        }
    }
},gameSpeed);
