
const getAdvice = async function (): Promise<any> {
    try {
        const response: Response = await fetch('https://api.adviceslip.com/advice')
        return await response.json()
    } catch (error) {
        console.log('this is error ' + error)
    }


}

export { getAdvice } 