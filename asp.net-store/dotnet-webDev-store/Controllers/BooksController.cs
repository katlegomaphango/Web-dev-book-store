using dotnet_webDev_store.Data;
using dotnet_webDev_store.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_webDev_store.Controllers
{
    public class BooksController : Controller
    {
        private readonly IBookRepository _bookRepo;

        public BooksController(IBookRepository repo)
        {
            _bookRepo = repo;
        }

        public IActionResult ViewBook(int id)
        {
            return View(_bookRepo.GetBookById(id));
        }

        public IActionResult ViewAllBooks() {
            return View(_bookRepo.GetAllBooks());
        }

        [HttpGet]
        public IActionResult AddBook() {
            return View();
        }

        [HttpPost]
        public IActionResult AddBook(Book book) {
            book.DateAdded = DateTime.Now;
            if(ModelState.IsValid){
                try
                {
                    _bookRepo.AddBook(book);
                    return RedirectToAction("ViewAllBooks");
                }
                catch (DbUpdateException)
                {
                    ModelState.AddModelError("", "Unable to add book");
                }
            }
            return View();
        }
    }
}