using dotnet_webDev_store.Models;

namespace dotnet_webDev_store.Data
{
    public interface IBookRepository
    {
        IQueryable<Book> GetAllBooks(); 
        IQueryable<Book> GetLatestBooks();
        Book GetBookById(int id);
        void AddBook(Book book);
    }
}