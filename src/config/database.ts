require('dotenv').config()

class DatabaseConfig {
    public static host: any = process.env.DB_HOST
    public static user: any = process.env.DB_USER
    public static password: any = process.env.DB_PASSWORD
    public static database: any = process.env.DB_NAME
    public static port: any = process.env.DB_PORT
}

export { DatabaseConfig }