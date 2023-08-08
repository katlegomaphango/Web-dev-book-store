using System.Diagnostics;
using dotnet_webDev_store.Data;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_webDev_store.Controllers;

public class HomeController : Controller
{
    private readonly IBookRepository _bookRepo;

    public HomeController(IBookRepository Repo)
    {   
        _bookRepo = Repo;
    }

    public IActionResult Index()
    {
        return View(_bookRepo.GetLatestBooks());
    }
}
