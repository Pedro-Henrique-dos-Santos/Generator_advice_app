import { getAdvice } from './scripts/services/random-advice.js'
import { ObjectScreen } from './scripts/objects/screen.js'

const app = async function (): Promise<void> {
    let response: Response = await getAdvice()
    let generatorAdvice: ObjectScreen = new ObjectScreen(response)
    generatorAdvice.renderAdvice()

    const listenerBtn = function (): void {
        const buttonToggle: Element = document.querySelector('#btn-toggle')
        buttonToggle.addEventListener('click',() => {
            setTimeout(()=>{
                window.location.reload()
            },800)
               

        })
    }
    listenerBtn()


}





export { app } 