import type { BunFile } from 'bun'

const file: BunFile = Bun.file('.env')
const content: string = await file.text()
console.log(content)
await Bun.write('.env.test', content)
