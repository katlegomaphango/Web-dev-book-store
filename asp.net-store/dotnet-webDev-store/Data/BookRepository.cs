using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_webDev_store.Models;

namespace dotnet_webDev_store.Data
{
    public class BookRepository : IBookRepository
    {
        private readonly AppDbContext _appDbContext;

        public BookRepository(AppDbContext app)
        {
            _appDbContext = app;
        }

        public void AddBook(Book book)
        {
            _appDbContext.Books.Add(book);
            _appDbContext.SaveChanges();
        }

        public IQueryable<Book> GetAllBooks()
        {
            return _appDbContext.Books;
        }

        public IQueryable<Book> GetLatestBooks()
        {
            return _appDbContext.Books.OrderBy(b => b.DateAdded).Take(3);
        }

        public Book GetBookById(int id)
        {
            return _appDbContext.Books.Find(id);
        }
    }
}