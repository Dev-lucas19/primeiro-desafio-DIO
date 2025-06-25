const niveisDeHeroi = [
    { nome: "Ferro", minXP: 0, maxXP: 1000 },
    { nome: "Bronze", minXP: 1001, maxXP: 2000 },
    { nome: "Prata", minXP: 2001, maxXP: 5000 },
    { nome: "Ouro", minXP: 5001, maxXP: 7000 },
    { nome: "Platina", minXP: 7001, maxXP: 8000 },
    { nome: "Ascendente", minXP: 8001, maxXP: 9000 },
    { nome: "Imortal", minXP: 9001, maxXP: 10000 },
    { nome: "Radiante", minXP: 10001, maxXP: Infinity }
];

const herois = [
    { nome: "Batman", xp: 4526 },
    { nome: "Super-homem", xp: 7513 },
    { nome: "Mulher-maravilha", xp: 9125 },
    { nome: "Caçador de Marte", xp: 4320 },
    { nome: "Homem Aranha", xp: 9766 },
    { nome: "Hulk", xp: 12000 },
    { nome: "One Above All", xp: 15000 }
];

function obterNivelDoHeroi(xpDoHeroi) {
    
    for (const nivel of niveisDeHeroi) {
        
        if (xpDoHeroi >= nivel.minXP && xpDoHeroi <= nivel.maxXP) {
            return nivel.nome; 
        }
    }
}


console.log("--- Níveis dos Heróis ---");
for (const heroi of herois) {
    const nomeDoHeroi = heroi.nome;
    const xpDoHeroi = heroi.xp;
    
    const nivelDoHeroi = obterNivelDoHeroi(xpDoHeroi);
    
    console.log(`O Herói ${nomeDoHeroi} está no nível ${nivelDoHeroi}.`);
}
