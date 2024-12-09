import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

// Add a new book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a book by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/upload', async (req, res) => {
  try {
    const books = req.body; // Assuming JSON file data is passed as the request body
    await Book.insertMany(books);
    res.status(201).json({ message: 'Books uploaded successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/search', async (req, res) => {
  const { query, filter } = req.query; // e.g., ?query=Fiction&filter=category
  try {
    const books = await Book.find({ [filter]: new RegExp(query, 'i') }); // Case-insensitive search
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Handle checkout: Deduct stock based on cart items
router.post('/checkout', async (req, res) => {
  const { cartItems } = req.body;

  try {
    for (const item of cartItems) {
      const book = await Book.findById(item._id);
      if (!book) {
        return res.status(404).json({ message: `Book with ID ${item._id} not found` });
      }
      if (book.stock < item.quantity) {
        return res
          .status(400)
          .json({ message: `Not enough stock for book: ${book.title}` });
      }

      book.stock -= item.quantity;
      await book.save();
    }

    res.status(200).json({ message: 'Checkout successful!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
