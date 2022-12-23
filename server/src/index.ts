import app from './main'

const PORT = Number(process.env.PORT) || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, () => console.log(`We are rocking on http://${HOST}:${PORT}`))

export default {}
