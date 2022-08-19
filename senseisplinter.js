const fs = require('fs');
const prompt = require('prompt-sync')();

console.clear()
    console.log(`

    ▄██   ▄   ███    █▄  ███▄▄▄▄      ▄████████    ▄█   ▄█▄ 
    ███   ██▄ ███    ███ ███▀▀▀██▄   ███    ███   ███ ▄███▀ 
    ███▄▄▄███ ███    ███ ███   ███   ███    ███   ███▐██▀   
    ▀▀▀▀▀▀███ ███    ███ ███   ███   ███    ███  ▄█████▀    
    ▄██   ███ ███    ███ ███   ███ ▀███████████ ▀▀█████▄    
    ███   ███ ███    ███ ███   ███   ███    ███   ███▐██▄   
    ███   ███ ███    ███ ███   ███   ███    ███   ███ ▀███▄ 
     ▀█████▀  ████████▀   ▀█   █▀    ███    █▀    ███   ▀█▀ 
                                                  ▀             
                                        CrackTurkey.com
`);

const combosec = prompt('Select a combolist to use: ');
let combolist2;
combolist2 = combosec.replace('"', '').replace('"', '');
console.log(combolist2);
let combolist = fs.readFileSync(combolist2, 'utf8').split('\n').map(x => x);

for (let i = 0; i < combolist.length; i++) {
    setTimeout(() => {
    let combo = combolist[i]
    let comboname = combo.split('@')[1].split(':')[0]
     fs.appendFileSync(`./${comboname}.txt`, `${combo}` + '\n')

     console.clear()
     console.log(`
 
     ▄██   ▄   ███    █▄  ███▄▄▄▄      ▄████████    ▄█   ▄█▄ 
     ███   ██▄ ███    ███ ███▀▀▀██▄   ███    ███   ███ ▄███▀ 
     ███▄▄▄███ ███    ███ ███   ███   ███    ███   ███▐██▀   
     ▀▀▀▀▀▀███ ███    ███ ███   ███   ███    ███  ▄█████▀    
     ▄██   ███ ███    ███ ███   ███ ▀███████████ ▀▀█████▄    
     ███   ███ ███    ███ ███   ███   ███    ███   ███▐██▄   
     ███   ███ ███    ███ ███   ███   ███    ███   ███ ▀███▄ 
      ▀█████▀  ████████▀   ▀█   █▀    ███    █▀    ███   ▀█▀ 
                                                   ▀             
                                         CrackTurkey.com
 `);
console.log(`[${i + 1}/${combolist.length}] ${combo}`);
    }, 250 * i);
}
