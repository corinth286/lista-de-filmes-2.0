function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de Chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}

let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(800, 400);

    // 🔵 Texto para informar ao usuário
    createSpan("Sua idade: ").position(50, 30);

    // 🔵 Campo para input de idade
    campoIdade = createInput("5");
    campoIdade.position(150, 30);

    // 🔵 Checkbox para saber se gosta de fantasia
    campoFantasia = createCheckbox(" Gosta de fantasia?", false);
    campoFantasia.position(50, 70);
}

function draw() {
    background(175, 238, 238); // 🌸 Fundo azul piscina claro
    fill(128, 0, 128); // Roxo
}
