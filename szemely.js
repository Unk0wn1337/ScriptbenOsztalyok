class Szemely {
    #szuletesiNev 
    constructor(nev,szulDatum, szuloELEM){
        this.nev=nev;
        this.szulDatum=szulDatum;
        this.setSzuletesiNev(nev);
        szuloELEM.append(
            `<div class="szemely">
            <h3>${this.#szuletesiNev}</h3>
            <p>${this.kor()}</p>
            </div>`
            )
            this.szemelyELEM=$(".szemely:last-child")
           this.szemelyELEM.on("click",() =>{
                console.log(this);
           })
            
    }
    getSzuletesinev(){ 

        return this.#szuletesiNev;
    }

    setSzuletesiNev(ujNev){

        
        this.#szuletesiNev=ujNev;
    }
    kor(){
        const d = new Date();
        let year = d.getFullYear();
        let aktualisKor = year-this.szulDatum;
        return aktualisKor;
    }

}

export default Szemely;