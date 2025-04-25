import dotenv from 'dotenv';

dotenv.config();

const pokemonsList = [
    {
        "id": 1,
        "name": {
            "english": "Bulbasaur",
            "japanese": "フシギダネ",
            "chinese": "妙蛙种子",
            "french": "Bulbizarre"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 49,
            "Defense": 49,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/1.png`     
    },
    {
        "id": 2,
        "name": {
            "english": "Ivysaur",
            "japanese": "フシギソウ",
            "chinese": "妙蛙草",
            "french": "Herbizarre"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 62,
            "Defense": 63,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/2.png` 
    },
    {
        "id": 3,
        "name": {
            "english": "Venusaur",
            "japanese": "フシギバナ",
            "chinese": "妙蛙花",
            "french": "Florizarre"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 82,
            "Defense": 83,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/3.png`
    },
    {
        "id": 4,
        "name": {
            "english": "Charmander",
            "japanese": "ヒトカゲ",
            "chinese": "小火龙",
            "french": "Salamèche"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 39,
            "Attack": 52,
            "Defense": 43,
            "Sp. Attack": 60,
            "Sp. Defense": 50,
            "Speed": 65
        },
        "image": `${process.env.API_URL}/assets/pokemons/4.png`
    },
    {
        "id": 5,
        "name": {
            "english": "Charmeleon",
            "japanese": "リザード",
            "chinese": "火恐龙",
            "french": "Reptincel"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 58,
            "Attack": 64,
            "Defense": 58,
            "Sp. Attack": 80,
            "Sp. Defense": 65,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/5.png`
    },
    {
        "id": 6,
        "name": {
            "english": "Charizard",
            "japanese": "リザードン",
            "chinese": "喷火龙",
            "french": "Dracaufeu"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 84,
            "Defense": 78,
            "Sp. Attack": 109,
            "Sp. Defense": 85,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/6.png`
    },
    {
        "id": 7,
        "name": {
            "english": "Squirtle",
            "japanese": "ゼニガメ",
            "chinese": "杰尼龟",
            "french": "Carapuce"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 44,
            "Attack": 48,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 64,
            "Speed": 43
        },
        "image": `${process.env.API_URL}/assets/pokemons/7.png`
    },
    {
        "id": 8,
        "name": {
            "english": "Wartortle",
            "japanese": "カメール",
            "chinese": "卡咪龟",
            "french": "Carabaffe"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 59,
            "Attack": 63,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            "Speed": 58
        },
        "image": `${process.env.API_URL}/assets/pokemons/8.png`
    },
    {
        "id": 9,
        "name": {
            "english": "Blastoise",
            "japanese": "カメックス",
            "chinese": "水箭龟",
            "french": "Tortank"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 79,
            "Attack": 83,
            "Defense": 100,
            "Sp. Attack": 85,
            "Sp. Defense": 105,
            "Speed": 78
        },
        "image": `${process.env.API_URL}/assets/pokemons/9.png`
    },
    {
        "id": 10,
        "name": {
            "english": "Caterpie",
            "japanese": "キャタピー",
            "chinese": "绿毛虫",
            "french": "Chenipan"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 35,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/10.png`
    },
    {
        "id": 11,
        "name": {
            "english": "Metapod",
            "japanese": "トランセル",
            "chinese": "铁甲蛹",
            "french": "Chrysacier"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 20,
            "Defense": 55,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 30
        },
        "image": `${process.env.API_URL}/assets/pokemons/11.png`
    },
    {
        "id": 12,
        "name": {
            "english": "Butterfree",
            "japanese": "バタフリー",
            "chinese": "巴大蝶",
            "french": "Papilusion"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 50,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/12.png`
    },
    {
        "id": 13,
        "name": {
            "english": "Weedle",
            "japanese": "ビードル",
            "chinese": "独角虫",
            "french": "Aspicot"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/13.png`
    },
    {
        "id": 14,
        "name": {
            "english": "Kakuna",
            "japanese": "コクーン",
            "chinese": "铁壳蛹",
            "french": "Coconfort"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 25,
            "Defense": 50,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/14.png`
    },
    {
        "id": 15,
        "name": {
            "english": "Beedrill",
            "japanese": "スピアー",
            "chinese": "大针蜂",
            "french": "Dardargnan"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 40,
            "Sp. Attack": 45,
            "Sp. Defense": 80,
            "Speed": 75
        },
        "image": `${process.env.API_URL}/assets/pokemons/15.png`
    },
    {
        "id": 16,
        "name": {
            "english": "Pidgey",
            "japanese": "ポッポ",
            "chinese": "波波",
            "french": "Roucool"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 56
        },
        "image": `${process.env.API_URL}/assets/pokemons/16.png`
    },
    {
        "id": 17,
        "name": {
            "english": "Pidgeotto",
            "japanese": "ピジョン",
            "chinese": "比比鸟",
            "french": "Roucoups"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 63,
            "Attack": 60,
            "Defense": 55,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 71
        },
        "image": `${process.env.API_URL}/assets/pokemons/17.png`
    },
    {
        "id": 18,
        "name": {
            "english": "Pidgeot",
            "japanese": "ピジョット",
            "chinese": "大比鸟",
            "french": "Roucarnage"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 83,
            "Attack": 80,
            "Defense": 75,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 101
        },
        "image": `${process.env.API_URL}/assets/pokemons/18.png`
    },
    {
        "id": 19,
        "name": {
            "english": "Rattata",
            "japanese": "コラッタ",
            "chinese": "小拉达",
            "french": "Rattata"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 30,
            "Attack": 56,
            "Defense": 35,
            "Sp. Attack": 25,
            "Sp. Defense": 35,
            "Speed": 72
        },
        "image": `${process.env.API_URL}/assets/pokemons/19.png`
    },
    {
        "id": 20,
        "name": {
            "english": "Raticate",
            "japanese": "ラッタ",
            "chinese": "拉达",
            "french": "Rattatac"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 81,
            "Defense": 60,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            "Speed": 97
        },
        "image": `${process.env.API_URL}/assets/pokemons/20.png`
    },
    {
        "id": 21,
        "name": {
            "english": "Spearow",
            "japanese": "オニスズメ",
            "chinese": "烈雀",
            "french": "Piafabec"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 60,
            "Defense": 30,
            "Sp. Attack": 31,
            "Sp. Defense": 31,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/21.png`
    },
    {
        "id": 22,
        "name": {
            "english": "Fearow",
            "japanese": "オニドリル",
            "chinese": "大嘴雀",
            "french": "Rapasdepic"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 65,
            "Sp. Attack": 61,
            "Sp. Defense": 61,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/22.png`
    },
    {
        "id": 23,
        "name": {
            "english": "Ekans",
            "japanese": "アーボ",
            "chinese": "阿柏蛇",
            "french": "Abo"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 35,
            "Attack": 60,
            "Defense": 44,
            "Sp. Attack": 40,
            "Sp. Defense": 54,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/23.png`
    },
    {
        "id": 24,
        "name": {
            "english": "Arbok",
            "japanese": "アーボック",
            "chinese": "阿柏怪",
            "french": "Arbok"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 95,
            "Defense": 69,
            "Sp. Attack": 65,
            "Sp. Defense": 79,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/24.png`
    },
    {
        "id": 25,
        "name": {
            "english": "Pikachu",
            "japanese": "ピカチュウ",
            "chinese": "皮卡丘",
            "french": "Pikachu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 35,
            "Attack": 55,
            "Defense": 40,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/25.png`
    },
    {
        "id": 26,
        "name": {
            "english": "Raichu",
            "japanese": "ライチュウ",
            "chinese": "雷丘",
            "french": "Raichu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 90,
            "Defense": 55,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            "Speed": 110
        },
        "image": `${process.env.API_URL}/assets/pokemons/26.png`
    },
    {
        "id": 27,
        "name": {
            "english": "Sandshrew",
            "japanese": "サンド",
            "chinese": "穿山鼠",
            "french": "Sabelette"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 85,
            "Sp. Attack": 20,
            "Sp. Defense": 30,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/27.png`
    },
    {
        "id": 28,
        "name": {
            "english": "Sandslash",
            "japanese": "サンドパン",
            "chinese": "穿山王",
            "french": "Sablaireau"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 75,
            "Attack": 100,
            "Defense": 110,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 65
        },
        "image": `${process.env.API_URL}/assets/pokemons/28.png`
    },
    {
        "id": 29,
        "name": {
            "english": "Nidoran♀",
            "japanese": "ニドラン♀",
            "chinese": "尼多兰",
            "french": "Nidoran♀"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 55,
            "Attack": 47,
            "Defense": 52,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 41
        },
        "image": `${process.env.API_URL}/assets/pokemons/29.png`
    },
    {
        "id": 30,
        "name": {
            "english": "Nidorina",
            "japanese": "ニドリーナ",
            "chinese": "尼多娜",
            "french": "Nidorina"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 70,
            "Attack": 62,
            "Defense": 67,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 56
        },
        "image": `${process.env.API_URL}/assets/pokemons/30.png`
    },
    {
        "id": 31,
        "name": {
            "english": "Nidoqueen",
            "japanese": "ニドクイン",
            "chinese": "尼多后",
            "french": "Nidoqueen"
        },
        "type": [
            "Poison",
            "Ground"
        ],
        "base": {
            "HP": 90,
            "Attack": 92,
            "Defense": 87,
            "Sp. Attack": 75,
            "Sp. Defense": 85,
            "Speed": 76
        },
        "image": `${process.env.API_URL}/assets/pokemons/31.png`
    },
    {
        "id": 32,
        "name": {
            "english": "Nidoran♂",
            "japanese": "ニドラン♂",
            "chinese": "尼多朗",
            "french": "Nidoran♂"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 46,
            "Attack": 57,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/32.png`
    },
    {
        "id": 33,
        "name": {
            "english": "Nidorino",
            "japanese": "ニドリーノ",
            "chinese": "尼多力诺",
            "french": "Nidorino"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 61,
            "Attack": 72,
            "Defense": 57,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 65
        },
        "image": `${process.env.API_URL}/assets/pokemons/33.png`
    },
    {
        "id": 34,
        "name": {
            "english": "Nidoking",
            "japanese": "ニドキング",
            "chinese": "尼多王",
            "french": "Nidoking"
        },
        "type": [
            "Poison",
            "Ground"
        ],
        "base": {
            "HP": 81,
            "Attack": 102,
            "Defense": 77,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 85
        },
        "image": `${process.env.API_URL}/assets/pokemons/34.png`
    },
    {
        "id": 35,
        "name": {
            "english": "Clefairy",
            "japanese": "ピッピ",
            "chinese": "皮皮",
            "french": "Mélofée"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 45,
            "Defense": 48,
            "Sp. Attack": 60,
            "Sp. Defense": 65,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/35.png`
    },
    {
        "id": 36,
        "name": {
            "english": "Clefable",
            "japanese": "ピクシー",
            "chinese": "皮可西",
            "french": "Mélodelfe"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 95,
            "Attack": 70,
            "Defense": 73,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/36.png`
    },
    {
        "id": 37,
        "name": {
            "english": "Vulpix",
            "japanese": "ロコン",
            "chinese": "六尾",
            "french": "Goupix"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 38,
            "Attack": 41,
            "Defense": 40,
            "Sp. Attack": 50,
            "Sp. Defense": 65,
            "Speed": 65
        },
        "image": `${process.env.API_URL}/assets/pokemons/37.png`
    },
    {
        "id": 38,
        "name": {
            "english": "Ninetales",
            "japanese": "キュウコン",
            "chinese": "九尾",
            "french": "Feunard"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 73,
            "Attack": 76,
            "Defense": 75,
            "Sp. Attack": 81,
            "Sp. Defense": 100,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/38.png`
    },
    {
        "id": 39,
        "name": {
            "english": "Jigglypuff",
            "japanese": "プリン",
            "chinese": "胖丁",
            "french": "Rondoudou"
        },
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "HP": 115,
            "Attack": 45,
            "Defense": 20,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            "Speed": 20
        },
        "image": `${process.env.API_URL}/assets/pokemons/39.png`
    },
    {
        "id": 40,
        "name": {
            "english": "Wigglytuff",
            "japanese": "プクリン",
            "chinese": "胖可丁",
            "french": "Grodoudou"
        },
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "HP": 140,
            "Attack": 70,
            "Defense": 45,
            "Sp. Attack": 85,
            "Sp. Defense": 50,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/40.png`
    },
    {
        "id": 41,
        "name": {
            "english": "Zubat",
            "japanese": "ズバット",
            "chinese": "超音蝠",
            "french": "Nosferapti"
        },
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 35,
            "Sp. Attack": 30,
            "Sp. Defense": 40,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/41.png`
    },
    {
        "id": 42,
        "name": {
            "english": "Golbat",
            "japanese": "ゴルバット",
            "chinese": "大嘴蝠",
            "french": "Nosferalto"
        },
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 70,
            "Sp. Attack": 65,
            "Sp. Defense": 75,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/42.png`
    },
    {
        "id": 43,
        "name": {
            "english": "Oddish",
            "japanese": "ナゾノクサ",
            "chinese": "走路草",
            "french": "Mystherbe"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 55,
            "Sp. Attack": 75,
            "Sp. Defense": 65,
            "Speed": 30
        },
        "image": `${process.env.API_URL}/assets/pokemons/43.png`
    },
    {
        "id": 44,
        "name": {
            "english": "Gloom",
            "japanese": "クサイハナ",
            "chinese": "臭臭花",
            "french": "Ortide"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 65,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/44.png`
    },
    {
        "id": 45,
        "name": {
            "english": "Vileplume",
            "japanese": "ラフレシア",
            "chinese": "霸王花",
            "french": "Rafflesia"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 85,
            "Sp. Attack": 110,
            "Sp. Defense": 90,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/45.png`
    },
    {
        "id": 46,
        "name": {
            "english": "Paras",
            "japanese": "パラス",
            "chinese": "派拉斯",
            "french": "Paras"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 35,
            "Attack": 70,
            "Defense": 55,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 25
        },
        "image": `${process.env.API_URL}/assets/pokemons/46.png`
    },
    {
        "id": 47,
        "name": {
            "english": "Parasect",
            "japanese": "パラセクト",
            "chinese": "派拉斯特",
            "french": "Parasect"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 95,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 80,
            "Speed": 30
        },
        "image": `${process.env.API_URL}/assets/pokemons/47.png`
    },
    {
        "id": 48,
        "name": {
            "english": "Venonat",
            "japanese": "コンパン",
            "chinese": "毛球",
            "french": "Mimitoss"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 55,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 55,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/48.png`
    },
    {
        "id": 49,
        "name": {
            "english": "Venomoth",
            "japanese": "モルフォン",
            "chinese": "摩鲁蛾",
            "french": "Aéromite"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 70,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 90,
            "Sp. Defense": 75,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/49.png`
    },
    {
        "id": 50,
        "name": {
            "english": "Diglett",
            "japanese": "ディグダ",
            "chinese": "地鼠",
            "french": "Taupiqueur"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 10,
            "Attack": 55,
            "Defense": 25,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            "Speed": 95
        },
        "image": `${process.env.API_URL}/assets/pokemons/50.png`
    },
    {
        "id": 51,
        "name": {
            "english": "Dugtrio",
            "japanese": "ダグトリオ",
            "chinese": "三地鼠",
            "french": "Triopikeur"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 35,
            "Attack": 100,
            "Defense": 50,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            "Speed": 120
        },
        "image": `${process.env.API_URL}/assets/pokemons/51.png`
    },
    {
        "id": 52,
        "name": {
            "english": "Meowth",
            "japanese": "ニャース",
            "chinese": "喵喵",
            "french": "Miaouss"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 35,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/52.png`
    },
    {
        "id": 53,
        "name": {
            "english": "Persian",
            "japanese": "ペルシアン",
            "chinese": "猫老大",
            "french": "Persian"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 70,
            "Defense": 60,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 115
        },
        "image": `${process.env.API_URL}/assets/pokemons/53.png`
    },
    {
        "id": 54,
        "name": {
            "english": "Psyduck",
            "japanese": "コダック",
            "chinese": "可达鸭",
            "french": "Psykokwak"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 52,
            "Defense": 48,
            "Sp. Attack": 65,
            "Sp. Defense": 50,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/54.png`
    },
    {
        "id": 55,
        "name": {
            "english": "Golduck",
            "japanese": "ゴルダック",
            "chinese": "哥达鸭",
            "french": "Akwakwak"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 80,
            "Attack": 82,
            "Defense": 78,
            "Sp. Attack": 95,
            "Sp. Defense": 80,
            "Speed": 85
        },
        "image": `${process.env.API_URL}/assets/pokemons/55.png`
    },
    {
        "id": 56,
        "name": {
            "english": "Mankey",
            "japanese": "マンキー",
            "chinese": "猴怪",
            "french": "Férosinge"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 40,
            "Attack": 80,
            "Defense": 35,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/56.png`
    },
    {
        "id": 57,
        "name": {
            "english": "Primeape",
            "japanese": "オコリザル",
            "chinese": "火暴猴",
            "french": "Colossinge"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 65,
            "Attack": 105,
            "Defense": 60,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 95
        },
        "image": `${process.env.API_URL}/assets/pokemons/57.png`
    },
    {
        "id": 58,
        "name": {
            "english": "Growlithe",
            "japanese": "ガーディ",
            "chinese": "卡蒂狗",
            "french": "Caninos"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 55,
            "Attack": 70,
            "Defense": 45,
            "Sp. Attack": 70,
            "Sp. Defense": 50,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/58.png`
    },
    {
        "id": 59,
        "name": {
            "english": "Arcanine",
            "japanese": "ウインディ",
            "chinese": "风速狗",
            "french": "Arcanin"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 90,
            "Attack": 110,
            "Defense": 80,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            "Speed": 95
        },
        "image": `${process.env.API_URL}/assets/pokemons/59.png`
    },
    {
        "id": 60,
        "name": {
            "english": "Poliwag",
            "japanese": "ニョロモ",
            "chinese": "蚊香蝌蚪",
            "french": "Ptitard"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 40,
            "Attack": 50,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/60.png`
    },
    {
        "id": 61,
        "name": {
            "english": "Poliwhirl",
            "japanese": "ニョロゾ",
            "chinese": "蚊香君",
            "french": "Têtarte"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/61.png`
    },
    {
        "id": 62,
        "name": {
            "english": "Poliwrath",
            "japanese": "ニョロボン",
            "chinese": "蚊香泳士",
            "french": "Tartard"
        },
        "type": [
            "Water",
            "Fighting"
        ],
        "base": {
            "HP": 90,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 70,
            "Sp. Defense": 90,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/62.png`
    },
    {
        "id": 63,
        "name": {
            "english": "Abra",
            "japanese": "ケーシィ",
            "chinese": "凯西",
            "french": "Abra"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 25,
            "Attack": 20,
            "Defense": 15,
            "Sp. Attack": 105,
            "Sp. Defense": 55,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/63.png`
    },
    {
        "id": 64,
        "name": {
            "english": "Kadabra",
            "japanese": "ユンゲラー",
            "chinese": "勇基拉",
            "french": "Kadabra"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            "Speed": 105
        },
        "image": `${process.env.API_URL}/assets/pokemons/64.png`
    },
    {
        "id": 65,
        "name": {
            "english": "Alakazam",
            "japanese": "フーディン",
            "chinese": "胡地",
            "french": "Alakazam"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 55,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 135,
            "Sp. Defense": 95,
            "Speed": 120
        },
        "image": `${process.env.API_URL}/assets/pokemons/65.png`
    },
    {
        "id": 66,
        "name": {
            "english": "Machop",
            "japanese": "ワンリキー",
            "chinese": "腕力",
            "french": "Machoc"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 70,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/66.png`
    },
    {
        "id": 67,
        "name": {
            "english": "Machoke",
            "japanese": "ゴーリキー",
            "chinese": "豪力",
            "french": "Machopeur"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 80,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 50,
            "Sp. Defense": 60,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/67.png`
    },
    {
        "id": 68,
        "name": {
            "english": "Machamp",
            "japanese": "カイリキー",
            "chinese": "怪力",
            "french": "Mackogneur"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 90,
            "Attack": 130,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 85,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/68.png`
    },
    {
        "id": 69,
        "name": {
            "english": "Bellsprout",
            "japanese": "マダツボミ",
            "chinese": "喇叭芽",
            "french": "Chétiflor"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 35,
            "Sp. Attack": 70,
            "Sp. Defense": 30,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/69.png`
    },
    {
        "id": 70,
        "name": {
            "english": "Weepinbell",
            "japanese": "ウツドン",
            "chinese": "口呆花",
            "french": "Boustiflor"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 50,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/70.png`
    },
    {
        "id": 71,
        "name": {
            "english": "Victreebel",
            "japanese": "ウツボット",
            "chinese": "大食花",
            "french": "Empiflor"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 65,
            "Sp. Attack": 100,
            "Sp. Defense": 70,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/71.png`
    },
    {
        "id": 72,
        "name": {
            "english": "Tentacool",
            "japanese": "メノクラゲ",
            "chinese": "玛瑙水母",
            "french": "Tentacool"
        },
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 40,
            "Defense": 35,
            "Sp. Attack": 50,
            "Sp. Defense": 100,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/72.png`
    },
    {
        "id": 73,
        "name": {
            "english": "Tentacruel",
            "japanese": "ドククラゲ",
            "chinese": "毒刺水母",
            "french": "Tentacruel"
        },
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 70,
            "Defense": 65,
            "Sp. Attack": 80,
            "Sp. Defense": 120,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/73.png`
    },
    {
        "id": 74,
        "name": {
            "english": "Geodude",
            "japanese": "イシツブテ",
            "chinese": "小拳石",
            "french": "Racaillou"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 40,
            "Attack": 80,
            "Defense": 100,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 20
        },
        "image": `${process.env.API_URL}/assets/pokemons/74.png`
    },
    {
        "id": 75,
        "name": {
            "english": "Graveler",
            "japanese": "ゴローン",
            "chinese": "隆隆石",
            "french": "Gravalanch"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 55,
            "Attack": 95,
            "Defense": 115,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/75.png`
    },
    {
        "id": 76,
        "name": {
            "english": "Golem",
            "japanese": "ゴローニャ",
            "chinese": "隆隆岩",
            "french": "Grolem"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 80,
            "Attack": 120,
            "Defense": 130,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/76.png`
    },
    {
        "id": 77,
        "name": {
            "english": "Ponyta",
            "japanese": "ポニータ",
            "chinese": "小火马",
            "french": "Ponyta"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 50,
            "Attack": 85,
            "Defense": 55,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/77.png`
    },
    {
        "id": 78,
        "name": {
            "english": "Rapidash",
            "japanese": "ギャロップ",
            "chinese": "烈焰马",
            "french": "Galopa"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 105
        },
        "image": `${process.env.API_URL}/assets/pokemons/78.png`
    },
    {
        "id": 79,
        "name": {
            "english": "Slowpoke",
            "japanese": "ヤドン",
            "chinese": "呆呆兽",
            "french": "Ramoloss"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 90,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 15
        },
        "image": `${process.env.API_URL}/assets/pokemons/79.png`
    },
    {
        "id": 80,
        "name": {
            "english": "Slowbro",
            "japanese": "ヤドラン",
            "chinese": "呆壳兽",
            "french": "Flagadoss"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 95,
            "Attack": 75,
            "Defense": 110,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            "Speed": 30
        },
        "image": `${process.env.API_URL}/assets/pokemons/80.png`
    },
    {
        "id": 81,
        "name": {
            "english": "Magnemite",
            "japanese": "コイル",
            "chinese": "小磁怪",
            "french": "Magnéti"
        },
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "HP": 25,
            "Attack": 35,
            "Defense": 70,
            "Sp. Attack": 95,
            "Sp. Defense": 55,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/81.png`
    },
    {
        "id": 82,
        "name": {
            "english": "Magneton",
            "japanese": "レアコイル",
            "chinese": "三合一磁怪",
            "french": "Magnéton"
        },
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "HP": 50,
            "Attack": 60,
            "Defense": 95,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/82.png`
    },
    {
        "id": 83,
        "name": {
            "english": "Farfetch'd",
            "japanese": "カモネギ",
            "chinese": "大葱鸭",
            "french": "Canarticho"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 52,
            "Attack": 90,
            "Defense": 55,
            "Sp. Attack": 58,
            "Sp. Defense": 62,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/83.png`
    },
    {
        "id": 84,
        "name": {
            "english": "Doduo",
            "japanese": "ドードー",
            "chinese": "嘟嘟",
            "french": "Doduo"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 35,
            "Attack": 85,
            "Defense": 45,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 75
        },
        "image": `${process.env.API_URL}/assets/pokemons/84.png`
    },
    {
        "id": 85,
        "name": {
            "english": "Dodrio",
            "japanese": "ドードリオ",
            "chinese": "嘟嘟利",
            "french": "Dodrio"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 110,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 110
        },
        "image": `${process.env.API_URL}/assets/pokemons/85.png`
    },
    {
        "id": 86,
        "name": {
            "english": "Seel",
            "japanese": "パウワウ",
            "chinese": "小海狮",
            "french": "Otaria"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 65,
            "Attack": 45,
            "Defense": 55,
            "Sp. Attack": 45,
            "Sp. Defense": 70,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/86.png`
    },
    {
        "id": 87,
        "name": {
            "english": "Dewgong",
            "japanese": "ジュゴン",
            "chinese": "白海狮",
            "french": "Lamantine"
        },
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "HP": 90,
            "Attack": 70,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 95,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/87.png`
    },
    {
        "id": 88,
        "name": {
            "english": "Grimer",
            "japanese": "ベトベター",
            "chinese": "臭泥",
            "french": "Tadmorv"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 25
        },
        "image": `${process.env.API_URL}/assets/pokemons/88.png`
    },
    {
        "id": 89,
        "name": {
            "english": "Muk",
            "japanese": "ベトベトン",
            "chinese": "臭臭泥",
            "french": "Grotadmorv"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 105,
            "Attack": 105,
            "Defense": 75,
            "Sp. Attack": 65,
            "Sp. Defense": 100,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/89.png`
    },
    {
        "id": 90,
        "name": {
            "english": "Shellder",
            "japanese": "シェルダー",
            "chinese": "大舌贝",
            "french": "Kokiyas"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 65,
            "Defense": 100,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/90.png`
    },
    {
        "id": 91,
        "name": {
            "english": "Cloyster",
            "japanese": "パルシェン",
            "chinese": "刺甲贝",
            "french": "Crustabri"
        },
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "HP": 50,
            "Attack": 95,
            "Defense": 180,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/91.png`
    },
    {
        "id": 92,
        "name": {
            "english": "Gastly",
            "japanese": "ゴース",
            "chinese": "鬼斯",
            "french": "Fantominus"
        },
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 30,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 100,
            "Sp. Defense": 35,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/92.png`
    },
    {
        "id": 93,
        "name": {
            "english": "Haunter",
            "japanese": "ゴースト",
            "chinese": "鬼斯通",
            "french": "Spectrum"
        },
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 115,
            "Sp. Defense": 55,
            "Speed": 95
        },
        "image": `${process.env.API_URL}/assets/pokemons/93.png`
    },
    {
        "id": 94,
        "name": {
            "english": "Gengar",
            "japanese": "ゲンガー",
            "chinese": "耿鬼",
            "french": "Ectoplasma"
        },
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 130,
            "Sp. Defense": 75,
            "Speed": 110
        },
        "image": `${process.env.API_URL}/assets/pokemons/94.png`
    },
    {
        "id": 95,
        "name": {
            "english": "Onix",
            "japanese": "イワーク",
            "chinese": "大岩蛇",
            "french": "Onix"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 35,
            "Attack": 45,
            "Defense": 160,
            "Sp. Attack": 30,
            "Sp. Defense": 45,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/95.png`
    },
    {
        "id": 96,
        "name": {
            "english": "Drowzee",
            "japanese": "スリープ",
            "chinese": "催眠貘",
            "french": "Soporifik"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 48,
            "Defense": 45,
            "Sp. Attack": 43,
            "Sp. Defense": 90,
            "Speed": 42
        },
        "image": `${process.env.API_URL}/assets/pokemons/96.png`
    },
    {
        "id": 97,
        "name": {
            "english": "Hypno",
            "japanese": "スリーパー",
            "chinese": "引梦貘人",
            "french": "Hypnomade"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 85,
            "Attack": 73,
            "Defense": 70,
            "Sp. Attack": 73,
            "Sp. Defense": 115,
            "Speed": 67
        },
        "image": `${process.env.API_URL}/assets/pokemons/97.png`
    },
    {
        "id": 98,
        "name": {
            "english": "Krabby",
            "japanese": "クラブ",
            "chinese": "大钳蟹",
            "french": "Krabby"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 105,
            "Defense": 90,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/98.png`
    },
    {
        "id": 99,
        "name": {
            "english": "Kingler",
            "japanese": "キングラー",
            "chinese": "巨钳蟹",
            "french": "Krabboss"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 130,
            "Defense": 115,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 75
        },
        "image": `${process.env.API_URL}/assets/pokemons/99.png`
    },
    {
        "id": 100,
        "name": {
            "english": "Voltorb",
            "japanese": "ビリリダマ",
            "chinese": "霹雳电球",
            "french": "Voltorbe"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/100.png`
    },
    {
        "id": 101,
        "name": {
            "english": "Electrode",
            "japanese": "マルマイン",
            "chinese": "顽皮雷弹",
            "french": "Électrode"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 150
        },
        "image": `${process.env.API_URL}/assets/pokemons/101.png`
    },
    {
        "id": 102,
        "name": {
            "english": "Exeggcute",
            "japanese": "タマタマ",
            "chinese": "蛋蛋",
            "french": "Noeunoeuf"
        },
        "type": [
            "Grass",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 40,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 45,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/102.png`
    },
    {
        "id": 103,
        "name": {
            "english": "Exeggutor",
            "japanese": "ナッシー",
            "chinese": "椰蛋树",
            "french": "Noadkoko"
        },
        "type": [
            "Grass",
            "Psychic"
        ],
        "base": {
            "HP": 95,
            "Attack": 95,
            "Defense": 85,
            "Sp. Attack": 125,
            "Sp. Defense": 75,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/103.png`
    },
    {
        "id": 104,
        "name": {
            "english": "Cubone",
            "japanese": "カラカラ",
            "chinese": "卡拉卡拉",
            "french": "Osselait"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 95,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/104.png`
    },
    {
        "id": 105,
        "name": {
            "english": "Marowak",
            "japanese": "ガラガラ",
            "chinese": "嘎啦嘎啦",
            "french": "Ossatueur"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 60,
            "Attack": 80,
            "Defense": 110,
            "Sp. Attack": 50,
            "Sp. Defense": 80,
            "Speed": 45
        },
        "image": `${process.env.API_URL}/assets/pokemons/105.png`
    },
    {
        "id": 106,
        "name": {
            "english": "Hitmonlee",
            "japanese": "サワムラー",
            "chinese": "飞腿郎",
            "french": "Kicklee"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 50,
            "Attack": 120,
            "Defense": 53,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            "Speed": 87
        },
        "image": `${process.env.API_URL}/assets/pokemons/106.png`
    },
    {
        "id": 107,
        "name": {
            "english": "Hitmonchan",
            "japanese": "エビワラー",
            "chinese": "快拳郎",
            "french": "Tygnon"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 50,
            "Attack": 105,
            "Defense": 79,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            "Speed": 76
        },
        "image": `${process.env.API_URL}/assets/pokemons/107.png`
    },
    {
        "id": 108,
        "name": {
            "english": "Lickitung",
            "japanese": "ベロリンガ",
            "chinese": "大舌头",
            "french": "Excelangue"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 90,
            "Attack": 55,
            "Defense": 75,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 30
        },
        "image": `${process.env.API_URL}/assets/pokemons/108.png`
    },
    {
        "id": 109,
        "name": {
            "english": "Koffing",
            "japanese": "ドガース",
            "chinese": "瓦斯弹",
            "french": "Smogo"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 65,
            "Defense": 95,
            "Sp. Attack": 60,
            "Sp. Defense": 45,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/109.png`
    },
    {
        "id": 110,
        "name": {
            "english": "Weezing",
            "japanese": "マタドガス",
            "chinese": "双弹瓦斯",
            "french": "Smogogo"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 120,
            "Sp. Attack": 85,
            "Sp. Defense": 70,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/110.png`
    },
    {
        "id": 111,
        "name": {
            "english": "Rhyhorn",
            "japanese": "サイホーン",
            "chinese": "独角犀牛",
            "french": "Rhinocorne"
        },
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "HP": 80,
            "Attack": 85,
            "Defense": 95,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 25
        },
        "image": `${process.env.API_URL}/assets/pokemons/111.png`
    },
    {
        "id": 112,
        "name": {
            "english": "Rhydon",
            "japanese": "サイドン",
            "chinese": "钻角犀兽",
            "french": "Rhinoféros"
        },
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "HP": 105,
            "Attack": 130,
            "Defense": 120,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/112.png`
    },
    {
        "id": 113,
        "name": {
            "english": "Chansey",
            "japanese": "ラッキー",
            "chinese": "吉利蛋",
            "french": "Leveinard"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 250,
            "Attack": 5,
            "Defense": 5,
            "Sp. Attack": 35,
            "Sp. Defense": 105,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/113.png`
    },
    {
        "id": 114,
        "name": {
            "english": "Tangela",
            "japanese": "モンジャラ",
            "chinese": "蔓藤怪",
            "french": "Saquedeneu"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 65,
            "Attack": 55,
            "Defense": 115,
            "Sp. Attack": 100,
            "Sp. Defense": 40,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/114.png`
    },
    {
        "id": 115,
        "name": {
            "english": "Kangaskhan",
            "japanese": "ガルーラ",
            "chinese": "袋兽",
            "french": "Kangourex"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 105,
            "Attack": 95,
            "Defense": 80,
            "Sp. Attack": 40,
            "Sp. Defense": 80,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/115.png`
    },
    {
        "id": 116,
        "name": {
            "english": "Horsea",
            "japanese": "タッツー",
            "chinese": "墨海马",
            "french": "Hypotrempe"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 40,
            "Defense": 70,
            "Sp. Attack": 70,
            "Sp. Defense": 25,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/116.png`
    },
    {
        "id": 117,
        "name": {
            "english": "Seadra",
            "japanese": "シードラ",
            "chinese": "海刺龙",
            "french": "Hypocéan"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 65,
            "Defense": 95,
            "Sp. Attack": 95,
            "Sp. Defense": 45,
            "Speed": 85
        },
        "image": `${process.env.API_URL}/assets/pokemons/117.png`
    },
    {
        "id": 118,
        "name": {
            "english": "Goldeen",
            "japanese": "トサキント",
            "chinese": "角金鱼",
            "french": "Poissirène"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 45,
            "Attack": 67,
            "Defense": 60,
            "Sp. Attack": 35,
            "Sp. Defense": 50,
            "Speed": 63
        },
        "image": `${process.env.API_URL}/assets/pokemons/118.png`
    },
    {
        "id": 119,
        "name": {
            "english": "Seaking",
            "japanese": "アズマオウ",
            "chinese": "金鱼王",
            "french": "Poissoroy"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 80,
            "Attack": 92,
            "Defense": 65,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            "Speed": 68
        },
        "image": `${process.env.API_URL}/assets/pokemons/119.png`
    },
    {
        "id": 120,
        "name": {
            "english": "Staryu",
            "japanese": "ヒトデマン",
            "chinese": "海星星",
            "french": "Stari"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 45,
            "Defense": 55,
            "Sp. Attack": 70,
            "Sp. Defense": 55,
            "Speed": 85
        },
        "image": `${process.env.API_URL}/assets/pokemons/120.png`
    },
    {
        "id": 121,
        "name": {
            "english": "Starmie",
            "japanese": "スターミー",
            "chinese": "宝石海星",
            "french": "Staross"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 75,
            "Defense": 85,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            "Speed": 115
        },
        "image": `${process.env.API_URL}/assets/pokemons/121.png`
    },
    {
        "id": 122,
        "name": {
            "english": "Mr. Mime",
            "japanese": "バリヤード",
            "chinese": "魔墙人偶",
            "french": "M. Mime"
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 65,
            "Sp. Attack": 100,
            "Sp. Defense": 120,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/122.png`
    },
    {
        "id": 123,
        "name": {
            "english": "Scyther",
            "japanese": "ストライク",
            "chinese": "飞天螳螂",
            "french": "Insécateur"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 110,
            "Defense": 80,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            "Speed": 105
        },
        "image": `${process.env.API_URL}/assets/pokemons/123.png`
    },
    {
        "id": 124,
        "name": {
            "english": "Jynx",
            "japanese": "ルージュラ",
            "chinese": "迷唇姐",
            "french": "Lippoutou"
        },
        "type": [
            "Ice",
            "Psychic"
        ],
        "base": {
            "HP": 65,
            "Attack": 50,
            "Defense": 35,
            "Sp. Attack": 115,
            "Sp. Defense": 95,
            "Speed": 95
        },
        "image": `${process.env.API_URL}/assets/pokemons/124.png`
    },
    {
        "id": 125,
        "name": {
            "english": "Electabuzz",
            "japanese": "エレブー",
            "chinese": "电击兽",
            "french": "Élektek"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 65,
            "Attack": 83,
            "Defense": 57,
            "Sp. Attack": 95,
            "Sp. Defense": 85,
            "Speed": 105
        },
        "image": `${process.env.API_URL}/assets/pokemons/125.png`
    },
    {
        "id": 126,
        "name": {
            "english": "Magmar",
            "japanese": "ブーバー",
            "chinese": "鸭嘴火兽",
            "french": "Magmar"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 95,
            "Defense": 57,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            "Speed": 93
        },
        "image": `${process.env.API_URL}/assets/pokemons/126.png`
    },
    {
        "id": 127,
        "name": {
            "english": "Pinsir",
            "japanese": "カイロス",
            "chinese": "凯罗斯",
            "french": "Scarabrute"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 65,
            "Attack": 125,
            "Defense": 100,
            "Sp. Attack": 55,
            "Sp. Defense": 70,
            "Speed": 85
        },
        "image": `${process.env.API_URL}/assets/pokemons/127.png`
    },
    {
        "id": 128,
        "name": {
            "english": "Tauros",
            "japanese": "ケンタロス",
            "chinese": "肯泰罗",
            "french": "Tauros"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 75,
            "Attack": 100,
            "Defense": 95,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            "Speed": 110
        },
        "image": `${process.env.API_URL}/assets/pokemons/128.png`
    },
    {
        "id": 129,
        "name": {
            "english": "Magikarp",
            "japanese": "コイキング",
            "chinese": "鲤鱼王",
            "french": "Magicarpe"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 20,
            "Attack": 10,
            "Defense": 55,
            "Sp. Attack": 15,
            "Sp. Defense": 20,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/129.png`
    },
    {
        "id": 130,
        "name": {
            "english": "Gyarados",
            "japanese": "ギャラドス",
            "chinese": "暴鲤龙",
            "french": "Léviator"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 95,
            "Attack": 125,
            "Defense": 79,
            "Sp. Attack": 60,
            "Sp. Defense": 100,
            "Speed": 81
        },
        "image": `${process.env.API_URL}/assets/pokemons/130.png`
    },
    {
        "id": 131,
        "name": {
            "english": "Lapras",
            "japanese": "ラプラス",
            "chinese": "拉普拉斯",
            "french": "Lokhlass"
        },
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "HP": 130,
            "Attack": 85,
            "Defense": 80,
            "Sp. Attack": 85,
            "Sp. Defense": 95,
            "Speed": 60
        },
        "image": `${process.env.API_URL}/assets/pokemons/131.png`
    },
    {
        "id": 132,
        "name": {
            "english": "Ditto",
            "japanese": "メタモン",
            "chinese": "百变怪",
            "french": "Métamorph"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 48,
            "Attack": 48,
            "Defense": 48,
            "Sp. Attack": 48,
            "Sp. Defense": 48,
            "Speed": 48
        },
        "image": `${process.env.API_URL}/assets/pokemons/132.png`
    },
    {
        "id": 133,
        "name": {
            "english": "Eevee",
            "japanese": "イーブイ",
            "chinese": "伊布",
            "french": "Évoli"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 55,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/133.png`
    },
    {
        "id": 134,
        "name": {
            "english": "Vaporeon",
            "japanese": "シャワーズ",
            "chinese": "水伊布",
            "french": "Aquali"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 130,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 65
        },
        "image": `${process.env.API_URL}/assets/pokemons/134.png`
    },
    {
        "id": 135,
        "name": {
            "english": "Jolteon",
            "japanese": "サンダース",
            "chinese": "雷伊布",
            "french": "Voltali"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 130
        },
        "image": `${process.env.API_URL}/assets/pokemons/135.png`
    },
    {
        "id": 136,
        "name": {
            "english": "Flareon",
            "japanese": "ブースター",
            "chinese": "火伊布",
            "french": "Pyroli"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 130,
            "Defense": 60,
            "Sp. Attack": 95,
            "Sp. Defense": 110,
            "Speed": 65
        },
        "image": `${process.env.API_URL}/assets/pokemons/136.png`
    },
    {
        "id": 137,
        "name": {
            "english": "Porygon",
            "japanese": "ポリゴン",
            "chinese": "多边兽",
            "french": "Porygon"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 60,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 40
        },
        "image": `${process.env.API_URL}/assets/pokemons/137.png`
    },
    {
        "id": 138,
        "name": {
            "english": "Omanyte",
            "japanese": "オムナイト",
            "chinese": "菊石兽",
            "french": "Amonita"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 35,
            "Attack": 40,
            "Defense": 100,
            "Sp. Attack": 90,
            "Sp. Defense": 55,
            "Speed": 35
        },
        "image": `${process.env.API_URL}/assets/pokemons/138.png`
    },
    {
        "id": 139,
        "name": {
            "english": "Omastar",
            "japanese": "オムスター",
            "chinese": "多刺菊石兽",
            "french": "Amonistar"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 70,
            "Attack": 60,
            "Defense": 125,
            "Sp. Attack": 115,
            "Sp. Defense": 70,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/139.png`
    },
    {
        "id": 140,
        "name": {
            "english": "Kabuto",
            "japanese": "カブト",
            "chinese": "化石盔",
            "french": "Kabuto"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 80,
            "Defense": 90,
            "Sp. Attack": 55,
            "Sp. Defense": 45,
            "Speed": 55
        },
        "image": `${process.env.API_URL}/assets/pokemons/140.png`
    },
    {
        "id": 141,
        "name": {
            "english": "Kabutops",
            "japanese": "カブトプス",
            "chinese": "镰刀盔",
            "french": "Kabutops"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 60,
            "Attack": 115,
            "Defense": 105,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/141.png`
    },
    {
        "id": 142,
        "name": {
            "english": "Aerodactyl",
            "japanese": "プテラ",
            "chinese": "化石翼龙",
            "french": "Ptéra"
        },
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 65,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 130
        },
        "image": `${process.env.API_URL}/assets/pokemons/142.png`
    },
    {
        "id": 143,
        "name": {
            "english": "Snorlax",
            "japanese": "カビゴン",
            "chinese": "卡比兽",
            "french": "Ronflex"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 160,
            "Attack": 110,
            "Defense": 65,
            "Sp. Attack": 65,
            "Sp. Defense": 110,
            "Speed": 30
        },
        "image": `${process.env.API_URL}/assets/pokemons/143.png`
    },
    {
        "id": 144,
        "name": {
            "english": "Articuno",
            "japanese": "フリーザー",
            "chinese": "急冻鸟",
            "french": "Artikodin"
        },
        "type": [
            "Ice",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 85,
            "Defense": 100,
            "Sp. Attack": 95,
            "Sp. Defense": 125,
            "Speed": 85
        },
        "image": `${process.env.API_URL}/assets/pokemons/144.png`
    },
    {
        "id": 145,
        "name": {
            "english": "Zapdos",
            "japanese": "サンダー",
            "chinese": "闪电鸟",
            "french": "Électhor"
        },
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 90,
            "Defense": 85,
            "Sp. Attack": 125,
            "Sp. Defense": 90,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/145.png`
    },
    {
        "id": 146,
        "name": {
            "english": "Moltres",
            "japanese": "ファイヤー",
            "chinese": "火焰鸟",
            "french": "Sulfura"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 100,
            "Defense": 90,
            "Sp. Attack": 125,
            "Sp. Defense": 85,
            "Speed": 90
        },
        "image": `${process.env.API_URL}/assets/pokemons/146.png`
    },
    {
        "id": 147,
        "name": {
            "english": "Dratini",
            "japanese": "ミニリュウ",
            "chinese": "迷你龙",
            "french": "Minidraco"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 41,
            "Attack": 64,
            "Defense": 45,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 50
        },
        "image": `${process.env.API_URL}/assets/pokemons/147.png`
    },
    {
        "id": 148,
        "name": {
            "english": "Dragonair",
            "japanese": "ハクリュー",
            "chinese": "哈克龙",
            "french": "Draco"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 61,
            "Attack": 84,
            "Defense": 65,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 70
        },
        "image": `${process.env.API_URL}/assets/pokemons/148.png`
    },
    {
        "id": 149,
        "name": {
            "english": "Dragonite",
            "japanese": "カイリュー",
            "chinese": "快龙",
            "french": "Dracolosse"
        },
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "HP": 91,
            "Attack": 134,
            "Defense": 95,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 80
        },
        "image": `${process.env.API_URL}/assets/pokemons/149.png`
    },
    {
        "id": 150,
        "name": {
            "english": "Mewtwo",
            "japanese": "ミュウツー",
            "chinese": "超梦",
            "french": "Mewtwo"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 106,
            "Attack": 110,
            "Defense": 90,
            "Sp. Attack": 154,
            "Sp. Defense": 90,
            "Speed": 130
        },
        "image": `${process.env.API_URL}/assets/pokemons/150.png`
    },
    {
        "id": 151,
        "name": {
            "english": "Mew",
            "japanese": "ミュウ",
            "chinese": "梦幻",
            "french": "Mew"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        },
        "image": `${process.env.API_URL}/assets/pokemons/151.png`
    }
]

export default pokemonsList;