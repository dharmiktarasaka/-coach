import mongoose from 'mongoose'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') })
dotenv.config()

const DATA_DIR = path.join(__dirname, '..', 'data')
const DB_FILE = path.join(DATA_DIR, 'database.json')

// --- Types ---
export interface User {
  id: string
  name: string
  email: string
  passwordHash?: string
  avatar: string
  role: string
  enrolledCourse: string
  overallProgress: number
  streakDays: number
  sessionsAttended: number
  authProvider: 'credentials' | 'google'
  createdAt: string
}

export interface Todo {
  id: string
  userId: string
  title: string
  category: string
  priority: 'High' | 'Medium' | 'Normal'
  completed: boolean
  createdAt: string
}

export interface Lecture {
  id: number
  index: number
  title: string
  module: string
  duration: string
  description: string
  completedUserIds: string[]
}

export interface Lead {
  id: string
  type: 'scorecard' | 'workshop' | 'application' | 'contact'
  data: any
  createdAt: string
}

export interface DatabaseSchema {
  users: User[]
  todos: Todo[]
  lectures: Lecture[]
  leads: Lead[]
}

// --- Password & Token Helpers ---
export function hashPassword(password: string): string {
  const salt = 'np_salt_2026'
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

const JWT_SECRET = process.env.JWT_SECRET || 'narayan_presence_secret_2026'

export function generateToken(payload: { id: string; email: string }): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url')
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 })).toString('base64url')
  const signature = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url')
  return `${header}.${body}.${signature}`
}

export function verifyToken(token: string): { id: string; email: string } | null {
  try {
    const [header, body, signature] = token.split('.')
    if (!header || !body || !signature) return null
    const expected = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url')
    if (signature !== expected) return null
    const decoded = JSON.parse(Buffer.from(body, 'base64url').toString())
    if (decoded.exp && decoded.exp < Date.now()) return null
    return decoded
  } catch {
    return null
  }
}

// --- Mongoose Schemas ---
const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  avatar: { type: String },
  role: { type: String },
  enrolledCourse: { type: String },
  overallProgress: { type: Number, default: 0 },
  streakDays: { type: Number, default: 1 },
  sessionsAttended: { type: Number, default: 0 },
  authProvider: { type: String, default: 'credentials' },
  createdAt: { type: String, default: () => new Date().toISOString() }
})

const TodoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String },
  priority: { type: String, default: 'High' },
  completed: { type: Boolean, default: false },
  createdAt: { type: String, default: 'Today' }
})

const LectureSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  index: { type: Number },
  title: { type: String, required: true },
  module: { type: String },
  duration: { type: String },
  description: { type: String },
  completedUserIds: [{ type: String }]
})

const LeadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: String, default: () => new Date().toISOString() }
})

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)
export const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
export const LectureModel = mongoose.models.Lecture || mongoose.model('Lecture', LectureSchema)
export const LeadModel = mongoose.models.Lead || mongoose.model('Lead', LeadSchema)

// Seed Data
const DEFAULT_SEED_DATA: DatabaseSchema = {
  users: [
    {
      id: 'np-student-808',
      name: 'Arjun Sharma',
      email: 'arjun.sharma@example.com',
      passwordHash: hashPassword('presence2026'),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Presence Circle Member',
      enrolledCourse: 'The Art of Conscious Mastery',
      overallProgress: 68,
      streakDays: 14,
      sessionsAttended: 8,
      authProvider: 'credentials',
      createdAt: new Date().toISOString()
    },
    {
      id: 'np-student-101',
      name: 'Priya Sundaram',
      email: 'priya.sundaram@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      role: 'Presence Circle Fellow',
      enrolledCourse: 'Purposeful Leadership & Influence',
      overallProgress: 75,
      streakDays: 21,
      sessionsAttended: 12,
      authProvider: 'google',
      createdAt: new Date().toISOString()
    }
  ],
  todos: [
    {
      id: '1',
      userId: 'np-student-808',
      title: 'Complete 20-minute morning breathwork protocol',
      category: 'Meditation',
      priority: 'High',
      completed: true,
      createdAt: 'Today'
    },
    {
      id: '2',
      userId: 'np-student-808',
      title: 'Review Lesson 3 lecture notes and submit worksheet',
      category: 'Coursework',
      priority: 'High',
      completed: false,
      createdAt: 'Today'
    },
    {
      id: '3',
      userId: 'np-student-808',
      title: 'Read Chapter 4 of "The Grounded Mind"',
      category: 'Reading',
      priority: 'Medium',
      completed: false,
      createdAt: 'Yesterday'
    }
  ],
  lectures: [
    {
      id: 1,
      index: 1,
      title: 'Lesson 1: The Anatomy of Stillness',
      module: 'Module 1: Grounding',
      duration: '24 min',
      description: 'Understanding internal vs external stimuli and resetting the central nervous system.',
      completedUserIds: ['np-student-808']
    },
    {
      id: 2,
      index: 2,
      title: 'Lesson 2: Guarding Your Attention Diet',
      module: 'Module 1: Grounding',
      duration: '31 min',
      description: 'Eliminating unconscious digital dopamine loops and rebuilding deep cognitive endurance.',
      completedUserIds: ['np-student-808']
    },
    {
      id: 3,
      index: 3,
      title: 'Lesson 3: Emotional Friction as an Asset',
      module: 'Module 2: Resilience',
      duration: '28 min',
      description: 'Transforming tension, criticism, and uncertainty into unwavering grounded presence.',
      completedUserIds: []
    },
    {
      id: 4,
      index: 4,
      title: 'Lesson 4: Quiet Leadership Presence',
      module: 'Module 3: Leadership',
      duration: '38 min',
      description: 'How to enter rooms, conduct meetings, and lead organizations with authentic depth.',
      completedUserIds: []
    }
  ],
  leads: []
}

class DatabaseManager {
  private isMongoConnected = false
  public localData: DatabaseSchema

  constructor() {
    this.ensureDirectory()
    this.localData = this.loadLocalFile()
    this.initMongo()
  }

  private ensureDirectory() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
  }

  private loadLocalFile(): DatabaseSchema {
    try {
      if (fs.existsSync(DB_FILE)) {
        return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'))
      }
    } catch (e) {
      console.warn('[Local DB] Error loading file, re-initializing.', e)
    }
    this.saveLocalFile(DEFAULT_SEED_DATA)
    return DEFAULT_SEED_DATA
  }

  private saveLocalFile(data: DatabaseSchema) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8')
    } catch (err) {
      console.error('[Local DB] Write error:', err)
    }
  }

  // Initialize MongoDB Connection
  private async initMongo() {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      console.log('[MongoDB] No URI specified in .env, using local file store.')
      return
    }

    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000
      })
      this.isMongoConnected = true
      console.log('[MongoDB] Connected successfully to MongoDB Atlas cluster!')
      await this.seedMongoIfEmpty()
    } catch (err: any) {
      console.warn(`[MongoDB Notice]: Could not establish direct socket (${err.message}). If using Atlas, ensure your current IP is whitelisted under Network Access in MongoDB Atlas. Running in resilient hybrid mode with local storage persistence.`)
    }
  }

  private async seedMongoIfEmpty() {
    if (!this.isMongoConnected) return
    try {
      const userCount = await UserModel.countDocuments()
      if (userCount === 0) {
        console.log('[MongoDB] Seeding initial student accounts and curriculum to MongoDB...')
        await UserModel.insertMany(DEFAULT_SEED_DATA.users)
        await TodoModel.insertMany(DEFAULT_SEED_DATA.todos)
        await LectureModel.insertMany(DEFAULT_SEED_DATA.lectures)
        console.log('[MongoDB] Seeding completed.')
      }
    } catch (err) {
      console.warn('[MongoDB Seed Warning]:', err)
    }
  }

  // --- User Operations ---
  async findUserByEmail(email: string): Promise<User | undefined> {
    const cleanEmail = email.toLowerCase()
    if (this.isMongoConnected) {
      try {
        const found = await UserModel.findOne({ email: cleanEmail }).lean()
        if (found) return found as unknown as User
      } catch {}
    }
    return this.localData.users.find(u => u.email.toLowerCase() === cleanEmail)
  }

  async findUserById(id: string): Promise<User | undefined> {
    if (this.isMongoConnected) {
      try {
        const found = await UserModel.findOne({ id }).lean()
        if (found) return found as unknown as User
      } catch {}
    }
    return this.localData.users.find(u => u.id === id)
  }

  async createUser(user: User): Promise<User> {
    // Save to local
    this.localData.users.push(user)
    this.saveLocalFile(this.localData)

    // Save to Mongo
    if (this.isMongoConnected) {
      try {
        await UserModel.create(user)
      } catch (err) {
        console.warn('[MongoDB Save Warning]:', err)
      }
    }
    return user
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    const user = this.localData.users.find(u => u.id === id)
    if (user) {
      Object.assign(user, updates)
      this.saveLocalFile(this.localData)
    }

    if (this.isMongoConnected) {
      try {
        await UserModel.updateOne({ id }, { $set: updates })
      } catch {}
    }
    return user
  }

  // --- Todo Operations ---
  async getTodos(userId?: string): Promise<Todo[]> {
    if (this.isMongoConnected) {
      try {
        const query = userId ? { userId } : {}
        const items = await TodoModel.find(query).lean()
        if (items && items.length > 0) return items as unknown as Todo[]
      } catch {}
    }
    if (userId) return this.localData.todos.filter(t => t.userId === userId)
    return this.localData.todos
  }

  async addTodo(todo: Todo): Promise<Todo> {
    this.localData.todos.unshift(todo)
    this.saveLocalFile(this.localData)

    if (this.isMongoConnected) {
      try {
        await TodoModel.create(todo)
      } catch {}
    }
    return todo
  }

  async updateTodo(id: string, updates: Partial<Todo>): Promise<Todo | undefined> {
    const todo = this.localData.todos.find(t => t.id === id)
    if (todo) {
      Object.assign(todo, updates)
      this.saveLocalFile(this.localData)
    }

    if (this.isMongoConnected) {
      try {
        await TodoModel.updateOne({ id }, { $set: updates })
      } catch {}
    }
    return todo
  }

  async deleteTodo(id: string): Promise<boolean> {
    const lenBefore = this.localData.todos.length
    this.localData.todos = this.localData.todos.filter(t => t.id !== id)
    const deleted = this.localData.todos.length < lenBefore
    if (deleted) this.saveLocalFile(this.localData)

    if (this.isMongoConnected) {
      try {
        await TodoModel.deleteOne({ id })
      } catch {}
    }
    return deleted
  }

  // --- Lecture Operations ---
  async getLectures(): Promise<Lecture[]> {
    if (this.isMongoConnected) {
      try {
        const list = await LectureModel.find().lean()
        if (list && list.length > 0) return list as unknown as Lecture[]
      } catch {}
    }
    return this.localData.lectures
  }

  async toggleLectureCompletion(lectureId: number, userId: string): Promise<{ completed: boolean; overallProgress: number }> {
    const lecture = this.localData.lectures.find(l => l.id === lectureId)
    if (!lecture) return { completed: false, overallProgress: 0 }

    const isDone = lecture.completedUserIds.includes(userId)
    if (isDone) {
      lecture.completedUserIds = lecture.completedUserIds.filter(id => id !== userId)
    } else {
      lecture.completedUserIds.push(userId)
    }

    const total = this.localData.lectures.length
    const userCompleted = this.localData.lectures.filter(l => l.completedUserIds.includes(userId)).length
    const overallProgress = Math.round((userCompleted / total) * 100)

    await this.updateUser(userId, { overallProgress })
    this.saveLocalFile(this.localData)

    if (this.isMongoConnected) {
      try {
        const updateOp = isDone
          ? { $pull: { completedUserIds: userId } }
          : { $addToSet: { completedUserIds: userId } }
        await LectureModel.updateOne({ id: lectureId }, updateOp)
      } catch {}
    }

    return { completed: !isDone, overallProgress }
  }

  // --- Lead Operations ---
  async addLead(lead: Lead): Promise<Lead> {
    this.localData.leads.push(lead)
    this.saveLocalFile(this.localData)

    if (this.isMongoConnected) {
      try {
        await LeadModel.create(lead)
      } catch {}
    }
    return lead
  }

  async getLeads(): Promise<Lead[]> {
    if (this.isMongoConnected) {
      try {
        const list = await LeadModel.find().lean()
        if (list && list.length > 0) return list as unknown as Lead[]
      } catch {}
    }
    return this.localData.leads
  }

  get mongoStatus() {
    return this.isMongoConnected ? 'connected' : 'hybrid_local'
  }
}

export const db = new DatabaseManager()
