const nome: string = "Anthony";
console.log(`Olá, ${nome}`);

type Moto = {
    modelo?: string;
    ano?: number;
    marca?: string;
};

let moto:Moto; 
    moto = {
        modelo:'MT-03',
        ano:2023
        
    };

    console.log("Eu queria muito comprar uma " + moto.modelo?.toLocaleLowerCase() + " do ano " + moto.ano);

    function getMessage(): string {
        return "se não for o tipo correto nada funciona";
    }

    console.log(getMessage().toUpperCase());

    function getMoto(): Moto {
        return {
            modelo: 'S1000RR' ,
            ano: 2025 ,
            marca: 'BMW',
        }
    }

    console.log(getMoto());

    function toJSON(obj: any) {
        JSON.stringify(obj);
    }

    function fromJSON<T>(json: string) {
        return JSON.parse(json) as T;
    }

    const moto2: Moto = {
        modelo: "START",
        ano: 2019,
    };

    console.log(toJSON(moto2));

    const motoJSON = `{"modelo":"kawasaki", "ano":2024}`;
        console.log(fromJSON<Moto>(motoJSON).ano);
