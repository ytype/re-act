type json = {
  id: number
  content: string
  done: boolean
  time: number | null
}[]

export const jsonToMd = (json: json) => {
  let mdStr = ""
  json.forEach((item) => {
    let temp = `- [`
    if (item.done) {
      temp += "x]"
    } else {
      temp += " ]"
    }
    let second = ` ${item.content}\n`
    temp += second
    mdStr += temp
  })

  return mdStr
}
