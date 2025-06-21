# Library Management System

A robust REST API for managing a library system built with Node.js, Express, TypeScript, and MongoDB. This system allows you to manage books, track borrowing activities, and maintain an organized library database.

## 🚀 Features

- **Book Management**: CRUD operations for books with validation
- **Borrowing System**: Track book borrowing with quantity and due dates
- **Genre Classification**: Support for multiple book genres (FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY)
- **Availability Tracking**: Automatic tracking of book availability based on copies
- **Data Validation**: Comprehensive input validation using Zod
- **MongoDB Integration**: Robust database operations with Mongoose ODM
- **TypeScript**: Full TypeScript support for better development experience

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone --no-checkout https://github.com/tajbid-panthom/Next-Level-Development_TAJBID.git
   cd Next-Level-Development_TAJBID

   # Enable sparse checkout

   git sparse-checkout init --cone

   # Specify the folder you want to checkout

   git sparse-checkout set MongoDB/library-management-assignment

   # Now checkout

   git checkout main

   cd MongoDB/library-management-assignment
   ```

````

2. **Install dependencies**

```bash
npm install
````

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/library-management
   # Or for MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/library-management
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📊 Demo Data

The project includes a `demo data.json` file with sample books that you can import into your MongoDB database for testing. The demo data includes:

- 20+ books across different genres
- Various authors and titles
- Different copy quantities
- Realistic ISBN numbers

### Importing Demo Data

You can import the demo data using MongoDB Compass or the mongoimport command:

```bash
mongoimport --db library-management --collection books --file "demo data.json" --jsonArray
```

Or using MongoDB Compass:

1. Open MongoDB Compass
2. Connect to your database
3. Select the `books` collection
4. Click "Add Data" → "Import File"
5. Select the `demo data.json` file
6. Choose "JSON" format and import

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api
```

### Book Endpoints

#### 1. Create a Book

```http
POST /api/books
```

**Request Body:**

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "FICTION",
  "isbn": "9781234567890",
  "description": "Book description (optional)",
  "copies": 5,
  "available": true
}
```

**Supported Genres:** `FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY`

#### 2. Get All Books

```http
GET /api/books
```

**Query Parameters:**

- `filter`: Filter by genre (e.g., `?filter=FICTION`)
- `sortBy`: Sort field (default: `createdAt`)
- `sort`: Sort order (`asc` or `desc`, default: `asc`)
- `limit`: Number of results (default: 10)

**Example:**

```http
GET /api/books?filter=FICTION&sortBy=title&sort=asc&limit=5
```

#### 3. Get Single Book

```http
GET /api/books/:bookId
```

#### 4. Update Book

```http
PATCH /api/books/:bookId
```

#### 5. Delete Book

```http
DELETE /api/books/:bookId
```

### Borrow Endpoints

#### 1. Borrow a Book

```http
POST /api/borrow
```

**Request Body:**

```json
{
  "book": "bookId",
  "quantity": 1,
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

**Note:** The due date must be in the future.

#### 2. Get Borrowed Books Summary

```http
GET /api/borrow
```

Returns an aggregated summary of all borrowed books with total quantities.

## 🗄️ Database Schema

### Book Schema

```typescript
{
  title: string (required)
  author: string (required)
  genre: enum ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'] (required)
  isbn: string (required, unique)
  description: string (optional)
  copies: number (required, min: 0)
  available: boolean (default: true)
  createdAt: Date
  updatedAt: Date
}
```

### Borrow Schema

```typescript
{
  book: ObjectId (ref: 'Book', required)
  quantity: number (required, min: 1)
  dueDate: Date (required)
  createdAt: Date
  updatedAt: Date
}
```

## 🔧 Project Structure

```
src/
├── app/
│   ├── controllers/
│   │   ├── book.controller.ts
│   │   └── borrow.controller.ts
│   ├── interfaces/
│   │   ├── book.interface.ts
│   │   └── borrow.interface.ts
│   └── models/
│       ├── book.model.ts
│       └── borrow.model.ts
├── app.ts
└── server.ts
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm test` - Run tests (not implemented yet)

## 🔒 Validation

The API uses Zod for comprehensive input validation:

- **Book Creation**: Validates all required fields and genre enum
- **Borrowing**: Ensures quantity is positive and due date is in the future
- **ISBN**: Must be unique across all books
- **Copies**: Must be non-negative

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Md Tajbid Hossain Bappi**

## 🐛 Issues

If you encounter any issues or have suggestions, please open an issue on the repository.

## 📞 Support

For support and questions, please contact the author or create an issue in the repository.
