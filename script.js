const canvasE1 = document.querySelector("canvas"),
    canvasCtx = canvasE1.getContext("2d");

const lineWidth = 15;

const gapX = 10;

function setup() {
    canvasE1.width = canvasCtx.width = field_campo.w;
    canvasE1.height = canvasCtx.heigth = field_campo.h;
}

// orientando a objeto ..

const field_campo = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        //Campo da cor verde>>>>
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect(0, 0, this.w, this.h);
    }
}

const line_linha = {
    w: 15,
    h: field_campo.h,
    draw: function () {
        //Linha central>>>>
        canvasCtx.fillStyle = "#ffffff";

        const x = this.h / 2 - this.w / 2;
        const y = 0;
        const w = this.w;
        const h = this.h;

        canvasCtx.fillRect(x, y, w, h);
    }
}

const leftPaddle_raqueteEsquerda = {
    x: gapX,
    y: 100,
    w: line_linha.w,
    h: 200,
    draw: function () {
        //raquete lado esquerdo>>>>
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
    }
}

const rigthPaddle_raqueteDireita = {
    x: window.innerWidth - lineWidth - 15,
    y: 200,
    w: line_linha.w,
    h: 200,
    draw: function () {
        //raquete lado direita>>>>
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
    }
}

function draw() {

    field_campo.draw();
    line_linha.draw();
    leftPaddle_raqueteEsquerda.draw();
    rigthPaddle_raqueteDireita.draw();

    // raquete lado esquerdo>>>>

    // raquete lado direito>>>>

    // Criando Bola >>>>
    canvasCtx.beginPath();
    canvasCtx.arc(500, 200, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();

    // criando placar >>>
    canvasCtx.font = "bold 72px Arial";  // fonte que todo computador tem
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "top";
    canvasCtx.fillStyle = "#01341D";  // cor

    //Adicionando Numero Placar Lado esquerdo e Direito >>
    canvasCtx.fillText('3', window.innerWidth / 4, 50);
    canvasCtx.fillText('1', window.innerWidth / 4 + window.innerWidth / 2, 50);
}

setup();
draw();