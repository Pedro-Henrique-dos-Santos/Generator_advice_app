

class ObjectScreen {
    advice: string
    id: number 
    local: any

    constructor(adviceJson: any) {
        this.advice = adviceJson.slip.advice
        this.id = adviceJson.slip.id
        this.local = document.querySelector('#root')
    }

    renderAdvice() :void{

        this.local.innerHTML += `
        <div class="contain">
            <small>ADVICE #${this.id}</small>
            <h1>"${this.advice}"</h1>
            <div class="line"></div>
            <button id="btn-toggle" class="btn-toggle"><div class="image-button"></div></button>
        </div>`
    }


}

export { ObjectScreen }