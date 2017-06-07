let scl = 30;

function grid(num){
    return num*scl
}

const world = new Array();
const obstacles = new Array();
const walls = new Array();
const folieges = new Array();

function buildWorld(){
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            let tile = map[i][j];
            let x = grid(j), y = grid(i);
            if(tile === "#"){
                if(i != 0){
                    if(map[i-1][j] != "#"
                    && map[i-1][j] != "Y"
                    && map[i-1][j-1] != "y"){
                        let olle = new Obstacle(x, y, obstacleImg);
                        if(Math.random() > 0.7){let pelle = new Foliege(x, y-scl, 1);}
                            else {
                            if(Math.random() > 0.5){let pelle = new Foliege(x, y-scl, 2);}
                            else {let pelle = new Foliege(x, y-scl, 0);}
                        }
                    }else{let olle = new Obstacle(x, y, obstacleImg2);}
                }else {let olle = new Obstacle(x, y, obstacleImg2);}
            }if(tile === ","
             || tile === "p"
             || tile === "a"
             || tile === "y"){
                let walle = new Wall(x, y);
            }if(tile === "@"
             || tile === "a"){
                let patrik = new Player(x, y);
            }if(tile === "B"){
                let bosse = new Box(x, y);
                boxes.push(bosse);
            }if(tile === "P"
             || tile === "p"){
                let pella = new Point(x+scl/4, y+scl/4);
            }if(tile === "Y"
             || tile === "y"){
                let olle = new Spike(x, y);
            }
        }
    }
    level.enemies.forEach(enemy => {enemies.push(enemy)});
    level.helpers.forEach(helper => {helpers.push(helper);});
}

function drawBackground(){
    for(let i = 0; i < map[0].length*scl; i += 100){
        ctx.drawImage(backgroundImg,
        i, 0, 100, map.length*scl);
    }
}

class Obstacle{
    constructor(posX, posY, img){
        this.pos = new Vector(posX, posY);
        this.size = {x: scl, y: scl};
        this.image = img;
        obstacles.push(this);
    }
    draw(){
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
    };
}

class Wall{
    constructor(posX, posY){
        this.pos = new Vector(posX, posY);
        this.size = {x: scl, y: scl};
        this.image = wallImg;
        walls.push(this);
    }
    draw(){
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}

class Foliege{
    constructor(x, y, imgPos = 0){
        this.pos = new Vector(x, y);
        this.size = new Vector(scl, scl);
        this.image = foliegeImg;
        this.imgPos = new Vector(imgPos, 0);
        folieges.push(this);
    }
    draw(){
        ctx.drawImage(this.image,
        this.image.width/3*this.imgPos.x, 0, this.image.width/3, this.image.height,
        this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}

class Spike{
    constructor(x, y){
        this.pos = new Vector(x, y);
        this.size = new Vector(scl, scl);
        this.image = spikeImg;
        enemies.push(this);
    }
    draw(){
        ctx.drawImage(this.image,
        this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
    update(){

    }
}