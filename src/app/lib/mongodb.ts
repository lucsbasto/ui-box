'use server'
import mongoose from 'mongoose'

export async function connect(): Promise<void>{
  try {
    await mongoose.connect(process.env.DATABASE_URL!)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}
export default connect