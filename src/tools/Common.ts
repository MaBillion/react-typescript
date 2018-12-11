import Global from './Global';

interface CookieArrType {
    name: string,
    value: string
}

export default {
    clearCookie (): void {
        let cookies = this.getCookies()
        for (let i of cookies) {
            let name = i.name
            if (name === '_u' || name === '_c' || name === '_e') {
                document.cookie = name + '=' + i.value + ';expires=' + new Date().toUTCString() + ';domain=' + Global.domain + ';path=/'
            }
        }
    },

    getCookies (): CookieArrType[] {
        let cookies: string[] = document.cookie.split('; ')
        let cookieArr: CookieArrType[] = []

        for (let i of cookies) {
            let kv = i.split('=')
            cookieArr.push({
                name: kv[0],
                value: kv[1]
            })
        }
        return cookieArr
    }
}